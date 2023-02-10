# Vuex

![Vuex工作原理图](/Users/lu/Desktop/学习/技术积累/docs/web/Vue/image/Vuex工作原理图.png)

### 创建Store

```js
import Vue from 'vue'
import Vuex from 'vuex'
import countOptions from './count'

Vue.use(Vuex) //应用Vuex插件

export default new Vuex.Store({
  modules: {
    countAbout: countOptions
  }
})

```

```javascript
export default {
  namespaced: true, //开启命名空间
  state: {
    sum: 0
  }, //存储数据
  action: {
    add(context, value) {
      context.commit('ADD', value)
    }
  },
  mutations: {
    ADD(state, value) {
      
    }
  }, //操作数据
  getters: {
    bigSum(state) {
      
    }
  } //将state中的数据进行加工
}
```

### 四个map方法的使用

1.mapState方法: 用于帮助映射**state**中的数据为计算属性

```javascript
computed: {
  	// 借助mapState生成计算属性：sum、school、subject（对象写法一）
  	...mapState({sum:'sum',school:'school',subject:'subject'}),

  	// 借助mapState生成计算属性：sum、school、subject（数组写法二）
  	...mapState(['sum','school','subject']),
},
```

2.mapGetters方法: 用于帮助映射**getters**中的数据为计算属性

```javascript
computed: {
    //借助mapGetters生成计算属性：bigSum（对象写法一）
    ...mapGetters({bigSum:'bigSum'}),

		//借助mapGetters生成计算属性：bigSum（数组写法二）
		...mapGetters(['bigSum'])
},
```

3.mapAction方法: 用于帮助生产与acitons对话的方法, 即包含$store.dispatch()的函数

```javascript
methods:{
    //靠mapActions生成：incrementOdd、incrementWait（对象形式）
    ...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})

		//靠mapActions生成：incrementOdd、incrementWait（数组形式）
		...mapActions(['jiaOdd','jiaWait'])
}
```

4.mapMutataions方法: 用于帮助生产与mutations对话的方法, 即包含$store.commit()的函数

```javascript
methods:{
    //靠mapActions生成：increment、decrement（对象形式）
    ...mapMutations({increment:'JIA',decrement:'JIAN'}),
    
		//靠mapMutations生成：JIA、JIAN（对象形式）
		...mapMutations(['JIA','JIAN']),
}
```

*注意: 使用时，若需要传递参数需要：**在模板中绑定事件时传递好参数**，否则参数是事件对象*

```vue
<template>
	<div>
  	<button @click="increment(n)"></button>
    <button @click="decrement(n)"></button>
    <button @click="incrementOdd(n)"></button>
    <button @click="incrementWait(n)"></button>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    name: 'Count',
    data() {
      retrun {
        n: 1
      }
    },
    computed: {
      ...mapState('countAbout', ['sum']),
      ...mapGetters('countAbout', ['bigSum'])
    },
    methods: {
      ...mapMutations('countAbout', {increment:'ADD'}),
      ...mapActions('countAbout', {incrementOdd:'ADD'}),
    }
  }
</script>
```

