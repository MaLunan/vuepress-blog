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
  },
  methods: {
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