---
title: 基础知识-js常用代码
sidebar: true
# isShowComments: true
---

# 基础知识-js常用代码

<ClientOnly>
<title-pv/>
</ClientOnly>

[[toc]]

## 基础类型

`number` 数值  
`string` 字符串  
`boolean` 布尔型  
`null` 空  
`undefined` 未定义  
`Symbol`(ES6新增)独一无二的值  

## 检查数据类型方法

`typeof` 检测基本数据类型  
`instanceof` 检测引用数据类型，不能用于检测null和undefined。  
`constructor` constructor能用于检测js的基本类型和引用类型，但当对象的原型更改之后，constructor便失效了。  
`Object.prototype.toString.call()`可用于检测js所有的数据类型  

## 类型转换

`Number（）` 转换数值  
`parseInt（）` 转换数字  
`parseFloat()` 转换小数  
`toString(进制数)` 转换进制  
`Boolean()` 转换布尔型  
`isNaN()` 是，不是一个数字  

## 弹窗

`prompt` 输入框  
`alert` 弹出框  
`confirm` 询问框  

## 判断循环语句

`if() else{}` 条件语句  
`switch case  break default ` 分支语句  
`while` 循环语句  
`do while`  先执行  
`条件？成立执行：不成立执行` 三元运算符  
`for` 循环  
`break` 终止循环  
`continue` 结束本次循环  
`return` 函数返回值  

## 对象方法

`objname='Jack'` 添加对象成员  
`objname['name']='jack'` 点语法添加  
`delete obj.name` 删除对象成员  
`delete obj['name']` 删除对象成员 点语法  
`obj.name` 对象查找  
`obj['jack']` 点语法对象查找  
`for in` 循环  用来遍历对象  
`object.hasOwnProperty()`检测是否是自有属性  

## 数组 方法

`push` 添加放在最后  
`pop` 删除最后  
`unshift` 添加最前  
`shift` 删除第0个  
`concat` 拼接  
`reverse` 反转数组  
`splice` 截取多少个  
`slice` 截取的索引  
`sort` 数组排序  
`indexof()` 内容索引的位置  
`forEach` 遍历数组  
`reduce((prev//上一次结果,currect//当前值){return 结果},0//初始值)` 累加器  
`for of` 循环 es6新增循环 不能遍历对象  
`map` 映射数组返回值新数组  
`filter` 把满足条件的筛选放到新数组  
`some` 遍历满足条件返回true  
`every` 所有满足才返回true  
`new Map` 例：[['Michael', 95], ['Bob', 75], ['Tracy', 85]]得到枚举值  
`new Set` 去重  

## 字符串方法

`indexOf` 查找字符位置索引  
`charAt()` 对应索引的字符串  
`charCodeAt()` Ascall编码  
`substring` 截取字符串开始0索引 结束索引  
`substr` 截取字符串 多少个  
`concat` 拼接字符串  
`slice` 截取字符串结束索引  
`toUpperCase` 字符串该大写  
`toLowerCase` 改成小写  
`split（）` 用什么字符切割放在数组中  
`replace` （把什么，替换成什么）  
`sort(function(a,b)){returna-b)})`  排序  
`join` 数组用字符连接成字符串  

## 数字方法

`Math.random` 随机数0-0.999  
`Math.round` 四舍五入  
`Math.ceil` 向上取整  
`Math.floor` 向下取整  
`Math.pow` 取幂  
`Math.sprt` 开平方根  
`Math.abs` 取绝对值  
`Math.max` 取最大值  
`Math.min` 取最小值  
`Math.PI` 取PI值  
`toFixed()` 保留几位小数  

## 时间方法

`new Date` 获取指定时间对象不填是当前  
`.getFullYear()` 获取年份  
`.getMonth` 月  
`.getDate` 日  
`.getHours` 小时  
`getMinutes` 分钟  
`getSeconds` 秒  
`getDay` 第几天  
`getTime` 时间戳  
`set` 设置年月日小时分钟秒钟时间戳  

## 改变this指向

`函数名.call()` 改变this指向  
`函数名.apply()` 改变this指向  
`函数名.bind()` 返回值改变好了的this指向函数  

## 浏览器属性

`window.innerHeight` 浏览器高  
`window.innerWidth` 浏览器宽  
`document.documentElement.clientWidth` 不含滚动条的窗口宽  
`document.documentElement.clientHeight` 不含滚动条的窗口高  
`window.location.href` 跳转页面 读写  
`location.relod` 重新加载页面  
`location.open(新的页面地址`)  
`location.close()` 关闭当前页面  
`history.back` 历史回退  
`histor.forward` 历史前进  
`history.go()` 进行历史记录跳转 数值  
`window.location.search` 获取地址栏？后面部分  
`window.location.hash` 获取地址栏#后面部分  

