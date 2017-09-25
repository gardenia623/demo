<template>
	<div class="f1">
		<ul>
			<li v-for="item in list" :key="item.id" @click="hehe(item)">
				{{item}}{{item.id}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'ff',
		props: [
			'list'
		],
		data(){
			return{
				/*list: ['a','b','c','d','e']*/
			}
		},
		methods:{
			hehe: function(val){
				console.log(val)
			}
		}
	}
</script>

<style>
	.f1 ul>li{
		list-style: none;
		cursor: pointer;
	}
	.f1 ul>li:nth-child(2n-1){
		background: gray;
	}
</style>