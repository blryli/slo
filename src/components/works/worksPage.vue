<template>
  <div v-scroll="loadMore">
    <div class="bg-F2F2F2 works-banner" :class="{paddingbottom: show == true}">
      <h1>{{data.name}}</h1>
      <div class="al-btn text-center">
        <button type="button" class="btn btn-FEE300" @click="getAttention" :class="{ 'btn-default': data.has_attention == false }"><span v-show="data.has_attention == false">已</span>关注</button>
        <button type="button" class="btn btn-default" @click="show = true" v-show="show == false">公司简介</button>
      </div>
      <div class="hr" v-show="show == true"></div>
      <transition name="el-zoom-in-top">
        <div class="container introduction" v-show="show == true">
          <p v-html="data.desc"></p>
          <div class="particulars-top text-center" @click="show = false"><i class="fa" aria-hidden="true"></i><small>收起</small></div>
        </div>
      </transition>
    </div>
    <div class="container m-t-20" style="margin-bottom: 10px;">
      <case-list :case-arr="datas" :recruit-info="data.recruitment_info" :id="data.company_id" :recruit-show="true"></case-list>
    </div>
  </div>
</template>

<script>
import caseList from '@/components/core/caseList'
import Recruit from './recruit'
var count = 0;
  export default {
    props: {
    },
    data () {
      return {
        show: false,
        data: [],
        datas: [],
        loading: false,
        hasMore: true,
        page:1,
        pageSize:8,
        keyWords:'',
      }
    },
    components: {
      caseList, Recruit
    },
    created () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.getCompanyInfo();
      this.findCase();
    },
    methods: {
      getAttention() {
        var data = {
            companyId:this.$route.query.id,
        }
        this.$fns.post('/api/user/edit-attention',data,(json)=>{
            if(json.ask=='1'){
              this.data.has_attention =! this.data.has_attention;
              this.$message({message:json.message,type:'success',showClose:true});
            }else{
              this.$message({message:json.message,type:'error',showClose:true});
            }
        });
      },
      getCompanyInfo(){
        var data = {
            companyId: this.$route.query.id
        }
        this.$fns.post('/api/company/get-company-info',data,(json)=>{
          if(json.ask=='1'){
            this.data = json.data
          }else{
            console.error(json.message)
          }
        });
      },
        loadMore(){
          if(!this.loading && this.hasMore){
            this.loading = true
            // 请求下一页数据
            this.findCase();
            this.loading = false
          }
        },
        findCase(){
          var data = {
              page:this.page,
              pageSize:this.pageSize,
              keyWords:this.keyWords,
              companyId:this.$route.query.id
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
              console.error(json.message)
            }
          },{},false);
        }
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.bg-F2F2F2{
    background-color: #F2F2F2;
}
.works-banner{
  padding: 64px 0 130px;
  min-height: 350px;
  h1{
    font-size: 72px;
    font-weight: 500;
    line-height: 72px;
    margin-bottom: 30px;
    color: #191919;
    text-align: center;
  }
  .hr{
    background-color: #ccc;
  }
}
.paddingbottom{
  padding-bottom: 117px;
}
.al-btn{
    margin-top: 20px;
    &+.al-btn{
        margin-top: 10px;
    }
}
.btn{
    border-radius: 10px;
    padding: 4px 8px;
    width: 106px;
    font-size: 12px;
    &+.btn{
      margin-left: 15px;
    }
}
.introduction{
  position: relative;
  padding-bottom: 20px;
}
.particulars-top{
    position: absolute;
    bottom: -60px;
    left: 50%;
    margin-left: -20px;
    .fa{
        transform:rotate(-90deg);
        background: url(/static/img/ic_view_all.png) no-repeat top center;
        display: block;
        width: 40px;
        height: 40px;
        margin-bottom: 6px;
        text-align: center;
        cursor: pointer;
        &:hover{
            background: url(/static/img/ic_view_all1.png) no-repeat top center;
        }
    }
}
</style>