# Redux

### 三大原则

##### 单一数据源

整个应用的state被存储在一颗object tree中，并且这个object tree只存在唯一一个store中。

##### State是只读的

唯一改变state的方法就是触发action，action是一个用于描述已发生时间的普通对象。

##### 使用纯函数来执行修改

为了描述action如何改变state tree， 需要编写reducers。

### 基本概念

##### State

在Redux应用中，所有的state都被保存在一个单一对象中，一个State对应一个View。

##### Action

Action是把数据从应用传到store的有效载荷，是store数据的唯一来源。Action本质上是JavaScript普通对象，action内必须使用一个字符串类型的 `type`字段来表示将要执行的动作。除了`type`字段，action对象的结构可以自由设置。当应用规模越来越大时，建议使用单独的模块或文件来存放 action。

```jsx
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```

##### Reducer

Reducers指定了应用状态的变化如何响应actions并发送到store。Reducer就是一个纯函数，接受旧的state和action，返回新的state。

```jsx
(previousState, action) => newState
```

不要在reducer中做这些操作：

- 修改传入参数；
- 执行有副作用的操作，如API请求和路由跳转；
- 调用非纯函数，如`Date.now()`或`Math.random()`

只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。

由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象。

```jsx
function reducer(state = defaultState, action) {
    switch (action.type) {
        return Object.assign({}, state, { thingToChange});
    }
    default:
    	return state;
    }
}
```

##### Store

store是保存数据的地方，一个Redux应用只有一个store。

store创建：

```jsx
import { createStore } from 'redux';
import todoApp from './reducers';
let store = createStore(todoApp);
```

Store提供了三个方法：

- `store.getState()`获取state
- `store.dispatch(action)`更新state
- `store.subscribe(listener)` 注册监听器，一旦 State 发生变化，就自动执行这个函数。`store.subscribe`方法返回一个函数，调用这个函数就可以解除监听。

##### 数据流

严格的单向数据流是Redux架构的设计核心。

Redux应用中数据的生命周期遵循下面4个步骤：

1. 调用`store.dispatch(action)`
2. Redux Store调用传入的reducer函数
3. 根reducer应该把多个子reducer输出合并成一个单一的state树。
4. Redux store保存了根reducer返回的完整state树。

### react-redux

##### 容器组件（Smart/Container Components）和展示组件（Dumb/Presentational Components）

Redux的React绑定库是基于容器组件和展示组件相分离的开发思想。

|               | 展示组件                   | 容器组件                           |
| :------------ | -------------------------- | ---------------------------------- |
| 作用          | 描述如何展现（骨架、样式） | 描述如何运行（数据获取、状态更新） |
| 直接使用Redux | 否                         | 是                                 |
| 数据来源      | props                      | 监听 Redux state                   |
| 数据修改      | 从 props 调用回调函数      | 向 Redux 派发 actions              |
| 调用方式      | 手动                       | 通常由 React Redux 生成            |

大部分的组件都应该是展示型的，但一般需要少数的几个容器组件把它们和Redux store连接起来。

##### Provider

Provider是一个普通组件，可以作为顶层app的分发点，它只需要store属性就可以。它会将state分发给所有被connect的组件，不管它在哪里，被嵌套多少层。

##### connect

connect是真正的重点，它是一个科里化函数，意思是先接受两个参数（数据绑定mapStateToProps和事件绑定mapDispatchToProps），在接受一个参数（将要绑定的组件本身）。

mapStateToProps：构建好Redux系统的时候，它会被自动初始化，但是你的React组件并不知道它的存在，因此你需要分拣出你需要的Redux状态，所以你需要绑定一个函数，它的参数是state，简单返回你关心的几个值。

mapDispatchToProps：声明好的action作为回调，也可以被注入到组件里，通过这个函数，它的参数是dispatch，通过redux的辅助方法bindActionCreator绑定所有action以及参数的dispatch，就可以作为属性在组件里面作为函数简单实用了，不需要手动dispatch。mapDIspatchToProps是可选的，如果不传这个参数redux会简单把dispatch作为属性注入给组件，可以手动当做store.dispatch使用，这也是为什么要科里化的原因。

##### Middleware

在Redux中，Middlerwares主要的作用就是处理Action，Redux中的Action必须是一个plain object。但是为了实现异步的Action或其他功能，这个Action可能就是一个函数，或者是一个promise对象。这是就需要中间件帮助来处理这种特殊的Action了。

也就是说，Redux中的Middleware会对特定类型action做一定的转换，所以最后传给reducer的action一定是标准的plain object。

针对Action的特征，Reudx Middleware可以采取不同的操作：

- 可以选择传递给下一个中间件，如：next(action)
- 可以选择跳过某些中间件，如：dispatch(action)
- 或者更直接了当的结束传递，如：return。

Redux中常用的中间件：

- [redux-thunk](http://www.cnblogs.com/%20https:/github.com/gaearon/redux-thunk)：action可以是一个函数，用来发起异步请求。
- [redux-promise](https://github.com/acdlite/redux-promise)：action可以是一个promise对象，用来更优雅的进行异步操作。
- [redux-logger](https://github.com/fcomb/redux-logger)：action就是一个标准的plain object，用来记录action和nextState的。