<template>
	<div class="title">
		{{title}}
	</div>
</template>
<script>
export default{
	props:[ 'title' ]
}
</script>
<style lang="less" scoped>
/*@import '../assets/style/style.less';*/

.title{
	font-size: 20px;
	line-height: 40px;
	padding: 0 10px;
	color: #333333;
	letter-spacing: 0.08px;
}
</style>