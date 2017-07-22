<template>
	<div id="cell">
		<ul>
			<li v-for="item in dataList">
				<div class="img">
					<img :src=item.hdCover alt="">
				</div>
				<div class="intro">
					<div class="introLeft">
						{{item.pubDate | getDate}}
					</div>
					<div class="introRight">
						<span>{{item.title}}</span>
						<span style="color:gray">{{item.synopsis | getSynopsis}}</span>
						<span style="font-size:10px;">
							<span>{{item.createName}}</span>
						</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['dataList'],
	filters: {
		getDate(val){
			console.log(val);
			// 转换成时间对象
			var pubDate = new Date(val).toString();
			var pubDateArr = pubDate.split(' ');
			if (parseInt(pubDateArr[2])<10) {
				return pubDateArr[2].slice(1,2);
			}else{
				return pubDateArr[2];
			}
		},
		getSynopsis(val){
			return val.slice(0,36)+".."
		}
	}

}
</script>

<style scoped lang="scss">
	#cell {
	
	}
	li {
		margin-bottom: 10px;
	}
	.img {
		display: flex;
		align-items: center;
		justify-content: center;
		background:white;		
	}
	.intro {
		display: flex;
		min-height: 120px;
		background: white;
		padding: 5px;
		.introLeft {
			width: 15%;
			display: flex;
			justify-content: center;
		}
		.introRight {
			width: 85%;
			display: flex;
			flex-direction: column;
			span {
				flex:1;
				display: flex;
				span {
					flex:1;
					align-items:center;
				}
			}
		}
	}

</style>
















