<template>
	<div id="Cell">
		<div class="cellLeft" >
			<img :src=cellItem.cover alt="">
		</div>
		<div class="cellRight">
			<span >{{cellItem.title}}</span>
			<span style="color:red">{{cellItem.price}}</span>
			<div>
				<span style="font-size:12px">{{cellItem.mallName}}</span>
				<span style="font-size:12px">{{cellItem.pubDate}}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["cellItem"],
	created(){
		console.log(cellItem);
	}
}
</script>

<style lang="scss">
	#Cell {
		display: flex;
		flex-direction: rows;
		margin-bottom:1px;
		background: white;
		.cellLeft {
			width: 45%;
			display: flex;
			padding: 10px;
		}
		.cellRight {
			width: 55%;
			display: flex;
			flex-direction: column;
			padding-top:10px;
			padding-bottom:10px;
			color:gray;
			span {
				flex-grow:1;
				overflow:hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>