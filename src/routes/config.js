import DscvPage from '../pages/DscvPage.vue'
import TypePage from '../pages/TypePage.vue'
import RcmdPage from '../pages/RcmdPage.vue'
import SearchGamePage from '../pages/SearchGamePage.vue'
import SearchPostPage from '../pages/SearchPostPage.vue'
import TopPage from '../pages/TopPage.vue'
import PostPage from '../pages/PostPage.vue'
import PidPage from '../pages/PidPage.vue'
import HomePage from '../pages/HomePage.vue'
import ReplyPage from '../pages/ReplyPage.vue'
import MsgPage from '../pages/MsgPage.vue'
import UserReplyPage from '../pages/UserReplyPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/discover', name: 'discover', component: DscvPage },
    { path: '/discover/:type', name: 'type', component: TypePage },
    { path: '/recommend', name: 'recommend', component: RcmdPage },
    { path: '/top', name: 'top', component: TopPage },

    //搜索
    { path: '/search/:key/game', name: 'search_game', component: SearchGamePage },
    { path: '/search/:key/post', name: 'search_post', component: SearchPostPage },
    { path: '/search/:key/post/:pid', name: 'search_pid', component: PidPage },
    { path: '/search/:key/post/:pid/reply/:rid/:floorNum', name: 'search_rid', component: ReplyPage },

    //随机帖子信息
    { path: '/post', name: 'post', component: PostPage },
    { path: '/post/:pid', name: 'pid', component: PidPage },
    { path: '/post/:pid/reply/:rid/:floorNum', name: 'rid', component: ReplyPage },



    //已点赞帖子
    { path: '/like/:like_uid/post', name: 'like_post', component: PostPage },
    { path: '/like/:like_uid/post/:pid', name: 'like_pid', component: PidPage },
    { path: '/like/:like_uid/post/:pid/reply/:rid/:floorNum', name: 'like_rid', component: ReplyPage },

    //已收藏帖子
    { path: '/collect/:collect_uid/post', name: 'collect_post', component: PostPage },
    { path: '/collect/:collect_uid/post/:pid', name: 'collect_pid', component: PidPage },
    { path: '/collect/:collect_uid/post/:pid/reply/:rid/:floorNum', name: 'collect_rid', component: ReplyPage },

    //关注帖子的信息,related_id为当前用户id
    { path: '/related/:related_uid/post', name: ':related_post', component: PostPage },
    { path: '/related/:related_uid/post/:pid', name: ':related_pid', component: PidPage },
    { path: '/related/:related_uid/post/:pid/reply/:rid/:floorNum', name: ':related_rid', component: ReplyPage },

    //论坛帖子信息，fid为论坛信息
    { path: '/forum/:fid/post', name: 'forum_post', component: PostPage },
    { path: '/forum/:fid/post/:pid', name: 'forum_pid', component: PidPage },
    { path: '/forum/:fid/post/:pid/reply/:rid/:floorNum', name: 'forum_rid', component: ReplyPage },

    //用户的帖子信息，uid为所打开个人主页的用户的uid
    { path: '/user/:uid/post', name: 'user_post', component: PostPage },
    { path: '/user/:uid/post/:pid', name: 'user_pid', component: PidPage },
    { path: '/user/:uid/post/:pid/reply/:rid/:floorNum', name: 'user_rid', component: ReplyPage },

    //消息 type为消息类型，type=like为点赞消息 type=reply为回复消息
    { path: '/message/:type', name: 'like_message', component: MsgPage },
    { path: '/message/:type', name: 'reply_message', component: MsgPage },

    //用户发表的回复列表
    { path: '/user/:uid/reply', name: 'user_reply', component: UserReplyPage }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})