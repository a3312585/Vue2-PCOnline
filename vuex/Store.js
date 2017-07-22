import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	lastSelectedIndex:0
}

const getters = {
	GET_LAST_SELECTED_INDEX(state){
		return state.lastSelectedIndex
	}
}

const mutations = {
	SET_LAST_SELECTED_INDEX(state,content){
		state.lastSelectedIndex = content;
	}
}

const actions = {
	update_Last_Selected_index({commit},content){
		commit('SET_LAST_SELECTED_INDEX',content)
	}
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})