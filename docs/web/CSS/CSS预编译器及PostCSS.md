# Sass/Scss、SCSS

### Sass/Scss、Less概念

Sass（Syntactically Awesome Stylesheets）一种动态样式语言，Sass语法属于缩排语法，比css比多出好些功能(如变量、嵌套、运算,混入(Mixin)、继承、颜色处理，函数等)，更容易阅读。

Sass的缩排语法，对于写惯css前端的web开发者来说很不直观，也不能将css代码加入到Sass里面，因此sass语法进行了改良，Sass 3就变成了Scss(sassy css)。与原来的语法兼容，只是用{}取代了原来的缩进。

Less也是一种动态样式语言. 对CSS赋予了动态语言的特性，如变量，继承，运算， 函数.  Less 既可以在客户端上运行 (支持IE 6+, Webkit, Firefox)，也可在服务端运行 (借助 Node.js)。

### Sass/Scss和Less的区别

1. 编译环境不一样。

   Sass的安装需要Ruby环境，是在服务端处理的，而Less是需要引入less.js来处理Less代码输出css到浏览器，也可以在开发环节使用Less，然后编译成css文件，直接放到项目中，也有 Less.app、SimpleLess、CodeKit.app这样的工具，也有在线编译地址。

2. 变量符不一样，Less是@，Scss是$，而且变量的作用域也不一样。

   ```css
   Less-作用域
   @color: #00c; /* 蓝色 */
   #header {
     @color: #c00; /* red */
     border: 1px solid @color; /* 红色边框 */
   }
   
   #footer {
     border: 1px solid @color; /* 蓝色边框 */
   }
   
   Less-作用域编译后
   #header{border:1px solid #cc0000;}
   #footer{border:1px solid #0000cc;}
   
   scss-作用域
   $color: #00c; /* 蓝色 */
   
   #header {
   
     $color: #c00; /* red */
     border: 1px solid $color; /* 红色边框 */
   }
   
   #footer {
     border: 1px solid $color; /* 蓝色边框 */
   }
   
   Sass-作用域编译后
   
   #header{border:1px solid #c00}
   #footer{border:1px solid #c00}
   
   我们可以看出来，less和scss中的变量会随着作用域的变化而不一样。
   ```

3. 输出设置，Less没有输出设置，Sass提供4中输出选项：nested, compact, compressed 和 expanded。

   输出样式的风格可以有四种选择，默认为nested

   - nested：嵌套缩进的css代码
   - expanded：展开的多行css代码
   - compact：简洁格式的css代码
   - compressed：压缩后的css代码

4. Sass支持条件语句，可以使用if{}else{},for{}循环等等，而Less不支持。

5. ```css
   @if lightness($color) > 30% {
   
   } @else {
   
   }
   
   /* Sample Sass “for” loop */
   
   @for $i from 1 to 10 {
     .border-#{$i} {
       border: #{$i}px solid blue;
     }
   }
   ```

6. 引用外部CSS文件

   scss引用的外部文件命名必须以_开头，如下例所示:其中_test1.scss、_test2.scss、_test3.scss文件分别设置的h1 h2 h3。文件名如果以下划线_开头的话，Sass会认为该文件是一个引用文件，不会将其编译为css文件。Less引用外部文件和css中的@import没什么差异。

   ```css
   // 源代码：
   @import "_test1.scss";
   @import "_test2.scss";
   @import "_test3.scss";
   
   // 编译后：
   h1 {
     font-size: 17px;
   }
    
   h2 {
     font-size: 17px;
   }
    
   h3 {
     font-size: 17px;
   }
    
   ```

7. Sass和Less的工具库不同

   Sass有工具库Compass, 简单说，Sass和Compass的关系有点像Javascript和jQuery的关系,Compass是Sass的工具库。在它的基础上，封装了一系列有用的模块和模板，补充强化了Sass的功能。

   Less有UI组件库Bootstrap,Bootstrap是web前端开发中一个比较有名的前端UI组件库，Bootstrap的样式文件部分源码就是采用Less语法编写。

# PostCSS

PostCSS是一个使用JS插件来转换样式的工具，它负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），再交由插件来进行处理。插件基于 CSS 代码的 AST 所能进行的操作是多种多样的，比如可以支持变量和混入（mixin），增加浏览器相关的声明前缀，或是把使用将来的 CSS 规范的样式规则转译（transpile）成当前的 CSS 规范支持的格式。从这个角度来说，PostCSS 的强大之处在于其不断发展的插件体系。目前 PostCSS 已经有 200 多个功能各异的插件。开发人员也可以根据项目的需要，开发出自己的 PostCSS 插件。

### PostCSS使用

在 `webpack.config.js` 里使用 [`postcss-loader`](https://github.com/postcss/postcss-loader) :

```jsx
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  }
}
```

然后创建 `postcss.config.js`:

```jsx
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}
```

### 常用插件

##### Autoprefixer

Autoprefixer 是一个流行的 PostCSS 插件，其作用是为 CSS 中的属性添加浏览器特定的前缀。由于 CSS 规范的制定和完善一般需要花费比较长的时间，浏览器厂商在实现某个 CSS 新功能时，会使用特定的浏览器前缀来作为正式规范版本之前的实验性实现。比如 Webkit 核心的浏览器使用-webkit-，微软的 IE 使用-ms-。为了兼容不同浏览器的不同版本，在编写 CSS 样式规则声明时通常需要添加额外的带前缀的属性。这是一项繁琐而无趣的工作。Autoprefixer 可以自动的完成这项工作。Autoprefixer 可以根据需要指定支持的浏览器类型和版本，自动添加所需的带前缀的属性声明。开发人员在编写 CSS 时只需要使用 CSS 规范中的标准属性名即可。