//分页
<template>
   <div class='msg_box'>
        <div class='title_box'>
            <el-input v-model="username" style='width:120px' placeholder="昵称"></el-input>
            <el-input v-model="emali" type:   style='flex:1;margin-left:24px' placeholder="邮箱"></el-input>
        </div>
        <el-input
            type="textarea"
            :rows="8"
            placeholder="请输入内容"
            v-model="content">
        </el-input>
        <div class='fllter'>
            <el-button type="primary" round size='mini' @click="addMsg">回复</el-button>
        </div>
   </div> 
</template>

<script>
import { getblog,addMsg } from '../../public/https/api.js';
export default {
  data(){
      return {
          username:"",
          emali:"",
          content:'',
      }
  },
  mounted(){
  },
  methods: {
        addMsg(){
            addMsg({
                username:this.username,
                emali:this.emali,
                content:this.content,
                theme:this.$page.path,
                }).then((res)=>{
                console.log(res)
                this.$parent.getblog()
            })
        }
    }
}
</script>

<style lang='scss' scoped>
li{
    list-style: none;
}
.msg_box{
    width:100%;
    padding:24px;
    height:auto;
    margin:0 auto;
    box-shadow:0px 4px 12px 0px;
    .title_box{
        height:48px;
        border-bottom:1px solid rgba(0,0,0,0.3);
        display:flex;
    }
    .fllter{
        height:48px;
        display: flex;
        align-items: center;
        justify-content: flex-end; 
    }
}
</style>