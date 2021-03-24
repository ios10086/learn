# Web Workers、Service Workers的区别

## Web Worker

**Web Workers利用线程消息传递来实现并行性。**

现在硬件的性能也越来越强了，为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准。

Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行，**模仿多线程**，是保持您的UI响应的同时也执行处理器密集型功能的完美解决方案。不能直接与DOM交互。通信必须通过postMessage方法 。

### 基本用法

主线程采用`new`命令，调用`Worker()`构造函数，新建一个 Worker 线程。

```js
var worker = new Worker('work.js');
```

`Worker()`构造函数的参数是一个脚本文件，该文件就是 Worker 线程所要执行的任务。由于 Worker 不能读取本地文件，所以这个脚本必须来自网络。如果下载没有成功（比如404错误），Worker 就会默默地失败。

主线程调用`worker.postMessage()`方法，向 Worker 发消息。

```js
worker.postMessage('Hello World');
worker.postMessage({method: 'echo', args: ['Work']});
```

主线程通过`worker.onmessage`指定监听函数，接收子线程发回来的消息。

```js
worker.onmessage = function (event) {
  console.log('Received message ' + event.data);
  doSomething();
}

function doSomething() {
  // 执行任务
  worker.postMessage('Work done!');
}
```

Worker 完成任务以后，主线程就可以把它关掉。

```js
worker.terminate();
```

Worker 线程内部需要有一个监听函数，监听`message`事件。

`self.close()`用于在 Worker 内部关闭自身。

```js
self.addEventListener('message', function (e) {
  self.postMessage('You said: ' + e.data);
  self.close();
}, false);

// 写法一
this.addEventListener('message', function (e) {
  this.postMessage('You said: ' + e.data);
}, false);

// 写法二
addEventListener('message', function (e) {
  postMessage('You said: ' + e.data);
}, false);
```

Worker 内部如果要加载其他脚本，有一个专门的方法`importScripts()`。

```js
importScripts('script1.js', 'script2.js');
```

主线程可以监听 Worker 是否发生错误。如果发生错误，Worker 会触发主线程的`error`事件。

```js
worker.onerror(function (event) {
  console.log([
    'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
  ].join(''));
});

// 或者
worker.addEventListener('error', function (event) {
  // ...
});
```

### 使用 Web Worker 实现非阻塞的 Promise

```js
class Dispatcher {
  constructor(fn) {
    this._queue = [];
    this._worker = new Worker('data:text/javascript,' + encodeURIComponent(`'use strict';
const __fn = ${fn};
onmessage = e => postMessage(__fn(...e.data));`));
    this._worker.onmessage = e => this._queue.shift().resolve(e.data);
    this._worker.onerror = e => this._queue.shift().reject(e.error);
  }

  dispatch(...args) {
    return new Promise((resolve, reject) => {
      this._queue.push({ resolve, reject });
      this._worker.postMessage(args);
    });
  }
}
```

## Service Worker

**Service worker是一个可编程的网络代理，允许您控制页面中的网络请求是如何处理的。** 

**处理网络请求的后台服务**。完美的离线情况下后台同步或推送通知的处理方案。不能直接与DOM交互。通信（页面和ServiceWorker之间）得通过postMessage方法 。

> - 基于web worker（一个独立于JavaScript主线程的独立线程，在里面执行需要消耗大量资源的操作不会堵塞主线程）
> - 在web worker的基础上增加了离线缓存的能力
> - 本质上充当Web应用程序（服务器）与浏览器之间的代理服务器（可以拦截全站的请求，并作出相应的动作->由开发者指定的动作）
> - 创建有效的离线体验（将一些不常更新的内容缓存在浏览器，提高访问体验）
> - 由事件驱动的,具有生命周期
> - 可以访问cache和indexDB
> - 支持推送
> - 并且可以让开发者自己控制管理缓存的内容以及版本

### 基本用法

```js
/* 判断当前浏览器是否支持serviceWorker */
    if ('serviceWorker' in navigator) {
        /* 当页面加载完成就创建一个serviceWorker */
        window.addEventListener('load', function () {
            /* 创建并指定对应的执行内容 */
            /* scope 参数是可选的，可以用来指定你想让 service worker 控制的内容的子目录。 在这个例子里，我们指定了 '/'，表示 根网域下的所有内容。这也是默认值。 */
            navigator.serviceWorker.register('./serviceWorker.js', {scope: './'})
                .then(function (registration) {
                    console.log('ServiceWorker registration successful with scope: ', registration.scope);
                })
                .catch(function (err) {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
```

```js
/* 监听安装事件，install 事件一般是被用来设置你的浏览器的离线缓存逻辑 */
this.addEventListener('install', function (event) { 	
    /* 通过这个方法可以防止缓存未完成，就关闭serviceWorker */
    event.waitUntil(
        /* 创建一个名叫V1的缓存版本 */
        caches.open('v1').then(function (cache) {
            /* 指定要缓存的内容，地址为相对于跟域名的访问路径 */
            return cache.addAll([
                './index.html'
            ]);
        })
    );
});

/* 注册fetch事件，拦截全站的请求 */
this.addEventListener('fetch', function(event) {
  event.respondWith(
    // magic goes here
    /* 在缓存中匹配对应请求资源直接返回 */
    caches.match(event.request)
  );
});
```

### 注意事项

> - Service worker运行在worker上下文 --> 不能访问DOM
> - 它设计为完全异步，同步API（如XHR和localStorage）不能在service worker中使用
> - 出于安全考量，Service workers只能由HTTPS承载
> - 在Firefox浏览器的用户隐私模式，Service Worker不可用
> - 其生命周期与页面无关（关联页面未关闭时，它也可以退出，没有关联页面时，它也可以启动）





<u>多线程</u>

