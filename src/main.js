import Vue from 'vue'
import App from './App.vue'
import store from '../store';
import {func} from './shared/global';

// global functions
Vue.prototype.$ds = func;
Vue.config.productionTip = false

const createNewVueInstance = function(id, component, store) {
	if (document.getElementById(id)) {
		new Vue({ // eslint-disable-line no-new
			el: `#${id}`,
			render: (createEl) => createEl(component),
			store,
		});
	}
};

// create an example block
createNewVueInstance('app', App, store);

