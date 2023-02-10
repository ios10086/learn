# Vue生命周期

#### 初始化

**beforeCreate()** 数据代理未开始.

**created()** 数据代理完成,可以通过vm访问data中的数据,methods中配置的方法.

#### 挂载

**beforeMount()**此时页面显示未经Vue编译的DOM结构,所有对DOM的操作都不奏效.

Vue完成模板的解析并把真实的DOM元素放入页面后调用**mounted**().

#### 更新

**beforeUpdate()** 数据是新的页面是旧的.

**Updated()** 数据是新的页面是新的.

**$nextTick()**真实DOM操作完成之后调用.

#### 销毁

**beforeDestory()** 实例销毁之前调用。在这一步，实例仍然完全可用。

**destroyed()** 实例销毁后调用。

#### 路由生命周期

**activated()**路由组件被激活时触发

**deactivated()**路由组件失活时触发



