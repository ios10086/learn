# Refs转发

## Refs转发

Ref 转发是一项将 [ref](https://react.docschina.org/docs/refs-and-the-dom.html) 自动地通过组件传递到其一子组件的技巧。对于大多数应用中的组件来说，这通常不是必需的。但其对某些组件，尤其是可重用的组件库是很有用的。

1. 我们通过调用`React.createRef`创建了一个`React ref`并将其赋值给`ref`变量。

   ```js
   const ref = React.createRef();
   ```

2. 我们通过制定ref为JSX属性，将其向下传递给`<FancyButton ref={ref}>`。

   ```js
   <FancyButton label="Click Me" ref={ref}/>;
   ```

3. React 传递 `ref` 给 `forwardRef` 内函数 `(props, ref) => ...`，作为其第二个参数。

   ```js
   function logProps(Component) {
     React.forwardRef((props, ref) => {
         return <LogProps {...props} forwardedRef={ref} />;
     });
   }
   ```

4. 我们向下转发该 `ref` 参数到 `<button ref={ref}>`，将其指定为 JSX 属性。

   ```js
   const {forwardedRef, ...rest} = this.props;
   // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
   return <Component ref={forwardedRef}/>;
   ```

5. 当 ref 挂载完成，`ref.current` 将指向 `<button>` DOM 节点。

## Refs and the DOM

Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素。

### 创建 Refs

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    //创建Refs
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```

### 访问 Refs 

```jsx
const node = this.myRef.current;
```

ref 的值根据节点的类型而有所不同：

- 当 `ref` 属性用于 HTML 元素时，构造函数中使用 `React.createRef()` 创建的 `ref` 接收底层 DOM 元素作为其 `current` 属性。
- 当 `ref` 属性用于自定义 class 组件时，`ref` 对象接收组件的挂载实例作为其 `current` 属性。
- **你不能在函数组件上使用 `ref` 属性**，因为他们没有实例。



```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // 创建一个 ref 来存储 textInput 的 DOM 元素
    this.textInput = React.createRef();   
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：我们通过 "current" 来访问 DOM 节点
    this.textInput.current.focus(); 
  }

  render() {
    // 告诉 React 我们想把 <input> ref 关联到
    // 构造器里创建的 `textInput` 上
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />        
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}
```

```jsx
function CustomTextInput(props) {
  // 这里必须声明 textInput，这样 ref 才可以引用它  const textInput = useRef(null);
  function handleClick() {
    textInput.current.focus();  
  }

  return (
    <div>
      <input
        type="text"
        ref={textInput} />      
      <input
        type="button"
        value="Focus the text input"
        onClick={handleClick}
      />
    </div>
  );
}
```

### 回调 Refs

不同于传递 `createRef()` 创建的 `ref` 属性，你会传递一个函数。这个函数中接受 React 组件实例或 HTML DOM 元素作为参数，以使它们能在其他地方被存储和访问。

```jsx
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;
    this.setTextInputRef = element => {      
      this.textInput = element;    
    };
    this.focusTextInput = () => {      
      // 使用原生 DOM API 使 text 输入框获得焦点      
      if (this.textInput) this.textInput.focus();    
    }; 
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();  
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}      
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}        
        />
      </div>
    );
  }
}
```