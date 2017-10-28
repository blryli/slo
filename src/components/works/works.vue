<template>
  <div class="bg-F2F2F2 p-b-20">
    <div class="container m-t-20 row" v-for="item in worksArr">
    	<ul class="col-sm-2 works-left">
        <attention :attention-arr="item.attentionArr"></attention>
      </ul>
      <div class="col-sm-7 works-center">
        <case-list :case-arr="lickArr" :col-four="false" :title-size="16"></case-list>
      </div>
      <div class="col-xs-6 col-sm-2">
        <recruit :recruit-info="item.recruitInfo"></recruit>
      </div>
      <div class="col-xs-6 col-sm-1 works-right">
        <router-link :to="{ path: '/worksPage', query: worksArr}">  
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
  export default {
  	data () {
      return {
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
        lickArr: [
            {
              src: 'static/img/img.png',
              title: '哥本哈根Bloom自然',
              text: '洋洋'
            },
            {
              src: 'static/img/img.png',
              title: '哥本哈根Bloom自然科学节装置设计',
              text: '洋洋'
            },
            {
              src: 'static/img/img.png',
              title: '哥本哈根Bloom自然科学节装置设计',
              text: '洋洋'
            }
        ]
      }
    },
    components: {
      caseList, Recruit, attention
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
