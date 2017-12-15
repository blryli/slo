<template>
  <div>
    <div class="container m-t-20 p-b-10">
      <case-list :case-arr="datas"></case-list>
    </div>
  </div>
</template>

<script>
import caseList from '@/components/core/caseList'
var count = 0;
  export default {
    data () {
      return {
      	page:1,
      	pageSize:8,
      	keyWords:'',
        datas: [],
      }
    },
    components: {
      caseList
    },
    created(){
      this.findCase();
    },
    methods: {
      findCase(){
    	  var data = {
    			  page:this.page,
    			  pageSize:this.pageSize,
    			  keyWords:this.keyWords
    	  }
    	  this.$fns.post('/api/case/find-cases',data,(json)=>{
    		  if(json.ask=='1'){
            if(json.data.length){
              this.page++;
              json.data.forEach((item,k)=>{
                this.datas.push(item);
              })
            }
    		  }else{
    			  console.error(json.message)
    		  }
    	  });
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