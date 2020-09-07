//分页
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
                            <i class="iconfont icon-dianzan zan"> {{item.likeNum}}</i>
                            <i class="iconfont icon-cha-copy-copy zan"> {{item.nolikeNum}}</i>
                            <el-button type="primary" round size='mini' @click="addMsg(item.username,item.id)">回复</el-button>
                        </div>
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
                                            <i class="iconfont icon-dianzan zan"></i>
                                            <i class="iconfont icon-cha-copy-copy zan"></i>
                                            <el-button type="primary" round size='mini'@click="addMsg(str.username,item.id)">回复</el-button>
                                        </div>
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
export default {
components:{},
  name: 'discuss',
  props: {
    dataList:{
        type:Object,
        default() {
            return {}
        } 
    }
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
                this.getblog()
            })
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