(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{376:function(s,t,a){"use strict";a.r(t);var e=a(45),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"flex布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[s._v("#")]),s._v(" Flex布局")]),s._v(" "),a("h2",{attrs:{id:"flex布局是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex布局是什么"}},[s._v("#")]),s._v(" flex布局是什么")]),s._v(" "),a("p",[s._v("Flex是Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。\n任何一个容器都可以指定Flex布局。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("行内元素也可以用来使用Flex布局。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("Webkit内核的浏览器，必须加上-webkit前缀。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Safari */")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[a("em",[s._v("设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。")])]),s._v(" "),a("h2",{attrs:{id:"基本概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[s._v("#")]),s._v(" 基本概念")]),s._v(" "),a("p",[s._v("采用Flex布局的元素，称为Flex容器（flex container），简称“容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称“项目”。")]),s._v(" "),a("p",[s._v("容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。\n项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。")]),s._v(" "),a("h2",{attrs:{id:"容器的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器的属性"}},[s._v("#")]),s._v(" 容器的属性")]),s._v(" "),a("p",[s._v("以下6个属性设置在容器上。")]),s._v(" "),a("h5",{attrs:{id:"flex-direction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[s._v("#")]),s._v(" flex-direction")]),s._v(" "),a("p",[s._v("flex-direction属性决定主轴的方向（即项目的排列方向）。web中默认row，react native中默认column。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row | row-reverse | column | column-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("row：主轴为水平方向，起点在左端。")]),s._v(" "),a("li",[s._v("row-reverse：主轴为水平方向，起点在右端。")]),s._v(" "),a("li",[s._v("column：主轴为垂直方向，起点在上沿。")]),s._v(" "),a("li",[s._v("column-reverse：主轴为垂直方向，起点在下沿。")])]),s._v(" "),a("h5",{attrs:{id:"flex-wrap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap"}},[s._v("#")]),s._v(" flex-wrap")]),s._v(" "),a("p",[s._v("默认情况下，项目都排在一条线（又称“轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap | wrap | wrap-reverse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("nowrap（默认）：不换行。")]),s._v(" "),a("li",[s._v("wrap：换行，第一行在上方。")]),s._v(" "),a("li",[s._v("wrap-reverse：换行，第一行在下方。")])]),s._v(" "),a("h5",{attrs:{id:"flex-flow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow"}},[s._v("#")]),s._v(" flex-flow")]),s._v(" "),a("p",[s._v("flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-flow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <flex-direction> || <flex-wrap>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h5",{attrs:{id:"justify-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#justify-content"}},[s._v("#")]),s._v(" justify-content")]),s._v(" "),a("p",[s._v("justify-content属性定义了项目在主轴上的对齐方式。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("flex-start（默认值）：主轴的起点对齐。")]),s._v(" "),a("li",[s._v("flex-end：主轴的终点对齐。")]),s._v(" "),a("li",[s._v("center：主轴的中点对齐。")]),s._v(" "),a("li",[s._v("space-between：两端对齐，项目之间的间隔都相等。")]),s._v(" "),a("li",[s._v("space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。")])]),s._v(" "),a("h5",{attrs:{id:"align-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-items"}},[s._v("#")]),s._v(" align-items")]),s._v(" "),a("p",[s._v("align-items属性定义项目在交叉轴上如何对齐。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | baseline | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("flex-start：交叉轴的起点对齐。")]),s._v(" "),a("li",[s._v("flex-end：交叉轴的终点对齐。")]),s._v(" "),a("li",[s._v("center：交叉轴的中点对齐。")]),s._v(" "),a("li",[s._v("baseline：项目的第一行文字的基线对齐。")]),s._v(" "),a("li",[s._v("stretch（默认）：如果项目未设置高度或设为auto，将占满整个容器的高度。")])]),s._v(" "),a("h5",{attrs:{id:"align-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[s._v("#")]),s._v(" align-content")]),s._v(" "),a("p",[s._v("align-content属性定义了多根轴线对齐方式。如果项目只有一根轴线，该属性不起作用。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("flex-start：交叉轴的起点对齐。")]),s._v(" "),a("li",[s._v("flex-end：交叉轴的终点对齐。")]),s._v(" "),a("li",[s._v("center：交叉轴的中点对齐。")]),s._v(" "),a("li",[s._v("space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),s._v(" "),a("li",[s._v("space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),s._v(" "),a("li",[s._v("stretch（默认值）：轴线占满整个交叉轴。")])]),s._v(" "),a("h2",{attrs:{id:"项目的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目的属性"}},[s._v("#")]),s._v(" 项目的属性")]),s._v(" "),a("p",[s._v("以下6个属性设置在项目上：")]),s._v(" "),a("h5",{attrs:{id:"order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[s._v("#")]),s._v(" order")]),s._v(" "),a("p",[s._v("order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0.")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <integer>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h5",{attrs:{id:"flex-grow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[s._v("#")]),s._v(" flex-grow")]),s._v(" "),a("p",[s._v("flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 0 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。")]),s._v(" "),a("h5",{attrs:{id:"flex-shrink"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[s._v("#")]),s._v(" flex-shrink")]),s._v(" "),a("p",[s._v("flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 1 */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。")]),s._v(" "),a("h5",{attrs:{id:"flex-basis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[s._v("#")]),s._v(" flex-basis")]),s._v(" "),a("p",[s._v("flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <length> | auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default auto */")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。")]),s._v(" "),a("h5",{attrs:{id:"flex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[s._v("#")]),s._v(" flex")]),s._v(" "),a("p",[s._v("flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none | [ <"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-grow'")]),s._v("> <"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-shrink'")]),s._v(">? || <"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-basis'")]),s._v("> ]\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。\n建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")]),s._v(" "),a("h5",{attrs:{id:"align-self"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#align-self"}},[s._v("#")]),s._v(" align-self")]),s._v(" "),a("p",[s._v("align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。")]),s._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto | flex-start | flex-end | center | baseline | stretch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("该属性可能取6个值，除了auto，其他都与align-items属性完全一致。")])])}),[],!1,null,null,null);t.default=n.exports}}]);