import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Store from './store';

import * as firebase from 'firebase';

Vue.config.productionTip = false;

const configOptions = {
    apiKey: 'AIzaSyBbiuSOVIPrfrfwo2olQx0kwmSPXkgefj0',
    authDomain: 'briumapp.firebaseapp.com',
    databaseURL: 'https://briumapp.firebaseio.com',
    projectId: 'briumapp',
    storageBucket: 'briumapp.appspot.com',
    messagingSenderId: '173106785806',
    appId: '1:173106785806:web:40aa54ba23fea8899c965f'
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
    Store.dispatch('SET_USER_DATA', user);
});

new Vue({
    router,
    store: Store,
    render: h => h(App)
}).$mount('#app');
