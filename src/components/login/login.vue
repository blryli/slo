<template>
	<div>
	    <div class="login-box-bg"></div>
	    <!--<div class="login-box-img"></div>-->
		<div class="login-box">
			<div class="particulars-prev" @click="prev"></div>
			<div class="logo">
			  	<router-link to="/"><img src="static/img/logo1.png"></router-link>
			  	<p>登录LAFOLIO，发现更多精彩内容 !</p>
			</div>
			<div class="login-content">
				<div class="login-header">
					<a href="#" :class="{active: crru == 1, through: crru == 1}" @click="crru = 1"><strong>登录</strong><span></span></a>
					<a href="#" :class="{active: crru == 2, through: crru == 2}" @click="crru = 2"><strong>注册</strong><span></span></a>
				</div>
				<div v-show="crru == 1">
					<div class="login-container">
						<div class="form-group">
						    <input type="number" class="form__input login-input" name="username" placeholder="请输入手机号码" @keyup.enter="canLogin()&&loginBtn()" v-model="loginPhone">
						 </div>
						 <span class="form-group__message">手机号不能为空</span>
						 <div class="form-group">
						    <input type="password" class="form__input login-input" name="password" placeholder="请输入密码" @keyup.enter="canLogin()&&loginBtn()" v-model="loginPassword">
						 </div>
						<button type="button" class="btn btn-dl m-t-30" :class="canLogin() ?'login-hover':''" @click="canLogin()&&loginBtn()">登录</button>
            			<!-- <label class="check" @click="checkedCrru"><img :src="checked == false ? 'static/img/ic_1.png' : 'static/img/ic_2.png'">下次自动登陆</label> -->
						<!-- <a href="#" class="forget">忘记密码</a> -->
					</div>
					<!-- <div class="others-login text-center">
						<h3>第三方账号登陆</h3>
						<a href="javascript:;" class="btn btn-img-weixin"></a>
						<a href="javascript:;" class="btn btn-img-qq"></a>
					</div> -->
				</div>
				<div v-show="crru == 2">
					<div class="login-container">
						<!-- <button type="button" class="btn btn-yzm" :class="{ 'btn-FEE300': yzmStatus == true }" @click="yzmStatus = false">
							<span v-show="yzmStatus == true">发送验证码</span>
							<span v-show="yzmStatus == false">60s后再次发送</span>
						</button> -->
						<input type="number" class="login-input" name="phone" v-model="registerPhone" @keyup.enter="canRegister()&&registerBtn()" placeholder="请输入手机号码">
						<!-- <input type="text" class="login-input" name="password" placeholder="请输入验证码"> -->
						<input type="password" class="login-input" name="password" v-model="registerPassword1" @keyup.enter="canRegister()&&registerBtn()" placeholder="请输入6-20位密码，字母/数字/字符必须2种">
						<input type="password" class="login-input" name="password" v-model="registerPassword2" @keyup.enter="canRegister()&&registerBtn()" placeholder="再次输入密码确认">
						<div class="m-t-b-20">
              <!-- <label class="check" @click="checkedCrru"><img :src="checked == false ? 'static/img/ic_1.png' : 'static/img/ic_2.png'">我已阅读并接受</label> -->
							<!-- <a href="#" class="forget" style="float: none;">用户协议</a> -->
						</div>
						<button type="button" class="btn btn-dl m-t-30" :class="canRegister()?'login-hover':''" @click="canRegister() && registerBtn()">注册</button>

					</div>
					<!-- <div class="others-login small">
						<span class="inline-text">第三方账号注册</span>
						<a href="javascript:;" class="btn weixin-img-small"></a>
            <a href="javascript:;" class="btn qq-img-small"></a>
					</div> -->
				</div>
			</div>
		</div>
		<gateway-footer></gateway-footer>
	</div>
</template>

<script>
import gatewayFooter from '../frame/footer.vue'
import $ from 'jquery'
  export default {
    props: {},
    data() {
    	return {
    		crru: 1,
        	checked: false,
    		checked1: false,
    		yzmStatus: true,
    		loginPhone: '',
    		loginPassword: '',
    		registerPhone:'',
    		registerPassword1:'',
    		registerPassword2:''
    	}
    },
    components: {
    	gatewayFooter
    },
    created() {
    	if(this.$route.query.crru == 2){
	    	this.crru = 2
    	}
    },
    mounted() {
    },
    methods: {
			prev() {
					this.$router.go(-1);
			},
    	canLogin(){
    		return this.loginPhone && this.loginPassword;
    	},
    	canRegister(){
    		return this.registerPhone && this.registerPassword1 && this.registerPassword2==this.registerPassword1;
    	},
    	loginBtn() {
    		let _this = this;
	        var data = {
	                userName: this.loginPhone,
	                userPass: this.loginPassword
	        }
	        this.$fns.post('/api/user/login',data,(json)=>{
	            if(json.ask=='1'){
	              this.$router.push({path:'/'});
	            }else{
	            	this.$message({message:json.message,type:'error',showClose:true});
	              // this.show = false;
	              // this.show1 = json.message;
	            }
	        });
    	},
    	registerBtn(){
    		var data = {
	                userName: this.registerPhone,
	                userPass: this.registerPassword1
		        }
		        this.$fns.post('/api/user/register',data,(json)=>{
		            if(json.ask=='1'){
		              this.$router.push({path:'/login',query: {crru:2}});
		            }else{
		            	this.$message({message:json.message,type:'error',showClose:true});
		            }
		        });
    	},
      checkedCrru() {
        this.checked = !this.checked
      }
    }
  }

