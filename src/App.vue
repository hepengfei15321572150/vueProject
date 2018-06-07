<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	data(){
		return{
			
		}
	}
}
</script>

<style>
@import './assets/style/reset.css';


*{
	padding: 0;
	margin:0;	
}
ul{
	list-style: none;
}
body{
	font:12px/12px "微软雅黑";
}
.clearfix:after{
	display: block;
	content: "";
	clear:both;
}


body,html{
	width: 100%;
	height:100%;
	overflow: hidden;
}
#app>div{
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
}
#app,#wrap_box{
	position: fixed;
	left:0;
	top:0;
	right: 0;
	bottom:0;
	z-index:1;
	background: #fff;
}
#wrap_box{
	overflow: auto;
	-webkit-overflow-scrolling : touch;
}
</style>