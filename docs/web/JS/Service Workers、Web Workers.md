# Service Workers、Web Workers的区别

## Service Worker

**Service worker是一个可编程的网络代理，允许您控制页面中的网络请求是如何处理的。** 

**处理网络请求的后台服务**。完美的离线情况下后台同步或推送通知的处理方案。不能直接与DOM交互。通信（页面和ServiceWorker之间）得通过postMessage方法 。



## Web Worker

**Web Workers利用线程消息传递来实现并行性。**

现在硬件的性能也越来越强了，为了利用多核 CPU 的计算能力，HTML5 提出 Web Worker 标准。

Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行，**模仿多线程**，是保持您的UI响应的同时也执行处理器密集型功能的完美解决方案。不能直接与DOM交互。通信必须通过postMessage方法 。

