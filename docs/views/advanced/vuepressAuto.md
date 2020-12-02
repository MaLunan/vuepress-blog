---
title: 前端进阶-vuepress自动生成侧边栏
sidebar: true
# isShowComments: true
---

# 前端进阶-vuepress自动生成侧边栏

<ClientOnly>
<title-pv/>
</ClientOnly>

# 前言：

`vuepress需要手动设置侧边栏、导航栏，导入大量笔记就很费时间。为了能够专心写作而不用去管侧边栏、导航栏的引入`

# 下载 

``` js
npm i vuepress-sidebar-atuo
```

# 引入 

```js
const {getChildren} = require("vuepress-sidebar-atuo")
```

# 使用

``` js
module.exports = {
        '/views/': [
        {
            title: '基础知识',
            collapsable: true,
            children: getChildren('./docs/views/basis/')
        },
        {
            title: '高级进阶',
            collapsable: true,
            children: getChildren('./docs/views/advanced/')
        },
         '/jottings/':[
        {
            title: '随笔',
            collapsable: true,
            children: getChildren('./docs/jottings/')
        },
    ],
    //...
`这样就配置完成了`

```

<ClientOnly>
  <leave/>
</ClientOnly/>