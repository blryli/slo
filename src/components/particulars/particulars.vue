<template>
	<div class="bg-F2F2F2">
	  <div class="container m-t-20">
        <div class="row">
            <div class="col-sm-8"> 
              <ul class="bg-fff">
                <li class="title">{{particularsArr.title}}</li>
                <li class="text">时间：{{particularsArr.time}}</li>
                <li class="hr"></li>
                <li class="text-ms"><p v-for="item in particularsArr.particularsText">{{item.text}}</p></li>
                <li class="img-ms"><p v-for="item in particularsArr.particularsImg"><img :src="item.src" class="img-responsive img"></p></li>
                <li class="hr"></li>
                <li class="unit"><strong>业务单位</strong>：{{particularsArr.teamUnit.unit}}</li>
                <li class="unit"><strong>项目地址</strong>：{{particularsArr.teamUnit.address}}</li>
                <li class="unit"><strong>设计团队</strong>：{{particularsArr.teamUnit.team}}</li>
                <li class="unit"><strong>用地规模</strong>：{{particularsArr.teamUnit.scale}}</li>
                <li class="unit"><strong>设计时间</strong>：{{particularsArr.teamUnit.time}}</li>
                <li class="unit"><strong>拍摄者</strong>：{{particularsArr.teamUnit.user}}</li>
                <li class="hr hr-m-20"></li>
                <li class="text-center"><span class="shouc">收藏</span></li>
                <li class="hr hr-m-20"></li>
                <li class="text-center"><button type="button" class="btn btn-default"><i class="fa fa-weixin" aria-hidden="true"></i>&nbsp;分享</button></li>
              </ul>
            </div>
            <div class="col-sm-4">
              <ul class="bg-fff">
                <li class="al-logo text-center">
                    <img :src="particularsArr.particularsLogo">
                    <h3>{{particularsArr.particularsName}}</h3>
                </li>
                <li class="al-btn text-center"><button type="button" class="btn btn-FEE300">关注</button></li>
                <li class="al-btn text-center"><button type="button" class="btn btn-default">更多作品</button></li>
                <li class="hr"></li>
                <li class="">
                    <p v-for="(item, index) in particularsArr.particularsAbout" v-if="index==0">{{item.text}}</p>
                    <p><a class="more" href="#">查看更多</a></p>
                </li>
              </ul>
            </div>
        </div>
      </div>
      <div class="container m-t-20">
		<div class="row m-b-20">
            <div class="col-sm-8">
                <ul class="bg-fff lick"  style="padding-bottom: 0;">
                    <li class="title">你可能还喜欢以下项目</li>
                    <li class="hr hr-m-10"></li>
                    <case-list :case-arr="lickArr"></case-list>
                </ul>
            </div>
		</div>
	  </div>
	</div>
</template>

<script>
import caseList from '@/components/core/caseList'
  export default {
    data () {
      return {
        minHeight: {
            'min-height': '211px'
        },
        particularsArr: [],
        lickArr: [
            {
              src: 'static/img/img.png',
              title: '哥本哈根Bloom自然',
            },
            {
              src: 'static/img/img.png',
              title: '哥本哈根Bloom自然科学节装置设计',
            },
            {
              src: 'static/img/img.png',
              title: '哥本哈根Bloom自然科学节装置设计',
            },
            {
              src: 'static/img/img.png',
              title: '哥本哈根Bloom自然科学节装置设计',
            },
        ]
      }
  	},
    components: {
        caseList
    },
    created() {
        this.particularsArr = this.$route.query
    },
    watch: {
    },
    methods: {
    },
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.fa{
    color: #888;
}
.text-ms{
    margin-bottom: 16px;
    p{
        margin-bottom: 6px;
    }
}
.img-ms{
    p{
        margin-bottom: 20px;
    }
}
.btn{
    border-radius: 10px;
    padding: 4px 8px;
    width: 106px;
}
.bg-F2F2F2{
    background-color: #F2F2F2;
    padding-top: 20px;
}
.bg-fff{
    background-color: #fff;
	padding: 20px;
}
.container{
}
.title{
    font-size: 26px;
    font-weight: bold;
}
.text{
    margin: 0 0 30px;
    padding-top: 10px;
}
.unit{
    &+.unit{
        margin-top: 30px;
    }
    strong{
        width: 120px;
        display: inline-block;
    }
}
.hr{
    height: 1px;
    background-color: #eee;
    margin: 30px 0;
}
.hr-m-20{
    margin: 30px -20px;
}
.hr-m-10{
    margin: 16px -20px;
}
.shouc{
    width: 80px;
    height: 80px;
    display: inline-block;
    background-color: #FEE300;
    border-radius: 40px;
    line-height: 200px;
}
//右边栏
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
.more{
    text-decoration: underline;
    color: #6294BE;
    &:hover{
        color: #87AECE;
    }
}
//底部
.lick{
    .title{
        font-size: 16px;
    }
}
</style>
