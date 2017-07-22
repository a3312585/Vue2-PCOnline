<template>
	<div id="homeNavBar">
		<ul>
			<!-- <router-link v-for="(item,index) in navTitleList" :to=item> -->
				<li v-for="(item,index) in navTitleList" @click="toRoute(item,index)" :class="{active:isActive==index,'defaultSelected':defaultSelected==item}" >
					{{index}}
				</li>				
			<!-- </router-link> -->
		</ul>
	</div>
</template>
<script>
export default {
	data(){
		return {
			navTitleList:{
				"精选": '/home/JingXuan',
				"优惠": '/home/YouHui',
				"海淘": '/home/HaiTao',
				"发现": '/home/FaXian',
				"原创": '/home/YuanChuang'
			},
			isActive:1
		}
	},
	methods: {
		toRoute(item,index){
			this.$router.push(item);
			this.isActive = index;
			this.$store.dispatch('update_Last_Selected_index',item)
		}
	},
	computed: {
		defaultSelected(){
			return this.$store.getters.GET_LAST_SELECTED_INDEX;
		}
	}
}
</script>

<style lang="scss" scoped>
	#homeNavBar {
		height: 44px;
		background: white;
		ul {
			display: flex;
			color: gray;
			li {
				flex-grow:1; 
				display: flex;
				justify-content: center;
				height: 44px;
				line-height: 44px;
			}
		}
	}
	.active {
		border-bottom: 1px solid red;
		color:red;
	}
	.defaultSelected{
		border-bottom: 1px solid red;
		color:red;
	}
</style>


