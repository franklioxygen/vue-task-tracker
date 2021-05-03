import {createRouter, createWebHistory} from 'vue-router';
import Home from '../views/Home';
import ABout from '../views/About';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: ABout
    }
]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;