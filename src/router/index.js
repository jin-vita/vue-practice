import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";
import MovieView from "../view/MovieView.vue";
import AboutView from "../view/AboutView.vue";

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/movie',
        component: MovieView
    },
    {
        path: '/about',
        component: AboutView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router