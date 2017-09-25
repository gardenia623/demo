<template>
	<div class="probe">
		<el-row class="probe-box">
			<div class="probe-list">
				<el-col class="probe-item">
					<h1>添加</h1>
				</el-col> 
				<template v-for="item in probeItems">
					<el-col class="probe-item">
						<el-row class="pi-title">
							<el-col :span="18" class="pi-name">{{ item.name }}</el-col>
							<el-col :span="6" class="pi-status">{{ item.status }}</el-col>
						</el-row>
						<div class="pi-content">
							<ul>
								<li><span>ip地址:</span><span>{{ item.ip }}</span></li>
								<li><span>端口号:</span><span>{{ item.port }}</span></li>
								<li><span>业务名称:</span><span>{{ item.name }}</span></li>
							</ul>
						</div>
						<el-row class="pi-config">
							<el-col :span="12" align="center">
								<el-button type="text"><i class="el-icon-plus"></i>&nbsp;编辑</el-button>
							</el-col>
							<el-col :span="12">
								<el-button type="text"><i class="el-icon-delete"></i>&nbsp;删除</el-button>
							</el-col>
						</el-row>
					</el-col>
				</template>
			</div>
			<div :span="19" class="probe-show">
				<el-row class="ps-echart">
					<el-row class="pse-name">10.20.30.40</el-row>
					23
				</el-row>
				<el-row class="ps-table">
					sddddddd
				</el-row>
			</div>
		</el-row>
	</div>
</template>

<script scoped>
  export default {
  	name: 'probe',
    data() {
      return {
        isCollapse: true,
        probeItems: [{
		          name: '10.5.162.12',
		          status: '在线',
		          ip: '1.1.1.1',
		          port: '9000'
		        }, {
		          name: '10.5.162.13',
		          status: '离线',
		          ip: '2.2.2.2',
		          port: '9090'
		        }, {
		          name: '10.5.162.14',
		          status: '在线',
		          ip: '3.3.3.3',
		          port: '8080'
		        }, {
		          name: '10.5.162.15',
		          status: '离线',
		          ip: '4.4.4.4',
		          port: '8888'
		        }]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped>
*{
	margin: 0;
	padding: 0;
}
ul{
	list-style: none;
}
/*初始化样式结束*/
span{
	display: inline-block;
}

.probe-box{
	height: 100%;
}
.probe-list{
	display: inline-block;
	float: left;
	width: 260px;
	overflow: auto;
	background-color: #F3F4F7;
}
.probe .probe-item{
	width: 240px;
	height: 140px;
	margin: 10px;
	background-color: #FFF;
}
.probe-item .pi-title{
	height: 25px;
	font-weight: 700;
}
.pi-title .pi-name,.pi-status{
	height: 100%;
	line-height: 25px;
	font-size: 14px;
}
.pi-content{
	font-size: 12px;
}
.pi-content ul{
	margin: 10px;
}
.pi-content ul li{
	margin-bottom: 10px;
}
.pi-content ul li span{
	width: 50%;
	text-align: left; 
}
/*图表展示*/
.probe-show{
	min-width: 400px;
	height: 500px;
	background-color: palegoldenrod;
}
.pse-chart{
	margin: 20px;
}
</style>