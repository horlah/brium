import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        collapseSideBar: false,
        activeModal: '',
        showModal: false,
        user: {
            isUserLoggedIn: false,
            data: null
        },
        userToken: ''
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
        },
        GetUserData: state => {
            return state.user;
        },
        GetUserLoginState: state => {
            return state.user.isUserLoggedIn;
        },
        GetUserToken: state => {
            return state.userToken;
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
        },
        UPDATE_LOGIN_STATE: (state, payload) => {
            state.user.isUserLoggedIn = payload;
        },
        UPDATE_USER_DATA: (state, payload) => {
            state.user.data = payload;
        },
        SET_USER_TOKEN: (state, payload) => {
            state.userToken = payload;
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
        },
        SET_USER_DATA: (context, payload) => {
            context.commit('UPDATE_LOGIN_STATE', payload !== null);
            if (payload) {
                context.commit('UPDATE_USER_DATA', {
                    displayName: payload.displayName,
                    email: payload.email
                });
            } else {
                context.commit('UPDATE_USER_DATA', null);
            }
        }
    }
});