</script>

<style lang="scss" rel="stylesheet/scss" scoped>
input:-moz-placeholder { color: #ddd; }
::-webkit-input-placeholder { color:#ddd; }
.m-t-b-20{
	margin: 16px 0 10px;
}
.btn-img-weixin{
  background: url(/static/img/ic_wechat.png) no-repeat center center;
  &:hover{
    background: url(/static/img/ic_wechat_1.png) no-repeat center center;
  }
}
.weixin-img-small{
  background: url(/static/img/ic_wechat_2.png) no-repeat center center;
  &:hover{
    background: url(/static/img/ic_wechat_3.png) no-repeat center center;
  }
}
.btn-img-qq{
  background: url(/static/img/ic_qq.png) no-repeat center center;
  &:hover{
    background: url(/static/img/ic_qq_1.png) no-repeat center center;
  }
}
.qq-img-small{
  background: url(/static/img/ic_qq_2.png) no-repeat center center;
  &:hover{
    background: url(/static/img/ic_qq_3.png) no-repeat center center;
  }
}
.check{
  cursor: pointer;
  font-weight: normal;
  font-size: 12px;
  img{
    margin-right: 10px;
    margin-top: -4px;
  }
}
.login-content{
	background-color: #fff;
	width: 402px;
	margin: 0 auto;
	padding: 0 30px 30px;
	box-shadow: 0 2px 8px rgba(0,0,0 , .2);
	.login-header{
		padding: 26px 30px;
		border-bottom: 1px solid #ddd;
		margin: 0 -30px;
		a{
			font-size: 16px;
			color: #696969;
			padding: 0 4px;
			text-decoration: none;
			display: inline-block;
			&.active{
				font-size: 20px;
				color: #282828;
			}
			&+a{
				margin-left: 30px;
			}
			strong{
				padding-left: 6px;
			}
		}
	}
	.login-container{
		position: relative;
		.btn-yzm{
			position: absolute;
			right: 0;
			top: 15px;
		}
		.btn-dl, .login-input{
			width: 100%;
		}
		.login-input{
			padding: 20px 0;
			border-top: 0;
			border-right: 0;
			color: #282727;
			border-left: 0;
			border-bottom: 1px solid #eee;
		}
		.btn-dl{
			margin-bottom: 20px;
			padding: 0;
			height: 42px;
			line-height: 42px;
			color: #aaa;
			font-weight: bold;
			font-size: 16px;
    }
		.login-hover{
			background-color: #FEE300;
			color: #191919;
		}
		.forget{
			color: #d36f16;
			text-decoration: none;
			font-weight: bold;
			float: right;
      font-size: 12px;
		}
	}
	.others-login{
		h3{
			font-size: 12px;
      font-weight: bold;
			margin-bottom: 30px;
		}
		.btn{
			width: 42px;
			height: 42px;
			border-radius: 50%;
			&+.btn{
				margin-left: 48px;
			}
		}
		&.small{
			.inline-text{
				margin-right: 20px;
			}
			.btn{
				width: 32px;
				height: 32px;
				font-size: 16px;
        color: #fff;
        border-radius: 50%;
        &+.btn{
          margin-left: 20px;
        }
      }
    }
  }
}
.login-box-bg{
  position: absolute;
  width: 100%;
  top: 0;
  height: 794px;
  z-index: 1001;
  background-color: #f2f2f2;
}
.login-box{
  position: relative;
  padding-top: 6%;
  height: 794px;
  z-index: 1100;
}
.login-box-img{
  position: absolute;
  background: url(/static/img/login.jpg) no-repeat center center;
  height: 794px;
  top: 0;
  width: 100%;
  z-index: 1000;
}
.logo{
	text-align: center;
  position: relative;
  img{
  	display: block;
  	margin: 0 auto 20px;
    cursor: pointer;
  }
  p{
  	font-size: 18px;
  	color: #333;
  	margin-bottom: 35px;
  }
}
.particulars-prev{
    position: fixed;
    cursor: pointer;
    width: 40px;
    height: 40px;
    top: 30%;
		margin-top: 40px;
		left: 20px;
    z-index: 3000;
		box-shadow: 0 2px 6px rgba(0,0,0,.2);
		border-radius: 50%;
}
.particulars-prev{
    left: 10px;
    background: url(/static/img/ic_arrow_left.png) no-repeat center center;
    &:hover{
        background: url(/static/img/ic_arrow_left2.png) no-repeat center center;
    }
}
</style>
