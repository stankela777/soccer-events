import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import Base from './Modules/Base/Base';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
	namespaced: true,
	modules: {
		Base: Base,
	},
	strict: debug,
	plugins: debug ? [createLogger()] : [],
});
