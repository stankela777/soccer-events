/**
 * Base Store Module
 *
 * @description Store state, mutations, actions and getters for steps.
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
	namespaced: false,
	state: {
		title: 'example title',
	},
	mutations: {
		SET_TITLE(state, title) {
			state.title = title;
		},
	},
	actions: {
		setTitle(context, title) {
			context.commit('SET_TITLE', title);
		},
	},
	getters: {
		getTile(state) {
			return state.title;
		},
	}
};
