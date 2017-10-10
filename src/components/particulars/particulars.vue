<template>
	<div class="bg-F2F2F2">
        <div class="position-bg"></div>
        <div class="particulars">
          <div class="container m-t-20">
            <div class="particulars-close" @click="goBack">X</div>
            <div class="particulars-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>
            <div class="particulars-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>
            <div class="particulars-bg" v-show="alrtSharingShow == true"></div>
            <div cladss="row">
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
                    <li class="text-center"><a href="#" class="shouc"><i class="fa fa-star" aria-hidden="true"></i>收藏</a></li>
                    <li class="hr hr-m-20"></li>
                    <li class="text-center particulars-sharing">
                        <button type="button" class="btn btn-default" @click="alrtSharingShow = true"><i class="fa fa-weixin" aria-hidden="true"></i>&nbsp;分享</button>
                        <p class="alrt-sharing" v-show="alrtSharingShow == true">
                            <span class="particulars-close" style="right: 0" @click="alrtSharingShow = false">X</span>
                            <span class="sharing-text">扫描分享到微信朋友圈</span>
                            <img class="sharing-ewm" src="static/img/wx.png">
                        </p>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-4">
                  <ul class="bg-fff">
                    <attention :attention-arr="particularsArr"></attention>
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
                        <case-list :case-arr="lickArr" :title-size="14" :row-top="28" :show-text="false"></case-list>
                    </ul>
                </div>
    		</div>
	  </div>
      </div>
	</div>
</template>

<script>
import caseList from '@/components/core/caseList'
import attention from '@/components/core/attention'
  export default {
    data () {
      return {
        particularsArr: {},
        crrut: false,
        alrtSharingShow: false,
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
        caseList, attention
    },
    created() {
        this.particularsArr = this.$route.query
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    watch: {
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        }
    },
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.particulars-bg{
    background-color: #000;
    opacity: .2;
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
.particulars-sharing{
    position: relative;
    .alrt-sharing{
        z-index: 20;
        position: absolute;
        left: 50%;
        margin-left: -91px;
        width: 182px;
        background-color: #fff;
        top: -260px;
        .sharing-text{
            display: inline-block;
            padding: 12px 20px;
            border-bottom: 1px solid #eee;
        }
        .sharing-ewm{
            padding: 20px;
        }
    }
}
p{
    word-wrap:break-word;
}
.particulars{
    position: relative;
    z-index: 2000;
}
.particulars-close{
    position: absolute;
    right: 30px;
    top: -42px;
    font-size: 36px;
    color: #fff;
    font-weight: normal;
    cursor: pointer;
    opacity: .6;
    &:hover{
        opacity: .8;
    }
}
.particulars-prev, .particulars-next{
    position: absolute;
    top: 160px;
    .fa{
        background-color: #fff;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        text-align: center;
        cursor: pointer;
        &:hover{
            color: #333;
            background-color: #FEE300;
        }
    }
}
.particulars-prev{
    left: -35px;
}
.particulars-next{
    right: -35px;
}
.position-bg{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #000;
    opacity: .4;
    z-index: 1800;
}
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
    border-radius: 8px;
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
    position: relative;
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
    position: relative;
    border: 0;
    width: 80px;
    height: 80px;
    display: inline-block;
    border-radius: 40px;
    line-height: 200px;
    text-decoration: none;
    color: #333;
    background-color: #ccc;
    &.active{
        background-color: #FEE300;
    }
    &:hover{
        background-color: #FFEB46;
    }
    .fa-star{
        font-size: 30px;
        color: #fff;
        position: absolute;
        top: 32%;
        left: 50%;
        margin-left: -13px;
    }
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
    .through{
        span+span{
            top: 28px;
        }
    }
}
</style>
