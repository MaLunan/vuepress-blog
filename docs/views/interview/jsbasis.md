---
title: 前端面试题-JS基础
sidebar: true
---

# 前端面试题-JS基础

<ClientOnly>
<title-pv/>
</ClientOnly>

## javascript的typeof返回哪些数据类型

``` js
alert(typeof [1, 2]); //object
alert(typeof 'leipeng'); //string
var i = true;
alert(typeof i); //boolean
alert(typeof 1); //number
var a;
alert(typeof a); //undefined
function a(){;};
alert(typeof a) //function
```

## 例举 3 种强制类型转换和 2 种隐式类型转换?

强制（parseInt(),parseFloat(),Number()）
隐式（== ,!!） 
 
## split() 、join()  的区别

前者是切割成数组的形式，后者是将数组转换成字符串

## 数组方法 pop() push() unshift() shift()
Push()尾部添加 pop()尾部删除
Unshift()头部添加 shift()头部删除

## 事件绑定和普通事件有什么区别

普通添加事件的方法：

``` js
var btn = document.getElementById("hello");
btn.onclick = function(){
alert(1);
}
btn.onclick = function(){
alert(2);
}
```

执行上面的代码只会 alert 2
事件绑定方式添加事件：

``` js 
var btn = document.getElementById("hello");
btn.addEventListener("click",function(){
alert(1);
},false);
btn.addEventListener("click",function(){
alert(2);
},false);
```
执行上面的代码会先 alert 1 再 alert 2
普通添加事件的方法不支持添加多个事件，最下面的事件会覆盖上面的，而事件绑定
`（addEventListener`）方式添加事件可以添加多个。
`addEventListener `不兼容低版本  IE
普通事件无法取消
`addEventLisntener `还支持事件冒泡+事件捕获

## IE 和 DOM 事件流的区别

1.执行顺序不一样、
2.参数不一样
3.事件加不加  on
4.this  指向问题

## IE和标准下有哪些兼容性的写法

``` js 
Var ev = ev || window.event
document.documentElement.clientWidth || document.body.clientWidth
Var target = ev.srcElement||ev.target
```
## call和 apply的区别

`call `方法:  
语法：call(thisObj，Object1,Object2...)
定义：调用一个对象的一个方法，以另一个对象替换当前对象。
说明：  
`call `方法可以用来代替另一个对象调用一个方法。`call`方法可将一个函数的对象上下文从初始
的上下文改变为由 thisObj  指定的新对象。
如果没有提供 thisObj 参数，那么 Global 对象被用作 thisObj。
apply  方法：  
语法：apply(thisObj，[argArray])
定义：应用某一对象的一个方法，用另一个对象替换当前对象。
说明：  
如果 argArray 不是一个有效的数组或者不是 arguments  对象，那么将导致一个
`TypeError。`
如果没有提供 argArray 和 thisObj 任何一个参数，那么 Global 对象将被用作 thisObj， 并且
无法被传递任何参数。

## b 继承 a 的方法

``` js
function A( age, name ){
this.age = age;
this.name = name;
}
A.prototype.show = function(){
alert('父级方法');
}
function B(age,name,job){
A.apply( this, arguments );
this.job = job;
}
B.prototype = new A();
var b = new A(14,'侠客行');
var a = new B(15,'狼侠','侠客');
```
 
## 如何阻止事件冒泡和默认事件

canceBubble()只支持 IE,return false,stopPropagation()

## 添加 删除 替换 插入到某个接点的方法

`obj.appendChid()`
`obj.insertBefore()`
`obj.replaceChild()`
`obj.removeChild()`

## javascript  的本地对象，内置对象和宿主对象

本地对象为 array obj regexp 等可以 new  实例化
内置对象为 gload Math  等不可以实例化的
宿主为浏览器自带的 document,window  等

