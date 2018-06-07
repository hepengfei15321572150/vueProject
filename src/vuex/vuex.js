import Vue from 'vue';
import VueResource from 'vue-resource'

const state = {
	//底部导航
	footerTabList:[
		{
			icon:'static/img/1.png',
			text:'书架'
		},
		{
			icon:'static/img/1.png',
			text:'精选'
		},
		{
			icon:'static/img/1.png',
			text:'书城'
		},
		{
			icon:'static/img/1.png',
			text:'我的'
		}
	],
	
	//精选页数据
	selectedData:{
		//头部导航右侧按钮
		headerMenuList:[
			{
				icon:'static/img/1.png',
				text:'搜索2'
			}
		],
		//logo图地址
		logoImg:'static/img/1.png',
		//banner图地址
		bannerImg:['static/img/1.png','static/img/1.png','static/img/1.png'],
		//分类导航
		tabBarList:['A类','B类','C类','D类','E类'],
		
		//中间四个分类
		labelList:[
			{
				icon:'static/img/1.png',
				text:'A类'
			},
			{
				icon:'static/img/1.png',
				text:'b类'
			},
			{
				icon:'static/img/1.png',
				text:'c类'
			},
			{
				icon:'static/img/1.png',
				text:'D类'
			}
		],
		//下方书的数据
		dataSource:[
			{
				title:'小编专区',
				templateType:1,
				data:[
					{
						bookName:'书本1',
						lvNumber:'4分',
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						bookImg:'static/img/1.png'
					}
				]
			},
			{
				title:'大神专区',
				templateType:2,
				data:[
					{
						bookName:'书本1',
						lvNumber:'4分',
						explain:'我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~',
						bookImg:'static/img/1.png',
						createUserName:'啦啦啦',
						tags:['标签1','标签2','标签3'],
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						explain:'我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~',
						bookImg:'static/img/1.png',
						createUserName:'啦啦啦',
						tags:['标签1','标签2','标签3'],
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						explain:'我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~',
						bookImg:'static/img/1.png',
						createUserName:'啦啦啦',
						tags:['标签1','标签2','标签3'],
						bookImg:'static/img/1.png'
					}
				]
			},
			{
				title:'短篇推荐',
				templateType:3,
				data:[
					{
						bookName:'书本1',
						lvNumber:'4分',
						explain:'我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~',
						bookImg:'static/img/1.png',
						createUserName:'啦啦啦',
						tags:['标签1','标签2','标签3'],
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						explain:'我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~',
						bookImg:'static/img/1.png',
						createUserName:'啦啦啦',
						tags:['标签1','标签2','标签3'],
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						explain:'我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~',
						bookImg:'static/img/1.png',
						createUserName:'啦啦啦',
						tags:['标签1','标签2','标签3'],
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						explain:'我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~',
						bookImg:'static/img/1.png',
						createUserName:'啦啦啦',
						tags:['标签1','标签2','标签3'],
						bookImg:'static/img/1.png'
					}
				]
			},
			{
				title:'新作快递',
				templateType:4,
				data:[
					{
						bookName:'书本1',
						lvNumber:'4分',
						explain:'我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~',
						bookImg:'static/img/1.png',
						createUserName:'啦啦啦',
						tags:['标签1','标签2','标签3'],
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						explain:'我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~',
						bookImg:'static/img/1.png',
						createUserName:'啦啦啦',
						tags:['标签1','标签2','标签3'],
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						explain:'我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~',
						bookImg:'static/img/1.png',
						createUserName:'啦啦啦',
						tags:['标签1','标签2','标签3'],
						bookImg:'static/img/1.png'
					},
					{
						bookName:'书本1',
						lvNumber:'4分',
						explain:'我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~我是书的简介啦啦啦~~~',
						bookImg:'static/img/1.png',
						createUserName:'啦啦啦',
						tags:['标签1','标签2','标签3'],
						bookImg:'static/img/1.png'
					}
				]
			}
		]	
	}
};

const getters = {
	
};

const mutations = {
	
};

const actions = {
	getAjax(state,params){
		let url = params.url;
		let data = params.data;
		Vue.http.get(
			url,
			{
				params:data
			}
		).then((result)=>{
			params.success && params.success(result.body);
		},(err)=>{
			params.error && params.error(err);
		});
	},
	postAjax(state,params){
		let url = params.url;
		let data = params.data;
		
		Vue.http.post(
			url,
			data
		).then((result)=>{
			params.success && params.success(result.body);
		},(err)=>{
			params.error && params.error(err);
		});
	},
}

export { state,getters,mutations,actions };
