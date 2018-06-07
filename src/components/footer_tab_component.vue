<template>
	<div class="footer_tab_bar">
		<ul class="clearfix">
			<li v-for="item in list" :style="w">
				<div>
					<img :src="item.icon" alt="" />
				</div>
				<p>{{item.text}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	props:[ 'list' ],
	computed:{
		w(){
			let _this = this;
			return {
				width:100/_this.list.length+'%'
			}
		}
	}
}
</script>
<style lang="less" scoped>
/*@import '../assets/style/style.less';*/

.footer_tab_bar{
	border-top:1px solid #ccc;
	box-sizing: border-box;
	ul{
		li{
			padding-top: 10px;
			box-sizing: border-box;
			float:left;
			text-align: center;
			div{
				width:20px;
				height: 20px;
				overflow:hidden;
				margin: 0 auto;
				img{
					width: 100%;
				}	
			}
			p{
				line-height: 20px;
			}
		}
	}
}
</style>