import DscvPage from '../pages/DscvPage.vue'
import TypePage from '../pages/TypePage.vue'
import RcmdPage from '../pages/RcmdPage.vue'
import SearchPage from '../pages/SearchPage.vue'
import TopPage from '../pages/TopPage.vue'
import PostPage from '../pages/PostPage.vue'
import PidPage from '../pages/PidPage.vue'
import HomePage from '../pages/HomePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/discover', name: 'discover', component: DscvPage },
    { path: '/discover/:type', name: 'type', component: TypePage },
    { path: '/recommend', name: 'recommend', component: RcmdPage },
    { path: '/search', name: 'search', component: SearchPage },
    { path: '/top', name: 'top', component: TopPage },
    { path: '/post', name: 'post', component: PostPage },
    { path: '/post/:pid', name: 'pid', component: PidPage },
    { path: '/', name: 'home', component: HomePage }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})