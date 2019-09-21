import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('./views/App.vue'),
            redirect: '/dashboard',
            children: [
                {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: () => import('./views/pages/Dashboard.vue')
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import('./views/Login.vue')
        }
    ]
})
