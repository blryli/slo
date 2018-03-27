<template>
	<div class="bg-F2F2F2">
        <div class="position-bg"></div>
        <div class="particulars" v-if="particularsArr != ''">
          <div class="container m-t-20">
            <!-- <div class="particulars-close close-fixed" @click="goBack"></div> -->
            <!-- <div class="particulars-prev" v-show="prevShow" @click="prev"></div> -->
            <!-- <div class="particulars-next" v-show="nextShow" @click="next"></div> -->
            <div class="particulars-bg" v-show="alrtSharingShow == true"></div>
            <div class="row">
                <div class="col-sm-9"> 
                  <ul class="bg-fff">
                    <li class="title" v-if="particularsArr.title">{{particularsArr.title}}</li>
                    <li class="text" v-if="particularsArr.add_date">时间：{{particularsArr.add_date}}</li>
                    <li class="hr"></li>
                    <li class="text-ms" v-if="particularsArr.desc" v-html="particularsArr.desc"></li>
                    <li class="img-ms" v-if="particularsArr.imgs">
                        <p v-for="(item, index) in particularsArr.imgs" :key="index">
                            <span class="m-b-10" style="display: block" v-if="item.text" v-html="item.text"></span>
                            <img :src="item.url" class="img-responsive img">
                        </p>
                    </li>
                    <li class="hr"></li>
                    <li class="unit" v-if="particularsArr.unit"><strong>业务单位</strong>：{{particularsArr.unit}}</li>
                    <li class="unit" v-if="particularsArr.address"><strong>项目地址</strong>：{{particularsArr.address}}</li>
                    <li class="unit" v-if="particularsArr.team"><strong>设计团队</strong>：{{particularsArr.team}}</li>
                    <li class="unit" v-if="particularsArr.scale"><strong>用地规模(㎡)</strong>：{{particularsArr.scale}}</li>
                    <li class="unit" v-if="particularsArr.design_date"><strong>设计时间</strong>：{{particularsArr.design_date}}</li>
                    <li class="unit" v-if="particularsArr.photographer"><strong>拍摄者</strong>：{{particularsArr.photographer}}</li>
                    <li class="unit" v-if="particularsArr.remarks" style="color: #888;"><strong>注</strong>：{{particularsArr.remarks}}</li>
                    <!-- <li class="hr hr-m-20" style="margin-bottom:15px;"></li>
                    <li class="text-center particulars-sharing">
                        <button type="button" class="btn btn-default" @click="alrtSharingShow = true"><i class="fa fa-weixin" aria-hidden="true"></i>&nbsp;分享</button>
                        <p class="alrt-sharing" v-show="alrtSharingShow == true">
                            <span class="particulars-close" style="right: 0" @click="alrtSharingShow = false"></span>
                            <span class="sharing-text">扫描分享到微信朋友圈</span>
                            <img class="sharing-ewm" src="/static/img/ewm.png">
                        </p>
                    </li> -->
                  </ul>
                </div>
                <div class="col-sm-3 fixed-y" id="fixedY" style="top:0;">
                  <ul class="bg-fff">
                    <attention :attention-arr="particularsArr.company_info" :id="particularsArr.company_info.company_id"></attention>
                    <li class="al-btn text-center"><router-link :to="{ path: '/worksPage', query: {id:particularsArr.company_info.company_id}}" class="btn btn-default">更多作品</router-link></li>
                    <li class="hr"></li>
                    <li class="">
                        <p class="text-line-3" v-html="particularsArr.company_info.desc"></p>
                        <p><router-link :to="{ path: '/worksPage', query: {id:particularsArr.company_info.company_id}}" class="more">查看更多</router-link></p>
                    </li>
                    <li class="hr hr-m-20"></li>
                    <li class="text-center">
                        <a href="javascript:;" class="shouc" :class="{ active: particularsArr.has_collect == true }" @click="getCollect"></a>
                        <p><span v-show="particularsArr.has_collect == true">取消</span>收藏</p>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="container" style="padding-bottom: 8px;">
    		<div class="row m-b-20">
                <div class="col-sm-9">
                    <ul class="bg-fff lick"  style="padding-bottom: 0;">
                        <li class="title">你可能还喜欢</li>
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
import {mapGetters} from 'Vuex'
  export default {
    data () {
      return {
        particularsArr: '',
        alrtSharingShow: false,
        id: '',
        index:0,
        idslen:0,
        prevShow: false,
        nextShow: false,
        iscollect: ''
      }
  	},
    components: {
        attention, caseList
    },
    created() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.id = this.$route.query.id;
        this.index = this.$route.query.index;
        this.prevShow = this.index!==0;
        this.nextShow = this.index!==(this.cutId.length-1);
        this.getCase();
    },
    watch:{
        // index:function(){
        //     this.prevShow = this.index!=0;
        //     this.nextShow = this.index!=(this.cutId.length-1);
        // }
    },
    computed: mapGetters([
      'cutId'
    ]),
    mounted: function() {
        var _this = this;
        this.$nextTick(function() {
            $(window).on('scroll', ()=> {
                var scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
                var node = document.getElementById('fixedY');
                if(_this.$route.path == '/particulars'){
                    if(scrollTop > 56) {
                        let top = scrollTop - 56;
                        node.style.top = top + 'px';
                    }else{
                        node.style.top = '0px';
                    }
                }
            })
        })
    },
    methods: {
        getCollect() {
          var data = {
              caseId:this.particularsArr.case_id
          }
          this.$fns.post('/api/user/edit-collect',data,(json)=>{
              if(json.ask=='1'){
                this.particularsArr.has_collect = !this.particularsArr.has_collect;
                this.$message({message:json.message,type:'success',showClose:true});
              }else{
                this.$router.push({path: '/login'});
              }
          });
        },
        goBack(){
            this.$router.go(-1)
        },
        getCase(){
          var data = {
            case_id: this.id
          }
          //流量统计
          this.$fns.visitsStatistics('cs',this.id);
          this.$fns.post('/api/case/get-case',data,(json)=>{
              if(json.ask=='1'){
                this.particularsArr = json.data;
              }else{
                this.$message({message:json.message,type:'error',showClose:true});
              }
          });
        },
        prev() {
            this.index != 0 && this.index--;
            this.id = this.cutId[this.index];
            this.getCase();
        },
        next() {
            this.index != (this.cutId.length-1) && this.index++;
            this.id = this.cutId[this.index];
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
    top: -150px;
}
.particulars-prev, .particulars-next{
    position: fixed;
    cursor: pointer;
    width: 40px;
    height: 40px;
    top: 50%;
    margin-top: -20px;
    z-index: 3000;
}
.particulars-prev{
    left: 10px;
    background: url(/static/img/ic_arrow_left.png) no-repeat center center;
    &:hover{
        background: url(/static/img/ic_arrow_left2.png) no-repeat center center;
    }
}
.particulars-next{
    right: 10px;
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
    background-color: #222;
    opacity: .7;
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
    box-shadow: 0 0 6px rgba(0,0,0,.2);
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

//y固定定位
.fixed-y{
    position: absolute;
    right: 0;
}
 @media (min-width: 768px) {
    // .particulars-prev, .particulars-next{
    //     top: 200px;
    // }
    // .particulars-prev{
    //     left: -45px;
    // }
    // .particulars-next{
    //     right: -45px;
    // }
 }
</style>
