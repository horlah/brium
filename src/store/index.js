import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        collapseSideBar: false,
        activeModal: '',
        showModal: false
    },
    getters: {
        SidebarState: state => {
            return state.collapseSideBar;
        },
        ActiveModalState: state => {
            return state.activeModal;
        },
        ShowModalState: state => {
            return state.showModal;
        }
    },
    mutations: {
        TOGGLE_SIDEBAR_STATE: (state, payload) => {
            state.collapseSideBar = payload;
        },
        SET_ACTIVE_MODAL_STATE: (state, payload) => {
            state.activeModal = payload;
        },
        TOGGLE_MODAL_STATE: (state, payload) => {
            state.showModal = payload;
        }
    },
    actions: {
        SET_SIDEBAR_STATE: (context, payload) => {
            context.commit('TOGGLE_SIDEBAR_STATE', payload);
        },
        SET_ACTIVE_MODAL_STATE: (context, payload) => {
            context.commit('SET_ACTIVE_MODAL_STATE', payload);
        },
        SET_MODAL_STATE: (context, payload) => {
            context.commit('TOGGLE_MODAL_STATE', payload);
        }
    }
});
