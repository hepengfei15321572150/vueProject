<template>
	<!--
		:dataList:数据列表
		:maxColumns:一行展示最大列数
		:modelType:模式类型，0：到头折行，1：到头不折行
	-->
	<div class="list_box">
		<ul class="list1 clearfix" :style="boxWidth">
			<li v-for="item in dataList" :style="w">
				<div class="book_img">
					<img :src="item.bookImg" alt="" />
				</div>		
				<p class="book_name">{{item.bookName}}</p>
				<div class="book_lv">{{item.lvNumber}}</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	props:['dataList','maxColumns','modelType'],
	computed:{
		//每一个li的宽度
		w(){
			let len = this.dataList.length;
			let maxColumns = this.maxColumns?this.maxColumns:3;
			
			//如果为折行模式
			if( this.modelType == 0 ){
				return{
					width:100/(maxColumns)+'%'
				}
			}else{
				return{
					width:164+'px'
				}
			};
		},
		//总父级的宽度
		boxWidth(){
			let len = this.dataList.length;

			//如果为到头不折行模式
			if( this.modelType == 1 ){
				return{
					width:len*164+'px'
				}
			};
		}
	}
}
</script>
<style lang="less" scoped>
/*@import '../assets/style/style.less';*/

.list_box{
	width: 100%;
	overflow-x: auto;
	-webkit-overflow-scrolling : touch;
	.list1{
		li{
			padding: 10px;
			box-sizing: border-box;
			float:left;
			overflow: hidden;
			.book_img{
				max-width: 164px;
				max-height:250px;
				overflow:hidden;
				margin:0 auto;
				img{
					width: 100%;
				}
			}
			.book_name{
				margin-top: 10px;
				line-height: 26px;
				font-size: 16px;
				color: #333333;
			}
			.book_lv{
				line-height: 16px;
			}
		}
	}	
}
</style>