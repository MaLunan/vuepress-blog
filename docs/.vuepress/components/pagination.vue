//分页
<template>
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
import pagination from '../plugins/components/pagination.vue';
import { getblog } from '../public/https/api.js';
export default {
components:{pagination},
  data(){
      return {
          page:{
                total:20,
                current:1,
                size:10,
            },
      }
  },
  mounted(){
            this.get()
  },
  methods: {
      
        get(){
            getblog().then((res)=>{
                console.log(res)
            })
        },
        //分页
        pagination(val){
        this.page.current=val.page
        this.page.size=val.limit
        this.getinterface({size:this.page.size,current:this.page.current})
        },

        updatelimit(val){
        // this.page.size=val
        // this.getinterface({size:this.page.size,current:this.page.current})
        },
        updatepage(val){
        // this.page.current=val
        // this.getinterface({size:this.page.size,current:this.page.current})
        },
        getinterface(){

    }
    }
}
</script>

<style scoped>
</style>