<template>
  <el-row class="header">
    <el-col :span="5" class="logo"><router-link to="/"><img :src="logo" alt="logo"></router-link></el-col>
    <el-col :span="13">
    	<ul class="nav">
    		<li v-for="(menu, index) in menus">
          <router-link :to="menu.url">{{menu.name}}</router-link>
        </li>
    	</ul>
    </el-col>
    <el-col :span="6" class="login">
    	<router-link to="/">登陆</router-link>
    	<span>|</span>
    	<router-link to="/">注册</router-link>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: '/static/img/logo1.png'
    },
    menus: {
      type: Array,
      default: function() {
        return [{
          id: 1,
          name: '创建公司',
          url: '/admin'
        },{
          id: 2,
          name: '添加案例',
          url: 'scheme'
        },{
          id: 3,
          name: '发布招聘',
          url: 'scheme'
        }]
      }
    },
  },
  data() {
  	return {
  		navWidth: 0
  	}
  },
  methods: {
    closeNav() {
      this.navWidth = 0
    }
  }
}
</script>

<style lang="scss" scoped>
//清理浮动
.cf{
    zoom:1;
    &:before,&:after {content:"";display:table;}
    &:after {clear:both;}
}
.header{
	line-height: 50px;
  padding: 0 20px;
	position: relative;
  border-bottom: 1px solid #ddd;
}
.logo{
    float: left;
    img{
      width: 120px;
      height: auto;
    }
  }
.open{
  border-right: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0,0,0,.2);
}
.nav{
	height: 100%;
	transition: width .3s;
	overflow: hidden;
	@extend .cf;
	li{
		height: 50px;
		padding: 0 20px;
    float: left;
		a{
			font-size: 16px;
			word-spacing: normal;
      color: #333;
      padding: 0;
			&.router-link-exact-active.active{
				color: #3390ca;
				font-weight: bold;
			}
			&:hover{
				font-weight: bold;
        background-color: transparent;
			}
		}
		+li{
			margin-left: 0;
		}
	}
}
.login{
	text-align: right;
	font-size: 14px;
  a{
    color: #333;
  }
	span{
		display: inline-block;
		margin: 0 15px;
		color: #aaa;
	}
}
//菜单图标
.icon{
  margin-top: 10px;
  display: block;
}
.sp-menu-icon{
  width: 24px;
  padding: 6px 6px 6px 0;
  display: block;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 6px;
  &:after{
    content: '';
    display: block;
    width: 24px;  
    height: 3px;  
    border-top: 3px solid #666;  
    border-bottom: 3px solid #666;  
    background-color: #666;  
    padding: 4px 0;  
    background-clip:content-box;
  }
}
@media (min-width: 768px){
  
  .nav{
    width: 100% !important;
  	position: relative;
    background-color: transparent;
    padding-top: 0;
  	top: 0;
  	li{
  		float: left;
		padding: 0;
  		+li{
  			margin-left: 10%;
  		}
  	}
  }
  .icon{
  	display: none;
  }
  .login{
    display: block;
  }
}
</style>