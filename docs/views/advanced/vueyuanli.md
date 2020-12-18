---
title: 前端进阶-vue实现原理
sidebar: true
# isShowComments: true
---

# 前端进阶-vue实现原理

<ClientOnly>
<title-pv/>
</ClientOnly>

## 核心总体结构

创建一个对象原型
接受参数是一个对象
对象内包含：节点，变量，方法

```js

//options对象
{
            el: '#app',
            data: {
            },
            methods: {
            }
            ... ...
}
```

```js

class Vue( ){
    constructor(options){
      //参数变量赋值
        this.$options = options
        this.$el = options.el
        this.$data = options.data
         if (this.$el) {
            // 1.实现一个数据观察者
            new Observer(this.$data)
            // 2.实现一个指令解释器
            new Compile(this.$el, this)
            //数据劫持
            this.proxyData(this.$data)
        }
  }
}

```

**1.数据劫持：页面实时更新**

**2.指令解析器：解析“v-”开头的指令**

**3.观察者模式：当一个变量值被修改时，可以自动通知所有关注这个变量的其他对象，自动重新更新获取这个变量的新值。**

## 数据劫持

 劫持data属性的各个值 ，实现双向数据绑定

语法 **Object.defineProperty（）**

**参数：**

**obj**:目标对象

**prop:**需要定义的属性或方法的名称

**descriptor:**目标属性所拥有的特性

**可供定义的特性列表：**

**value:**属性的值

**writable:**如果为false，属性的值就不能被重写。

**get:** 一旦目标属性被访问就会调回此方法，并将此方法的运算结果返回用户。

**set:**一旦目标属性被赋值，就会调回此方法。

**configurable:**如果为false，则任何尝试删除目标属性或修改属性性以下特性（writable, configurable, enumerable）的行为将被无效化。

**enumerable:** 是否能在for...in循环中遍历出来或在Object.keys中列举出来。

```js

 proxyData(data) {
        for (const key in data) {
            Object.defineProperty(this, key, {
                get() {
                    return data[key]
                },
                set: newVal => {
                    data[key] = newVal
                }
            })
        }
    }
```

## 实现指令解释器

创建一个对象原型

获取所有节点 上属性信息
1.判断是否有v-的属性
2.判断是否有双括号{{}}
3.判断节点里是否还有子节点

```js

constructor(el, vm) {
        // 判断是否是元素节点 如果是就直接赋值，如果不是就通过这个值获取元素节点
        this.el = this.isElementNode(el) ? el : document.querySelector(el)
        this.vm = vm

        // 1.获取文档碎片对象，放入内存中可以减少页面回流和重绘
        const fragment = this.node2Fragment(this.el)
        // console.log(fragment);

        // 2.编译模板
        // 获取每一个子节点
        let childNodes = fragment.childNodes
        // 将数据childNodes转化为数组
        childNodes = this.convertToArray(childNodes)
       //判断节点信息
        childNodes.forEach(child => {
            if (this.isElementNode(child)) {
                // console.log('元素节点', child);
                this.compileElement(child)
            } else {
                // console.log('文档节点', child);
                this.compileText(child)
            }
            if (child.childNodes && child.childNodes.length) {
                this.compile(child)
            }
        });
        // 3.追加子元素到根元素
        this.el.appendChild(fragment)
    }
       convertToArray(nodes) {
        // 将childNodes返回的数据转化为数组的方法
        var array = null;
        // Array.prototype.slice.call能将有length属性的对象转换为数组 ie不可以
        try {
            array = Array.prototype.slice.call(nodes, 0);
        } catch (ex) {
            array = new Array();
            for (var i = 0, len = nodes.length; i < len; i++) {
                array.push(nodes[i]);
            }
        }
        return array;
    }

```

**如果是v-指令**

去掉v- 把参数带入到指定处理方法中

```js

compileElement(node) {
        //attributes 属性返回指定节点的属性集合
        const attributes = node.attributes
        // 将attributes返回的数据转化为数组的方法
        this.convertToArray(attributes).forEach(attr => {
            const { name, value } = attr
            // console.log(value);
            //isDirective判断是否是v-开头
            if (this.isDirective(name)) {
                // 是一个指令
                const [, dirctive] = name.split('-')
                const [dirName, eventName] = dirctive.split(':')
                //  console.log(dirName, eventName);
                // 更新数据 数据驱动视图
                compileUtil[dirName](node, value, this.vm, eventName)

                // 删除标签上的指令
                node.removeAttribute('v-' + dirctive)
            }
        })
    }

```

