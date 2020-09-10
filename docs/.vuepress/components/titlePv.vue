//分页
<template>
<div class="msga">
    <i class="iconfont icon-renyuan title-text" v-if="this.$page.frontmatter.username" >{{this.$page.frontmatter.username}}</i>
    <i class="iconfont icon-renyuan title-text" v-else>MaLunan</i>
    <i class="iconfont icon-liulan title-text"> {{dataList.pv}}</i>
</div>
</template>

<script>
import { getPv } from '../public/https/api.js';
export default {
  data(){
      return {
      dataList:[]
      }
  },
  mounted(){
            this.getPv()
            console.log(this)
  },
  methods: {
        getPv(){
            getPv(this.$page.path).then((res)=>{
                if(res.data.err!==0) return console.log(res.data)
               this.dataList=res.data.list
            })
        },
    }
}
</script>

<style lang='scss' scoped>
.title-text{
    color: #888;
}
</style>