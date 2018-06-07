<template>
	<div class="tab_bar">
		<ul class="clearfix">
			<li 
				:class="index==checkedIndex?'active':''"
				v-for="(item,index) in dataList" 
				:style="w" 
				@click="translate(index)"
			>{{item}}</li>
			<li class="move" :style="[w,translateX]">
				<div></div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	props:[ 'dataList' ],
	data(){
		return {
			checkedIndex:0
		}
	},
	computed:{
		w(){
			let _this = this;
			return {
				width:100/_this.dataList.length+'%'
			}
		},
		translateX(){
			let _this = this;
			return {
				transform:'translateX('+_this.checkedIndex*100+'%)'
			}
		}
	},
	methods:{
		translate(index){
			this.checkedIndex = index;
		}
	}
}
</script>
<style lang="less" scoped>
/*@import '../assets/style/style.less';*/

.tab_bar{
	font-size: 16px;
	padding: 0 10px;
	ul{
		position: relative;
		li.active{
			color:#333;
			font-weight: 700;
		}
		li{
			float:left;
			line-height: 34px;
			text-align: center;
			color:#2A2A2A;
		}
		li.move{
			position:absolute;
			height: 4px;
			bottom:0;
			left:0;
			transition: .3s transform;
			div{
				background: red;	
				height: 100%;
				width: 30%;
				margin: 0 auto;
			}
		}
	}
}
</style>