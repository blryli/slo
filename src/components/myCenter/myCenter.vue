<template>
  <div :class="{ 'bg-F2F2F2': active == 2, 'p-b-20': active == 2 }">
    <div class="bg-F2F2F2 works-banner my-center text-center">
      <img :src="userImg">
      <h1>{{userName}}</h1>
      <small>{{userText}}</small>
      <div class="al-btn">
        <button type="button" class="btn btn-FEE300-fff" @click="active = 1" :class="{ 'btn-FEE300': active == 1 }">我的收藏</button>
        <button type="button" class="btn btn-FEE300-fff" @click="active = 2" :class="{ 'btn-FEE300': active == 2 }">我的关注</button>
      </div>
    </div>
    <div class="container m-t-20 m-b-20" v-if="active == 1">
        <case-list :case-arr="datas" :recruit-info="recruitInfo"></case-list>
    </div>
    <div class="container m-t-20 m-b-20 bg-fff" v-for="(item, index) in myAttentionArr" v-if="active == 2">
      <ul class="col-sm-2 my-center-left">
        <attention :attention-arr="item.attentionArr"></attention>
        <p class="text-center m-t-20"><a href="javascript:;" class="more" @click="lookText(index)">查看全部</a></p>
      </ul>
      <div class="fix-bg" v-if="item.showText == true"></div>
      <div class="fix-box row" v-if="item.showText == true">
        <div class="container">
          <div class="particulars-close" @click="item.showText = false"></div>
          <attention :attention-arr="item.attentionArr" attention-show="false" class="fix-box-header"></attention>
          <p>{{item.text}}</p>
        </div>
      </div>
      <div class="col-sm-9 my-center-right">
        <case-list :case-arr="datas" :recruit-info="recruitInfo" class="m-r-20"></case-list>
      </div>
      <div class="col-sm-1 works-right">
        <router-link :to="{ path: '/worksPage', query: worksArr}">  
          <label class="text-center"><i class="fa fa-chevron-right" aria-hidden="true"></i><br><small>查看全部</small></label>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import caseList from '@/components/core/caseList'
import attention from '@/components/core/attention'
var count = 0;
  export default {
    props: {
    },
    data () {
      return {
        userImg: 'static/img/xiong.png',
        userName: '我叫鎏锋胸',
        userText: '很大很大的胸，一对哦',
        active: 1,
        myAttentionArr: [
          {
            attentionArr: {
              attentionLogo: 'static/img/logo.png',
              attentionName: '默默'
            },
            showText: false,
            text: '浙江百慕生物科技有限公司隶属浙江丽珀集团，成立于2011年3月，注册资本1000万元，是一家从事海洋生物开发销售的公司，主要从事保健品（海参）产品的销是一家从事海洋生物开发销售的公司，主要从事保健品（海参）产品的销是一家从事海洋生物开发销售的公司，主要从事保健品（海参）产品的销售'
          },
          {
            attentionArr: {
              attentionLogo: 'static/img/logo.png',
              attentionName: '默默'
            },
            showText: false,
            text: '注册资本1000万元,注册资本1000万元,注册资本1000万元,注册资本1000万元,注册资本1000万元浙江百慕生物科技有限公司隶属浙江丽珀集团，成立于2011年3月，注册资本1000万元，是一家从事海洋生物开发销售的公司，主要从事保健品（海参）产品的销售'
          },
        ],
        worksArr: [
          {
            attentionArr: {
              attentionLogo: 'static/img/logo.png',
              attentionName: '默默'
            },
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
              },
            ]
          },
          {
            attentionArr: {
              attentionLogo: 'static/img/logo.png',
              attentionName: '默默'
            },
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
              },
            ]
          },
        ],
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
          }
        ],
        busy: false,
        caseArr: [],
      }
    },
    components: {
      caseList, attention
    },
    created () {
      this.getCase();
    },
    methods: {
      lookText(index) {
        this.myAttentionArr.forEach((d, i) => {
          d.showText = false
        })
        this.myAttentionArr[index].showText = true
      },
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
.fix-bg{
  position: fixed;
  background-color: #000;
  opacity: .4;
  z-index: 1001;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.fix-box{
  position: fixed;
  z-index: 1100;
  top: 30%;
  .container{
    padding-bottom: 20px;
    background-color: #fff;
  }
  .particulars-close{
    right: 0;
  }
  .fix-box-header{
    padding: 15px 0 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
}
.m-r-20{
  margin-right: 20px;
}
.works-banner.my-center{
  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
  }
  h1{
    font-size: 18px;
    margin-bottom: 4px;
    margin-top: 30px;
  }
  small{
    font-size: 14px;
    color: #aaa;
    display: block;
    margin-bottom: 35px;
  }
}
.works-right{
  height: auto;
  padding-left: 102px;
  padding-top: 10px;
  label{
    .fa{
        background-color: #fff;
        border: 1px solid #666;
        width: 40px;
        height: 40px;
        padding-left: 2px;
        line-height: 40px;
        border-radius: 20px;
        cursor: pointer;
    }
    small{
      margin-top: 10px;
      display: inline-block;
      color: #888;
      font-weight: normal;
    }
    &:hover{
      .fa{
        color: #333;
        background-color: #FEE300;
        border-color: #FEE300;
      }
      small{
        color: #333;
      }
    }
  }
}
.my-center-left{
  padding-top: 60px;
}
.my-center-right{
  padding-top: 20px;
  .slo-case{
    margin-bottom: 0;
  }
}
.bg-F2F2F2{
    background-color: #F2F2F2;
}
.bg-fff{
  background-color: #fff;
}
.works-banner{
  padding: 70px 0 30px;
  h1{
    font-weight: bold;
    color: #191919;
  }
}
.al-btn{
}
.btn{
    font-size: 14px;
    height: 38px;
    width: 160px;
    border: 1px solid #FEE300;
    background-color: #fff;
    &.btn-FEE300{
      background-color: #FEE300;
      font-size: 16px;
      font-weight: bold;
    }
    &:first-child{
      border-radius: 8px 0 0 8px;
    }
    &:last-child{
      border-radius: 0 8px 8px 0;
    }
    &+.btn{
      margin-left: -4px;
    }
}
 @media (min-width: 768px) {
  .works-right{
    border-left: 1px solid #ddd;
    height: 326px;
    padding-left: 30px;
    padding-top: 140px;
  }
 }
</style>