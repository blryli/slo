<template>
	<div class="bg-F2F2F2">
        <div class="companyProfile">
          <div class="container m-t-20">
            <div cladss="row" style="margin: 0 -15px;">
                <div class="col-sm-3">
                  <div class="bg-fff">
                    <attention :attention-arr="companyProfileArr.attentionArr"></attention>
                  </div>
                </div>
                <div class="col-sm-9"> 
                  <ul class="bg-fff">
                    <li class="title">{{companyProfileArr.title}}</li>
                    <li class="hr hr-m-20" style="margin-top: 20px;"></li>
                    <li class="company-js">
                        <h3 class="company-title">公司介绍<span></span></h3>
                        <p>{{companyProfileArr.companyInfoText}}</p>
                    </li>
                    <li class="hr hr-m-20"></li>
                    <li class="company-js img-ms">
                        <h3 class="company-title">公司环境<span></span></h3>
                        <p>{{companyProfileArr.companySomeText}}</p>
                        <p v-for="item in companyProfileArr.companySomeImg"><img :src="item.src" class="img-responsive img"></p>
                    </li>
                    <li class="hr hr-m-20"></li>
                    <li class="company-js img-ms">
                        <h3 class="company-title">公司作品<span></span></h3>
                        <p>{{companyProfileArr.companyWorksText}}</p>
                        <p v-for="item in companyProfileArr.companyWorksImg" class="m-t-20"><img :src="item.src" class="img-responsive img"></p>
                        <p class="text-center m-t-40 p-b-10"><button type="button" class="btn btn-FEE300">更多作品</button></p>
                    </li>
                    <li class="hr hr-m-20"></li>
                    <li class="company-js img-ms">
                        <h3 class="company-title">招聘职位<span></span></h3>
                        <ul class="works-box" v-for="text in companyProfileArr.worksTextArr">
                            <li>
                                <h4 class="works-title through"><strong>景观主创方案设计师</strong><span></span></h4>
                                <strong class="works-text-title">【工作职责】</strong>
                                <p class="works-text">{{text.worksDutyText}}</p>
                            </li>
                            <li>
                                <strong class="works-text-title">【岗位要求】</strong>
                                <p class="works-text">{{text.worksRequireText}}</p>
                            </li>
                        </ul>
                    </li>
                    <li class="hr hr-m-20"></li>
                    <li class="text-center">对以上职位感兴趣者，请将你的个人作品集、简历和薪资要求发送到</li>
                    <li class="text-center">
                        <p class="email-through through"><strong>{{companyProfileArr.email}}</strong><span></span></p>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
      </div>
	</div>
</template>

<script>
import attention from '@/components/core/attention'
  export default {
    data () {
      return {
        companyProfileArr: {
            title: '招聘-主创设计师',
            attentionArr: {
              attentionLogo: 'static/img/logo.png',
              attentionName: '默默'
            },
            companyInfoText: '公司特与世纪联华超市股份有限公司、物美商业集团股份有限公司、天天好大药房等合作，在浙江省多个城市100多家门店进行销售。此外公司还搭档杭州电视台生活频道《生活大参考》、杭州电视台生活频道电商平台共同进行优参堂海参的销售，致力于将品牌以更多样化的形式进行推广，将产品以更方便快捷的渠道送达到消费者手中。',
            companySomeText: '形式进行推广，将产品以更方便快捷的渠道送达到消费者手中。',
            companyWorksText: '产品以更方便快捷的渠道送达到消费者手中。',
            companySomeImg: [
                {src: 'static/img/xiangqing.png'}
            ],
            companyWorksImg: [
                {src: 'static/img/xiangqing.png'},
                {src: 'static/img/xiangqing.png'},
                {src: 'static/img/xiangqing.png'}
            ],
            worksTextArr: [
                {
                    worksDutyText: '1.公司特与世纪联华超市股份有限公司。',
                    worksRequireText: '1.公司特与世纪联华超市股份有限公司市股份有限公司市股份有限公司。'
                },
                {
                    worksDutyText: '1.公司特与世纪联华超市股份有限公司。',
                    worksRequireText: '1.公司特与世纪联华超市股份有限公司市股份有限公司市股份有限公司。'
                }
            ],
            email: 'shanghai@qq.com'
        },
        crrut: false,
      }
  	},
    components: {
        attention
    },
    created() {
        // this.companyProfileArr = this.$route.query
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
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
.email-through{
    width: 300px;
    margin: 0 auto;
    font-size: 16px;
    margin-top: 6px;
}
.works-box{
    margin-bottom: 30px;
    .works-title{
        display: inline-block;
        padding: 0 4px;
        margin: 0 -4px;
        strong{
            padding-left: 7px;
        }
    }
    .works-text-title{
        display: block;
        margin-top: 20px;
        font-weight: bold;
        margin-left: -6px;
        margin-bottom: 6px;
    }
    .works-text{
        margin-bottom: 1px;
    }
}
.company-title{
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 40px;
    span{
        height: 2px;
        width: 24px;
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        background-color: #333;
    }
}
p{
    word-wrap:break-word;
}
.companyProfile{
    padding-bottom: 30px;
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
.hr-m-20{
    margin: 30px -20px;
}
.hr-m-10{
    margin: 16px -20px;
}
</style>
