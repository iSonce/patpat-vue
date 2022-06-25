<template>
    <div class="Pid" v-if="PostInfo">
        <header class="header">
            <img v-lazy='(PostInfo.avatar)?(url + PostInfo.avatar):require("../assets/icon.png")' alt="user_icon"
                style="width:50px;height: 50px;margin-right: 10px;border-radius: 50px;">
            <div>
                <div style="font-size:large;font-weight: 800;margin-bottom: 4px;">{{ PostInfo.nickname }}</div>
                <div style="display:flex;color: gray;font-size:small">
                    <div style="margin-right: 5px;">{{ PostInfo.postTime }}</div>
                    <div>{{ PostInfo.readingNum }}</div>
                </div>
            </div>
            <div style="display:flex;margin-left: auto;align-items: center;">
                <img src="../assets/ButtonUI/BackButton.png" alt="back_button"
                    style="width:40px;height: 40px;margin-right: 15px;" @click="this.$router.back(-1)">
                <button id="script_button">{{ (PostInfo.isFollowed) ? '已关注 ' : '关注' }}</button>
            </div>
        </header>
        <div class="main">
            <div class="content">
                <div class="text">{{ PostInfo.content }}</div>
                <img v-lazy='url + PostInfo.picture' alt="op" class="img" v-if="PostInfo.picture">
                <div class="forum" v-if="ForumInfo">
                    <img v-lazy='(ForumInfo.icon) ? (url + ForumInfo.icon) : require("../assets/icon.png")' alt="op"
                        class="picture">
                    <div style="margin-left:8px">
                        <div>{{ ForumInfo.name }}</div>
                        <div style="display:flex">
                            <div style="display:flex">
                                <div>关注</div>
                                <div>{{ ForumInfo.followNum }}</div>
                            </div>
                            <div style="padding:0 5px 0 5px">·</div>
                            <div style="display:flex">
                                <div>帖子</div>
                                <div>{{ ForumInfo.postNum }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="review_list">
                <div class="review_header">
                    <div style="padding-right:8px">评论</div>
                    <div>{{ PostInfo.replyNum }}</div>
                </div>
                <div :key="reply" v-for="reply in ReplyList" class="review_item">
                    <div style="display:flex">
                        <img v-lazy='url + reply.avatar' alt="icon"
                            style="width:50px;height: 50px;margin-right: 8px;border-radius: 50px;">
                        <div style="flex:100%">
                            <div style="margin-bottom: 5px;color: gray;">{{ reply.nickname }}</div>
                            <div style="margin-bottom: 10px;">{{ reply.content }}
                            </div>
                            <div style="display:flex">
                                <div style="display:flex;margin-right: 50px;">
                                    <img src="../assets/ButtonUI/ReviewButton.png" alt="review_button"
                                        id="review_button" style="margin-right:5px">
                                    <div style="font-size:13px">{{ reply.replyNum }}</div>
                                </div>
                                <div style="display:flex">
                                    <img src="../assets/ButtonUI/LikeButton.png" alt="like_button" id="like_button"
                                        style="margin-right:5px">
                                    <div style="font-size:13px;color: gray;">{{ reply.likeNum }}</div>
                                </div>
                                <div style="margin-left: auto;font-size:13px;color: gray;">{{ reply.postTime }}</div>
                            </div>
                        </div>
                    </div>
                    <hr style="background-color: rgb(214, 214, 214); border-width:0px; height: 1px;margin:20px 0 0 0">
                </div>
            </div>
        </div>
        <div class="footer">
            <button id="review">发表你的看法</button>
            <div id="button" style="flex:50%;justify-content: space-evenly;">
                <div style="text-align:center" @click="handleCollect(PostInfo)">
                    <img :src='(PostInfo.isCollect) ? require("../assets/ButtonUI/StarOn.png") : require("../assets/ButtonUI/Star.png")'
                        alt="star_button" id="star_button">
                    <div style="font-size:13px;color: gray;">{{ PostInfo.collectNum }}</div>
                </div>
                <div style="text-align:center">
                    <img src="../assets/ButtonUI/ReviewButton.png" alt="review_button" id="review_button">
                    <div style="font-size:13px;color: gray;">{{ PostInfo.replyNum }}</div>
                </div>
                <div style="text-align:center" @click="handleLike(PostInfo)">
                    <img :src='(PostInfo.isLike) ? require("../assets/ButtonUI/LikeButtonOn.png") : require("../assets/ButtonUI/LikeButton.png")'
                        alt="like_button" id="like_button">
                    <div style="font-size:13px;color: gray;">{{ PostInfo.likeNum }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from '@/api/config'
import { GetPost, GetPostReply } from '@/api/PostApi'
import { GetForum } from '@/api/ForumApi'
import { LikePost, CancelLike,CollectPost,CancelCollect } from '@/api/PostApi'
export default {
    data() {
        return {
            //这里的API调用比较慢(可能是数据库比较复杂)，最好是在页面渲染前完成数据获取，在这里将需要请求的数据设置为空，渲染元素用v-if判断数据是否为空
            PostInfo: null,
            ForumInfo: null,
            ReplyList: [],
            GameList: [],
            url: config.url,
            user: {
                uid: 9,
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJuaWNrbmFtZVwiOlwiU29uY2VcIixcImludHJvXCI6XCLlj6_ku6XkuI3niLHvvIzor7fliKvkvKTlrrNcIixcImdlbmRlclwiOjAsXCJyZWdpc3RlclRpbWVcIjpcIjIwMjItMDYtMjQgMTU6MTc6NTNcIixcImZhbnNOdW1cIjowLFwiZm9sbG93TnVtXCI6MCxcImF2YXRhclwiOlwiL2ltYWdlL2UyMDAwMzE1LTgyN2UtNDI4NC1iYjVmLWQyN2ZmNThlOGE1Ni5qcGdcIixcImJhY2tncm91bmRcIjpudWxsLFwidXNlcm5hbWVcIjpcIlNvbmNlXCIsXCJwYXNzd29yZFwiOlwiJDJhJDEyJERYR1hkWlcvTmk3RjBSTzBEYmt5RXVvTnROVXN1NDViTksxNTY4LmwwLm1IbVE0dlJyOXdhXCIsXCJ1aWRcIjo5fSIsInVpZCI6OSwiZXhwIjoxNjU2MTc0NTAxLCJ1c2VybmFtZSI6IlNvbmNlIn0.0sj5n5RRLdOS8XoGdcR5w3BJNGGrWpqG5x_UR7_MUVU"
            }
        }
    },
    created() {
        this.getInitData()
    },
    mounted() {
        document.querySelector('body').setAttribute('style', 'margin:0;')
    },
    unmounted() {
        document.body.removeAttribute('style')
    },
    methods: {
        async handleLike(item) {
            (!item.isLike) ?
                LikePost({
                    uid: this.user.uid,
                    pid: this.PostInfo.pid,
                }, {
                    token: this.user.token
                }).then((response) => {
                    console.log(response)
                    item.isLike = true
                    item.likeNum++
                })
                :
                CancelLike({
                    uid: this.user.uid,
                    pid: this.PostInfo.pid,
                }, {
                    token: this.user.token
                }).then((response) => {
                    console.log(response)
                    item.isLike = false
                    item.likeNum--
                })
        },
        async handleCollect(item){
            (!item.isCollect) ?
                CollectPost({
                    uid: this.user.uid,
                    pid: this.PostInfo.pid,
                }, {
                    token: this.user.token
                }).then((response) => {
                    console.log(response)
                    item.isCollect = true
                    item.collectNum++
                })
                :
                CancelCollect({
                    uid: this.user.uid,
                    pid: this.PostInfo.pid,
                }, {
                    token: this.user.token
                }).then((response) => {
                    console.log(response)
                    item.isCollect = false
                    item.collectNum--
                })
        },
        async refreshEmit() {
            return await this.getInitData()
        },
        async loadingEmit() {
            return await this.getLoadData()
        },
        async getInitData() {
            await GetPost({
                pid: this.$route.params.pid,
                uid: this.user.uid,
                token: this.user.token
            }).then(response => {
                this.PostInfo = response.data.data
            }).catch(err => console.log(err))
            await GetForum({
                id: this.$route.params.pid,
                uid: this.user.uid,
                token: this.user.token
            }, this.PostInfo.fid).then(response => {
                this.ForumInfo = response.data.data
            }).catch(err => console.log(err))
            await GetPostReply({
                pid: this.$route.params.pid,
                uid: this.user.uid,
                offset: 0,
                pageSize: 10,
                order: 0,
                token: this.user.token
            }).then(response => {
                this.ReplyList = response.data.data
            }).catch(err => console.log(err))
        },
        async getLoadData() {
            GetPostReply({
                pid: this.$route.params.pid,
                uid: this.user.uid,
                offset: this.ReplyList.length,
                pageSize: 10,
                order: 0,
                token: this.user.token
            }).then(response => {
                this.ReplyList = response.data.data
            }).catch(err => console.log(err))
        },
    }
}
</script>

<style scoped>
.Pid{
    height: 100vh;
}
.header {
    display: flex;
    padding: 8px 10px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    position: sticky;
    top: 0;
}

.main {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
}

.footer {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    position: sticky;
    background: white;
    bottom: 0;
    padding: 10px 10px;
}

.footer #review {
    background-color: #FFECED;
    border-radius: 25px;
    flex: 80%;
}

.footer #button {
    display: flex;
    padding: 0 5px;
}

.content {
    padding: 10px;
}

.content .text {
    margin-bottom: 10px;
}

.content .img {
    width: 100%;
}

.content .forum {
    display: flex;
    border-radius: 20px;
    padding: 10px;
    background-color: #eec7c8;
    margin-top: 10px;
}

.content .forum .picture {
    height: 42px;
}

.review_list .review_header {
    display: flex;
    width: 100vw;
    padding: 10px;
    background-color: #FFECED;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 10px
}

.review_list .review_item {
    padding: 10px;
}

#review_button {
    width: 18px;
    height: 18px;
}

#like_button {
    width: 18px;
    height: 18px;
}

#star_button {
    width: 18px;
    height: 18px;
}

#script_button {
    width: 50px;
    border-radius: 20px;
    background-color: #FFECED;
    color: #E67E7E;
    border-style: hidden;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    padding: 5px;
}
</style>