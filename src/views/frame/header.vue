<template>
  <el-row class="header">
    <el-col :span="5" class="logo"><router-link to="/admin"><img :src="logo" alt="logo"></router-link></el-col>
    <el-col :span="13">
    	<ul class="nav">
    		<li v-for="(menu, index) in menus" :key="index">
          <router-link :to="menu.url">{{menu.name}}</router-link>
        </li>
    	</ul>
    </el-col>
    <el-col :span="6" class="login">
    	<span>你好,{{useName}}</span>
    	<a href="javascriput:;" @click="logout">退出登录</a>
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
          url: '/admin/addCase'
        },{
          id: 3,
          name: '发布招聘',
          url: '/admin/recruit'
        }]
      }
    }
  },
  created() {
    // this.getLogin();
  },
  data() {
  	return {
  		useName: ''
  	}
  },
  methods: {
    getLogin(){
      this.$fns.post('/api/user/login',{},(json)=>{
          if(json.ask=='1' && json.is_admin=='1'){
            this.useName = json.name
          }else{
            this.$router.push({path: '/endLogin'})
          }
      });
    },
    logout(){
      this.$fns.post('/api/user/logout',{},(json)=>{
        this.$router.push({path: '/endLogin'})
      });
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
	span{
		display: inline-block;
		margin: 0 15px;
		color: #333;
	}
}
</style>