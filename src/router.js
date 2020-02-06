import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('./views/App.vue'),
            redirect: '/login',
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
                    component: () => import('./views/pages/driver/Drivers.vue'),
                    redirect: '/drivers/all-drivers',
                    children: [
                        {
                            path: '/drivers/all-drivers',
                            name: 'all-drivers',
                            component: () => import('./views/pages/driver/All-Drivers.vue')
                        },
                        {
                            path: '/drivers/driver',
                            name: 'driver',
                            component: () => import('./views/pages/driver/Driver.vue')
                        }
                    ]
                },
                {
                    path: '/manual-dispatch',
                    name: 'manual-dispatch',
                    component: () => import('./views/pages/Manuel-Dispatch.vue')
                },
                {
                    path: '/passengers',
                    name: 'passengers',
                    component: () => import('./views/pages/passenger/Passengers.vue'),
                    redirect: '/passengers/all-passengers',
                    children: [
                        {
                            path: '/passengers/all-passengers',
                            name: 'all-passengers',
                            component: () => import('./views/pages/passenger/All-Passengers.vue')
                        },
                        {
                            path: '/passengers/passenger',
                            name: 'passenger',
                            component: () => import('./views/pages/passenger/Passenger.vue')
                        }
                    ]
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
                    component: () => import('./views/pages/vehicle/Vehicles.vue'),
                    redirect: '/vehicles/all-vehicles',
                    children: [
                        {
                            path: '/vehicles/all-vehicles',
                            name: 'all-vehicles',
                            component: () => import('./views/pages/vehicle/All-Vehicles.vue')
                        },
                        {
                            path: '/vehicles/vehicle',
                            name: 'vehicle',
                            component: () => import('./views/pages/vehicle/Vehicle.vue')
                        }
                    ]
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
});