## window.onload 和 document ready  的区别
`window.onload ` 是 在  dom  文 档 树 加 载 完 和 所有 文 件 加 载 完 之 后 执 行 一 个 函数
`Document.ready `原生种没有这个方法，jquery 中有 $().ready(function),在 dom  文档树
加载完之后执行一个函数（注意，这里面的文档树加载完不代表全部文件加载完）。
`$(document).ready `要比` window.onload`先执行
`window.onload` 只能出来一次，`$(document).ready`可以出现多次
 
##  ”==”和“===”的不同

前者会自动转换类型
后者不会

## javascript的同源策略
一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、
议和端口号的组合

## JavaScript 是一门什么样的语言，它有哪些特点？

没有标准答案。  
`javaScript`  一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持
类型。它的解释器被称为 JavaScript  引擎，为浏览器的一部分，广泛用于客户端的脚本语
言，最早是在 HTML 网页上使用，用来给 HTML 网页增加动态功能。JavaScript  兼容于
ECMA 标准，因此也称为 ECMAScript。
基本特点  
1.是一种解释性脚本语言（代码不进行预编译）。
2.主要用来向 HTML（标准通用标记语言下的一个应用）页面添加交互行为。
3.可以直接嵌入 HTML 页面，但写成单独的 js  文件有利于结构和行为的分离。
4.跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如 Windows、
Linux、Mac、Android、iOS  等）。

## JavaScript  的数据类型都有什么？

基本数据类型：String,boolean,Number,Undefined, Null
引用数据类型：Object(Array,Date,RegExp,Function)
那么问题来了，如何判断某变量是否为数组数据类型？  
方法一.判断其是否具有“数组性质”，如 slice()方法。可自己给该变量定义 slice  方法，
故有时会失效  
方法二.obj instanceof Array 在某些 IE  版本中不正确  
方法三.方法一二皆有漏洞，在 ECMA Script5 中定义了新方法 Array.isArray(),  保证其兼
容性，最好的方法如下：  

```js
if(typeof Array.isArray==="undefined")
{
Array.isArray = function(arg){
return Object.prototype.toString.call(arg)==="[object Array]"
};
}
18. 已知 ID 的 Input 输入框，希望获取这个输入框的输入值，怎么做？(不
使用第三方框架)
document.getElementById(“ID”).value
```

## 希望获取到页面中所有的 checkbox 怎么做？(不使用第三方框架)

```js
var domList =  document.getElementsByTagName(‘input’)
var checkBoxList = [];
var len = domList.length;
//缓存到局部变量
while (len--) {       //使用 while 的效率会比 for  循环更高
if (domList[len].type == ‘checkbox’)  {
checkBoxList.push(domList[len]);
}
}
```

## 设置一个已知 ID 的 DIV 的 html内容为 xxxx，字体颜色设置为黑色(不使用第三方框架)

``` js
var dom =  document.getElementById(“ID”);
dom.innerHTML =  “xxxx”
dom.style.color =  “#000”
```

## 当一个 DOM  节点被点击时候，我们希望能够执行一个函数，应该怎么做？

直接在 DOM 里绑定事件：`<div  onclick=”test()”></div>`
在 JS 里通过 onclick 绑定：xxx.onclick = test
通过事件添加进行绑定：addEventListener(xxx, ‘click’,  test)
那么问题来了，Javascript  的事件流模型都有什么？  
“事件冒泡”：事件开始由最具体的元素接受，然后逐级向上传播
“事件捕捉”：事件由最不具体的节点先接收，然后逐级向下，一直到最具体的
“DOM 事件流”：三个阶段：事件捕捉，目标阶段，事件冒泡

## 看下列代码输出为何？解释原因。

``` js
var a;
alert(typeof a); // undefined
alert(b); //  报错
```

解释：Undefined  是一个只有一个值的数据类型，这个值就是“undefined”，在使用
var 声明变量但并未对其赋值进行初始化时，这个变量的值就是 undefined。而 b  由于未
声明将报错。注意未申明的变量和声明了未赋值的是不一样的。

## 看下列代码,输出什么？解释原因。

```js
var a = null;
alert(typeof a); //object
24.
解释：null 是一个只有一个值的数据类型，这个值就是 null。表示一个空指针对象，所以
用 typeof  检测会返回”object”。
```
## 看下列代码,输出什么？解释原因。

