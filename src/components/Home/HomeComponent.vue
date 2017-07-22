<template>
	<div id="home">
		<ScrollAD></ScrollAD>
		<HomeNavBar></HomeNavBar>
		<!-- <JingXuan v-if="showJX"></JingXuan> -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
import ScrollAD from '@/components/commons/ScrollAD'
import HomeNavBar from './HomeNavBar'
import JingXuan from '@/components/home/JingXuan/JingXuan'
export default {
	components: {ScrollAD,HomeNavBar,JingXuan},
	data(){
		return {
			showJX: true
		}
	},
	created(){
		this.$router.push(this.$store.getters.GET_LAST_SELECTED_INDEX)
	},
	watch:{
		'$route'(to,from){
			
		}
	}
}
</script>

<style lang="scss">
	#home {
		display: flex;
		flex-direction: column;
		margin-bottom: 44px;
	}
</style>