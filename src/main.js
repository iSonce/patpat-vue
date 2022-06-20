import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'  //图片懒加载插件

createApp(App)
    .use(VueLazyload, {
        //图片懒加载配置
        preLoad: 1.3,
        error: require('./assets/blank.png'),
        loading: require('./assets/blank.png'),
        attempt: 1
    })
    .mount('#app')
