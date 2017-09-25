<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import nav from '@/components/Nav'
export default {
  name: 'app',
  data(){
  	return {
  		
  	}
  },
  components:{
  	'v-nav': nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
	margin: 0;
}
</style>
