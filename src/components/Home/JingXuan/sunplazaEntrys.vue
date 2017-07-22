<template>
	<div id="spe">
		<div class="cloumn">
			<ul>
				<li v-for="(item,index) in sunEs" v-if="index<2">
					<img :src=item.icon alt="">
				</li>
			</ul>
		</div>
		<div class="cloumn">
			<ul>
				<li v-for="(item,index) in sunEs" v-if="index>=2">
					<img :src=item.icon alt="">
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
export default {
	props: ['sunEs']
}
</script>

<style lang="scss">
	#spe {
		display: flex;
		flex-direction: column;
		background: white;
		margin-bottom: 10px;
		ul{
			display: flex;
			justify-content: space-between;
			li {
				padding: 5px;
			}
		}
	}
</style>








