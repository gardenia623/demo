<template>
	<div class="nav">
		<el-row class="grid-content bg-purple-dark">
		  <el-col :span="4">
		  	<div class="logo">运维平台</div>
		  </el-col>
		  <el-col :span="18">
		  	<div align="right">
		  		<a  @click="setLang('zh-CN')">中文/</a>
        　　			<a  @click="setLang('en-US')">EngLish</a>
		  	</div>
		  </el-col>
		</el-row>
		<el-row>
		  <el-col :span="8">
		    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
		      <el-submenu index="1">
		        <template slot="title"><i class="el-icon-message"></i>导航一</template>
		        	<el-menu-item index="1-1"><router-link to="/nav/page1">echarts</router-link></el-menu-item>
		            <el-menu-item index="1-2"><router-link to="/nav/plan">计划配置</router-link></el-menu-item>
		      </el-submenu>
		      <el-submenu index="2">
		        <template slot="title"><i class="el-icon-message"></i>导航二</template>
		        	<el-menu-item index="2-1"><router-link to="/nav/probe">探针管理</router-link></el-menu-item>
		            <el-menu-item index="2-2"><router-link to="/nav/footer">页面2</router-link></el-menu-item>
		      </el-submenu>
		      <el-submenu index="3">
		        <template slot="title"><i class="el-icon-message"></i>导航三</template>
		        	<el-menu-item index="1-1"><router-link to="/nav/test">树结构</router-link></el-menu-item>
		            <el-menu-item index="1-2"><router-link to="/nav/page2">页面2</router-link></el-menu-item>
		      </el-submenu>
		    </el-menu>
		  </el-col>
		</el-row>
		<div class="center-content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default{
	name: 'nev',
	data(){
		return {
			isCollapse: false
		}
	},
	methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
.bg-purple-dark{
	background-color: #20A0FF;
}
.grid-content{
	width: 100%;
	height: 60px;
	position: fixed;
	top: 0;
	left: 0;
}
.logo{
	height: 60px;
	line-height: 60px;
	font-size: 22px;
	color: #FFFFFF;
}
.el-menu-vertical-demo{
	width: 200px;
    height: 100%;
    position: fixed;
    top: 60px;
    left: 0;
    text-align: left;
}
.center-content{
	width: 100%;
	height: 100%;
	padding-left: 200px;
	padding-top: 60px;
	box-sizing: border-box;
}
</style>