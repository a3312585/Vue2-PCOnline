<template>
	<div id="tabbar">
		<ul>
			<router-link to='/home'><li>首页</li></router-link>
			<router-link to='/category'><li>分类</li></router-link>
			<router-link to='/profile'><li>我的</li></router-link>
		</ul>
	</div>
</template>

<script>
export default {

}
</script>

<!-- sass -->
<style lang="scss">
	#tabbar {
		height: 44px;
		width: 100%;
		background: rgb(235,235,235);
		position: fixed;
		bottom: 0px;
		ul {
			display: flex;
			a {
				flex:1;
				display: flex;
				justify-content: center;
				height: 44px;
				line-height: 44px;
			}
		}
	}
</style>