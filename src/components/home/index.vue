<template>
  <div>
    <div class="container m-t-20 p-b-10">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="300" infinite-scroll-immediate-check="true">
        <case-list :case-arr="datas"></case-list>
      </div>
    </div>
  </div>
</template>

<script>
import caseList from '@/components/core/caseList'
var count = 0;
  export default {
    data () {
      return {
        datas: [],
        busy: false,
        caseArr: []
      }
    },
    components: {
      caseList
    },
    created () {
      this.getCase();
    },
    methods: {
      loadMore() {
        this.busy = true;
        setTimeout(() => {
          for (var i = 0, j = 8; i < j; i++) {
            if(count < this.caseArr.length){
              this.datas.push( this.caseArr[count] );
              count++;
            }
          }
          this.busy = false;
        }, 1000);
      },
      getCase() {
    	  this.$fns.post('/api/case/get-cases',{},(json)=>{
    		  if(json.ask=='1'){
    			  this.datas = json.data
    		  }else{
    			  console.error(json.message)
    		  }
    	  });
      },
    },
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