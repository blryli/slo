<template>
  <div>
    <div class="container m-t-20 m-b-20">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="300">
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
        }, (response) => {
          console.log(response)
        })
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