<template>
	<!-- 精选页面 -->
	<div id="selected">
		<!-- 头部 -->
		<div id="header_box">
			<constom-header
				:showLogo="true"
				:menuList="stateData.headerMenuList"
				:logoImg="stateData.logoImg"
			></constom-header>
		</div>
		
		<div id="wrap_box">
			<!-- 导航 -->
			<div class="tab_bar_box">
				<tab-list
					:dataList="stateData.tabBarList"
				></tab-list>
			</div>
			
			<!-- 轮播 -->
			<banner
				:dataList="stateData.bannerImg"
			></banner>
			
			<!-- 中间四个标签 -->
			<div class="label_box">
				<label-list
					:dataList="stateData.labelList"
				></label-list>
			</div>
			
			<!-- 最近阅读 -->
			<div class="lately_read_position clearfix">
				<div class="icon">
					<img src="static/img/1.png" alt="" />
				</div>
				<div>我是一段文字啦啦啦~~~我是一段文字啦啦啦~~~我是一段文字啦啦啦~~~</div>
				<div>继续阅读</div>
			</div>
			
			<div class="section_box" v-for="(item,i) in stateData.dataSource">
				<!-- 第一个模板 -->
				<template v-if="item.templateType == 1">
					<constom-title
						:title="item.title"	
					></constom-title>
					<list1
						:maxColumns="3"
						:modelType="0"
						:dataList="item.data"
					></list1>
					<constom-line v-if="i!=stateData.dataSource.length-1"></constom-line>
				</template>
				
				<!-- 第二个模板 -->
				<template v-if="item.templateType == 2">
					<constom-title
						:title="item.title"	
					></constom-title>
					<list2
						:maxColumns="1"
						:modelType="0"
						:dataList="item.data"
					></list2>
					<constom-line v-if="i!=stateData.dataSource.length-1"></constom-line>
				</template>
				
				<!-- 第三个模板 -->
				<template v-if="item.templateType == 3">
					<constom-title
						:title="item.title"	
					></constom-title>
					<list3
						:maxColumns="2"
						:modelType="0"
						:dataList="item.data"
					></list3>
					<constom-line v-if="i!=stateData.dataSource.length-1"></constom-line>
				</template>
				
				<!-- 第四个模板 -->
				<template v-if="item.templateType == 4">
					<constom-title
						:title="item.title"	
					></constom-title>
					<list4
						:maxColumns="2"
						:modelType="1"
						:dataList="item.data"
					></list4>
					<constom-line v-if="i!=stateData.dataSource.length-1"></constom-line>
				</template>
			
			</div>
		</div>
		
		<!-- 底部导航 -->
		<div id="footer_box">
			<footer-tab
				:list="$store.state.footerTabList"
			></footer-tab>
		</div>
	</div>
</template>
<script>
import constomHeader from '../components/header_component';
import constomTitle from '../components/title_component';
import constomLine from '../components/line_component';
import list1 from '../components/list1_component';
import list2 from '../components/list2_component';
import list3 from '../components/list3_component';
import list4 from '../components/list4_component';
import tabList from '../components/tab_list_component';
import footerTab from '../components/footer_tab_component';
import banner from '../components/banner_component';
import labelList from '../components/label_component';
export default{
	components:{ constomTitle,constomHeader,list1,list2,list3,list4,constomLine,tabList,footerTab,banner,labelList },
	data(){
		return{
			
		}
	},
	computed:{
		stateData(){
			return this.$store.state.selectedData
		}
	}
}
</script>
<style lang="less" scoped>
/*@import '../assets/style/style.less';*/

#selected{
	#header_box{
		position: fixed;
		top:0;
		left:0;
		right:0;
		height: 60px;
		z-index:2;
		background: #fff;
	}
	#wrap_box{
		top:60px;
		bottom: 50px;
		.tab_bar_box{
			padding: 10px 0;
		}
		.label_box{
			margin-top:20px;
		}
		.section_box{
			margin-top:20px;
		}
		
		.lately_read_position{
			padding:10px;
			margin:10px 0;
			line-height: 30px;
			font-size: 14px;
			background-color: #FAFAFA;
			.icon{
				float:left;
				width: 30px;
				height:30px;
				overflow:hidden;
				img{
					width: 100%;
				}
			}
			div:nth-of-type(2){
				float:left;
				margin-left:10px;
				overflow: hidden;
				height: 30px;
				max-width:calc(~"100% - 120px");
			}
			div:nth-of-type(3){
				float:left;
				width: 60px;
				text-align: right;
				color: red;
			}
		}
	}
	#footer_box{
		position: fixed;
		left:0;
		right:0;
		bottom:0;
		height: 50px;
		z-index:2;
		background: #fff;
	}
}
</style>