import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        collapseSideBar: false
    },
    getters: {
        SidebarState: state => {
            return state.collapseSideBar
        }
    },
    mutations: {
        TOGGLE_SIDEBAR_STATE: (state, payload) => {
            state.collapseSideBar = payload
        }
    },
    actions: {
        SET_SIDEBAR_STATE: (context, payload) => {
            context.commit('TOGGLE_SIDEBAR_STATE', payload)
        }
    }
})
