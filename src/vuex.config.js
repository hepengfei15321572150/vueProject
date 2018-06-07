import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { state,getters,mutations,actions } from './vuex/vuex.js';

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
});
