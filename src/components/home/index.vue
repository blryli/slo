<template>
  <div>
    <div class="container m-t-20 p-b-10" v-scroll="loadMore">
      <case-list :case-arr="datas"></case-list>
    </div>
  </div>
</template>

<script>
import caseList from '@/components/core/caseList'
import {mapGetters} from 'Vuex'
  export default {
    data () {
      return {
      	page:1,
      	pageSize:8,
      	keyWords:'',
        datas: [],
        loading: false,
        hasMore: true,
        name:'',
        src:''
      }
    },
    components: {
      caseList
    },
    created(){
      this.name = this.$route.query.name;
      this.src = this.$route.query.src;
      this.findCase();
    },
    computed: {
      ...mapGetters([
        'count'
      ])
    },
    watch: {
      count() {
            var data = {
                page:1,
                pageSize:this.pageSize,
                keyWords:this.count
            }
            this.$fns.post('/api/case/find-cases',data,(json)=>{
              if(json.ask=='1'){
                this.datas = json.data
                if(json.data.length<this.pageSize){
                   this.hasMore = false;
                }
              }else{
                this.$message({message:json.message,type:'error',showClose:true});
              }
            },{},false);
      }
    },
    methods: {
      loadMore(){
        if(!this.loading && this.hasMore){
          this.loading = true
          // 请求下一页数据
          this.findCase()
          this.loading = false
        }
      },
      findCase(){
    	  var data = {
    			  page:this.page,
    			  pageSize:this.pageSize,
    			  keyWords:this.count
    	  }
    	  this.$fns.post('/api/case/find-cases',data,(json)=>{
    		  if(json.ask=='1'){
            if(json.data.length){
              this.page++;
              json.data.forEach((item,k)=>{
                this.datas.push(item);
              })
            }
            if(json.data.length<this.pageSize){
               this.hasMore = false;
            }
    		  }else{
            this.$message({message:json.message,type:'error',showClose:true});
    		  }
    	  },{},false);
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

@media (min-width: 768px) { 
 }

@media (min-width: 992px) {
}

@media (min-width: 1200) {

}
</style>