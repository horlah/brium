import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SidebarStore from './store/sidebar'

Vue.config.productionTip = false

new Vue({
    router,
    store: SidebarStore,
    render: h => h(App)
}).$mount('#app')
