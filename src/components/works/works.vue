<template>
  <div class="bg-F2F2F2 p-b-20">
    <div class="container m-t-20 row" v-for="item in worksArr">
    	<ul class="col-sm-2 works-left">
        <li class="al-logo text-center">
            <img :src="item.worksLogo">
            <h3>{{item.worksName}}</h3>
        </li>
        <li class="al-btn text-center"><button type="button" class="btn btn-FEE300">关注</button></li>
      </ul>
      <div class="col-sm-7 works-center">
        <case-list :case-arr="lickArr" :col-four="false" :title-size="16"></case-list>
      </div>
      <div class="col-sm-2">
        <recruit :recruit-info="item.recruitInfo"></recruit>
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
import Recruit from './recruit'
  export default {
  	data () {
      return {
        worksArr: [
          {
            worksLogo: 'static/img/logo.png',
            worksName: '默默',
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
            worksLogo: 'static/img/logo.png',
            worksName: '默默',
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
      caseList, Recruit
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.container{
	background-color: #fff;
}
.bg-F2F2F2{
    background-color: #F2F2F2;
    padding-top: 20px;
}
.al-logo{
    img{
        width: 60px;
        height: auto;
        padding-top: 15px;
    }
    h3{
        margin-top: 10px;
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
}
.works-left{
  padding-top: 60px;
}
.works-center{
  padding-top: 30px;
}
.works-right{
  border-left: 1px solid #ddd;
  height: 326px;
  text-align: center;
  padding-top: 140px;
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
</style>
