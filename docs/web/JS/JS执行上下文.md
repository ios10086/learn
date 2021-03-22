# JS执行上下文

## 全局执行上下文

window对象，全局执行上下文只有一个，通过this直接访问到它，window对象还是var声明的全局变量的载体。

## 函数执行上下文

函数执行上下文可存在无数个，每当一个函数被调用时都会创建一个函数上下文；需要注意的是，同一个函数被多次调用，都会创建一个新的上下文。

## 执行上下文栈(执行栈)

执行上下文栈(下文简称执行栈)也叫调用栈，执行栈用于存储代码执行期间创建的所有上下文，具有LIFO（Last In First Out后进先出，也就是先进后出）的特性。

## 执行上下文创建阶段

执行上下文创建分为创建阶段与执行阶段两个阶段，JS执行上下文的创建阶段主要负责三件事：**确定this---创建词法环境组件（LexicalEnvironment）---创建变量环境组件（VariableEnvironment）**。

### 确定this

在全局执行上下文中，this总是指向全局对象window。

在函数执行上下文中，this的值取决于函数的调用方式，如果被一个对象调用，那么this指向这个对象。否则this一般指向全局对象window或者undefined（严格模式）。

### 词法环境组件

词法环境是一个包含标识符变量映射的结构，这里的标识符表示变量/函数的名称，变量是对实际对象【包括函数类型对象】或原始值的引用。

词法环境由环境记录与对外部环境引入记录两个部分组成。

- 环境记录

  用于存储当前环境中的变量和函数声明的实际位置。

- 外部环境引入记录

  用于保存自身环境可以访问的其它外部环境。

词法环境分为全局词法环境与函数词法环境两种。

- 全局词法环境

  对外部环境的引入记录为null，因为它本身就是最外层环境，除此之外它还记录了当前环境下的所有属性、方法位置。

- 函数词法环境

  包含了用户在函数中定义的所有属性方法外，还包含了一个arguments对象。函数词法环境的外部环境引入可以是全局环境，也可以是其它函数环境，这个根据实际代码而来。

### 变量环境组件

变量环境可以说也是词法环境，它具备词法环境所有属性，一样有环境记录与外部环境引入。在ES6中唯一的区别在于**词法环境用于存储函数声明与let const声明的变量**，而**变量环境仅仅存储var声明的变量**。

```js
//全局执行上下文
GlobalExectionContext = {
    // this绑定为全局对象
    ThisBinding: <Global Object>,
    // 词法环境
    LexicalEnvironment: {  
        //环境记录
      EnvironmentRecord: {  
        Type: "Object",  // 对象环境记录
        // 标识符绑定在这里 let const创建的变量a b在这
        a: < uninitialized >,  
        b: < uninitialized >,  
        multiply: < func >  
      }
      // 全局环境外部环境引入为null
      outer: <null>  
    },
  
    VariableEnvironment: {  
      EnvironmentRecord: {  
        Type: "Object",  // 对象环境记录
        // 标识符绑定在这里  var创建的c在这
        c: undefined,  
      }
      // 全局环境外部环境引入为null
      outer: <null>  
    }  
  }

  // 函数执行上下文
  FunctionExectionContext = {
     //由于函数是默认调用 this绑定同样是全局对象
    ThisBinding: <Global Object>,
    // 词法环境
    LexicalEnvironment: {  
      EnvironmentRecord: {  
        Type: "Declarative",  // 声明性环境记录
        // 标识符绑定在这里  arguments对象在这
        Arguments: {0: 20, 1: 30, length: 2},  
      },  
      // 外部环境引入记录为</Global>
      outer: <GlobalEnvironment>  
    },
  
    VariableEnvironment: {  
      EnvironmentRecord: {  
        Type: "Declarative",  // 声明性环境记录
        // 标识符绑定在这里  var创建的g在这
        g: undefined  
      },  
      // 外部环境引入记录为</Global>
      outer: <GlobalEnvironment>  
    }  
  }
```

在执行上下文创建阶段，函数声明与var声明的变量在创建阶段已经被赋予了一个值，var声明被设置为了undefined，函数被设置为了自身函数，而let const被设置为未初始化。

## 执行上下文创建阶段

代码执行时根据之前的环境记录对应赋值，比如早期var在创建阶段为undefined，如果有值就对应赋值，像let const值为未初始化，如果有值就赋值，无值则赋予undefined。