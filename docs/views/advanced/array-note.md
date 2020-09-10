---
title: 高级进阶-数组
sidebar: true
# isShowComments: true
---

# 高级进阶-数组

<title-pv/>

## 生成类似[1-100]这样的的数组：
`测试大量数组数据时可以：`
``` js
let arr = new Array(100).fill(0).map((item, index) => index + 1)
```
`数组解构赋值应用`
``` js
// 交换变量
[a, b] = [b, a]
[o.a, o.b] = [o.b, o.a]
// 生成剩余数组
const [a, ...rest] = [...'asdf'] // a：'a'，rest: ["s", "d", "f"]
```
## 数组浅拷贝
``` js
const arr = [1, 2, 3]
const arrClone = [...arr]
// 对象也可以这样浅拷贝
const obj = { a: 1 }
const objClone = { ...obj }
```
`浅拷贝方法有很多如arr.slice(0, arr.length)/Arror.from(arr)等，但是用了...操作符之后就不会再想用其他的了~`
## 数组合并
``` js
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [7, 8, 9]
const arr = [...arr1, ...arr2, ...arr3]
```
`arr1.concat(arr2, arr3)同样可以实现合并，但是用了...操作符之后就不会再想用其他的了~`
## 数组去重
``` js
const arr = [1, 1, 2, 2, 3, 4, 5, 5]
const newArr = [...new Set(arr)]
```
`new Set(arr)接受一个数组参数并生成一个set结构的数据类型。set数据类型的元素不会重复且是Array Iterator，所以可以利用这个特性来去重。`
## 数组取交集
``` js
const a = [0, 1, 2, 3, 4, 5]
const b = [3, 4, 5, 6, 7, 8]
const duplicatedValues = [...new Set(a)].filter(item => b.includes(item))
duplicatedValues // [3, 4, 5]
```
## 数组取差集
``` js
const a = [0, 1, 2, 3, 4, 5]
const b = [3, 4, 5, 6, 7, 8]
const diffValues = [...new Set([...a, ...b])].filter(item => !b.includes(item) || !a.includes(item)) // [0, 1, 2, 6, 7, 8]
```
## 数组转对象
``` js
const arr = [1, 2, 3, 4]
const newObj = {...arr} // {0: 1, 1: 2, 2: 3, 3: 4}
const obj = {0: 0, 1: 1, 2: 2, length 3}
// 对象转数组不能用展开操作符，因为展开操作符必须用在可迭代对象上
let newArr = [...obj] // Uncaught TypeError: object is not iterable...
// 可以使用Array.form()将类数组对象转为数组
let newArr = Array.from(obj) // [0, 1, 2]
```
## 数组常用遍历

`数组常用遍历有 forEach、every、some、filter、map、reduce、reduceRight、find、findIndex 等方法，很多方法都可以达到同样的效果。数组方法不仅要会用，而且要用好。要用好就要知道什么时候用什么方法。`
`遍历的混合使用`
`filter、map方法返回值仍旧是一个数组，所以可以搭配其他数组遍历方法混合使用。注意遍历越多效率越低~`
``` js
const arr = [1, 2, 3, 4, 5]
const value = arr
    .map(item => item * 3)
    .filter(item => item % 2 === 0)
    .map(item => item + 1)
    .reduce((prev, curr) => prev + curr, 0)
```
## 检测数组所有元素是否都符合判断条件
``` js
const arr = [1, 2, 3, 4, 5]
const isAllNum = arr.every(item => typeof item === 'number')
```
## 检测数组是否有元素符合判断条件
``` js
const arr = [1, 2, 3, 4, 5]
const hasNum = arr.some(item => typeof item === 'number')
找到第一个符合条件的元素/下标
const arr = [1, 2, 3, 4, 5]
const findItem = arr.find(item => item === 3) // 返回子项
const findIndex = arr.findIndex(item => item === 3) // 返回子项的下标
```
## 数组使用误区

