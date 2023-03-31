(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{375:function(s,a,e){"use strict";e.r(a);var t=e(45),_=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"css模块化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css模块化"}},[s._v("#")]),s._v(" CSS模块化")]),s._v(" "),e("h3",{attrs:{id:"为什么我们需要css模块化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么我们需要css模块化"}},[s._v("#")]),s._v(" 为什么我们需要CSS模块化")]),s._v(" "),e("h4",{attrs:{id:"css全局作用域问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css全局作用域问题"}},[s._v("#")]),s._v(" CSS全局作用域问题")]),s._v(" "),e("p",[s._v("CSS的规则都是全局的，任何一个组件的样式规则，都对整个页面有效。一般解决方式：")]),s._v(" "),e("ul",[e("li",[s._v("class命名写长一点")]),s._v(" "),e("li",[s._v("加个父元素选择器，限制范围")]),s._v(" "),e("li",[s._v("重新命名个class")])]),s._v(" "),e("h4",{attrs:{id:"js-css无法共享变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-css无法共享变量"}},[s._v("#")]),s._v(" JS CSS无法共享变量")]),s._v(" "),e("p",[s._v("复杂组件要使用JS和CSS来共同处理样式，就会造成有些变量在JS和CSS中冗余，CSS预处理器/后处理器等都不提供跨JS和CSS共享变量这种能力。")]),s._v(" "),e("h4",{attrs:{id:"健壮并且扩展方便的-css"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#健壮并且扩展方便的-css"}},[s._v("#")]),s._v(" 健壮并且扩展方便的 CSS")]),s._v(" "),e("p",[s._v("编写健壮并且扩展方便的CSS有三个要点：")]),s._v(" "),e("ul",[e("li",[s._v("面向组件")]),s._v(" "),e("li",[s._v("沙盒化")]),s._v(" "),e("li",[s._v("方便")])]),s._v(" "),e("h3",{attrs:{id:"css模块化方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css模块化方案"}},[s._v("#")]),s._v(" CSS模块化方案")]),s._v(" "),e("h4",{attrs:{id:"css命名约定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css命名约定"}},[s._v("#")]),s._v(" CSS命名约定")]),s._v(" "),e("p",[s._v("规范化CSS的模块化方案（如BEM、OOCSS、AMCSS、SMACSS、SUITCSS），但是存在以下问题：")]),s._v(" "),e("ul",[e("li",[s._v("JS CSS之间依然没有打通变量和选择器")]),s._v(" "),e("li",[s._v("复杂命名")])]),s._v(" "),e("h4",{attrs:{id:"css-in-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-in-js"}},[s._v("#")]),s._v(" CSS in JS")]),s._v(" "),e("p",[s._v("彻底抛弃CSS，用JavaScript写CSS规则，并内联样式（如radium，react-style）。但是存在以下问题：")]),s._v(" "),e("ul",[e("li",[s._v("无法使用伪类，媒体查询等。")]),s._v(" "),e("li",[s._v("样式代码会出现大量重复。")]),s._v(" "),e("li",[s._v("不能利用成熟的CSS预处理器/后处理器。")])]),s._v(" "),e("h4",{attrs:{id:"使用js来管理样式模块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用js来管理样式模块"}},[s._v("#")]),s._v(" 使用JS来管理样式模块")]),s._v(" "),e("p",[s._v("使用JS编译原生的CSS文件，使其具备模块化的能力，代表是CSS Modules。CSS Modules能最大化地结合现有CSS生态（预处理器/后处理器）和JS模块化能力。使用Webpack，可以在任何项目中使用CSS Modules。")]),s._v(" "),e("h3",{attrs:{id:"css-modules介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-modules介绍"}},[s._v("#")]),s._v(" CSS Modules介绍")]),s._v(" "),e("p",[s._v("CSS Moudules是所有的类名都只有局部作用域的CSS文件。它既不是官方标准，也不是浏览器的特性，而是在构建步骤（如使用Webpack）中对CSS类名选择器限定作用域的一种方式（通过hash实现类似于命名空间的方法）。在使用CSS模块时，类名是动态生成的，唯一的，并准确对应到源文件中的各个类的样式。")]),s._v(" "),e("h3",{attrs:{id:"css-modules在react中的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css-modules在react中的使用"}},[s._v("#")]),s._v(" CSS Modules在React中的使用")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{ \n    test: /\\.css$/,\n    use: [\n        {\n            loader: 'style-loader'\n        }，\n        {\n            loader: 'css-loader',\n            options: {\n                modules: true,\n                localIdentName: '[hash:base64:6]'\n            }\n        }\n    ],\n    exclude:[path.resolve(__dirname, './node_modules')]\n}\n")])])]),e("p",[s._v("用exclude讲node_module文件夹内的文件排除在外，防止将antd-mobile包内的文件转译成css module。")]),s._v(" "),e("h3",{attrs:{id:"什么是bem"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是bem"}},[s._v("#")]),s._v(" 什么是BEM")]),s._v(" "),e("p",[s._v("BEM是块（block）、元素（element）、修饰符（modifier）的缩写，利用不同的区块，功能以及样式来给元素命名。这三个部分使用__与--连接。命名约定的模式如下：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".block{}\n.block_element{}\n.block--modifier{}\n")])])]),e("ul",[e("li",[e("code",[s._v("block")]),s._v("代表了更高级别的抽象或组件")]),s._v(" "),e("li",[e("code",[s._v("block__element")]),s._v("代表"),e("code",[s._v("block")]),s._v("的后代，用于形成一个完整的"),e("code",[s._v("block")]),s._v("的整体")]),s._v(" "),e("li",[e("code",[s._v("block--modifier")]),s._v("代表 "),e("code",[s._v("block")]),s._v(" 的不同状态或不同版本")])]),s._v(" "),e("h3",{attrs:{id:"bem的优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bem的优势"}},[s._v("#")]),s._v(" BEM的优势")]),s._v(" "),e("p",[s._v("BEM的关键是光凭class名字就可以让其他开发者知道某个标记用来做什么的，明白各个模块之间的关系，例如如下的命名：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".nav{}\n.nav__item{}\n.nav--blue{}\n.nav--item__hand{}\n")])])]),e("p",[s._v("这几个class名很明显能看出各个块儿的作用，顶级块是"),e("code",[s._v("nav")]),s._v("，它有一些元素比如"),e("code",[s._v("item")]),s._v("，"),e("code",[s._v("item")]),s._v("又有一些属性，例如"),e("code",[s._v("blue")]),s._v("，但是如果写成常规的css就会很难看得出它们的关系:")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".nav{}\n.item{}\n.blue{}\n")])])]),e("h3",{attrs:{id:"bem与scss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bem与scss"}},[s._v("#")]),s._v(" BEM与SCSS")]),s._v(" "),e("p",[s._v("在SCSS中可以使用"),e("code",[s._v("@at-root")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(".block {\n  @at-root #{&}__element {\n  }\n  @at-root #{&}--modifier {\n  }\n}\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/*生成的css*/\n.block {\n}\n.block__element {\n}\n.block--modifier {\n}\n")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);