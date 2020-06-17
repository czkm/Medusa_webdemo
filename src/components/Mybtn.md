## 按钮组件使用说明

### 基本用法

```html
<template>
    <Mybtn />  
    <!-- 什么都不输入则调用默认值 -->
    <Mybtn :title='title' :btn_width='110' :btn_hight='40' :ClickPromise='Test'/>
    <!-- 此条表示 按钮文字test 宽度110，长度40，点击后触发Test方法 -->
</template>

<script>
// 组件信息引入
import Mybtn from "../components/Mybtn.vue";

export default {
  // 组件注册
  components: { Mybtn },
  data () {
    return {
       title: 'test'       //自定义按钮名称  类似可定义宽度，长度，方法
    }
  },
  methods:{
    Test () {
      // 调用子组件里面的校验方法
     console.log('click test')
    }
  }
}

  
</script>
```

| 参数         | 说明     | 类型  | 默认值 |
| ------------ | -------- | ----- | ------ |
| title | 标题 | String | 雨辰鸡牛逼     |
| btn_width | 按钮宽度 | number | 146|
| btn_hight| 按钮长度    | number |  36 |
| ClickPromise | 点击后触发的方法 |click|
