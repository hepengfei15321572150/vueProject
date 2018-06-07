import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import selected from './router/selected_router';

export default new VueRouter({
	routes:[
		{
			path:'/selected',
			component:selected
		}
	]
});
