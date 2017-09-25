<template>
  <div class="top">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-submenu index="1">
		    <template slot="title"><i class="el-icon-message"></i>导航一</template>
		    <el-menu-item index="1-1"><router-link to="/nav/page1">页面1</router-link></el-menu-item>
		    <el-menu-item index="1-2"><router-link to="/nav/page2">页面2</router-link></el-menu-item>
		  </el-submenu>
		  <el-submenu index="2">
		    <template slot="title"><i class="el-icon-message"></i>导航二</template>
		    <el-menu-item index="2-1"><router-link to="/nav/page1">页面1</router-link></el-menu-item>
		    <el-menu-item index="2-2"><router-link to="/nav/page2">页面2</router-link></el-menu-item>
		  </el-submenu>
		  <el-submenu index="3">
		    <template slot="title"><i class="el-icon-message"></i>导航三</template>
		    <el-menu-item index="3-1"><router-link to="/nav/page1">页面1</router-link></el-menu-item>
		    <el-menu-item index="3-2"><router-link to="/nav/page2">页面2</router-link></el-menu-item>
		  </el-submenu>
		</el-menu>
  </div>
  
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
			  <el-radio-button :label="false">展开</el-radio-button>
			  <el-radio-button :label="true">收起</el-radio-button>
			</el-radio-group>
		    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
		      <el-submenu index="1">
		        <template slot="title"><i class="el-icon-message"></i>导航一</template>
		        	<el-menu-item index="1-1"><router-link to="/nav/page1">echarts</router-link></el-menu-item>
		            <el-menu-item index="1-2"><router-link to="/nav/page2">table</router-link></el-menu-item>
		      </el-submenu>
		      <el-submenu index="2">
		        <template slot="title"><i class="el-icon-message"></i>导航二</template>
		        	<el-menu-item index="2-1"><router-link to="/nav/form">form</router-link></el-menu-item>
		            <el-menu-item index="2-2"><router-link to="/nav/footer">页面2</router-link></el-menu-item>
		      </el-submenu>
		      <el-submenu index="3">
		        <template slot="title"><i class="el-icon-message"></i>导航三</template>
		        	<el-menu-item index="1-1"><router-link to="/nav/test">树结构</router-link></el-menu-item>
		            <el-menu-item index="1-2"><router-link to="/nav/page2">页面2</router-link></el-menu-item>
		      </el-submenu>
		    </el-menu>
</template>

<script>
export default {
  name: 'top',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
	  handleSelect(key, keyPath) {
	    console.log(key, keyPath);
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
}
</style>
