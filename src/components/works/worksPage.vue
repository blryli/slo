<template>
  <div>
    <div class="bg-F2F2F2 works-banner" :class="{paddingbottom: show == true}">
      <h1>纬图设计</h1>
      <div class="al-btn text-center">
        <button type="button" class="btn btn-FEE300" @click="active =! active" :class="{ 'btn-default': active == true }"><span v-show="active == true">已</span>关注</button>
        <button type="button" class="btn btn-default" @click="show = true" v-show="show == false">公司简介</button>
      </div>
      <div class="hr" v-show="show == true"></div>
      <transition name="el-zoom-in-top">
        <div class="container introduction" v-show="show == true">
          <p>浙江百慕生物科技有限公司隶属浙江丽珀集团，成立于2011年3月，注册资本1000万元，是一家从事海洋生物开发销售的公司，主要从事保健品（海参）产品的销售。</p>
          <p>旗下的优参堂海参品牌源自于卢炜翎先生创立的优参号参堂，经过一百多年的发展，现已成为最具规模化，现代化，专业化的海参加工生产企业之一。</p>
          <p>公司特与世纪联华超市股份有限公司、物美商业集团股份有限公司、天天好大药房等合作，在浙江省多个城市100多家门店进行销售。此外公司还搭档杭州电视台生活频道《生活大参考》、杭州电视台生活频道电商平台共同进行优参堂海参的销售，致力于将品牌以更多样化的形式进行推广，将产品以更方便快捷的渠道送达到消费者手中。</p>
          <div class="particulars-top text-center" @click="show = false"><i class="fa" aria-hidden="true"></i><small>收起</small></div>
        </div>
      </transition>
    </div>
    <div class="container m-t-20" style="margin-bottom: 10px;" v-scroll="loadMore">
      <case-list :case-arr="datas" :recruit-info="recruitInfo" :recruit-show="true"></case-list>
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
        active: false,
        show: false,
        data: [],
        datas: [],
        loading: false,
        hasMore: true,
      }
    },
    components: {
      caseList, Recruit
    },
    created () {
      this.getWorks();
      this.findCase();
    },
    methods: {
      getWorks(){
        var data = {
            company_id: this.$route.query.id
        }
        console.log(data)
        this.$fns.post('/api/case/get-works',data,(json)=>{
          if(json.ask=='1'){
            this.data = json.data
            console.log(this.data)
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
              keyWords:this.keyWords
          }
          this.$fns.post('/api/case/find-cases',data,(json)=>{
            if(json.ask=='1'){
              if(json.data.length){
                this.page++;
                json.data.forEach((item,k)=>{
                  this.datas.push(item);
                })
                console.log(json.data)
              }
              if(json.data.length<this.pageSize){
                 this.hasMore = false;
              }
            }else{
              console.error(json.message)
            }
          });
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