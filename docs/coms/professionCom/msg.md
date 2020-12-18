---
title: 业务组件-留言板
sidebar: true
editLinks: false
---

# 业务组件-留言板

<ClientOnly>
<title-pv/>
</ClientOnly>

<ClientOnly>
  <leave/>
</ClientOnly/>

::: details 封装源码
``` vue
//留言板
<template>
<div class="msg">
    <h1>评论留言：</h1>
   <emalipush></emalipush>
   <p v-if="dataList.allCount">共<strong style="font-size:23px">{{dataList.allCount}}</strong>条评论</p>
   <div class="footer-box" v-if="dataList.allCount">
       <discuss :dataList='dataList'></discuss>
   </div>
</div>
</template>

<script>
import { getblog,addMsg } from '../public/https/api.js';
import discuss from '../plugins/components/discuss.vue';
import emalipush from '../plugins/components/emalipush.vue';
export default {
components:{discuss,emalipush},
  data(){
      return {
          dataList:{},
      }
  },
  mounted(){
            this.getblog()
            console.log(this)
  },
  methods: {
      
        getblog(){
            getblog(this.$page.path).then((res)=>{
                if(res.data.err!==0) return console.log(res.data)
               this.dataList=res.data.list
            })
        },
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
.footer-box{
    width:100%;
    padding:24px;
    height:auto;
    box-shadow:0px 2px 6px 0px;
}
p{
	word-wrap: break-word;
	word-break: break-all;
}
</style>
```

``` vue
//discuss.vue
<template>
    <ul v-if="dataList">
           <li v-for="(item,index) in dataList.allparent" :key="index">
               <div class="cont-box">
                    <img src="/icon.jpg" alt="">
                    <div class="text-box">
                        <p class="title-text">
                            <span>{{item.username}}</span>
                            <span><i class="iconfont icon-shijian"></i>{{item.creationtime}}</span>
                        </p>
                        <p>{{item.content}}</p>
                        <div class="footer-box">
                            <!-- <i class="iconfont icon-dianzan zan"> {{item.likeNum}}</i>
                            <i class="iconfont icon-cha-copy-copy zan"> {{item.nolikeNum}}</i> -->
                            <el-button type="primary" round size='mini' @click="addMsgitem(index)">{{activeitem===index&&itemIs?'关闭':'回复'}}</el-button>
                        </div>
                        <emalipush :row="2" v-if="activeitem===index&&itemIs" :itemList='item' :id='item.id'></emalipush>
                        <ul class="ul-box" v-if="dataList.allblog">
                            <li  v-for="(str,ind) in dataList.allblog[item.id]" :key="ind">
                                <div class="cont-box">
                                    <img src="/icon.jpg" alt="">
                                    <div class="text-box">
                                        <p class="title-text">
                                                <span>{{str.username}}</span>
                                                <span><i class="iconfont icon-shijian"></i>{{str.creationtime}}</span>
                                        </p>
                                        <p><span class="aite">@{{str.parentName}}</span>{{str.content}}</p>
                                        <div class="footer-box">
                                            <!-- <i class="iconfont icon-dianzan zan"></i>
                                            <i class="iconfont icon-cha-copy-copy zan"></i> -->
                                            <el-button type="primary" round size='mini'@click="addMsgstr(index,ind)">{{activeitem===index&&activestr===ind&&strIs?'关闭':'回复'}}</el-button>
                                        </div>
                                        <emalipush :row="2" v-if="activeitem===index&&activestr===ind&&strIs" :itemList='str' :id='item.id'></emalipush>
                                    </div>
                                    <div>

                                    </div>
                                </div>  
                            </li>
                        </ul>
                    </div>
                    <div>

                    </div>
               </div>  
           </li>
    </ul>
</template>

<script>
import { getblog,addMsg } from '../../public/https/api.js';
import emalipush from '../components/emalipush.vue';
export default {
components:{emalipush},
  name: 'discuss',
  props: {
    dataList:{
        type:Object,
        default() {
            return {}
        } 
    }
  },
  data(){
      return {
          activeitem:null,
          activestr:null,
          itemIs:false,
          strIs:false
      }
  },
 
  methods: {
      addMsgitem(index){
          if(this.activeitem===index){
              this.itemIs=!this.itemIs
          }else{
              this.itemIs=true
          }
          this.strIs=false
          this.activeitem=index
      },
      addMsgstr(index,ind){
          if(this.activestr===ind&&this.activeitem===index){
              this.strIs=!this.strIs
          }else{
              this.strIs=true
          }
          this.itemIs=false
          this.activeitem=index
          this.activestr=ind
      }
  }
}
</script>

<style lang='scss' scoped>
.cont-box{
    display: flex;
    img{
        height: 64px;
    }
    .text-box{
        margin-left: 24px;
        width: 100%;
        .title-text{
            color: #ccc;
        }
        .footer-box{
            height: 32px;
        }
        .ul-box{
            margin-top: 24px;
            height: auto;
            width: 100%;
        }
    }
}
.aite{
    color: #1abc9c;
    padding-right: 14px;
}
li{
    list-style: none;
}
</style>
<style>
.title-text{
    margin-top:0;
}
.cont-box{
    margin-top:20px;
}
.zan{
    padding-right:12px;
    cursor: pointer;
    color: #ccc;
}
.zan:hover{
    color: #3eaf7c;
}
</style>
```

``` vue
//emailpush.vue
<template>
   <div class='msg_box'>
        <div class='title_box'>
            <span class="lable">昵称:</span><el-input v-model="username" style='width:120px' placeholder="昵称"></el-input>
            <span class="lable">邮箱:</span><el-input v-model="emali"  style='flex:1;' placeholder="输入邮箱可以收到邮件回复哦~"></el-input>
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
import { getblog,addMsg } from '../../public/https/api.js';
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
      }
  },
  mounted(){
     if(window.localStorage.getItem("Manongusername")){
       let {username,emali} = JSON.parse(window.localStorage.getItem("Manongusername"))
       this.username=username
       this.emali=emali
     }
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
            
            addMsg({
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
        height:48px;
        border-bottom:1px solid rgba(0,0,0,0.3);
        display:flex;
        align-items: center
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
```
:::