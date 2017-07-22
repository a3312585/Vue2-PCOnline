<template>
	<div id="FaXian">
		<ul>
			<li v-for="item in dataList" class="items">
				<img :src=item.cover alt="">
				<span class="title">{{item.title}}</span>
				<span style="color:red">{{item.price}}</span>
				<span style="font-size:10px">{{item.mallName}}</span>
			</li>

			<li id="loadding">
				<span>loading....</span>
			</li>
		</ul>
	</div>
</template>

<script>


var body = document.getElementsByTagName('body')[0];
var runOnce = false;
window.onscroll =function(){
	//变量t是滚动条滚动时，距离顶部的距离
    var t = document.documentElement.scrollTop||document.body.scrollTop;
    var loading = document.getElementById('loadding');
	var lis = document.getElementsByClassName('items');
	console.log(lis.length);
	if ((t+window.outerHeight)>=(body.clientHeight-64-30) && runOnce == false) {
		console.log('已经到达底部了,可以在这里更新数据');
		runOnce = true;
	}
	console.log('body的高度为'+(body.clientHeight-64-30));
}
export default {
	data(){
		return {
			dataList: []
		}
	},
	created(){
		this.$http.get('/api/FaXian').then((response)=>{
			response = response.data;
			if (response.errno == 0) {
				this.dataList = response.data.data;
			}
		})
	}
}
</script>

<style lang="scss">
	#FaXian {
		background: white;
		ul {
			display: flex;
			flex-wrap: wrap;
			li {
				width: 50%;
				color:gray;
				display: flex;
				flex-direction: column;
				padding: 5px;
				.title {
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}
			}
		}
	}
</style>