```js
var undefined;
undefined == null; // true
1 == true;   // true
2 == true;   // false
0 == false;  // true
0 == '';     // true
NaN == NaN;  // false
[] == false; // true
[] == ![];   // true
```

undefined 与 null 相等，但不恒等（===）
一个是 number 一个是 string 时，会尝试将 string 转换为  number
尝试将 boolean 转换为 number，0 或  1
尝试将 Object 转换成 number 或 string，取决于另外一个对比量的类型
所以，对于 0、空字符串的判断，建议使用 “===” 。“===”会先判断两边的值
类型，类型不匹配时为 false。  
那么问题来了，看下面的代码，输出什么，foo  的值为什么？

``` js
var foo = "11"+2-"1";
console.log(foo);
console.log(typeof foo);
```

执行完后 foo 的值为 111，foo 的类型为 String。

## 看代码给答案。

``` js 
var a = new Object();
a.value = 1;
b = a;
b.value = 2;
alert(a.value);
```
答案：2（考察引用数据类型细节）

## 已知数组var stringArray = [“This”, “is”, “Baidu”, “Campus”]，Alert出”This is Baidu  Campus”。

答案：alert(stringArray.join(“”))
 
## 已知有字符串 foo=”get-element-by-id”,写一个 function  将其转化成驼峰表示法”getElementById”。

```js
function combo(msg){
var arr=msg.split("-");
for(var i=1;i<arr.length;i++){
arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);
}
msg=arr.join("");
return msg;
}
```
## var numberArray = [3,6,2,4,1,5]; （考察基础 API）

### 实现对该数组的倒排，输出[5,1,4,2,6,3]

`numberArray.reverse()`

### 实现对该数组的降序排列，输出[6,5,4,3,2,1]

`numberArray.sort(function(a,b){return b-a})`

## 输出今天的日期,以 YYYY-MM-DD 的方式，比如今天是 2014年9月26日,则输出2014-09-26

``` js
var d = new Date();
// 获取年，getFullYear()返回 4  位的数字
var year = d.getFullYear();
// 获取月，月份比较特殊，0 是 1 月，11 是 12  月
var month = d.getMonth() + 1;
//  变成两位
month = month < 10 ? '0' + month : month;
//  获取日
var day = d.getDate();
day = day < 10 ? '0' + day : day;
alert(year + '-' + month + '-' + day);
```

## 将字符串”<tr><td>{$id}</td><td>{$name}</td></tr>”中的{$id}替换成 10，{$name}替换成 Tony (使用正则表达式）

答案：  
``` js
"<tr><td>{$id}</td><td>{$id}_{$name}</td></tr>".replace(/{\$id}/g, '10').replace(/{\$name}/g, 'Tony');
```

## 为了保证页面输出安全，我们经常需要对一些特殊的字符进行转义，请写一个函数 escapeHtml，将<, >, &, “进行转义

``` js
function escapeHtml(str) {
return str.replace(/[<>”&]/g, function(match) {
switch (match) {
case  “<”:
return  “&lt;”;
case  “>”:
return  “&gt;”;
case  “&”:
return  “&amp;”;
case “\””:
return  “&quot;”;
}
});
}
```

##  foo = foo||bar，这行代码是什么意思？为什么要这样写？

答案：if(!foo) foo = bar; //如果 foo 存在，值不变，否则把 bar 的值赋给 foo。
短路表达式：作为”&&”和”||”操作符的操作数表达式，这些表达式在进行求值时，只
要最终的结果已经可以确定是真或假，求值过程便告终止，这称之为短路求值。

## 看下列代码，将会输出什么?(变量声明提升)

``` js
var foo = 1;
(function(){
console.log(foo);
var foo = 2;
console.log(foo);
})()
```

答案：输出 undefined 和 2。上面代码相当于：

``` js
var foo = 1;
(function(){
var foo;
console.log(foo); //undefined
foo = 2;
console.log(foo); // 2;
})()
```

