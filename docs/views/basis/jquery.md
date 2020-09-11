---
title: 基础知识-jquery常用指令
sidebar: true
---

# 基础知识-jquery常用指令

<ClientOnly>
<title-pv/>
</ClientOnly>

## 调用方法

`jQuery()`调用  
`$()`调用

## jQuery的特殊选择器

`.first()` 获取符合条件的第一个  
`.last()`获取符合条件的第二个  
`.eq(获取第几个)`是按照索引的排列进行获取  
`.odd()`获取索引为单数个的所有元素  
`.even()`获取索引为偶数个的所有元素  
`.first()`获取元素集合里面的第一个  
`.last（）`获取元素集合里面的最后一个  
`.eq(索引)`获取到元素集合里面的第索引个  
`.prev()`获取元素的上一个兄弟元素  
`.prevAll()`获取元素的上面所有兄弟元素顺序倒着  
`.next()`获取元素的下一个兄弟元素  
`.nextAll（）`获取元素的下面所有兄弟元素  
`.siblings()`获取元素的所有兄弟元素 除自己之外  
`.parent()`获取元素的父元素  
`.parents（）`获取元素的所有祖先元素直到html为止  
`.find()`在一个数据集合，或者一个标签中进行查找  
`.index（）`父元素下的第几个  
`.end()`在当前数据集合使用，回归之前的数据集合  
`each(function(index,item){})`遍历  
`html()`对元素内部的结构进行修改  
`text()`对元素内部的内容进行修改  
`val()`获取元素的value值，传参设置元素的value值  

## 操作元素属性

`attr(key,value)`一个参数是获取设置属性名，两个是属性名，设置的值  
`removeAttr(key)`移除属性  
`prop（key,value）`一个参数是设置属性名，两个是属性名，设置的值 （自定义不显示）  
`removeProp()`移除属性  
`addClass`(你要添加的类名)  
`removeClass`(你要删除的类名)  
`hasClass`（你要判断的类名)用来判断有没有某一个类名的  
`toggleClass`(你要切换的类名）  
`css`()操作元素的样式  

## 对节点操作

`$('加标签')`创建节点  
`父元素.append(子元素)`放在最后  
`子元素.appendTo(父元素)`放在最后  
`父元素.prepend(子元素）`放在最前  
`子元素.oreoendTo(父元素）`放在最前  
`页面元素.after（要添加的元素）`哪一个元素的后面是要添加的元素  
`要添加的元素.inertAfter(页面元素)`  
`页面元素.before(要添加的元素)`哪一个元素的前面  
`要添加的元素.insertBefore(页面元素)`把要添加的元素插入到页面元素的前面  

## 替换节点

`被替换节点.rebalcewith(要替换节点）`  
`要替换的节点.replaceAll(被替换的节点集合)`  

## 删除节点

`某一个元素.remove()`把自己从页面里面移除  
`元素.empty()`把自己变成一个空标签  
`元素.clone(flase)`第一个参数：复制元素身上事件||第二个参数：复制子元素身上事件  

## 元素尺寸

`width()||height()`内容区域的宽和高  
`innerWidth()||innerHeight()`内容区域+padding的宽和高  
`outerWidth()||outerHeight()`内容区域+padding+border的宽和高  
`outerWidth(true)||outerHeight(true)`元素的内容区域+padding+border+margin  

## 元素的偏移量

`offset()`相对于页面左上角的尺寸  
`offset({left:值，top：值})`绝对设置页面左侧或者上面固定的位置  
`position()`有绝对定位=定位的值，相对定位=父元素到父元素定位的值+自己定位的值  
没有定位，父元素到父元素定位的值  
`scrollTop()`和`scrollleft()`浏览器卷去的宽度和高度  

## 动画 有三个参数：时间，曲线，回调函数

`show()`显示  
`hide()`隐藏  
`toggle()`切换  
`slideDown()`下拉显示  
`slideUp()`上拉隐藏  
`slideToggle()`切换  
`fadeIn()`渐渐的显示  
`fadeOut()`渐渐的隐藏  
`fadeToggle()`切换  
`fadeTo()`去到一个指定的透明度，参数：时间，透明度，运动曲线，回调函数  
`animate()`制作动画，参数：对象，时间，曲线，回调函数  
`stop()`直接让动画停止，在哪里触发，动画就停在哪里  
`finish()`触发的时候，直接让动画到达目标位置  

## 事件的On方法

`on（事件类型，事件处理函数)`  
`on(事件类型，复杂数据类型参数，事件处理函数）`直接使用e.data来获取传递的参数  
`on(事件类型，字符串，事件处理函数）`用来做事件委托的  
`on(事件类型，字符串，传递参数，事件处理函数）`  
`on(对象)`对象里面的每一个成员就是一个事件  

## 事件的One方法,绑定的事件只能执行一次  

`one(事件类型，事件处理函数）`  
`one(事件类型，复杂数据类型参数，事件处理函数)`  
`one(事件类型，委托字符串，事件处理函数）`  
`one（事件类型，委托，传递参数，事件处理函数`  
`one(对象)`  
`off()`移除事件  

## ajax方法

语法`\$.get(地址，携带的参数，成功的回调函数res参数，数据类型json）`  
语法：`\$.post(地址，携带的参数，成功的回调函数，期望后台返回的数据类型）`  
`\$.ajax(options)`  
`url`:请求地址  
`type`：请求方式，默认是get(这个成员名称可以叫做type也可以叫做method)  
`async`:是否异步，默认是true  
`data`:携带的参数，可以是字符串也可以是对象  
`success:function(){},`成功的回调  
`dataType：`期望返回的数据类型  json的时候执行json.parse()  
`error:function(xhr,info,message){},失败的回调（由jQuery 判断失败就是失败）`  
`cache:loolean,`是否缓存  
`timeout:`时间，超时时间（超过多少时间没有响应就算失败了）  
`context:`对象，改变回调函数里面的this指向  
`ajax({})>`jsonp方法  
dataType写成jsonp发送jsonp  
`jsonp:''`,向后端传递回调函数的key  
`jsonpcallback:''`,向后端传递回调函数的名字  
钩子函数,会在每一个ajax请求的时候触发  
语法：`\$(window).全局ajax函数名（function（）{}）`  
`ajaxStart()`请求开始的时候触发，多个触发一次  
`ajaxSend()`当每一个请求发送之前触发  
`ajaxSuccess()`只要有一个请求成功了，就会触发  
`ajaxError()`只要有一个请求失败就会触发  
`ajaxComplete()`只要有一个请求完成了，就会触发  
`ajaxStop()`请求结束的时候触发，多个触发最后一次  

## 其他

`\$(window).ready(function(){})`入口函数，就是页面加载完毕后执行  
简写`\$(function(){})`会在html结构加载完毕后执行  

### 多库并存

`noConflict()` 直接写的时候，jQuery就不会向外暴露\$这个变量了  
`noConfilct(true)`传递参数的一个true的时候，会把jquery的控制权也交出去  
`noConfilct(true)`返回值：是一个新的控制权变量  

### jQuery扩展

`\$.extend()`传递一个对象，对象里面的每一项就是你扩展的内容  
使用的时候，\$.对象成员名称（）  
`\$.fn.extend()`接受一个对象，对象里面的每一个成员都是你扩展的内容  
使用元素集合.对象成员（）  
`$(form).serialize()`获取表单元素，并以字符串形式输出  
`$元素.delegate('button','click',function(){}`当前或未来元素添加事件

<ClientOnly>
  <leave/>
</ClientOnly/>