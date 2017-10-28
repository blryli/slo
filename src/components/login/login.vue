<template>
	<div class="box-height">
    <div class="login-box-bg"></div>
    <div class="login-box-img"></div>
		<div class="login-box">
			<div class="logo">
			  	<img src="static/img/logo2.png"  @click="headerShow">
			  	<p>登陆LAFOLIO，发现更多精彩内容</p>
			</div>
			<div class="login-content">
				<div class="login-header">
					<a href="#" :class="{active: crru == 1, through: crru == 1}" @click="crru = 1"><strong>登录</strong><span></span></a>
					<a href="#" :class="{active: crru == 2, through: crru == 2}" @click="crru = 2"><strong>注册</strong><span></span></a>
				</div>
				<div v-show="crru == 1">
					<div class="login-container">
						<div class="form-group" v-bind:class="{ 'form-group--error': $v.loginPhone.$error }">
						    <input type="number" class="form__input login-input" name="phone" placeholder="请输入手机号码" v-model.trim="loginPhone" @input="$v.loginPhone.$touch()">
						 </div>
						 <span class="form-group__message" v-if="!$v.loginPhone.required">手机号不能为空</span>
						 <div class="form-group" v-bind:class="{ 'form-group--error': $v.loginPassword.$error }">
						    <input type="password" class="form__input login-input" name="phone" placeholder="请输入密码" v-model.trim="loginPassword" @input="$v.loginPassword.$touch()">
						 </div>
						 <span class="form-group__message" v-if="$v.loginPhone.required && !$v.loginPassword.required">密码不能为空</span>
						 <span class="form-group__message" v-if="!$v.loginPhone.required && !$v.loginPassword.required">手机号或密码错误</span>
						<button type="button" class="btn btn-dl m-t-30" :class="{'login-hover': loginPhone != '' && loginPassword != ''}" @click="loginBtn">登录</button>
            <label class="check" @click="checkedCrru"><img :src="checked == false ? 'static/img/ic_1.png' : 'static/img/ic_2.png'">下次自动登陆</label>
						<a href="#" class="forget">忘记密码</a>
					</div>
					<div class="others-login text-center">
						<h3>第三方账号登陆</h3>
						<button type="button" class="btn"><i class="fa fa-weixin" aria-hidden="true"></i></button>
						<button type="button" class="btn"><i class="fa fa-qq" aria-hidden="true"></i></button>
					</div>
				</div>
				<div v-show="crru == 2">
					<div class="login-container">
						<button type="button" class="btn btn-yzm" :class="{ 'btn-FEE300': yzmStatus == true }" @click="yzmStatus = false">
							<span v-show="yzmStatus == true">发送验证码</span>
							<span v-show="yzmStatus == false">60s后再次发送</span>
						</button>
						<input type="text" class="login-input" name="phone" placeholder="请输入手机号码">
						<input type="text" class="login-input" name="password" placeholder="请输入验证码">
						<input type="text" class="login-input" name="password" placeholder="请输入6-20位密码，字母/数字/字符必须2种">
						<input type="text" class="login-input" name="password" placeholder="再次输入密码确认">
						<div class="m-t-b-20">
              <label class="check" @click="checkedCrru"><img :src="checked == false ? 'static/img/ic_1.png' : 'static/img/ic_2.png'">我已阅读并接受</label>
							<a href="#" class="forget" style="float: none;">用户协议</a>
						</div>
						<button type="button" class="btn btn-dl">注册</button>
					</div>
					<div class="others-login small">
						<span class="inline-text">第三方账号注册</span>
						<button type="button" class="btn"><i class="fa fa-weixin" aria-hidden="true"></i></button>
						<button type="button" class="btn"><i class="fa fa-qq" aria-hidden="true"></i></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
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
    	}
    },
    components: {
    },
    validations() {
    	return {
    		loginPhone: {
    			required,
    		},
    		loginPassword: {
    			required
    		}
    	}
    },
    created() {
    	if(this.$route.query.crru == 2){
	    	this.crru = 2
    	}
    },
    mounted() {
      this.$nextTick(function () {
        $('.header').css('display', 'none')
      })
    },
    methods: {
    	loginBtn() {
    		if( this.loginPhone =! '' && this.loginPassword !='') {
          $('.header').css('display', 'block')
	    		this.$router.push({ path: '/',query: {name: '我叫鎏锋胸',src: 'static/img/xiong.png'} })
    		}
    	},
      headerShow() {
        this.$router.push({ path: '/'})
        $('.header').css('display', 'block')
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
.check{
  cursor: pointer;
  font-weight: normal;
  font-size: 12px;
  img{
    margin-right: 4px;
    margin-top: -2px;
  }
}
.login-content{
	background-color: #fff;
	width: 402px;
	margin: 0 auto;
	padding: 0 30px 30px;
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
			font-size: 14px;
			margin-bottom: 30px;
		}
		.btn{
			width: 42px;
			height: 42px;
			font-size: 20px;
			color: #fff;
			border-radius: 50%;
			&:hover{
				background-color: #FEE300;
				color: #191919;
			}
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
.box-height{
 height: 682px;
}
.login-box-bg{
  position: absolute;
  width: 100%;
  top: 0;
  height: 763px;
  z-index: 1001;
  background-color: #000;
  opacity: .5;
}
.login-box{
  position: relative;
  height: 763px;
  z-index: 1100;
}
.login-box-img{
	background: url(/static/img/login.jpg) no-repeat center center;
  position: absolute;
  height: 763px;
  top: 0;
  width: 100%;
  z-index: 1000;
}
.logo{
	margin-top: 6%;
	text-align: center;
  position: relative;
  img{
  	display: block;
  	margin: 0 auto 20px;
    cursor: pointer;
  }
  p{
  	font-size: 18px;
  	color: #fff;
  	margin-bottom: 35px;
  }
}
</style>
