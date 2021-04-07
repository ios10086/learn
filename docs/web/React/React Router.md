# React Router
React Router 是一个基于 React 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。
## 路由配置
路由配置是一组指令，用来告诉 router 如何匹配 URL以及匹配后如何执行代码。

```jsx
React.render((
  <Router>
    <Route path="/" component={App}>
    	<IndexRoute component={Dashboard} />		//设置一个默认页面
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)
```

|         URL         |          组件           |
| :-----------------: | :---------------------: |
|          /          |           APP           |
|       /about        |      App -> About       |
|       /inbox        |      App -> Inbox       |
| /inbox/messages/:id | App -> Inbox -> Message |

### 进入和离开的Hook

onEnter和onLeave

```jsx
const routeConfig = [
  { path: '/',
    component: App,
    indexRoute: { component: Dashboard },
    childRoutes: [
      { path: 'about', component: About },
      { path: 'inbox',
        component: Inbox,
        childRoutes: [
          { path: '/messages/:id', component: Message },
          { path: 'messages/:id',
            onEnter: function (nextState, replaceState) {
              replaceState(null, '/messages/' + nextState.params.id)
            }
          }
        ]
      }
    ]
  }
]

React.render(<Router routes={routeConfig} />, document.body)
```

# Histories

常用的 history 有三种形式

### browserHistory

Browser history 是使用 React Router 的应用推荐的 history。它使用浏览器中的 [History](https://developer.mozilla.org/en-US/docs/Web/API/History) API 用于处理 URL，创建一个像`example.com/some/path`这样真实的 URL 。

### hashHistory

Hash history 使用 URL 中的 hash（`#`）部分去创建形如 `example.com/#/some/path` 的路由。

### createMemoryHistory

无