函数声明与变量声明会被 JavaScript  引擎隐式地提升到当前作用域的顶部，但是只提升名
称不会提升赋值部分。
 
## 用js实现随机选取 10–100 之间的 10个数字，存入一个数组，并排序。

``` js
function randomNub(aArray, len, min, max) {
if (len >= (max - min)) {
return '超过' + min + '-' + max + '之间的个数范围' + (max - min - 1) + '个
的总数';
}
if (aArray.length >= len) {
aArray.sort(function(a, b) {
return a - b
});
return aArray;
}
var nowNub = parseInt(Math.random() * (max - min - 1)) + (min + 1);
for (var j = 0; j < aArray.length; j++) {
if (nowNub == aArray[j]) {
randomNub(aArray, len, min, max);
return;
}
}
aArray.push(nowNub);
randomNub(aArray, len, min, max);
return aArray;
}
var arr=[];
randomNub(arr,10,10,100);
```

## 把两个数组合并，并删除第二个元素。

``` js
var array1 = ['a','b','c'];
var bArray = ['d','e','f'];
var cArray = array1.concat(bArray);
cArray.splice(1,1);
```

## 怎样添加、移除、移动、复制、创建和查找节点（原生JS，实在基础，没细写每一步）

### 创建新节点

`createDocumentFragment()`

`//创建一个 DOM  片段`
`createElement()//创建一个具体的元素`
`createTextNode()//创建一个文本节点`

### 添加、移除、替换、插入

`appendChild()`//添加
`removeChild()`//移除
`replaceChild()`//替换
`insertBefore()`//插入

### 查找

`getElementsByTagName()`//通过标签名称
`getElementsByName()` //通过元素的 Name属性的值
`getElementById()`//通过元素 Id，唯一性

## 有这样一个URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e ，请写一段 JS 程序提取 URL 中的各个 GET  参数(参数名和参数个数不确定)，将其按key-value形式返回 到一个json 结构中，如{a:’1′, b:’2′, c:”, d:’xxx’, e:undefined}。

答案：  

``` js
function serilizeUrl(url) {
var urlObject = {};
if (/\?/.test(url)) {
var urlString = url.substring(url.indexOf("?") + 1);
var urlArray = urlString.split("&");
for (var i = 0, len = urlArray.length; i < len; i++) {
var urlItem = urlArray[i];
var item = urlItem.split("=");
urlObject[item[0]] = item[1];
}
return urlObject;
}
return null;
}
```

## 正则表达式构造函数 var reg=new  RegExp(“xxx”)与正则表达字面量 var reg=//有什么不同？匹配邮箱的正则表达式？

答案：当使用 RegExp()构造函数的时候，不仅需要转义引号（即\”表示”），并且还需
要双反斜杠（即\\表示一个\）。使用正则表达字面量的效率更高。
邮箱的正则匹配：
`var regMail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;`

## 看下面代码，给出输出结果。

``` js
for(var i=1;i<=3;i++){
setTimeout(function(){
console.log(i);
},0);
};
```
答案：4 4 4。
原因：Javascript 事件处理器在线程空闲之前不会运行。追问，如何让上述代码输出 1 2 3？

``` js
for(var i=1;i<=3;i++){
setTimeout((function(a){  //改成立即执行函数
console.log(a);
})(i),0);
};
//输出 1 2 3
```
## 写一个 function，清除字符串前后的空格。(兼容所有浏览器）使用自带接口 trim()，考虑兼容性：

``` js
if (!String.prototype.trim) {
String.prototype.trim = function() {
return this.replace(/^\s+/, "").replace(/\s+$/,"");
}
}
// test the function
var str = " \t\n test string ".trim();
alert(str == "test string"); // alerts "true"
```

## Javascript 中 callee和 caller 的作用？

`caller` 是返回一个对函数的引用，该函数调用了当前函数；
`callee` 是返回正在被执行的 function 函数，也就是所指定的 function  对象的正文。
那么问题来了？如果一对兔子每月生一对兔子；一对新生兔，从第二个月起就开始生兔
子；假定每对兔子都是一雌一雄，试问一对兔子，第 n  个月能繁殖成多少对兔子？（使用
callee  完成）

