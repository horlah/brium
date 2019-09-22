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
                },
                {
                    path: '/trips',
                    name: 'trips',
                    component: () => import('./views/pages/Trip.vue')
                },
                {
                    path: '/drivers',
                    name: 'drivers',
                    component: () => import('./views/pages/Drivers.vue')
                },
                {
                    path: '/manual-dispatch',
                    name: 'manual-dispatch',
                    component: () => import('./views/pages/Manuel-Dispatch.vue')
                },
                {
                    path: '/passengers',
                    name: 'passengers',
                    component: () => import('./views/pages/Passengers.vue')
                },
                {
                    path: '/price-management',
                    name: 'price-management',
                    component: () => import('./views/pages/Price-Management.vue')
                },
                {
                    path: '/reports',
                    name: 'reports',
                    component: () => import('./views/pages/Reports.vue')
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: () => import('./views/pages/Settings.vue')
                },
                {
                    path: '/vehicles',
                    name: 'vehicles',
                    component: () => import('./views/pages/Vehicles.vue')
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
