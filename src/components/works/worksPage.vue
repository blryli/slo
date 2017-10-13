<template>
  <div>
    <div class="bg-F2F2F2 works-banner">
      <h1>纬图设计</h1>
      <div class="al-btn text-center">
        <button type="button" class="btn btn-FEE300" @click="active =! active" :class="{ 'btn-default': active == true }"><span v-show="active == true">已</span>关注</button>
        <button type="button" class="btn btn-default" @click="show = true">公司简介</button>
      </div>
      <div class="hr" v-show="show == true"></div>
      <transition name="el-zoom-in-top">
        <div class="container introduction" v-show="show == true">
          <p>浙江百慕生物科技有限公司隶属浙江丽珀集团，成立于2011年3月，注册资本1000万元，是一家从事海洋生物开发销售的公司，主要从事保健品（海参）产品的销售。</p>
          <p>旗下的优参堂海参品牌源自于卢炜翎先生创立的优参号参堂，经过一百多年的发展，现已成为最具规模化，现代化，专业化的海参加工生产企业之一。</p>
          <p>公司特与世纪联华超市股份有限公司、物美商业集团股份有限公司、天天好大药房等合作，在浙江省多个城市100多家门店进行销售。此外公司还搭档杭州电视台生活频道《生活大参考》、杭州电视台生活频道电商平台共同进行优参堂海参的销售，致力于将品牌以更多样化的形式进行推广，将产品以更方便快捷的渠道送达到消费者手中。</p>
          <div class="particulars-top text-center" @click="show = false"><i class="fa fa-chevron-up" aria-hidden="true"></i><br><small>收起</small></div>
        </div>
      </transition>
    </div>
    <div class="container m-t-20 m-b-20">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="300" infinite-scroll-immediate-check="true">
        <case-list :case-arr="datas" :recruit-info="recruitInfo" :recruit-show="true"></case-list>
      </div>
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
        datas: [
          {
            "src": "static/img/img.png",
            "title": "去去去去去去去去去去去去去",
            "text": "Norm Architects",
            "time": "2018-08-17",
            "particularsText": [
              { "text": "111111111111111111111111111111" },
              { "text": "111111111111111111111111" }
            ],
            "particularsImg": [
              { "src": "static/img/xiangqing.png" },
              { "src": "static/img/xiangqing.png" }
            ],
            "teamUnit": {
              "unit": "广东省深圳市",
              "address": "github",
              "team": "111111111111",
              "scale": "10000",
              "time": "2017-12-11",
              "user": "111111111111111"
            },
            "particularsLogo": "static/img/logo.png",
            "particularsName": "1111111111111111",
            "particularsAbout": [
              { "text": "11111111111111111111111111111111111111111111111" },
              { "text": "1111111111111111111111111111111111111" }
            ]
          },
          {
            "src": "static/img/img.png",
            "title": "爱我中华爱我中华爱我中华爱我中华爱我中华",
            "text": "Norm Architects",
            "time": "2018-08-17",
            "particularsText": [
              { "text": "2222222222222222222222222222222222" },
              { "text": "22222222222222222222222222222222222" }
            ],
            "particularsImg": [
              { "src": "static/img/xiangqing.png" },
              { "src": "static/img/xiangqing.png" }
            ],
            "teamUnit": {
              "unit": "广东省深圳市",
              "address": "github",
              "team": "2222222222222222222",
              "scale": "10000",
              "time": "2017-12-11",
              "user": "2222222222"
            },
            "particularsLogo": "static/img/logo.png",
            "particularsName": "222222222222222",
            "particularsAbout": [
              { "text": "2222222222222222222222222222222222222222222222" },
              { "text": "2222222222222222222222222222" }
            ]
          },
          {
            "src": "static/img/img.png",
            "title": "去去去去去去去去去去去去去去去去去去",
            "text": "Norm Architects",
            "time": "2018-08-17",
            "particularsText": [
              { "text": "111111111111111111111111111111" },
              { "text": "111111111111111111111111" }
            ],
            "particularsImg": [
              { "src": "static/img/xiangqing.png" },
              { "src": "static/img/xiangqing.png" }
            ],
            "teamUnit": {
              "unit": "广东省深圳市",
              "address": "github",
              "team": "111111111111",
              "scale": "10000",
              "time": "2017-12-11",
              "user": "111111111111111"
            },
            "particularsLogo": "static/img/logo.png",
            "particularsName": "1111111111111111",
            "particularsAbout": [
              { "text": "11111111111111111111111111111111111111111111111" },
              { "text": "1111111111111111111111111111111111111" }
            ]
          },
          {
            "src": "static/img/img.png",
            "title": "AAAAAAAAAA啊啊啊啊啊啊啊啊",
            "text": "Norm Architects",
            "time": "2018-08-17",
            "particularsText": [
              { "text": "2222222222222222222222222222222222" },
              { "text": "22222222222222222222222222222222222" }
            ],
            "particularsImg": [
              { "src": "static/img/xiangqing.png" },
              { "src": "static/img/xiangqing.png" }
            ],
            "teamUnit": {
              "unit": "广东省深圳市",
              "address": "github",
              "team": "2222222222222222222",
              "scale": "10000",
              "time": "2017-12-11",
              "user": "2222222222"
            },
            "particularsLogo": "static/img/logo.png",
            "particularsName": "222222222222222",
            "particularsAbout": [
              { "text": "2222222222222222222222222222222222222222222222" },
              { "text": "2222222222222222222222222222" }
            ]
          },
          {
            "src": "static/img/img.png",
            "title": "去去去去去去去去去去去去去去去去去去",
            "text": "Norm Architects",
            "time": "2018-08-17",
            "particularsText": [
              { "text": "111111111111111111111111111111" },
              { "text": "111111111111111111111111" }
            ],
            "particularsImg": [
              { "src": "static/img/xiangqing.png" },
              { "src": "static/img/xiangqing.png" }
            ],
            "teamUnit": {
              "unit": "广东省深圳市",
              "address": "github",
              "team": "111111111111",
              "scale": "10000",
              "time": "2017-12-11",
              "user": "111111111111111"
            },
            "particularsLogo": "static/img/logo.png",
            "particularsName": "1111111111111111",
            "particularsAbout": [
              { "text": "11111111111111111111111111111111111111111111111" },
              { "text": "1111111111111111111111111111111111111" }
            ]
          },
          {
            "src": "static/img/img.png",
            "title": "爱我中华爱中华爱我中华",
            "text": "Norm Architects",
            "time": "2018-08-17",
            "particularsText": [
              { "text": "2222222222222222222222222222222222" },
              { "text": "22222222222222222222222222222222222" }
            ],
            "particularsImg": [
              { "src": "static/img/xiangqing.png" },
              { "src": "static/img/xiangqing.png" }
            ],
            "teamUnit": {
              "unit": "广东省深圳市",
              "address": "github",
              "team": "2222222222222222222",
              "scale": "10000",
              "time": "2017-12-11",
              "user": "2222222222"
            },
            "particularsLogo": "static/img/logo.png",
            "particularsName": "222222222222222",
            "particularsAbout": [
              { "text": "2222222222222222222222222222222222222222222222" },
              { "text": "2222222222222222222222222222" }
            ]
          },
          {
            "src": "static/img/img.png",
            "title": "去去去去去去去去去去去去去去去去去去",
            "text": "Norm Architects",
            "time": "2018-08-17",
            "particularsText": [
              { "text": "111111111111111111111111111111" },
              { "text": "111111111111111111111111" }
            ],
            "particularsImg": [
              { "src": "static/img/xiangqing.png" },
              { "src": "static/img/xiangqing.png" }
            ],
            "teamUnit": {
              "unit": "广东省深圳市",
              "address": "github",
              "team": "111111111111",
              "scale": "10000",
              "time": "2017-12-11",
              "user": "111111111111111"
            },
            "particularsLogo": "static/img/logo.png",
            "particularsName": "1111111111111111",
            "particularsAbout": [
              { "text": "11111111111111111111111111111111111111111111111" },
              { "text": "1111111111111111111111111111111111111" }
            ]
          },
          {
            "src": "static/img/img.png",
            "title": "爱我中华爱我中华爱我中华爱我中华爱我中华",
            "text": "Norm Architects",
            "time": "2018-08-17",
            "particularsText": [
              { "text": "2222222222222222222222222222222222" },
              { "text": "22222222222222222222222222222222222" }
            ],
            "particularsImg": [
              { "src": "static/img/xiangqing.png" },
              { "src": "static/img/xiangqing.png" }
            ],
            "teamUnit": {
              "unit": "广东省深圳市",
              "address": "github",
              "team": "2222222222222222222",
              "scale": "10000",
              "time": "2017-12-11",
              "user": "2222222222"
            },
            "particularsLogo": "static/img/logo.png",
            "particularsName": "222222222222222",
            "particularsAbout": [
              { "text": "2222222222222222222222222222222222222222222222" },
              { "text": "2222222222222222222222222222" }
            ]
          }
        ],
        busy: false,
        caseArr: [],
        recruitInfo:[
          {
            company: '纬图设计',
            address: '杭州',
            position: '室内设计师',
            state: '总监助理'
          },
          {
            company: '纬图设计',
            address: '杭州',
            position: '室内设计师',
            state: '总监助理'
          },
          {
            company: '纬图设计',
            address: '杭州',
            position: '室内设计师',
            state: '总监助理'
          }
        ],
      }
    },
    components: {
      caseList, Recruit
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
        this.$http.get('../../../static/data/caseArr.json').then((response) => {
          this.caseArr = response.data.cases
        }, (response) => {
          console.log(response)
        })
      },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.bg-F2F2F2{
    background-color: #F2F2F2;
}
.works-banner{
  padding: 70px 0 130px;
  h1{
    font-size: 69px;
    font-weight: 500;
    margin-bottom: 30px;
    color: #191919;
    text-align: center;
  }
  .hr{
    background-color: #ccc;
  }
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
        background-color: #fff;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        margin-bottom: 6px;
        text-align: center;
        cursor: pointer;
        &:hover{
            color: #333;
            background-color: #FEE300;
        }
    }
}
</style>