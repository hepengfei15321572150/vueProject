<template>
	<ul class="label clearfix">
		<li v-for="item in dataList" :style="w">
			<div>
				<img :src="item.icon" alt="" />
			</div>
			<p>{{item.text}}</p>
		</li>
	</ul>
</template>
<script>
export default{
	props:[ 'dataList' ],
	computed:{
		w(){
			let _this = this;
			return {
				width:100/_this.dataList.length+'%'
			}
		}
	}
}
</script>
<style lang="less" scoped>
/*@import '../assets/style/style.less';*/

.label{
	li{
		width:25%;
		float:left;
		text-align: center;
		div{
			width: 60px;
			height: 60px;
			overflow: hidden;
			margin: 0 auto;
			border-radius:50%;
			img{
				width: 100%;
			}
		}
		p{
			line-height: 30px;
			font-size: 14px;
		}
	}
}
</style>