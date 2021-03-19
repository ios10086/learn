# JS运行机制

# Promise

## 什么是Promise
Promise对象用于异步操作，它表示一个尚未完成且预计在未来完成的异步操作。
## 为什么使用Promise
Promise强大之处在于它的多重链式调用，可以避免层层嵌套回调。
## Promise的基本用法
Promise对象代表一个未完成、但预计将来会完成的操作。
它有以下三种状态：
- pending：初始值，不是fulfilled，也不是rejected

- fulfilled：代表操作成功

- rejected：代表操作失败
  

Promise有两种状态改变的方式，既可以从pending转变为fulfilled，也可以从pending转变为rejected。一旦状态改变，就会一直保持这个状态，不会再发生变化。当状态发生变化，promise.then绑定的函数就会被调用。

  ```jsx
  var promise = new Promise(function (resolve, reject) {
      if (/* 异步操作成功 */) {
          resolve(data);
      } else {
          /* 异步操作失败 */
          reject(error);
      } 
  });
  ```


类似构建对象，我们使用new来构建一个Promise。Promise接受一个函数作为参数，该函数的两个参数分别是resolve和reject。这两个函数就是回调函数，由JavaScript引擎提供。

resolve函数的作用：在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。
reject函数的作用：在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

Promise实例生成以后，可以用then方法指定resolved状态和reject状态的回调函数。

```jsx
promise.then(function(data) {
  // do something when success
}, function(error) {
  // do something when failure
});
等同于
promise.then(function(data) {
    console.log('success');
}).catch(function(error) {
    console.log('error', error);
});

.catch()
语法：Promise.prototype.catch(onRejected)
.then(undefined, onRejected)的别名，用于指定发生错误时的回调函数
```



