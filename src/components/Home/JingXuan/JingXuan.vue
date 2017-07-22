<template>
	<div id="JX">
		<sunplazaEntrys :sunEs="sunEs"></sunplazaEntrys>
		<ul>
			<li v-for="item in listIndex">
				<Cell :cellItem=item.value></Cell>
			</li>
		</ul>
	</div>	
</template>

<script>
import sunplazaEntrys from './sunplazaEntrys'
import Cell from '@/components/commons/Cell'
export default {
	components: {sunplazaEntrys,Cell},
	data(){
		return {
			listIndex:[],
			sunEs:[] //sunplazaEntrys组件数据
		}
	},
	created(){
		console.log('创建精选组件');
		this.$http.get('/api/JingXuan').then((response)=>{
			response = response.data;
			if (response.errno == 0) {
				this.listIndex = response.data.listIndex;
				this.sunEs = response.data.sunplazaEntrys;
			}
		})
	}
}
</script>

<style lang="scss">
	#JX {
	}
</style>