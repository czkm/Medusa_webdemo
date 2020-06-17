# webdemo

## 项目依赖安装

```
npm install
```

### 项目启动

```
npm run serve
```

### 项目编译📦

```
npm run build
```

---

# 项目开发指引

这个文档主要提供项目开发指引

## 模块搭建规范

### 模块分类

项目上需要按业务进行模块分类, 在`src`下建立项目的分类目录。

项目如下所示结构:

```
├─src                         #项目资源主目录
│  │
│  └─api                      #api模块
│     │
│     ├─rules                 #请求接口，支持get，post，get/post表单提交4种请求方式
│     │
│     └─url                   #暴露的接口路径
│
├─components                  #项目全局公共组件放这里
│
│─router                      #项目路由配置
│
│─util                        #项目全局工具类方法放这里
│
│─views                       #项目页面开发地址，新建的页面放这里
│  │
│  └─Login                    #登陆页demo
│  │
│  └─Regist                   #注册页demo
│
│─faceConfig                  #项目全局配置放这里，如接口路径basePath: 'http://3.12.71.147:9999/api/',
│
│─vue.config                  #vue,webpack配置文件,

```

### 添加页面

在views目录下就可以添加相应的模块了，之后在路由里注册引入即可

## 组件命名规范

* 文件名、组件名、引入名保持一致 **(强制)**
* 名称不能重复 **(强制)**
* 名称要有意义,做到见名知意 **(强制)**
* 不能使用拼音命名 **(建议)**

## data命名规范

data 属性名应该尽量能够做到见名知意，一般来说需要突出两到三个重点：

* 这个变量是关于什么业务行为的？
* 这个变量是关于什么组件的？
* 这个变量是关于组件什么特性的？

比如关于资源管理的model的显示隐藏控制属性，错误示例visable ,正确示例resourceMgModelVisible。

## 方法命名规范

事件方法命名格式 handleXxxxx, 其他方法命名格式 fnXxx

## 样式规范

组件样式强烈建议指明作用域与模块内有效，否则可能出现样式混乱
且，样式选择器应避免使用元素选择器, 推荐类选择器

```
<style scoped lang="scss"  type="text/scss">
  #app { padding: 20px }
</style>
```

---
title: 前端项目开发规约细则
date: 2020-06-01 

---

# 前端项目开发规约细则

规约细则是开发过程中的总结与代码优化, 该文档会不断完善与补充。

1. API 代码提取到单独JS模块, 请求回调使用 ```=>``` 函数, 去调多余的 self 声明
2. 在判断、插槽等vue语法时 , 尽量使用 template 代替 div, 减少页面层级
    vue 属性赋值建议都用双引号, 建议四个属性以上换行书写

    ```
    <ta-form-item label='自定义编码'
                  :labelCol="formItemLayout.labelColTwo"
                  :wrapperCol="formItemLayout.wrapperColTwo"
                  fieldDecoratorId="code">
      <ta-input/>
    </ta-form-item>
    ```

3. 不推荐使用 v-html 语法
4. 使用 v-for 语法时, 必须指定 key 值

    ```
    <ta-select-option v-for="item in CollectionData('SEX')"
                      :key="item.value"
                      :value="item.value">
      {{item.label}}
    </ta-select-option>
    ```

5. v-for 与 v-if 不要同时用在一个元素上，如果是为了过滤列表, 请使用计算属性替代v-if ；如果是为了隐藏列表, 请在外层加 template 标签处理；
6. 表格的列定义放在 export default 语法前 , import 语法后, 用 const 声明
7. 组件的data 应该是一个函数, 而不是一个对象

    ```
    export default {
      name: "componentName",
      data(){
        return {

        }
      }
    }
    ```

8. 使用计算属性时, 可进行拆分，多个计算属性更有利于代码阅读和重构
9. 应该优先通过 prop 和事件进行父子组件之间的通信，而不是 this.$parent 或改变 prop。
10. 应用优先使用框架提供的 vuex 管理全局状态, 而不是使用全局变量
# Medusa_webdemo
