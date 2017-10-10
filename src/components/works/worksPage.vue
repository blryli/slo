<template>
  <div>
    <div class="bg-F2F2F2 works-banner">
      <h1>纬图设计</h1>
      <div class="al-btn text-center">
        <button type="button" class="btn btn-FEE300">关注</button>
        <button type="button" class="btn btn-default">公司简介</button>
      </div>
    </div>
    <div class="container m-t-20 m-b-20">
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
    props: {
      recruitInfo: ''
    },
    data () {
      return {
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
        this.$http.get('../../../static/data/caseArr.json').then((response) => {
          this.caseArr = response.data.cases
          console.log(this.caseArr)
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
    margin-bottom: 26px;
    color: #000;
    text-align: center;
  }
}
.al-btn{
    margin-top: 20px;
    &+.al-btn{
        margin-top: 10px;
    }
}
.btn-FEE300{
    background-color: #FEE300;
    &:hover{
        background-color: #FFEB47;
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
</style>