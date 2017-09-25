<template>
	<div class="page1">
		<el-row>
		  <el-col :span="12">
		  	<div class="grid-content bg-purple">
		  		<div class="charts">
					<div id="myChart" style="height: 300px;"></div>
				</div>
		  	</div>
		  </el-col>
		  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
		</el-row>
	</div>
</template>

<script scoped>

	import echarts from 'echarts'
	import Vue from 'vue'
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			
		},
		mounted(){
			let chartBox = document.getElementsByClassName('charts')[0]
			let myChart = document.getElementById('myChart')
			let mainChart = echarts.init(myChart)
			let option ={
                    title: {
                        text: 'Line Chart'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['邮件营销', '联盟广告', '搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: '邮件营销',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '联盟广告',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name: '搜索引擎',
                            type: 'line',
                            stack: '总量',
                            data: [820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
						}
			myChart.style.width = chartBox.style.width + 'px'
			mainChart.setOption(option)
			// 基于准备好的dom，初始化echarts实例
			window.onresize = function(){
				var w = chartBox.offsetWidth + 'px'
				console.log(w)
			  	chartBox.innerHTML='<div id="myChart" style="width: '+w+';height: 300px;"></div>';
			  	var myChart = echarts.init(document.getElementById('myChart'));
			  	myChart.setOption(option);				
			}
		}
	}

</script>

<style scoped>

.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.page1 .grid-content {
    height: 300px;
}
</style>