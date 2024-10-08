# Vue2 命名规范

:::tip 常用命名规范

- camelCase（小驼峰式命名法 —— 首字母小写）
- PascalCase（大驼峰式命名法 —— 首字母大写）
- kebab-case（短横线连接式）
- Snake（下划线连接式）
  :::

## 1 项目文件命名

### 1.1 项目名

全部采用小写方式， 以**短横线**分隔。例：`my-project-name`。

### 1.2 目录名

**参照项目命名规则，有复数结构时，要采用复数命名法**。例：`docs、assets、components、directives、mixins、utils、views`。

```javascript
my-project-name/
|- BuildScript    // 流水线部署文件目录
|- docs           // 项目的细化文档目录（可选）
|- nginx          // 部署在容器上前端项目 nginx 代理文件目录
|- node_modules   // 下载的依赖包
|- public         // 静态页面目录
    |- index.html // 项目入口
|- src            // 源码目录
    |- api        // http 请求目录
    |- assets     // 静态资源目录，这里的资源会被wabpack构建
        |- icon   // icon 存放目录
        |- img    // 图片存放目录
        |- js     // 公共 js 文件目录
        |- scss   // 公共样式 scss 存放目录
            |- frame.scss   // 入口文件
            |- global.scss  // 公共样式
            |- reset.scss   // 重置样式
    |- components     // 组件
    |- plugins        // 插件
    |- router         // 路由
      |- routes         // 详细的路由拆分目录（可选）
        |- index.js
    |- store          // 全局状态管理
    |- utils          // 工具存放目录
        |- request.js // 公共请求工具
    |- views          // 页面存放目录
    |- App.vue        // 根组件
    |- main.js        // 入口文件
    |- tests          // 测试用例
    |- .browserslistrc// 浏览器兼容配置文件
    |- .editorconfig  // 编辑器配置文件
    |- .eslintignore  // eslint 忽略规则
    |- .eslintrc.js   // eslint 规则
    |- .gitignore     // git 忽略规则
    |- babel.config.js // babel 规则
    |- Dockerfile // Docker 部署文件
    |- jest.config.js
    |- package-lock.json
    |- package.json // 依赖
    |- README.md // 项目 README
    |- vue.config.js // webpack 配置
```

### 1.3 图像文件名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**下划线**分隔。

- banner_sina.gif
- menu_aboutus.gif
- menutitle_news.gif
- logo_police.gif
- logo_national.gif
- pic_people.jpg
- pic_TV.jpg

### 1.4 HTML 文件名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**下划线**分隔。

- error_report.html
- success_report.html

### 1.5 CSS 文件名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**短横线**分隔。

- normalize.less
- base.less
- date-picker.scss
- input-number.scss

### 1.6 JavaScript 文件名

全部采用小写方式， 优先选择单个单词命名，多个单词命名以**短横线**分隔。

- index.js
- plugin.js
- util.js
- date-util.js
- account-model.js
- collapse-transition.js

**上述规则可以快速记忆为“静态文件下划线，编译文件短横线”。**

## 2 Vue 组件命名

### 2.1 单文件组件名

文件扩展名为 .vue 的 `single-file components` (单文件组件)。单文件组件名应该始终是**单词大写开头** `(PascalCase`)。

```
components/
  |- MyComponent.vue
```

### 2.2 单例组件名

**只拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性**。  
这不意味着组件只可用于一个单页面，而是**每个页面**只使用一次。这些组件永远不接受任何 `prop`，因为它们是为你的应用定制的。如果你发现有必要添加 `prop`，那就表明这实际上是一个可复用的组件，**只是目前**在每个页面里只使用一次。  
比如，头部和侧边栏组件几乎在每个页面都会使用，不接受 `prop`，该组件是专门为该应用所定制的。

```
components/
  |- TheHeading.vue
  |- TheSidebar.vue
```

### 2.3 基础组件名

