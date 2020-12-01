
---
title: 面试宝典-经典题库
sidebar: true
# isShowComments: true
---

# 高级进阶-经典题库

<ClientOnly>
<title-pv/>
</ClientOnly>

## 使(a==1&&a==2&&a==3)条件成立

``` js
var a ={
    i:1,
    toString(){
        return a.i++;
        //因为==会进行隐式转换，所以我们重写toString方法就好了
    }
}
if(a==1&&a==2&a==3){
    console.log(1);
}
```

## 闭包中变量的判断

``` js
var b=10;
(function b(b){
    window.b=20;
    console.log(b)
    //作为参数传递进来，所以改变window的变量也无用
    //输出10
})(b)

var b=10;
(function b(b)){
    b=20;
    console.log(b)
    //输出20
}()
```

## 异步笔试题

``` js
//请写出输出内容
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
	console.log('async2');
}

console.log('script start');

setTimeout(function() {
    console.log('setTimeout');
}, 0)

async1();

new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
console.log('script end');


/*
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
*/

//主要考察  Js运行机制  微任务 宏任务
```
## var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

```js
//已知如下数组：

//var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

//编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b})
或
arr.toString().split(",").sort((a,b)=>{ return a-b})
```

<ClientOnly>
  <leave/>
</ClientOnly/>