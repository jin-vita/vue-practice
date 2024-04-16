import {createRouter, createWebHistory} from "vue-router";
import HomeView from "./HomeView.vue";
import MovieView from "./MovieView.vue";
import AboutView from "./AboutView.vue";

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/movie',   //추가된 내용
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