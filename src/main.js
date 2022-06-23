import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'  //图片懒加载插件
import { createRouter, createWebHashHistory } from 'vue-router'
import DscvPage from './pages/DscvPage.vue'
import TypePage from './pages/TypePage.vue'
import RcmdPage from './pages/RcmdPage.vue'
import SearchPage from './pages/SearchPage.vue'
import TopPage from './pages/TopPage.vue'
import PostPage from './pages/PostPage.vue'
import PidPage from './pages/PidPage.vue'

const routes = [
    { path: '/discover', name: 'discover', component: DscvPage },
    { path: '/discover/:type', name: 'type', component: TypePage },
    { path: '/recommend', name: 'recommend', component: RcmdPage },
    { path: '/search', name: 'search', component: SearchPage },
    { path: '/top', name: 'top', component: TopPage },
    { path: '/post', name: 'post', component: PostPage },
    { path: '/post/:pid', name:'pid', component: PidPage}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

createApp(App)
    .use(router)
    .use(VueLazyload, {
        //图片懒加载配置
        preLoad: 1.3,
        error: require('./assets/blank.png'),
        loading: require('./assets/blank.png'),
        attempt: 1
    })
    .mount('#app')