参数处理 >>>

```js
const compileUtil = {
    text(node, expr, vm) {
        let value
        if (expr.indexOf('{{') !== -1) {
            value = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
                // 绑定观察者，将来数据发生变化，触发这里的回调函数去更是对应的视图
                new Watcher(vm, args[1], (newVal) => {
                    this.updater.textUpdater(node, this.getContentVal(expr, vm))
                })
                return this.getValue(args[1], vm)
            })
        } else {
            value = this.getValue(expr, vm)
            new Watcher(vm, expr, (newVal) => {
                this.updater.textUpdater(node, newVal)
            })
        }

        this.updater.textUpdater(node, value)
    },
    html(node, expr, vm) {
        let value = this.getValue(expr, vm)
        new Watcher(vm, expr, (newVal) => {
            this.updater.htmlUpdater(node, newVal)
        })
        this.updater.htmlUpdater(node, value)
    },
    model(node, expr, vm) {
        const value = this.getValue(expr, vm)
        // 绑定更新函数 数据=>视图
        new Watcher(vm, expr, (newVal) => {
            this.updater.modelUpdater(node, newVal)
        })
        // 视图=>数据=>视图
        node.addEventListener('input', e => {
            // 设置值
            this.setValue(expr, vm, e.target.value)
        })
        this.updater.modelUpdater(node, value)
    },
    on(node, expr, vm, eventName) {
        let fn = vm.$options.methods && vm.$options.methods[expr]
        node.addEventListener(eventName, fn.bind(vm), false)
    },
    getValue(expr, vm) {
        expr = expr.replace(/\s+/g, "")
        return expr.split('.').reduce((data, currentVal) => {
            // console.log(currentVal);
            return data[currentVal]
        }, vm.$data)
    },
    setValue(expr, vm, newVal) {
        expr = expr.replace(/\s+/g, "")
        return expr.split('.').reduce((data, currentVal) => {
            data[currentVal] = newVal
        }, vm.$data)
    },
    updater: {
        textUpdater(node, value) {
            node.textContent = value
        },
        htmlUpdater(node, value) {
            node.innerHTML = value
        },
        modelUpdater(node, value) {
            node.value = value
        }
    },
    getContentVal(expr, vm) {
        return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
            return this.getValue(args[1], vm)
        })
    }
}

```

## 观察者模式observer模块

分三个部分

- observer：数据观察者。
- watcher：数据订阅者
- dep：关联2者的订阅器。

当数据发生变化时，observer数据观察者会通过dep通知wwatcher数据订阅者更新视图

**Observer观察者**

```js

class Observer {
    constructor(data) {
        this.observer(data)
    }

    observer(data) {
        if (data && typeof data === 'object') {
            Object.keys(data).forEach(key => {
                this.defineReactive(data, key, data[key])
            })
        }
    }

    defineReactive(obj, key, value) {
        // 递归遍历，直到最后一个值不是对象
        this.observer(value)
        const dep = new Dep()
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: false,
            get() {
                // 订阅数据变化时，往Dep中添加观察者
                Dep.target && dep.addSub(Dep.target)
                return value
            },
            set: (newVal) => {
                this.observer(newVal)
                // 重新更新值之前先对新值劫持监听
                value = newVal
                // 告诉Dep通知变化
                dep.notify()
            }
        })
    }
}

```

**Dep通知**

```js

class Dep {
    constructor() {
        // 定义观察者数组
        this.subs = []
    }

    // 收集观察者
    addSub(watcher) {
        this.subs.push(watcher)
    }

    // 通知观察者去更新视图
    notify() {
        // console.log('通知了观察者');
        this.subs.forEach(w => w.update())
    }
}
```

**Watcher订阅者**

```js
class Watcher {
    constructor(vm, expr, cb) {
        this.vm = vm
        this.expr = expr
        this.cb = cb
        // 先把旧值保存起来
        this.oldVal = this.getOldVal()
    }

    getOldVal() {
        Dep.target = this
        const oldVal = compileUtil.getValue(this.expr, this.vm)
        Dep.target = null
        return oldVal
    }

    update() {
        const newVal = compileUtil.getValue(this.expr, this.vm)
        this.cb(newVal)
    }
}

```

部分参考自[这个博客](https://www.cnblogs.com/it-xiong/p/12674893.html)


<ClientOnly>
  <leave/>
</ClientOnly/>