``` js
var result=[];
function fn(n){  //典型的斐波那契数列
if(n==1){
return 1;
}else if(n==2){
return 1;
}else{
if(result[n]){
return result[n];
}else{
//argument.callee()表示  fn()
result[n]=arguments.callee(n-1)+arguments.callee(n-2);
return result[n];
}
}
}
```

## Javascript 中,  以下哪条语句一定会产生运行错误？

答案(  B C  )
var _变量=NaN;   B、var 0bj = [];   C、var obj = //;
D、var obj = {};

## 以下两个变量 a 和 b，a+b 的哪个结果是 NaN？

答案(   AC  )
A、var a=undefined; b=NaN
B、var a= ‘123’;  b=NaN
C、var a =undefined , b =NaN
var a=NaN , b='undefined'

## var a=10; b=20; c=4;   ++b+c+a++  以下哪个结果是正确的？

答案(  B  )  
A.34   B、35  C、36  D、37

## 下面的 JavaScript 语句中，（  D  ）实现检索当前页面中的表单元素中的所有文本框，并将它们全部清空

``` js

A. for(vari=0;i< form1.elements.length;i++) {
if(form1.elements.type==”text”)
form1.elements.value=”";}
B. for(vari=0;i<document.forms.length;i++) {
if(forms[0].elements.type==”text”)
forms[0].elements.value=”";
}
C.  if(document.form.elements.type==”text”)
form.elements.value=”";
D. for(vari=0;i<document.forms.length; i++){
for(var j=0;j<document.forms.elements.length; j++){
if(document.forms.elements[j].type==”text”)
document.forms.elements[j].value=”";
}
}
```

## 要将页面的状态栏中显示“已经选中该文本框”，下列 JavaScript  语句正确的是（ A ）

A.  window.status=”已经选中该文本框”
B.  document.status=”已经选中该文本框”
C.  window.screen=”已经选中该文本框”
D.  document.screen=”已经选中该文本框”

## 以下哪条语句会产生运行错误（AD）

A.var obj = ();B.var obj = [];C.var obj = {};D.var obj = //;

## 以下哪个单词不属于 javascript 保留字：（B）

A.withB.parentC.classD.void

## 请选择结果为真的表达式：（C）

A.null instanceof ObjectB.null === undefinedC.null == undefinedD.NaN == NaN

## Javascript  中  ,  如 果  已 知   HTML  页  面 中 的 某 标 签  对 象 的id=”username”

用____document.getElementById(‘username’)___ 方法获得该标签对象。

## 分析代码，得出正确的结果。

``` js
var a=10, b=20 , c=30;
++a;
a++;
e=++a+(++b)+(c++)+a++;
alert(e);
```
弹出提示对话框：77

## 写出函数 DateDemo  的返回结果，系统时间假定为今天

``` js
function DateDemo(){
var d, s="今天日期是：";
d = new Date();
s += d.getMonth() +1+ "/"; 
s += d.getDate() + "/";
s += d.getFullYear();
return s;}
```
结果：今天日期是：7/17/2010

## 写出程序运行的结果？

``` js
for(i=0, j=0; i<10, j<6; i++, j++){
k = i + j;}
```

结果：10

## 阅读以下代码，请分析出结果：

``` js
var arr = new Array(1 ,3 ,5);
arr[4]='z';
arr2 = arr.reverse();
arr3 = arr.concat(arr2);
alert(arr3);
```
弹出提示对话框：z,,5,3,1,z,,5,3,1

## 写出简单描述 html 标签（不带属性的开始标签和结束标签）的正则表达式，并将以下字符串中的 html标签去除掉var str = “<div>这里是 div<p>里面的段落</p></div>”;

``` js
var reg = /<\/?\w+\/?>/gi;
var str = “<div>这里是 div<p>里面的段落</p></div>”;
alert(str.replace(reg,”"));
``` 
  
