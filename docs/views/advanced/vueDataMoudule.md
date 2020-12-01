---
title: 前端进阶-vue封装日期格式转换和获取日期区间
sidebar: true
# isShowComments: true
---

# 前端进阶-vue封装日期格式转换和获取日期区间

<ClientOnly>
<title-pv/>
</ClientOnly>

```js 

// 日期格式转换插件(时间戳转为 年-月-日 时：分：秒)
Vue.prototype.$dateParser = (timestamp) => {
    var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      
    var Y = date.getFullYear() + '-';  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';  
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());  
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';  
    var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';  
    var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());  
    return Y + M + D + ' ' + h + m + s; //以根据自己的需求加上
}

// 获取日期区间
Vue.prototype.$getDays = (day) => {
    var today = new Date();　　
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;　
    today.setTime(targetday_milliseconds);
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = doHandleMonth(tMonth + 1);
    tDate = doHandleMonth(tDate);
    return tYear + "-" + tMonth + "-" + tDate;
}
```

<ClientOnly>
  <leave/>
</ClientOnly/>