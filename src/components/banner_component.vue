<template>
	<div class="banner swiper-container">
		<div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="item in dataList">
		    		<img :src="item" alt="" />
		    </div>
		</div>
		<!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
	</div>
</template>
<script>
export default{
	props:[ 'dataList' ],
	mounted(){
		let mySwiper = new Swiper('.swiper-container', {
			loop:true,//循环
			direction:'horizontal',//滑动方向，
			autoplay: 5000,//自动滑动的时间
			initialSlide:1,//初始化时候slide的索引（从0开始）
			spaceBetween : 14,
			autoplayDisableOnInteraction : false,//手动滑动之后继续滑动
			slidesPerView:1.2,//一个父容器内可显示的数量（默认是1个）
			centeredSlides:true,//滑块居中
			observer:true,//修改swiper自己或子元素时，自动初始化swiper,一般用于动态添加图片时切换不正常的问题
		 	observeParents:true,//修改swiper的父元素时，自动初始化swiper，一般用于动态添加图片时切换不正常的问题 
		 	watchSlidesProgress : true,
//		 	onProgress(swiper){
//		 		
//				for( let i = 0; i < swiper.slides.length; i++){
//					var slideItem = swiper.slides[i]; 
//					var progress = slideItem.progress;
//					
//					var scale = 1 - Math.min(Math.abs(.8 * progress), 1);
//					
//					slideItem.style.opacity = 1 - Math.min(Math.abs(progress / 1.4), 1);
//					slideItem.style.webkitTransform = slideItem.style.transform = "translateZ(" + -Math.abs(250 * progress) + "px)";
//				};
//		 	},
//		 	onSetTransition: function(swiper, b) {
//				for(var i = 0; i < swiper.slides.length; i++) {
//					var slideItem = swiper.slides[i];
//					slideItem.style.webkitTransitionDuration = slideItem.style.transitionDuration = b + "ms";
//				};
//			}
		});
		
//		mySawiper.on('onSlideChangeStart',()=>{
//			console.log(mySwiper.slides[1].progress)
//		});
	}
}
</script>
<style lang="less" scoped>
/*@import '../assets/style/style.less';*/

.banner{
	height: 200px;
	perspective: 2000px;
	
	
	
	.swiper-wrapper{
		transform-style: preserve-3d;
		perspective-origin:center;	
		
		.swiper-slide{
			/*transform:scale(.9);*/
		}		
	}

	img{
		width: 100%;
	}
}
</style>