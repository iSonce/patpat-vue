<template>
    <div id="post" style="margin-top:10px" v-if="PostList">
        <LoadRefresh @refresh="refreshEmit()" @load="loadingEmit()">
            <div :key="item.pid" v-for="item in PostList" class="post_item">
                <div style="padding: 0px 10px;">
                    <div class="user_info">
                        <img v-lazy='(item.avatar) ? (url + item.avatar) : require("../assets/icon.png")'
                            alt="user_icon" class="user_icon">
                        <div style="padding-top: 2px">
                            <div id="user_name">{{ item.nickname }}</div>
                            <div style="display:flex">
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
                        <div class="button">
                            <!-- <div style="display: flex" @click="collect(item)">
                                <img src="../assets/ButtonUI/Star.png" alt="star_button"
                                    style="width:20px;padding-right: 5px;">
                                <div style="width: 0px; color:gray">{{ 0 }}</div>
                            </div> -->
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
        </LoadRefresh>

    </div>
</template>

<script>
import LoadRefresh from '@/components/LoadRefresh.vue'
import { GetPosts } from '@/api/UserApi'
import config from '@/api/config'
import { LikePost, CancelLikePost } from '@/api/PostApi'
export default {
    name: "PostPage",
    data() {
        return {
            PostList: null,
            url: config.url,
            user: {
                uid: 9,
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJuaWNrbmFtZVwiOlwiU29uY2VcIixcImludHJvXCI6XCLlj6_ku6XkuI3niLHvvIzor7fliKvkvKTlrrNcIixcImdlbmRlclwiOjAsXCJyZWdpc3RlclRpbWVcIjpcIjIwMjItMDYtMjQgMTU6MTc6NTNcIixcImZhbnNOdW1cIjowLFwiZm9sbG93TnVtXCI6MCxcImF2YXRhclwiOlwiL2ltYWdlL2UyMDAwMzE1LTgyN2UtNDI4NC1iYjVmLWQyN2ZmNThlOGE1Ni5qcGdcIixcImJhY2tncm91bmRcIjpudWxsLFwidXNlcm5hbWVcIjpcIlNvbmNlXCIsXCJwYXNzd29yZFwiOlwiJDJhJDEyJERYR1hkWlcvTmk3RjBSTzBEYmt5RXVvTnROVXN1NDViTksxNTY4LmwwLm1IbVE0dlJyOXdhXCIsXCJ1aWRcIjo5fSIsInVpZCI6OSwiZXhwIjoxNjU2MTY5MzM4LCJ1c2VybmFtZSI6IlNvbmNlIn0.ol-a9n61OQqFO4yi0sVuqhiDEO_hCvYOw9r2acjyrGE"
            }
        };
    },
    components: { LoadRefresh },
    mounted() {
        this.getInitData()
        document.querySelector('body').setAttribute('style', 'margin:0')
    },
    unmounted() {
        document.body.removeAttribute('style')
    },
    methods: {
        goToPost(pid){
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
            return await this.getInitData()
        },
        async loadingEmit() {
            return await this.getLoadData()
        },
        async getInitData() {
            GetPosts({
                pageSize: 10,
                offset: 0,
                order: 3,
                uid: this.user.uid
            },{
                token: this.user.token
            }).then((response) => {
                this.PostList = response.data.data
            }).catch(err => console.log(err))
        },
        async getLoadData() {
            GetPosts({
                pageSize: 10,
                offset: this.PostList.length,
                order: 3,
                uid: this.user.uid
            },{
                token: this.user.token
            }).then((response) => {
                if (response.data.data == null) {
                    throw (new Error("没有更多数据了！"))
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
    width: 50px;
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
}

#post .forum {
    color: red;
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