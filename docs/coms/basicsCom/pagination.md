---
title: 基础组件-分页器
sidebar: true
editLinks: false
---

<pagination/>


::: details 封装源码
``` vue
//分页
<template>
  <div :class="{'hidden':hidden}" class="pagination-container">
    <el-pagination
      :background="background"
      :current-page.sync="currentPage"
      :page-size.sync="pageSize"
      :layout="layout"
      :page-sizes="pageSizes"
      :total="total"
      v-bind="$attrs"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number, 
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page
      },
      set(val) {
        this.$emit('update:page', val)
      }
    },
    pageSize: {
      get() {
        return this.limit
      },
      set(val) {
        this.$emit('update:limit', val)
      }
    } 
  },
  methods: {
    // 每条页数
    handleSizeChange(val) {
      this.$emit('pagination', { page: this.currentPage, limit: val })

    },
    // 当前页
    handleCurrentChange(val) {
      this.$emit('pagination', { page: val, limit: this.pageSize })
    }
  }
}
</script>

<style scoped>
.pagination-container {
  padding: 12px 0;
  /* 27 */
}
.pagination-container.hidden {
  display: none;
}
.el-pagination {
    /* margin-top:20px; */
    text-align: center;   
}
</style>
```
:::

::: details 查看代码
``` vue
<template>
    <com-box>
  <pagination 
        :total='page.total' 
        :page='page.current' 
        :limit='page.size'
        @update:limit='updatelimit' 
        @update:page='updatepage'
        @pagination='pagination'>
    </pagination>
</template>

<script>
export default {
  data(){
      return {
          page:{
                total:20,
                current:1,
                size:10,
            },
      }
  },
  methods: {
        //赋值
        pagination(val){
        this.page.current=val.page
        this.page.size=val.limit
        },
        //更新条数时调用
        updatelimit(val){
        },
        //更新页数时调用
        updatepage(val){
        },
    }
}
</script>
```
:::

| 参数          | 说明           |  类型  |
| ------------- |:-------------:|  -----:|
| total         | 总条目数      |   Number |
| page           | 当前页数      |    Number |
| limit          | 每页显示条目个数 |    Number |
| pageSizes      | 每页显示个数选择器的选项设置  |    Number |
| layout          | 组件布局，子组件名用逗号分隔  |    total, sizes, prev, pager, next, jumper|
| background      | 背景色      |    true |
| hidden          | 显示隐藏      |    true |



<leave/>