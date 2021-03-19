# This五种绑定

## 默认绑定

this默认绑定我们可以理解为函数调用时无任何调用前缀的情景，默认绑定时this指向全局对象（非严格模式），在严格模式环境中，默认绑定的this指向undefined。

```js
function fn() {
    console.log(this); //window
    console.log(this.name);
};

function fn1() {
    "use strict";
    console.log(this); //undefined
    console.log(this.name);
};
```

严格模式下调用不在严格模式中的函数，并不会影响this指向。

```js
function fn() {
    console.log(this); //window
};

(function () {
    "use strict";
    fn();
}());
```

## 隐式绑定

如果函数调用时，前面存在调用它的对象，那么this就会隐式绑定到这个对象上。

```js
function fn() {
    console.log(this.name);
};
let obj = {
    name: 'aaa',
    func: fn
};
obj.func() //aaa
```

如果函数调用前存在多个对象，this指向距离调用自己最近的对象。

```js
function fn() {
    console.log(this.name);
};
let obj = {
    name: 'aaa',
    func: fn,
};
let obj1 = {
    name: 'bbb',
    o: obj
};
obj1.o.func() //aaa
```

### 隐式丢失

作为参数传递以及变量赋值。

```js
var name = 'aaa';
let obj = {
    name: 'bbb',
    fn: function () {
        console.log(this.name);
    }
};

function fn1(param) {
    param();
};
fn1(obj.fn);//aaa
```

```js
var name = 'aaa';
let obj = {
    name: 'bbb',
    fn: function () {
        console.log(this.name);
    }
};
let fn1 = obj.fn;
fn1(); //aaa
```

```js
var name = 'aaa';
let obj = {
    name: 'bbb',
    fn: function () {
        console.log(this.name);
    }
};
let obj1 = {
    name: 'ccc'
}
obj1.fn = obj.fn;
obj1.fn(); //ccc
```

## 显示绑定

显式绑定是指我们通过call、apply以及bind方法改变this的行为。

```js
let obj1 = {
    name: 'aaa'
};
let obj2 = {
    name: 'bbb'
};
let obj3 = {
    name: 'ccc'
}
var name = 'ddd';

function fn() {
    console.log(this.name);
};
fn(); //ddd
fn.call(obj1); //aaa
fn.apply(obj2); //bbb
fn.bind(obj3)(); //ccc
```

call与apply让函数从被动变主动，函数能主动选择自己的上下文，这种写法称之为函数应用。在使用显示绑定改变this指向时，指向参数提供的是null或者undefined，那么 this 将指向全局对象。

### call、apply与bind的区别

- call、apply与bind都用于改变this绑定，但call、apply在改变this指向的同时还会执行函数，而bind在改变this后是返回一个全新的boundFcuntion绑定函数，这也是为什么上方例子中bind后还加了一对括号 ()的原因。
- bind属于硬绑定，返回的 boundFunction 的 this 指向无法再次通过bind、apply或 call 修改；call与apply的绑定只适用当前调用，调用完就没了，下次要用还得再次绑。
- call与apply功能完全相同，唯一不同的是call方法传递函数调用形参是以散列形式，而apply方法的形参是一个数组。在传参的情况下，call的性能要高于apply，因为apply在执行时还要多一步解析数组。

## new绑定

new一个函数分为三步：

- 以构造器的prototype属性为原型，创建新对象；
- 将this(可以理解为上句创建的新对象)和调用参数传给构造器，执行；
- 如果构造器没有手动返回对象，则返回第一步创建的对象

## this绑定优先级

**显式绑定 > 隐式绑定 > 默认绑定**

**new绑定 > 隐式绑定 > 默认绑定**

显式绑定不和new绑定同时出现会抛错。

```js
function Fn(){
    this.name = 'aaa';
};
let obj = {
    name:'bbb'
}
let echo = new Fn().call(obj);//报错 call is not a function
```

## 箭头函数绑定

ES6的箭头函数中的this指向取决于外层作用域中的this，外层作用域或函数的this指向谁，箭头函数中的this便指向谁。

```js
function fn() {
    return () => {
        console.log(this.name);
    };
}
let obj1 = {
    name: 'aaa'
};
let obj2 = {
    name: 'bbb'
};
let bar = fn.call(obj1); // fn this指向obj1
bar.call(obj2); //aaa
```

箭头函数this还有一个特性，那就是一旦箭头函数的this绑定成功，也无法被再次修改。想要修改箭头函数的this可以修改外层函数this指向达到间接修改箭头函数this的目的。

```js
function fn() {
    return () => {
        console.log(this.name);
    };
};
let obj1 = {
    name: 'aaa'
};
let obj2 = {
    name: 'bbb'
};
fn.call(obj1)(); // fn this指向obj1,箭头函数this也指向obj1
fn.call(obj2)(); //fn this 指向obj2,箭头函数this也指向obj2
```

## 作用域链与原型链的区别

当访问一个变量时，解释器会先在当前作用域查找标识符，如果没有找到就去父作用域找，作用域链顶端是全局对象window，如果window都没有这个变量则报错。

当在对象上访问某属性时，首选i会查找当前对象，如果没有就顺着原型链往上找，原型链顶端是null，如果全程都没找到则返一个undefined，而不是报错。