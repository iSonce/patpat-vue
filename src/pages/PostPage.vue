<template>
    <div id="post" style="margin-top:10px" v-if="PostList">
        <load-refresh @refresh="refreshEmit()" @load="loadingEmit()" :canLoad="canLoad">
            <div :key="item.pid" v-for="item in PostList" class="post_item">
                <div style="padding: 0px 10px;">
                    <div class="user_info">
                        <img v-lazy='(item.avatar) ? (url + item.avatar) : require("../assets/icon.png")'
                            alt="user_icon" class="user_icon" @click="goToUser(item.uid)">
                        <div>
                            <div style="display:flex;text-align: center;align-items: center;">
                                <div style="margin-right:5px;font-size: 15px;">{{ item.nickname }}</div>
                                <img :src="require('../assets/Level/Level' + item.level + '.png')" alt="level"
                                    style="width:20px;height: 20px;">
                            </div>
                            <div style="display:flex;text-align: center;align-items: center;">
                                <div class="time">
                                    {{ ComputedTime(item.postTime) }}
                                </div>
                                <div class="forum">
                                    {{ item.forumName }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a @click="goToPost(item.pid)">
                            <div class="title">
                                {{ item.title }}
                            </div>
                            <img v-lazy='url + item.picture' alt="post_img" class="post_img" v-if="item.picture">
                        </a>
                        <div class="button" v-if="!this.$route.params.uid">
                            <a @click="goToPost(item.pid)" style="display: flex">
                                <img src="../assets/ButtonUI/ReviewButton.png" alt="message"
                                    style="width:20px;padding-right: 5px;">
                                <div style="width: 0px; color:gray">{{ item.replyNum }}</div>
                            </a>
                            <div style="display:flex" @click="handleLike(item)">
                                <img :src="(item.isLike) ? require('../assets/ButtonUI/LikeButtonOn.png') : require('../assets/ButtonUI/LikeButton.png')"
                                    alt="star" style="width:20px;padding-right: 5px;">
                                <div style="width: 0px; color:gray">{{ item.likeNum }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="line">
            </div>
        </load-refresh>
    </div>
</template>

<script>
import LoadRefresh from '@/components/LoadRefresh.vue'
import config from '@/api/config'
import { LikePost, CancelLikePost } from '@/api/PostApi'
import { GetPostsByOneApi } from "@/api/AllPostListApi"
export default {
    name: "PostPage",
    data() {
        return {
            PostList: null,
            url: config.url,
            user: config.user,
            canLoad: true
        };
    },
    computed: {
        console: () => console,
        window: () => window,
    },
    components: { LoadRefresh },
    mounted() {
        this.user.uid = window.jsAdapter.getUid()
        this.user.token = window.jsAdapter.getToken()
        this.getInitData()
        document.querySelector('body').setAttribute('style', 'margin:0')
    },
    unmounted() {
        document.body.removeAttribute('style')
    },
    methods: {
        goToUser(uid) {
            this.console.log(uid)
            this.window.jsAdapter.goToUser(uid)
        },
        ComputedTime(time) {
            let dateBegin = new Date(time.replace(/-/g, '/'))
            let dateEnd = new Date()
            let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
            let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
            if (dayDiff > 7) {
                return time.split(' ')[0]
            }
            if (dayDiff > 0) {
                return dayDiff + '天前'
            }
            let hourDiff = Math.floor(dateDiff / (3600 * 1000))//计算出相差小时数
            if (hourDiff > 0) {
                return hourDiff + '小时前'
            }
            let minutesDiff = Math.floor(dateDiff / (60 * 1000))//计算出相差分钟数
            if (minutesDiff > 0) {
                return minutesDiff + '分钟前'
            }
            let secondsDiff = Math.floor(dateDiff / 1000)//计算出相差秒数
            if (secondsDiff > 0) {
                return secondsDiff + '秒前'
            }
        },
        goToPost(pid) {
            window.jsAdapter.goToPost(pid)
        },
        async handleLike(item) {
            (!item.isLike) ?
                LikePost({
                    uid: this.user.uid,
                    pid: item.pid,
                }, {
                    token: this.user.token
                }).then((response) => {
                    console.log(response)
                    item.isLike = true
                    item.likeNum++
                })
                :
                CancelLikePost({
                    uid: this.user.uid,
                    pid: item.pid,
                }, {
                    token: this.user.token
                }).then((response) => {
                    console.log(response)
                    item.isLike = false
                    item.likeNum--
                })
        },
        async refreshEmit() {
            this.canLoad = true
            return await this.getInitData()
        },
        async loadingEmit() {
            return await this.getLoadData()
        },
        async getInitData() {
            //post   forum   related   like   collect   user
            const GetPostsType = this.$route.fullPath.split('/')[1]
            const data = {
                uid: this.user.uid,
                fid: this.$route.params.fid,
                order: (this.$route.params.uid != undefined) ? 0 : 3,
                offset: 0,
                pageSize: 10,
                type: "post"
            }
            if (this.$route.params.uid) {
                data.uid = this.$route.params.uid
            }
            if (this.$route.params.like_uid) {
                data.uid = this.$route.params.like_uid
            }
            if (this.$route.params.collect_uid) {
                data.uid = this.$route.params.collect_uid
            }
            const headers = {
                token: this.user.token
            }
            GetPostsByOneApi(GetPostsType, data, headers)
                .then((response) => {
                    console.log(response)
                    this.PostList = response.data.data
                })
                .catch(err => console.log(err))
        },
        async getLoadData() {
            const GetPostsType = this.$route.fullPath.split('/')[1]
            const data = {
                uid: this.user.uid,
                fid: this.$route.params.fid,
                order: (this.$route.params.uid != undefined) ? 0 : 3,
                offset: this.PostList.length,
                pageSize: 10,
                type: "post"
            }
            if (this.$route.params.uid) {
                data.uid = this.$route.params.uid
            }
            if (this.$route.params.like_uid) {
                data.uid = this.$route.params.like_uid
            }
            if (this.$route.params.collect_uid) {
                data.uid = this.$route.params.collect_uid
            }
            const headers = {
                token: this.user.token
            }
            GetPostsByOneApi(GetPostsType, data, headers)
                .then((response) => {
                    console.log(response)
                    if (response.data.data == null) {
                        this.canLoad = false
                        throw new Error(response.data.message)
                    }
                    this.PostList.push.apply(this.PostList, response.data.data)
                }).catch(err => console.log(err))
        },
    },
}
</script>
<style scoped>
.post_item {
    padding: 5px 0px;
}

.router-link-active {
    text-decoration: none;
}

a {
    text-decoration: none;
}

#post .user_info {
    display: flex;
}

#post .user_icon {
    width: 35px;
    height: 35px;
    margin-right: 10px;
    border-radius: 50px;
}

#post .post_img {
    width: 100% !important;
}

#post .content {
    display: flex;
}

#post .content {
    display: flex;
}

#post .time {
    color: gray;
    margin-right: 10px;
    font-size: 9px;
}

#post .forum {
    color: red;
    font-size: 9px;
}

#post .button {
    padding: 10px 90px 10px 90px;
    display: flex;
    justify-content: space-between;
}

#post .title {
    padding: 5px;
    font-size: large;
    font-weight: bolder;
    color: black;
}

#post .line {
    height: 5px;
    background-color: rgb(241, 236, 236);
    border-style: none;
    margin: 0;
}
</style>