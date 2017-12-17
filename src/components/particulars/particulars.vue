<template>
	<div class="bg-F2F2F2">
        <div class="position-bg"></div>
        <div class="particulars" v-if="particularsArr != ''">
          <div class="container m-t-20">
            <div class="particulars-close" @click="goBack"></div>
            <div class="particulars-prev" @click="prev"></div>
            <div class="particulars-next" @click="next"></div>
            <div class="particulars-bg" v-show="alrtSharingShow == true"></div>
            <div class="row">
                <div class="col-sm-9"> 
                  <ul class="bg-fff">
                    <li class="title">{{particularsArr.title}}</li>
                    <li class="text">时间：{{particularsArr.add_date}}</li>
                    <li class="hr"></li>
                    <li class="text-ms">{{particularsArr.desc}}</li>
                    <li class="img-ms"><p v-for="item in particularsArr.imgs"><img :src="item" class="img-responsive img"></p></li>
                    <li class="hr"></li>
                    <li class="unit"><strong>业务单位</strong>：{{particularsArr.unit}}</li>
                    <li class="unit"><strong>项目地址</strong>：{{particularsArr.address}}</li>
                    <li class="unit"><strong>设计团队</strong>：{{particularsArr.team}}</li>
                    <li class="unit"><strong>用地规模</strong>：{{particularsArr.scale}}</li>
                    <li class="unit"><strong>设计时间</strong>：{{particularsArr.design_date}}</li>
                    <li class="unit"><strong>拍摄者</strong>：{{particularsArr.photographer}}</li>
                    <li class="hr hr-m-20"></li>
                    <li class="text-center">
                        <a href="javascript:;" class="shouc" :class="{ active: particularsArr.has_collect == true }" @click="particularsArr.has_collect = true"></a>
                        <p><span v-show="particularsArr.has_collect == true">已</span>收藏</p>
                    </li>
                    <li class="hr hr-m-20" style="margin-bottom:15px;"></li>
                    <li class="text-center particulars-sharing">
                        <button type="button" class="btn btn-default" @click="alrtSharingShow = true"><i class="fa fa-weixin" aria-hidden="true"></i>&nbsp;分享</button>
                        <p class="alrt-sharing" v-show="alrtSharingShow == true">
                            <span class="particulars-close" style="right: 0" @click="alrtSharingShow = false"></span>
                            <span class="sharing-text">扫描分享到微信朋友圈</span>
                            <img class="sharing-ewm" src="/static/img/ewm.png">
                        </p>
                    </li>
                  </ul>
                </div>
                <div class="col-sm-3">
                  <ul class="bg-fff">
                    <attention :attention-arr="particularsArr.company_info"></attention>
                    <li class="al-btn text-center"><router-link :to="{ path: '/worksPage', query: particularsArr.company_info}" class="btn btn-default">更多作品</router-link></li>
                    <li class="hr"></li>
                    <li class="">
                        <p>{{particularsArr.company_info.desc}}</p>
                        <p><router-link :to="{ path: '/worksPage', query: particularsArr.company_info}" class="more">查看更多</router-link></p>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="container" style="padding-bottom: 8px;">
    		<div class="row m-b-20">
                <div class="col-sm-9">
                    <ul class="bg-fff lick"  style="padding-bottom: 0;">
                        <li class="title">你可能还喜欢以下项目</li>
                        <li class="hr hr-m-10"></li>
                        <case-list :case-arr="particularsArr.recommend" :title-size="14" :row-top="28" :show-text="false"></case-list>
                    </ul>
                </div>
    		</div>
	  </div>
      </div>
	</div>
</template>

<script>
import attention from '@/components/core/attention'
import caseList from '@/components/core/caseList'
  export default {
    data () {
      return {
        particularsArr: '',
        alrtSharingShow: false,
        id: ''
      }
  	},
    components: {
        attention, caseList
    },
    created() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.getCase();
        this.id = this.$route.query.id;
    },
    watch: {
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        getCase(){
            console.log(this.id)
          var data = {
                  case_id: this.id
          }
          this.$fns.post('/api/case/get-case',data,(json)=>{
              if(json.ask=='1'){
                this.particularsArr = json.data
                console.log(this.particularsArr.company_info.company_id)
              }else{
                  console.error(json.message)
              }
          });
        },
        prev() {
            this.id--;
            this.getCase();
        },
        next() {
            this.id++;
            this.getCase();
        },
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
        z-index: 200;
        top: -250px;
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
.particulars-prev, .particulars-next{
    position: absolute;
    cursor: pointer;
    width: 40px;
    height: 40px;
    top: -45px;
}
.particulars-prev{
    left: 13px;
    background: url(/static/img/ic_arrow_left.png) no-repeat center center;
    &:hover{
        background: url(/static/img/ic_arrow_left2.png) no-repeat center center;
    }
}
.particulars-next{
    right: 180px;
    background: url(/static/img/ic_arrow_right.png) no-repeat center center;
    &:hover{
        background: url(/static/img/ic_arrow_right2.png) no-repeat center center;
    }
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
        line-height: 14px;
        &+p{
            margin-top: 10px;
        }
    }
}
.img-ms{
    margin-top: 20px;
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
	padding: 20px 20px 15px;
}
.container{
    position: relative;
}
.title{
    font-size: 28px;
    font-weight: bold;
    line-height: 28px;
}
.text{
    padding-top: 20px;
    line-height: 12px;
}
.unit{
    color: #191919;
    &+.unit{
        margin-top: 30px;
    }
    strong{
        width: 120px;
        display: inline-block;
    }
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
    margin-bottom: 3px;
    display: inline-block;
    background: url(/static/img/ic_collect.png) no-repeat center center;
    &.active{
        background: url(/static/img/ic_collect2.png) no-repeat center center;
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
    margin-top: 10px;
    a{
        font-size: 12px;
    }
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
 @media (min-width: 768px) {
    .particulars-prev, .particulars-next{
        top: 200px;
    }
    .particulars-prev{
        left: -45px;
    }
    .particulars-next{
        right: -45px;
    }
 }
</style>