## 事件

`元素.addEventListener` 标准浏览器 绑定事件  
`元素.removeEventListener('事件类型',事件处理函数）`移除绑定事件  
`attachEvent` IE低版本浏览器  

### 浏览器事件

`onload` 加载完毕后执行  
`onscroll` 滚动事件  
`onresize` 浏览器尺寸改变  
`docunmentElement(||body).scrollTop` 浏览器卷去的高度  

### 鼠标事件

`click` 单击  
`dblclick` 双击  
`mouseover` 鼠标移入 自带事件传播  
`mouseout` 鼠标移出  
`mouseenter` 鼠标移入 阻止事件的传播  
`mouseleave` 鼠标移出  
`mousemove` 鼠标移动  
`mousedown` 鼠标按下  
`mouseup` 鼠标抬起  
`contextmenu` 右键  

### 键盘事件

`keydown` 键盘按下  
`keyup` 键盘抬起  
`keypress` 键盘按下再抬起  

### 表单事件

`blur` 失去焦点  
`focus` 获取焦点  
`change` 文本框内容改变 脱离是改变  
`input` 文本框内容改变  
`submit` 表单提交 (专门给 form 标签使用的)  

### 触摸事件

`touchstart` 开始触摸  
`touchmove` 触摸移动  
`touchend` 触摸结束  

### 其他事件

`transitionend` 过度结束的时候触发  
`animationend`  动画结束的时候触发  
`selectstart` 选中事件  
`timeupdate` 音乐视频播放事件 1S4次  
`视频元素.currentTime` 返回当前播放时间  

## 打印

`console.dir()` 打印详细信息  
`console.clear()` 清除当前控制台的所有输出，将光标回置到第一行。  
`console.count()` 用于计数，输出它被调用了多少次。  
`console.error()` 有红叉显示，表示出错  
`console.table()` 将复杂类型的数据转为表格显示  
`console.trace()` 追踪函数的调用过程  

## 定时器

`SetTimeout` 延时定时器  
`setInterval` 间隔定时器  
`clearTimeout()` 关闭定时器  

## 获取dom元素

`document.documentElenent` 获取html  
`document.head` 获取head  
`document.body` 获取Body  
`getElementById` 通过Id获取元素 只有一个  
`getElementsByClassName` 通过class名获取元素 得到伪数组  
`getElementsByTagName` 通过标签名获取元素  
`getElementsByName` 通过元素name获取元素  
`querySelector` 通过书写方式获取元素  
`querySelectorAll` 获取满足条件的所有元素  
`元素.childNodes` 获取一个元素下的所有子节点  
`元素.children` 获取元素下所有的元素节点  

`元素.firstChild` 元素下第一个子节点  
`元素.firstElementChild` 获取第一个元素节点  

`元素.lastChild` 获取元素下最后一个子节点  
`元素.LastElementChild` 获取元素下最后一个元素节点  

`元素.previousSibling` 获取元素的上一个兄弟节点  
`元素.previousElementSibing` 获取元素的上一个兄弟元素节点  

`元素.nextSibling` 获取元素的下一个兄弟节点  
`元素.nexElementSibling` 获取元素的下一个兄弟的元素节点  

`元素.attributes` 获取元素的所有属性节点  
`.getAttribute(属性名`) 获取元素的属性值  

## 操作dom元素

`.setAttribute('设置的属性名'，设置的属性值)`  
`removeAttribute(删除的属性名)`  
`innerHTML` 完全覆盖式替换内部结构  
`innerText` 替换文本内容  
`.style` 获取行内样式或对值进行增删改查  
`window.getComputedStyle(获取的元素)||元素.currentStyle获取非行内样式`  
`class.name` 读取类名或者写入新的类名  
`document.createElement(创造标签)`  
`父元素.appendChild(添加的子节点)`  
`父元素.inserBefore(插入的元素，哪一个元素前)`  
`父元素.replaceChild(新节点，旧节点)替换`  
`父元素.removeChild(删除的节点)`  
`元素.cloneNode(true)`克隆节点  
`document.createDocumentFragment()` 文档碎片创建筐  

## 获取元素距离

`clientWidth` `clientHeight` 边框内的区域  
`offsetwidth` `offsetheight` 含border的边框区域  
`offsettop`   `offsetleft`  定位父级的左上角距离  
`offsetX`  `offsetY`   点击元素的左上角坐标点  
`clientX`  `clientY` 可视窗口的左上角坐标点  
`pageX`  `pageY`  文档流的左上角  

