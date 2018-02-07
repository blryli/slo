<template>
	<div class="bg-F2F2F2">
        <div class="companyProfile">
          <div class="container m-t-20" v-if="datas != ''">
            <div cladss="row" style="margin: 0 -15px;">
                <div class="col-sm-3">
                  <div class="bg-fff">
                    <attention :attention-arr="datas.company_info" :id="datas.company_info.company_id"></attention>
                  </div>
                </div>
                <div class="col-sm-9"> 
                  <ul class="bg-fff">
                    <li class="title">{{datas.title_jion}}</li>
                    <li class="company-js img-ms">
                        <h3 class="company-title">招聘职位<span></span></h3>
                        <div class="works-box" v-for="(text, index) in datas.recruitment_info" :key="index">
                            <h4 class="works-title through"><strong>{{text.position}}</strong><span></span></h4>
                            <p class="works-text" v-html="text.desc"></p>
                        </div>
                    </li>
                    <li class="hr hr-m-20" v-if="datas.company_info.email"></li>
                    <li class="text-center" v-if="datas.company_info.email">对以上职位感兴趣者，请将你的个人作品集、简历和薪资要求发送到</li>
                    <li class="text-center" v-if="datas.company_info.email">
                            <p class="email-through through"><strong>{{datas.company_info.email}}</strong><span></span></p>
                    </li>
                    <li class="hr hr-m-20" v-if="datas.company_info.desc"></li>
                    <li class="company-js" v-if="datas.company_info.desc">
                        <h3 class="company-title">公司介绍<span></span></h3>
                        <p v-html="datas.company_info.desc"></p>
                    </li>
                    <li class="hr hr-m-20" style="margin-top: 36px;"></li>
                    <li class="company-js img-ms">
                        <h3 class="company-title">公司环境<span></span></h3>
                        <p v-html="datas.company_info.environment_desc"></p>
                        <p v-for="(item, index) in datas.company_info.imgs" :key="index"><img :src="item" class="img-responsive img"></p>
                    </li>
                    <li class="hr hr-m-20"></li>
                    <li class="company-js img-ms">
                        <h3 class="company-title">公司作品<span></span></h3>
                        <p v-html="datas.company_info.case_desc"></p>
                        <p v-for="(item, index) in datas.case_imgs" class="m-t-20" :key="index"><img :src="item" class="img-responsive img"></p>
                        <p class="text-center"><button type="button" @click="toWorksPage" class="btn btn-FEE300">更多公司作品</button></p>
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
        datas: '',
      }
  	},
    components: {
        attention
    },
    created() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.getRecruitments();
    },
    watch: {
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        toWorksPage(){
            this.$router.push({path:'/worksPage', query: {id: this.datas.company_info.company_id}})
        },
        getRecruitments(){
          var data = {
                  companyId: this.$route.query.id,
                  recruitmentId: this.$route.query.recruitmentId
          }
          this.$fns.post('/api/recruitment/get-recruitments',data,(json)=>{
              if(json.ask=='1'){
                  this.datas = json.data;
                  console.log(this.datas.company_info)
              }else{
                this.$message({message:json.message,type:'error',showClose:true});
              }
          });
        }
    },
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.btn-FEE300{
    height: 42px;
    width: 158px;
    font-weight: bold;
    margin-top: 20px;
}
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
        margin: 4px -4px 10px;
        strong{
            padding-left: 7px;
        }
    }
    // .works-text-title{
    //     display: block;
    //     margin-top: 13px;
    //     font-weight: bold;
    //     margin-left: -6px;
    //     margin-bottom: 6px;
    // }
    .works-text{
        margin-bottom: 1px;
    }
}
.company-title{
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 16px;
    font-size: 24px;
    line-height: 24px;
    color: #212121;
    margin-top: 38px;
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
    line-height: 24px;
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
	padding: 30px;
}
.container{
    position: relative;
}
.title{
    font-size: 28px;
    color: #212121;
    line-height: 28px;
    font-weight: bold;
}
.hr-m-20{
    margin: 40px -30px;
}
.hr-m-10{
    margin: 16px -20px;
}
</style>