基础组件：不包含业务，独立、具体功能的基础组件，比如**日期选择器**、**模态框**等。  
这类组件作为项目的基础控件，会被大量使用，因此组件的 `API` 进行过高强度的抽象，可以通过不同配置实现不同的功能。应该全部以一个特定的前缀开头 —— `Base`。**基础组件在一个页面内可使用多次，在不同页面内也可复用，是高可复用组件**。

```
components/
  |- BaseButton.vue
  |- BaseTable.vue
  |- BaseIcon.vue

```

### 2.4 业务组件

业务组件：它不像基础组件只包含某个功能，而是在业务中被多个页面复用的（具有可复用性），它与基础组件的区别是，业务组件只在当前项目中会用到，不具有通用性，而且会包含一些业务，比如数据请求；**掺杂了复杂业务的组件（拥有自身 data、prop 的相关处理）即业务组件**应该以 `Custom` 前缀命名。业务组件在一个页面内比如：某个页面内有一个卡片列表，而样式和逻辑跟业务紧密相关的卡片就是业务组件。

```
components/
  |- CustomCard.vue
```

### 2.5 紧密耦合的组件名

**和父组件紧密耦合的子组件应该以父组件名作为前缀命名**。因为编辑器通常会按字母顺序组织文件，所以这样做可以把相关联的文件排在一起。

```
components/
  |- TodoList.vue
  |- TodoListItem.vue
  |- TodoListItemButton.vue
```

### 2.6 组件名中单词顺序

**组件名应该以高级别的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾**。  
因为编辑器通常会按字母顺序组织文件，所以现在组件之间的重要关系一目了然。如下组件主要是用于搜索和设置功能。

```
components/
  |- SearchButtonClear.vue
  |- SearchButtonRun.vue
  |- SearchInputQuery.vue
  |- SearchInputExcludeGlob.vue
  |- SettingsCheckboxTerms.vue
  |- SettingsCheckboxLaunchOnStartup.vue
```

### 2.7 完整单词的组件名

**组件名应该倾向于全写而不是缩写**。

```
components/
  |- StudentDashboardSettings.vue
  |- UserProfileOptions.vue
```

## 3 代码参数命名

### 3.1 name

**组件名应该始终是多个单词，应该始终是 `PascalCase` 的**。 根组件 `App` 以及 `<transition>、<component> ` 之类的 `Vue` 内置组件除外。这样做可以避免跟现有的以及未来的 `HTML` 元素相冲突，因为所有的 `HTML` 元素名称都是单个单词的。

```javascript
export default {
  name: 'ToDoList',
  // ...
}
```

### 3.2 prop

**在声明 `prop` 的时候，其命名应该始终使用 **camelCase**，而在模板和 `JSX` 中应该始终使用 kebab-case**。

```javascript
;<WelcomeMessage greeting-text="hi" />

export default {
  name: 'MyComponent', // ...
  props: {
    greetingText: {
      type: String,
      required: true,
      validator: function (value) {
        return ['syncing', 'synced'].indexOf(value) !== -1
      },
    },
  },
}
```

### 3.3 router

**Vue Router Path 命名采用 kebab-case 格式**。 用 Snake（如：/user_info）或 camelCase（如：/userInfo)的单词会被当成一个单词，搜索引擎无法区分语义。

```javascript
// bad
{
  path: '/user_info', // user_info 当成一个单词
  name: 'UserInfo',
  component: UserInfo,
  meta: {
    title: '用户',
    desc: ''
  }
},

// good
{
  path: '/user-info', // 能解析成 user info
  name: 'UserInfo',
  component: UserInfo,
  meta: {
    title: '用户',
    desc: ''
  }
},
```

### 3.4 模板中组件

**对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的，但是在 DOM 模板中总是 kebab-case 的。**

```html
<!-- 在单文件组件和字符串模板中 -->
<MyComponent />

<!-- 在 DOM 模板中 -->
 
<my-component></my-component>
```

