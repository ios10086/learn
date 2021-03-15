# CSS模块化

### 为什么我们需要CSS模块化

#### CSS全局作用域问题

CSS的规则都是全局的，任何一个组件的样式规则，都对整个页面有效。一般解决方式：

- class命名写长一点
- 加个父元素选择器，限制范围
- 重新命名个class

#### JS CSS无法共享变量

复杂组件要使用JS和CSS来共同处理样式，就会造成有些变量在JS和CSS中冗余，CSS预处理器/后处理器等都不提供跨JS和CSS共享变量这种能力。

#### 健壮并且扩展方便的 CSS

编写健壮并且扩展方便的CSS有三个要点：

- 面向组件
- 沙盒化
- 方便

### CSS模块化方案

#### CSS命名约定

规范化CSS的模块化方案（如BEM、OOCSS、AMCSS、SMACSS、SUITCSS），但是存在以下问题：

- JS CSS之间依然没有打通变量和选择器
- 复杂命名

#### CSS in JS

彻底抛弃CSS，用JavaScript写CSS规则，并内联样式（如radium，react-style）。但是存在以下问题：

- 无法使用伪类，媒体查询等。
- 样式代码会出现大量重复。
- 不能利用成熟的CSS预处理器/后处理器。

#### 使用JS来管理样式模块

使用JS编译原生的CSS文件，使其具备模块化的能力，代表是CSS Modules。CSS Modules能最大化地结合现有CSS生态（预处理器/后处理器）和JS模块化能力。使用Webpack，可以在任何项目中使用CSS Modules。

### CSS Modules介绍

CSS Moudules是所有的类名都只有局部作用域的CSS文件。它既不是官方标准，也不是浏览器的特性，而是在构建步骤（如使用Webpack）中对CSS类名选择器限定作用域的一种方式（通过hash实现类似于命名空间的方法）。在使用CSS模块时，类名是动态生成的，唯一的，并准确对应到源文件中的各个类的样式。

### CSS Modules在React中的使用

```
{ 
    test: /\.css$/,
    use: [
        {
            loader: 'style-loader'
        }，
        {
            loader: 'css-loader',
            options: {
                modules: true,
                localIdentName: '[hash:base64:6]'
            }
        }
    ],
    exclude:[path.resolve(__dirname, './node_modules')]
}
```

用exclude讲node_module文件夹内的文件排除在外，防止将antd-mobile包内的文件转译成css module。

### 什么是BEM

BEM是块（block）、元素（element）、修饰符（modifier）的缩写，利用不同的区块，功能以及样式来给元素命名。这三个部分使用__与--连接。命名约定的模式如下：

```
.block{}
.block_element{}
.block--modifier{}
```

- `block`代表了更高级别的抽象或组件
- `block__element`代表`block`的后代，用于形成一个完整的`block`的整体
- `block--modifier`代表 `block` 的不同状态或不同版本

### BEM的优势

BEM的关键是光凭class名字就可以让其他开发者知道某个标记用来做什么的，明白各个模块之间的关系，例如如下的命名：

```
.nav{}
.nav__item{}
.nav--blue{}
.nav--item__hand{}
```

这几个class名很明显能看出各个块儿的作用，顶级块是`nav`，它有一些元素比如`item`，`item`又有一些属性，例如`blue`，但是如果写成常规的css就会很难看得出它们的关系:

```
.nav{}
.item{}
.blue{}
```

### BEM与SCSS

在SCSS中可以使用`@at-root`：

```
.block {
  @at-root #{&}__element {
  }
  @at-root #{&}--modifier {
  }
}
```

```
/*生成的css*/
.block {
}
.block__element {
}
.block--modifier {
}
```