## 获取事件对象

`event=event||window.event` 获取事件对象  
`var target=e.target||e.srcElement`   `.tagName`标签名 获取触发事件的元素  
`IE  e.cancelBubble=ture ||e.stopPropagation ` 取消事件冒泡  
`IE  e.returnValue=false ||e.PreventDefault()  || return false` 取消默认行为  

## //正则表达式

`new RegExp('')` 创建正则  
`. `非/n换行的任意字符  
`\` 转译  
`\s` 空格  
`\S` 需要非空格  
`\d` 数字  
`\B` 非数字  
`\w` 数字字母下划线  
`\W` 非数字字母下划线  
`^` 开始  
`\$` 结尾  
`+` 1到正无穷  
`*` 0到正无穷  
`？` 0或者1次  
`{n}` n次  
`{n,}` 至少n次  
`{n,m}` 至少n次，最多m次  
`()` 集合可以单独捕获  
`[]` 任意选择的集合  
`[^]` 表示非任意选择集合  
`|` 占位一般和小括号一起使用  
`-` 一般和中括号一起用，a-b 必须ASCII挨着的  
`正则表达式.test(字符串)` 检测字符串  
`正则表达式.exec(捕获的字符串)`  
`g`标识全局 `i`不分大小写  

``` js
//动态添加正则 //param 变量
var ze = new RegExp("^[0-9]+"+param+"[a-z]+$","g");
``` 

`字符串.search(正则)` 找符合条件的  
`字符串.match(正则)` 有g的时候。捕获到每一个符合的内容  
`字符串.replace` (正则,替换内容)  
`JSON.stringify `(要转换的对象或数组）  
`JSON.parse` (JSON格式的字符串)  

## Es6 新增

`let` 变量  `const` 常量

### 面向对象  

`calss` 关键字  `class` 类名  
`constructor(){}` 构造函数体    
`prototype` 函数自带属性  

### 关于 prototype、__proto__ 原型链  

`__protot__`

1. **每一个函数天生自带一个属性，叫做 prototype, 是一个对象空间**  
2. **每一个对象天生自带一个属性，叫做 `__proto__`，指向所属构造函数的 prototype**  
3. **每一个函数天生自带的那个 prototype 上有一个 constructor 属性，指向该构造函数**  
4. **当一个对象没有准确的构造函数来实例化的时候，那么他的所属构造函数是 Object**  

### Es6继承

`extends` 继承  
`super(  参数)`  

### 数据劫持

`Object.defineProperty(你要给谁添加，添加的key,配置项{get(){return 'jack'}set(接收一个参数){捕获你想改变的行为}}` 数据劫持  

### classList

`classList` 每一个元素都有一个classList的属性  
`add`（您要添加的类名）用来添加类名的  
`remove`（你要移除的类名)用来移除类名的  
`replace` (你要替换的类名，替换成什么)用来替换类名的  
`toggle` （你要切换的类名）  


## 解构赋值

### 数组解构

`[a, b] = [b, a]` 交换变量  
`const [firstColor = "white"] = colors` 结构默认值 colors为空  则赋予`white`  

``` js
//可以对任意深度的嵌套数组进行解构：
var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
// 1
console.log(bar);
// 2
console.log(baz);
// 3
```

``` js
//可以在对应位留空来跳过被解构数组中的某些元素：
var [,,third] = ["foo", "bar", "baz"];
    console.log(third);
    // "baz"
```

``` js
//通过“不定参数”模式捕获数组中的所有尾随元素：
 var [head, ...tail] = [1, 2, 3, 4];
    console.log(tail);
    // [2, 3, 4]

```

### 对象解构

``` js
// 首先指定被绑定的属性，然后紧跟一个要解构的变量。
 var robotA = { name: "Bender" };
    var robotB = { name: "Flexo" };
    var { name: nameA } = robotA;
    var { name: nameB } = robotB;
    console.log(nameA);
    // "Bender"
    console.log(nameB);
    // "Flexo"
```

``` js
//当属性名与变量名一致时，可以通过一种实用的句法简写：
 var { foo, bar } = { foo: "lorem", bar: "ipsum" };
    console.log(foo);
    // "lorem"
    console.log(bar);
    // "ipsum"
```

``` js
//可以随意嵌套并进一步组合对象解构
 var complicatedObj = {
      arrayProp: [
        "Zapp",
        { second: "Brannigan" }
      ]
    };
    var { arrayProp: [first, { second }] } = complicatedObj;
    console.log(first);
    // "Zapp"
    console.log(second);
    // "Brannigan"
```


<ClientOnly>
  <leave/>
</ClientOnly>/>