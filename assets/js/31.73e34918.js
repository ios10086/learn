(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{386:function(t,s,a){"use strict";a.r(s);var n=a(45),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js执行上下文"}},[t._v("#")]),t._v(" JS执行上下文")]),t._v(" "),a("h2",{attrs:{id:"全局执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局执行上下文"}},[t._v("#")]),t._v(" 全局执行上下文")]),t._v(" "),a("p",[t._v("window对象，全局执行上下文只有一个，通过this直接访问到它，window对象还是var声明的全局变量的载体。")]),t._v(" "),a("h2",{attrs:{id:"函数执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数执行上下文"}},[t._v("#")]),t._v(" 函数执行上下文")]),t._v(" "),a("p",[t._v("函数执行上下文可存在无数个，每当一个函数被调用时都会创建一个函数上下文；需要注意的是，同一个函数被多次调用，都会创建一个新的上下文。")]),t._v(" "),a("h2",{attrs:{id:"执行上下文栈-执行栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文栈-执行栈"}},[t._v("#")]),t._v(" 执行上下文栈(执行栈)")]),t._v(" "),a("p",[t._v("执行上下文栈(下文简称执行栈)也叫调用栈，执行栈用于存储代码执行期间创建的所有上下文，具有LIFO（Last In First Out后进先出，也就是先进后出）的特性。")]),t._v(" "),a("h2",{attrs:{id:"执行上下文创建阶段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文创建阶段"}},[t._v("#")]),t._v(" 执行上下文创建阶段")]),t._v(" "),a("p",[t._v("执行上下文创建分为创建阶段与执行阶段两个阶段，JS执行上下文的创建阶段主要负责三件事："),a("strong",[t._v("确定this---创建词法环境组件（LexicalEnvironment）---创建变量环境组件（VariableEnvironment）")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"确定this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#确定this"}},[t._v("#")]),t._v(" 确定this")]),t._v(" "),a("p",[t._v("在全局执行上下文中，this总是指向全局对象window。")]),t._v(" "),a("p",[t._v("在函数执行上下文中，this的值取决于函数的调用方式，如果被一个对象调用，那么this指向这个对象。否则this一般指向全局对象window或者undefined（严格模式）。")]),t._v(" "),a("h3",{attrs:{id:"词法环境组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#词法环境组件"}},[t._v("#")]),t._v(" 词法环境组件")]),t._v(" "),a("p",[t._v("词法环境是一个包含标识符变量映射的结构，这里的标识符表示变量/函数的名称，变量是对实际对象【包括函数类型对象】或原始值的引用。")]),t._v(" "),a("p",[t._v("词法环境由环境记录与对外部环境引入记录两个部分组成。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("环境记录")]),t._v(" "),a("p",[t._v("用于存储当前环境中的变量和函数声明的实际位置。")])]),t._v(" "),a("li",[a("p",[t._v("外部环境引入记录")]),t._v(" "),a("p",[t._v("用于保存自身环境可以访问的其它外部环境。")])])]),t._v(" "),a("p",[t._v("词法环境分为全局词法环境与函数词法环境两种。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("全局词法环境")]),t._v(" "),a("p",[t._v("对外部环境的引入记录为null，因为它本身就是最外层环境，除此之外它还记录了当前环境下的所有属性、方法位置。")])]),t._v(" "),a("li",[a("p",[t._v("函数词法环境")]),t._v(" "),a("p",[t._v("包含了用户在函数中定义的所有属性方法外，还包含了一个arguments对象。函数词法环境的外部环境引入可以是全局环境，也可以是其它函数环境，这个根据实际代码而来。")])])]),t._v(" "),a("h3",{attrs:{id:"变量环境组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量环境组件"}},[t._v("#")]),t._v(" 变量环境组件")]),t._v(" "),a("p",[t._v("变量环境可以说也是词法环境，它具备词法环境所有属性，一样有环境记录与外部环境引入。在ES6中唯一的区别在于"),a("strong",[t._v("词法环境用于存储函数声明与let const声明的变量")]),t._v("，而"),a("strong",[t._v("变量环境仅仅存储var声明的变量")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//全局执行上下文")]),t._v("\nGlobalExectionContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this绑定为全局对象")]),t._v("\n    ThisBinding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n    LexicalEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//环境记录")]),t._v("\n      EnvironmentRecord"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象环境记录")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里 let const创建的变量a b在这")]),t._v("\n        a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n        b"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" uninitialized "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n        multiply"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" func "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局环境外部环境引入为null")]),t._v("\n      outer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n    VariableEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      EnvironmentRecord"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Object"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对象环境记录")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  var创建的c在这")]),t._v("\n        c"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局环境外部环境引入为null")]),t._v("\n      outer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 函数执行上下文")]),t._v("\n  FunctionExectionContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//由于函数是默认调用 this绑定同样是全局对象")]),t._v("\n    ThisBinding"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Global Object"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 词法环境")]),t._v("\n    LexicalEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      EnvironmentRecord"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明性环境记录")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  arguments对象在这")]),t._v("\n        Arguments"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 外部环境引入记录为</Global>")]),t._v("\n      outer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GlobalEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n    VariableEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n      EnvironmentRecord"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n        Type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Declarative"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明性环境记录")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标识符绑定在这里  var创建的g在这")]),t._v("\n        g"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 外部环境引入记录为</Global>")]),t._v("\n      outer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("GlobalEnvironment"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("在执行上下文创建阶段，函数声明与var声明的变量在创建阶段已经被赋予了一个值，var声明被设置为了undefined，函数被设置为了自身函数，而let const被设置为未初始化。")]),t._v(" "),a("h2",{attrs:{id:"执行上下文创建阶段-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文创建阶段-2"}},[t._v("#")]),t._v(" 执行上下文创建阶段")]),t._v(" "),a("p",[t._v("代码执行时根据之前的环境记录对应赋值，比如早期var在创建阶段为undefined，如果有值就对应赋值，像let const值为未初始化，如果有值就赋值，无值则赋予undefined。")])])}),[],!1,null,null,null);s.default=r.exports}}]);