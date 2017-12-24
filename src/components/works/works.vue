<template>
  <div class="bg-F2F2F2 p-b-20" v-scroll="loadMore">{{count}}
    <div class="container m-t-20 row" v-for="item in datas">
    	<ul class="col-sm-2 works-left">
        <attention :attention-arr="item.company_info" :id="item.company_info.company_id"></attention>
      </ul>
      <div class="col-sm-7 works-center">
        <case-list :case-arr="item.cases" :col-four="false" :title-size="16"></case-list>
      </div>
      <div class="col-xs-6 col-sm-2">
        <recruit :recruit-info="item.recruitment_info" :id="item.company_info.company_id"></recruit>
      </div>
      <div class="col-xs-6 col-sm-1 works-right">
        <router-link :to="{ path: '/worksPage', query: {id: item.company_info.company_id}}">  
          <label class="text-center"><i class="fa"></i><small>查看全部</small></label>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import caseList from '@/components/core/caseList'
import attention from '@/components/core/attention'
import Recruit from './recruit'
import {mapGetters} from 'Vuex'
  export default {
  	data () {
      return {
        page:1,
        pageSize:2,
        keyWords:'',
        datas: [],
        loading: false,
        hasMore: true,
      }
    },
    components: {
      caseList, Recruit, attention
    },
    created(){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.getWorks();
    },
    computed: mapGetters([
      'count'
    ]),
    methods: {
      loadMore(){
        if(!this.loading && this.hasMore){
          this.loading = true
          // 请求下一页数据
          this.getWorks()
          this.loading = false
        }
      },
      getWorks(){
        var data = {
            page:this.page,
            pageSize:this.pageSize,
            keyWords:this.keyWords
        }
        this.$fns.post('/api/case/get-works',data,(json)=>{
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
.container{
	background-color: #fff;
  height: auto;
}
.bg-F2F2F2{
    background-color: #F2F2F2;
    padding-top: 20px;
}
.works-left{
  padding-top: 85px;
}
.works-center{
  padding-top: 30px;
}
.works-right{
  border-left: 1px solid #ddd;
  height: auto;
  margin-top: 40px;
  padding-left: 100px;
  padding-top: 100px;
  padding-bottom: 50px;
  label{
    .fa{
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: block;
        background: url(/static/img/ic_view_all.png) no-repeat center center;
    }
    small{
      margin-top: 6px;
      display: inline-block;
      color: #696969;
      font-size: 12px;
      font-weight: normal;
    }
    &:hover{
      .fa{
        background: url(/static/img/ic_view_all1.png) no-repeat center center;
      }
    }
  }
}
@media (min-width: 768px) {
  .container{
    height: 316px;
  }
  .works-right{
    height: 316px;
    padding-left: 30px;
    padding-top: 130px;
    margin-top: 0;
    padding-bottom: 0;
  }
}
</style>