`数组的方法很多，很多方法都可以达到同样的效果，所以在使用时要根据需求使用合适的方法。`
`垃圾代码产生的很大原因是数组常用方法使用不当，这里有一下需要注意的点：`
`array.includes()` 和 `array.indexOf()`
`array.includes()` 返回布尔值，`array.indexOf()` 返回数组子项的索引。`indexOf` 一定要在需要索引值的情况下使用。
``` js
const arr = [1, 2, 3, 4, 5]
// 使用indexOf，需要用到索引值
const index = arr.indexOf(1) // 0
if (~index) { // 若index === -1，~index得到0，判断不成立；若index不为-1，则~index得到非0，判断成立。
    arr.spilce(index, 1)
}

// 使用includes，不需要用到索引值
// 此时若用indexOf会造成上下文上的阅读负担：到底其他地方有没有用到这个index?
const isExist = arr.includes(6) // true
if (!isExist) {
    arr.push(6)
}
```
`array.find() `、 `array.findIndex()` 和 `array.some()`
`array.find()`返回值是第一个符合条件的数组子项，`array.findIndex()` 返回第一个符合条件的数组子项的下标，`array.some() `返回有无复合条件的子项，如有返回`true`，若无返回`false`。注意这三个都是短路操作，即找到符合条件的之后就不在继续遍历。
在需要数组的子项的时候使用`array.find()` ；需要子项的索引值的时候使用 `array.findIndex()` ；而若只需要知道有无符合条件的子项，则用`array.some()`。
``` js
const arr = [{label: '男', value: 0}, {label: '女', value: 1}, {label: '不男不女', value: 2}]

// 使用some
const isExist = arr.some(item => item.value === 2)
if (isExist) {
    console.log('哈哈哈找到了')
}

// 使用find
const item = arr.find(item => item.value === 2)
if (item) {
    console.log(item.label)
}

// 使用findIndex
const index = arr.findIndex(item => item.value === 2)
if (~index) {
    const delItem = arr[index]
    arr.splice(index, 1)
    console.log(`你删除了${delItem.label}`)
}
建议在只需要布尔值的时候和数组子项是字符串或数字的时候使用 array.some()：
// 当子包含数字0的时候可能出错
const arr = [0, 1, 2, 3, 4]

// 正确
const isExist = arr.some(item => item === 0)
if (isExist) {
    console.log('存在要找的子项，很舒服~')
}

// 错误
const isExist = arr.find(item => item === 0)
if (isExist) { // isExist此时是0，隐式转换为布尔值后是false
    console.log('执行不到这里~')
}


// 当子项包含空字符串的时候也可能出错
const arr = ['', 'asdf', 'qwer', '...']

// 正确
const isExist = arr.some(item => item === '')
if (isExist) {
    console.log('存在要找的子项，很舒服~')
}

// 错误
const isExist = arr.find(item => item === '')
if (isExist) { // isExist此时是''，隐式转换为布尔值后是false
    console.log('执行不到这里~')
}
```
`array.find() `和 `array.filter()`
只需要知道 `array.filter()` 返回的是所有符合条件的子项组成的数组，会遍历所有数组；而 `array.find()` 只返回第一个符合条件的子项，是短路操作。不再举例~
合理使用 Set 数据结构
由于 es6 原生提供了 Set 数据结构，而 Set 可以保证子项不重复，且和数组转换十分方便，所以在一些可能会涉及重复添加的场景下可以直接使用 Set 代替 Array，避免了多个地方重复判断是否已经存在该子项。
``` js
const set = new Set()
set.add(1)
set.add(1)
set.add(1)
set.size // 1
const arr = [...set] // arr: [1]
```
## 强大的reduce
`array.reduce `遍历并将当前次回调函数的返回值作为下一次回调函数执行的第一个参数。
利用 `array.reduce` 替代一些需要多次遍历的场景，可以提高代码运行效率。
假如有如下每个元素都由字母's'加数字组成的数组arr，现在找出其中最大的数字：（arr不为空）
``` js
const arr = ['s0', 's4', 's1', 's2', 's8', 's3']

// 方法1  进行了多次遍历，低效
const newArr = arr.map(item => item.substring(1)).map(item => Number(item))
const maxS = Math.max(...newArr)

// 方法2  一次遍历
const maxS = arr.reduce((prev, cur) => {
  const curIndex = Number(cur.replace('s', ''))
  return curIndex > prev ? curIndex : prev
}, 0)
const arr = [1, 2, 3, 4, 5]

 // 方法1  遍历了两次，效率低
const value = arr.filter(item => item % 2 === 0).map(item => ({ value: item }))

// 方法1  一次遍历，效率高
const value = arr.reduce((prev, curr) => {
    return curr % 2 === 0 ? [...prev, curr] : prev
}, [])
```
也可用 reduce 做下面这样的处理来生成想要的 html 结构：
// 后端返回数据
``` js
const data = {
  'if _ then s9': [
    '作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生',
    '作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生',
    '作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生'
    ],
  'if C then s4': [
    '当有条件时时,结构构件满足要求,要求属于安全性、适用性和耐久性',
    '当有条件时时,住宅结构满足要求,要求属于安全性、适用性和耐久性'
  ]
}

const ifthens = Object.entries(data).reduce((prev, cur) => {
  const values = cur[1].reduce((prev, cur) => `${prev}<p>${cur}</p>`, '')
  return `
    ${prev}
    <li>
      <p>${cur[0]}</p>
      ${values}
    </li>
  `
}, '')

const html = `
  <ul class="nlp-notify-body">
    ${ifthens}
  </ul>
`
```
生成的 html 结构如下：
``` js
<ul class="nlp-notify-body">            
  <li>
    <p>if _ then s9</p>
    <p>作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生</p>
    <p>作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生</p>
    <p>作用属于各种,结构属于住宅,结构能承受作用,作用属于在正常建造和正常使用过程中可能发生</p>
  </li>
  <li>
    <p>if C then s4</p>
    <p>当有条件时时,结构构件满足要求,要求属于安全性、适用性和耐久性</p>
    <p>当有条件时时,住宅结构满足要求,要求属于安全性、适用性和耐久性</p>
  </li>
</ul>
```

<leave/>