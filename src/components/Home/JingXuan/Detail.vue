<template>
	<div id="detail">
		<iframe :src=atURL class="tb">
			
		</iframe>
	</div>
</template>

<script>
export default {
	data(){
		return {
			topicId: this.$route.query.topicId
		}
	},
	computed:{
		atURL(){
			return "https://mrobot.pconline.com.cn/s-1800/best/cms/topicDetailv2.xsp?topicId="+this.topicId;
		}
	}
}
</script>

<style lang="scss">
	#detail {
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		bottom: 64px;
		z-index: 100;
		.tb {
			height: 100%;
		}
	}
</style>