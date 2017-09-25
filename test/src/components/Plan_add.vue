<template>
	<el-row class="form">
		<el-col :span="24">
			<p class="newplan-title">新增巡检计划</p>
		</el-col>
		<el-form class="formBox" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
			<el-form-item prop="name" label="计划名称" :rules="[{ required: true, message: '计划名称不能为空'}]">
			    <el-input class="formIem" v-model="formLabelAlign.name"></el-input>
			</el-form-item>
			<el-form-item label="探针类型" prop="probeType" :rules="[{ required: true, message: '探针类型不能为空'}]">
			    <el-select placeholder="请选择" v-model="formLabelAlign.probeType">
				    <el-option label="IT探针" value="it"></el-option>
				    <el-option label="设备状态探针" value="type"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="计划类型" prop="planType" :rules="[{ required: true, message: '计划类型不能为空'}]">
				<el-select placeholder="请选择" v-model="formLabelAlign.planType">
				    <el-option label="定时" value="it"></el-option>
				    <el-option label="实时" value="type"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="巡检时间" prop="time" :rules="[{ required: true, message: '巡检时间不能为空'}]">
				<el-input class="formIem" v-model="formLabelAlign.time"></el-input>
			</el-form-item>
			<el-form-item>
			    <el-button type="primary" @click="submitForm()">保存</el-button>
			    <el-button @click="cancelForm()">取消</el-button>
			</el-form-item>
		</el-form>
	</el-row>
</template>

<script>
	export default{
		name: 'form',
		data(){
			return{
				labelPosition: 'right',
				formLabelAlign: {
					name: '',
					probeType: '',
					planType: '',
					time: ''
				}
			}
		},
		methods:{
			cancelForm(){
				this.$router.push({path:'/nav/plan'})
			}
		}
	}
</script>

<style>
	.form{
		padding: 10px 0 0 30px;
	}
	.newplan-title{
		margin-bottom: 30px;
	}
	.formBox{
		width: 300px;
	}
	
	
</style>