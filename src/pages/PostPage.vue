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
                                    {{ item.postTime }}
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
import ComputedTime from '@/utils/ComputedTime'
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
    },
    components: { LoadRefresh },
    created() {
        // this.user.uid = window.jsAdapter.getUid()
        // this.user.token = window.jsAdapter.getToken()
        this.getInitData()
    },
    mounted() {
        document.querySelector('body').setAttribute('style', 'margin:0')
    },
    unmounted() {
        document.body.removeAttribute('style')
    },
    methods: {
        goToUser(uid) {
            console.log(uid)
            window.jsAdapter.goToUser(uid)
        },
        ComputedTime(time) {
            return ComputedTime(time)
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
                    let result = response.data.data
                    for (let key in result) {
                        result[key].postTime = ComputedTime(result[key].postTime)
                    }
                    this.PostList = result
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
                    if (response.data.data == null) {
                        this.canLoad = false
                        throw new Error(response.data.message)
                    }
                    let result = response.data.data
                    for (let key in result) {
                        result[key].postTime = ComputedTime(result[key].postTime)
                    }
                    this.PostList.push.apply(this.PostList, result)
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