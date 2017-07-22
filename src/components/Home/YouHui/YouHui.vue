<template>
	<div>
		<ul>
			<li v-for="item in dataList">
				<Cell :cellItem=item></Cell>
			</li>
		</ul>
	</div>	
</template>

<script>
import Cell from '@/components/commons/Cell'
export default {
	components: {Cell},
	data(){
		return {
			dataList:[]
		}
	},
	created(){
		this.$http.get('/api/YouHui').then((response)=>{
			response = response.data;
			if (response.errno == 0) {
					this.dataList = response.data.data;
			}
		})
	}
}
</script>

<style lang="scss">
	
</style>