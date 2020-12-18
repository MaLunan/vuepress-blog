---
title: 前端面试题-防抖与节流
sidebar: true
---

# 前端面试题-防抖与节流

<ClientOnly>
<title-pv/>
</ClientOnly>

## 防抖

- 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

思路:

每次触发事件时都取消之前的延时调用方法

``` js

function debounce(fn) {
    // 创建一个标记用来存放定时器的返回值
      let timeout = null; 
      return function () {
          // 每当用户输入的时候把前一个 setTimeout clear 掉
        clearTimeout(timeout); 
        // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
        timeout = setTimeout(() => { 
           console.log('防抖成功');
        }, 500);
      };
    }

```


## 节流

- 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

思路:

每次触发事件时都判断当前是否有等待执行的延时函数

``` js
function throttle(fn) {
     // 通过闭包保存一个标记
      let canRun = true;
      // 在函数开头判断标记是否为true，不为true则return
      return function () {
        if (!canRun) return; 
        // 立即设置为false
        canRun = false; 
        // 将外部传入的函数的执行放在setTimeout中
        setTimeout(() => { 
          fn.apply(this, arguments);
          // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
          canRun = true;
        }, 500);
      };
    }

```
<ClientOnly>
  <leave/>
</ClientOnly/>