## 简述列举文档对象模型 DOM 里 document  的常用的查找访问节点的方法并做简单说明
`Document.getElementById `根据元素 id 查找元素
`Document.getElementByName` 根据元素 name 查找元素
`Document.getElementTagName ` 根据指定的元素名查找元素

## 希望获取到页面中所有的 checkbox 怎么做？(不使用第三方框架)

``` js
var domList =  document.getElementsByTagName(‘input’)
var checkBoxList = [];
var len = domList.length;
//缓存到局部变量
while (len--) {       //使用 while 的效率会比 for  循环更高
if (domList[len].type == ‘checkbox’)  {
checkBoxList.push(domList[len]);
}
}
```

## 简述创建函数的几种方式

第一种（函数声明）：
``` js
function sum1(num1,num2){
return num1+num2;
}
```
第二种（函数表达式）：
```js
var sum2 = function(num1,num2){
return num1+num2;
}
```
第三种（函数对象方式）：
``` js
var sum3 = new Function("num1","num2","return num1+num2");
```

## Javascript  创建对象的几种方式？

``` js
//1、var obj = {};（使用 json  创建对象）
//如：
obj.name = '张三';
obj.action = function ()
{
alert('吃饭');
};
//2、var obj = new Object();（使用 Object  创建对象）
//如：
obj.name = '张三';
obj.action = function ()
{
alert('吃饭');
};
//3、通过函数创建对象。
//(1)、使用 this  关键字
//如：
var obj = function (){
this.name ='张三';
this.age = 19;
this.action = function ()
{
alert('吃饭');
};
}
//(2)、使用 prototype  关键字
//如：
function obj (){}
obj.prototype.name ='张三';
obj.prototype.action=function ()
{
alert('吃饭');
};
//4、通过 Window  创建对象。
//如：
window.name = ''张三';
window.age = 19;
window.action= function()
{
alert('吃饭');
};
//5、使用内置对象创建对象。
//如：
var str = new String("实例初始化  String");
var str1 = "直接赋值的  String";
var func = new Function("x","alert(x)");//示例初始化  func
var obj = new Object();//示例初始化一个  Object
```
##  iframe 的优缺点？

优点：  
1. 解决加载缓慢的第三方内容如图标和广告等的加载问题
2. Security sandbox
3. 并行加载脚本

缺点：  
1. iframe 会阻塞主页面的 Onload 事件
2. 即时内容为空，加载也需要时间
3. 没有语意

## 请你谈谈 Cookie  的弊端？

缺点:
1. Cookie 数量和长度的限制。每个 domain 最多只能有 20 条 cookie，每个 cookie  长度
不能超过 4KB，否则会被截掉。
2. 安全性问题。如果 cookie 被人拦截了，那人就可以取得所有的 session  信息。即使加密
也与事无补，因为拦截者并不需要知道 cookie 的意义，他只要原样转发 cookie  就可以达
到目的了。
3. 有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保
存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。

## js 延迟加载的方式有哪些？

1. defer 和  async
2. 动态创建 DOM 方式（创建 script，插入到 DOM 中，加载完毕后 callBack）
3. 按需异步载入  js

## documen.write 和 innerHTML  的区别？

`document.write ` 只能重绘整个页面
`innerHTML` 可以重绘页面的一部分

## 哪些操作会造成内存泄漏？

内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引
用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象
的内存即可回收。

1. setTimeout  的第一个参数使用字符串而非函数的话，会引发内存泄漏。
2. 闭包
3. 控制台日志
4. 循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）

## 事件委托是什么

让利用事件冒泡的原理，让自己的所触发的事件，让他的父元素代替执行！

## 闭包是什么，有什么特性，对页面有什么影响

答：我的理解是，闭包就是能够读取其他函数内部变量的函数。在本质上，闭包就是将
函数内部和函数外部连接起来的一座桥梁。
``` js
function outer(){
var num = 1;
function inner(){
var n = 2;
alert(n + num);
}
return inner;
}
outer()();
```

<ClientOnly>
  <leave/>
</ClientOnly/>