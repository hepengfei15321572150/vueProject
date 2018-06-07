<template>
	<div class="header">
		<div class="back" v-if="showBack">
			<img src="static/img/back.png" alt="" />
			<span>返回</span>
		</div>
		<div class="logo" v-if="showLogo">
			<img :src="logoImg" alt="" />
		</div>
		<div class="menu_list clearFix">
			<div class="list_item" v-for="item in menuList">
				<div>
					<img :src="item.icon" alt="" />
				</div>
				<div>{{item.text}}</div>
			</div>
		</div>
	</div>
</template>
<script>
export default{
	props:[ 'showLogo','showBack','menuList','logoImg' ]
}
</script>
<style lang="less" scoped>
/*@import '../assets/style/style.less';*/

.header{
	height:60px;
	overflow: hidden;
	border-bottom: 1px solid #ccc;
	padding: 10px;
	box-sizing: border-box;
	.back{
		float:left;
		img{
			width: 20px;
			height: 20px;
			vertical-align: middle;
		}
		span{
			vertical-align: middle;
			font-size: 16px;
			line-height: 40px;
		}
	}
	.logo{
		max-width: 200px;
		float:left;
		height: 40px;
		overflow: hidden;
		img{
			width: 100%;
		}
	}
	.menu_list{
		float:right;
		.list_item{
			float:left;
			margin-left:10px;
			text-align:center;
			div:nth-of-type(1){
				width:30px;
				height:30px;
				margin: 0 auto;
				img{
					width: 100%;
					height: 100%;
				}
			}
			div:nth-of-type(2){
				line-height: 20px;
			}
		}
	}
}
</style>