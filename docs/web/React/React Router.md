# React Router
React Router 是一个基于 React 之上的强大路由库，它可以让你向应用中快速地添加视图和数据流，同时保持页面与 URL 间的同步。
## 路由配置
路由配置是一组指令，用来告诉 router 如何匹配 URL以及匹配后如何执行代码。

	React.render((
	  <Router>
	    <Route path="/" component={App}>
	      <Route path="about" component={About} />
	      <Route path="inbox" component={Inbox}>
	        <Route path="messages/:id" component={Message} />
	      </Route>
	    </Route>
	  </Router>
	), document.body)

|         URL         |          组件           |
| :-----------------: | :---------------------: |
|          /          |           APP           |
|       /about        |      App -> About       |
|       /inbox        |      App -> Inbox       |
| /inbox/messages/:id | App -> Inbox -> Message |