### 3.5 自闭合组件

**在单文件组件、字符串模板和 JSX 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做**。

```html
<!-- 在单文件组件和字符串模板中 -->
<MyComponent />

<!-- 在所有地方 -->
<my-component></my-component>
```

### 3.6 变量

- 命名方法：camelCase
- 命名规范：类型 + 对象描述或属性的方式

```javascript
// bad
var getTitle = 'loginTable'

// good
let tableTitle = 'loginTable'
let mySchool = '我的学校'
```

### 3.7 常量

- 命名方法：全部大写下划线分割
- 命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词

```js
const MAX_COUNT = 10
const URL = 'http://test.host.com'
```

### 3.8 方法

- 命名方法：camelCase
- 命名规范：统一使用动词或者动词 + 名词形式

```js
// 1、普通情况下，使用动词 + 名词形式
// bad
go、nextPage、show、open、login

// good
jumpPage、openCarInfoDialog

// 2、请求数据方法，以 data 结尾
// bad
takeData、confirmData、getList、postForm

// good
getListData、postFormData

// 3、单个动词的情况
init、refresh
```

| 动词 | 含义                         | 返回值                                                  |
| ---- | ---------------------------- | ------------------------------------------------------- |
| can  | 判断是否可执行某个动作 (权 ) | 函数返回一个布尔值。true：可执行；false：不可执行；     |
| has  | 判断是否含有某个值           | 函数返回一个布尔值。true：含有此值；false：不含有此值； |
| is   | 判断是否为某个值             | 函数返回一个布尔值。true：为某个值；false：不为某个值； |
| get  | 获取某个值                   | 函数返回一个非布尔值                                    |
| set  | 设置某个值                   | 无返回值、返回是否设置成功或者返回链式对象              |

### 3.9 自定义事件

**自定义事件应始终使用 kebab-case 的事件名。**
不同于组件和 prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。

```js
this.$emit('my-event')

<MyComponent @my-event="handleDoSomething" />
```

不同于组件和 `prop`，事件名不会被用作一个 `JavaScript` 变量名或 `property` 名，所以就没有理由使用 camelCase 或 PascalCase 了。并且 `v-on` 事件监听器在 DOM 模板中会被自动转换为全小写 (因为 HTML 是大小写不敏感的)，所以 `v-on:myEvent` 将会变成` v-on:myevent`——导致 `myEvent` 不可能被监听到。

- **原生事件参考列表[1]**

由原生事件可以发现其使用方式如下：

```html
<div
  @blur="toggleHeaderFocus"
  @focus="toggleHeaderFocus"
  @click="toggleMenu"
  @keydown.esc="handleKeydown"
  @keydown.enter="handleKeydown"
  @keydown.up.prevent="handleKeydown"
  @keydown.down.prevent="handleKeydown"
  @keydown.tab="handleKeydown"
  @keydown.delete="handleKeydown"
  @mouseenter="hasMouseHoverHead = true"
  @mouseleave="hasMouseHoverHead = false"
></div>
```

而为了区分*原生事件*和*自定义事件*在 Vue 中的使用，建议除了多单词事件名使用 kebab-case 的情况下，命名还需遵守为 **on + 动词** 的形式，如下：

```javascript
//  父组件 
<div
  @on-search="handleSearch"
  @on-clear="handleClear"
  @on-clickoutside="handleClickOutside">
</div>

// 子组件
export default {
  methods: {
    handleTriggerItem () {
      this.$emit('on-clear')
    }
  }
}
```

### 3.10 事件方法

- 命名方法：camelCase
- 命名规范：handle + 名称（可选）+ 动词

```html
<template>
    
  <div @click.native.stop="handleItemClick()" @mouseenter.native.stop="handleItemHover()">  </div>
</template>

<script>
  export default {
    methods: {
      handleItemClick() {
        //...
      },
      handleItemHover() {
        //...
      },
    },
  }
</script>
```
