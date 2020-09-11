//emailpush.vue
<template>
   <div class='msg_box'>
        <div class='title_box'>
            <span class="lable">昵称:</span><el-input v-model="username" style='width:120px;' placeholder="昵称"></el-input>
            <span class="lable">邮箱:</span><el-input v-model="emali"  style='flex:1'  placeholder="输入邮箱可以收到邮件回复哦~"></el-input>
        </div>
        <el-input
            type="textarea"
            :rows="row"
            placeholder="请输入内容"
            v-model="content">
        </el-input>
        <div class='fllter'>
            <el-button type="primary" round size='mini' @click="addMsg">回复</el-button>
        </div>
   </div> 
</template>

<script>
export default {
    props:{
        row:{
            type:Number,
            default:8,
        },
        itemList:{
            type:Object,
            default(){
                return {}
            }
        },
        id:{
            type:Number,
            default:null,
        }
    },
  data(){
      return {
          username:"",
          emali:"",
          content:'',
          getblogs:null,
          addMsgs:null
      }
  },
  mounted(){
     if(window.localStorage.getItem("Manongusername")){
       let {username,emali} = JSON.parse(window.localStorage.getItem("Manongusername"))
       this.username=username
       this.emali=emali
     }
     import('../../public/https/api.js').then(module => {
                this.getblogs=module.getblog
                this.addMsgs=module.addMsg
    })
  },
  methods: {
        addMsg(){
            if(!this.username){
                this.$message({
                message: '昵称不能为空',
                type: 'warning'
                });
                return
            } else if(!this.content){
                this.$message({
                message: '内容不能为空',
                type: 'warning'
                });
                return
            }
            
            this.addMsgs({
                username:this.username,
                emali:this.emali,
                content:this.content,
                theme:this.$page.path,
                parent:this.id,
                parentName:this.itemList.username
                }).then((res)=>{
                    window.localStorage.setItem("Manongusername", JSON.stringify({
                      username:this.username,
                        emali:this.emali,  
                    }));
                if(!this.itemList.username){
                     this.$parent.getblog()
                }else{
                    this.$parent.$parent.getblog()
                    this.$parent.itemIs=false,
                    this.$parent.strIs=false
                }
                
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
    width:auto;
    padding:24px;
    height:auto;
    margin:24px auto;
    box-shadow:0px 4px 12px 0px;
    .title_box{
        min-height:48px;
        border-bottom:1px solid rgba(0,0,0,0.3);
        display:flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .lable{
        padding-right:12px;
        padding-left:5px;
    }
    .fllter{
        height:48px;
        display: flex;
        align-items: center;
        justify-content: flex-end; 
    }
}
</style>