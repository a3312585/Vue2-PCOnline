<template>
	<div>
		<Cell :dataList="dataList"></Cell>
	</div>	
</template>

<script>
import Cell from './YuanChuangCell'
export default {
	components: {Cell},
	data(){
		return {
			dataList: []
		}
	},
	created(){
		console.log('创建原创组件');
		
	},
	activated(){
		console.log('原创页面激活');
		this.$http.get('/api/YuanChuang').then((response) => {
			response = response.data;
			if (response.errno == 0) {
				this.dataList = response.data.data;
			}
		})
	},
	deactivated(){
		console.log('原创页面切换');
	}
}
</script>

<style lang="scss">
	
</style>