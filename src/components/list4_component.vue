<template>
	<!--
		:dataList:数据列表
		:maxColumns:一行展示最大列数
		:modelType:模式类型，0：到头折行，1：到头不折行
	-->
	<div class="list_box">
		<ul class="list3 clearfix" :style="boxWidth">
			<li class="clearfix" v-for="item in dataList" :style="w">
				<div class="item_box clearfix">
					<div class="book_img">
						<img :src="item.bookImg" alt="" />
					</div>
					<div class="book_content">
						<div class="book_name">{{item.bookName}}</div>
						<div class="create_user_name">{{item.createUserName}}</div>
						<div class="lv_number">{{item.lvNumber}}</div>
					</div>
				</div>
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
					width:144+'px'
				}
			};
		},
		//总父级的宽度
		boxWidth(){
			let len = this.dataList.length;

			//如果为到头不折行模式
			if( this.modelType == 1 ){
				return{
					width:len*144+'px'
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
	.list3{
		li{
			float:left;
			margin: 10px 0;
			padding: 10px 10px;
			box-sizing: border-box;
			.item_box{
				padding:10px 10px;
				box-shadow: 0 0 2px 2px #ccc;
				text-align: center;
				.book_img{
					width:100%;
					max-height: 120px;
					img{
						width: 80%;
						max-width: 90px;
					}
				}
				.book_content{
					.book_name{
						line-height: 20px;
						color: #333333;
						font-size: 16px;
					}
					.create_user_name{
						margin-top: 6px;
						font-size: 14px;
						color: #4B4B4B;
					}
					.lv_number{
						margin-top: 6px;
						color: #666666;
					}
				}	
			}
		}
	}	
}
</style>