<template>
	<el-row class="plan">
		<el-col :span="24" class="plan-toolbar" style="min-width:1060px;overflow:hidden;">
			<el-col style="width:40%;height: 50px;line-height: 50px;">
			  <el-button type="text" class="btn" @click="showAdd"><i class="el-icon-plus"></i>&nbsp;新增</el-button>
			  <el-button type="text" class="btn" @click="deletConfig"><i class="el-icon-delete"></i>&nbsp;删除</el-button>
			  <el-button type="text" class="btn" @click="disableConfig"><i class="el-icon-circle-cross"></i>&nbsp;禁用</el-button>
			  <el-button type="text" class="btn" @click="startConfig"><i class="el-icon-circle-check"></i>&nbsp;启用</el-button>
			</el-col>
			<el-col style="width:60%;" align="right">
				<el-form :inline="true" class="demo-form-inline" style="margin-top: 7px;">
				  <el-form-item label="探针类型" class="select-plan">
				    <el-select placeholder="请选择">
				      <el-option label="IT探针" value="it"></el-option>
				      <el-option label="设备状态探针" value="type"></el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item label="状态" class="select-plan">
				    <el-select placeholder="请选择状态">
				      <el-option label="全部" value="all"></el-option>
				      <el-option label="禁用" value="disabeld"></el-option>
				      <el-option label="启用" value="qiyong"></el-option>
				    </el-select>
				  </el-form-item>
				  <el-form-item class="select-plan">
				    <el-button type="primary" >查询</el-button>
				  </el-form-item>
				</el-form>				
			</el-col>
		</el-col>
		<el-table ref="multipleTable" border stripe align="center" tooltip-effect="dark" style="width: 100%" :data="tableData">
			<el-table-column type="selection" width="55"></el-table-column>
			<el-table-column prop="name" label="计划名称" width="260"></el-table-column>
			<el-table-column prop="type" label="探针类型" width="260"></el-table-column>
			<el-table-column prop="status" :formatter="formatter" label="状态" width="260"></el-table-column>
			<el-table-column label="操作" show-overflow-tooltip>
				<template scope="scope">
					<el-button type="text" @click.native.prevent="configRow(scope.$index, tableData)">配置项</el-button>
				</template>
			</el-table-column>
		</el-table>
	</el-row>
</template>

<script>
	export default{
		name: 'plan',
		data(){
			return {
		        tableData: [{
		          name: '计划1',
		          type: 'IT探针',
		          status: '0'
		        }, {
		          name: '计划2',
		          type: 'IT探针',
		          status: '1'
		        }, {
		          name: '计划3',
		          type: 'IT探针',
		          status: '0'
		        }, {
		          name: '计划4',
		          type: 'IT探针',
		          status: '1'
		        }]
			}
		},
		ready(){

		},
		methods:{
			test1(){
				/*axios.get('/api/open/api/weather/json.shtml?city=杭州').then((res)=>{
					console.log(res.data.data)
					this.tableData = res.data.data.forecast
				},(err)=>{
					console.log(err)
				})*/
			},
			deletConfig(){
				alert("删除功能暂未实现");
			},
			disableConfig(){
				alert("禁用功能暂未实现");
			},
			startConfig(){
				alert("启用功能暂未实现");
			},
			formatter(row, column) {
				if(row.status == '1'){
					return "已启用"
				}else if(row.status == '0'){
					return "已禁用"
				}
	      	},
		    showAdd(){
		      	this.$router.push({path:'/nav/planAdd'})
		    },
		    configRow(index, rows){
		      	alert(index);
		    }
		},
		mounted(){
			this.test1()
			
		}
	}
</script>

<style>
	.plan .btn{
		margin-left: 10px;
		padding: 8px;
	}
	.plan .btn:hover{
		background: gainsboro;
	}
	.select-plan{
		margin-bottom: 0px;
		text-align: center;
	}
</style>