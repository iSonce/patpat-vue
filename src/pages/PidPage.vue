<template>
    <div class="Pid" v-if="PostInfo">
        <header class="header">
            <div style="text-align:center;align-items:center;display: flex;">
                <img src="../assets/ButtonUI/BackButton.png" alt="back_button"
                    style="width:35px;height: 35px;margin-right: 15px;" @click="backToPostList()">
            </div>
            <img v-lazy='(PostInfo.avatar) ? (url + PostInfo.avatar) : require("../assets/icon.png")' alt="user_icon"
                style="width:45px;height: 45px;margin-right: 10px;border-radius: 50px;">
            <div>
                <div style="display:flex;text-align: center;align-items: center;">
                    <div style="font-size:large;font-weight: 800;margin-bottom: 4px;margin-right: 5px;">{{
                            PostInfo.nickname
                    }}</div>
                    <img :src="require('../assets/Level/Level' + PostInfo.level + '.png')" alt="level"
                        style="width:20px;height: 20px;">
                </div>
                <div style="display:flex;color: gray;font-size:small">
                    <div style="margin-right: 5px;">{{ ComputedTime(PostInfo.postTime) }}</div>
                    <div>{{ PostInfo.readingNum }}浏览</div>
                </div>
            </div>
            <div style="display:flex;margin-left: auto;align-items: center;">
                <button v-show="user.uid != PostInfo.uid" id="subsribe_button" @click="handleFollow(PostInfo)">{{
                        (PostInfo.isFollowed) ? '已关注 ' : '关注'
                }}</button>
            </div>
        </header>
        <load-refresh @refresh="refreshEmit()" @load="loadingEmit()" :canLoad="canLoad">
            <div class="main">
                <div class="content">
                    <div style="font-size:25px;font-weight: 800;padding-bottom: 10px;">{{ PostInfo.title }}</div>
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
                <div>
                    <div class="reply_header">
                        <div style="padding-right:8px">评论</div>
                        <div>{{ PostInfo.replyNum }}</div>
                    </div>
                    <reply-list :ReplyList="ReplyList" @handleLikeReply="handleLikeReply"></reply-list>
                </div>
            </div>
        </load-refresh>
        <div class="footer">
            <input id="reply" type="text" placeholder="发表你的看法" style="padding:10px" @input="handleInput" v-model="input"
                @focus="focusInput()" @blur="blurInput()">
            <div id="button" style="flex:50%;justify-content: space-evenly;" v-show="(buttonShow) && (input == '')">
                <div style="text-align:center" @click="handleCollectPost(PostInfo)">
                    <img :src='(PostInfo.isCollect) ? require("../assets/ButtonUI/StarOn.png") : require("../assets/ButtonUI/Star.png")'
                        alt="star_button" id="star_button">
                    <div style="font-size:13px;color: gray;">{{ PostInfo.collectNum }}</div>
                </div>
                <div style="text-align:center">
                    <img src="../assets/ButtonUI/ReviewButton.png" alt="reply_button" id="reply_button">
                    <div style="font-size:13px;color: gray;">{{ PostInfo.replyNum }}</div>
                </div>
                <div style="text-align:center" @click="handleLikePost(PostInfo)">
                    <img :src='(PostInfo.isLike) ? require("../assets/ButtonUI/LikeButtonOn.png") : require("../assets/ButtonUI/LikeButton.png")'
                        alt="like_button" id="like_button">
                    <div style="font-size:13px;color: gray;">{{ PostInfo.likeNum }}</div>
                </div>
            </div>
            <button v-show="(!buttonShow) || (input != '')"
                style="padding:8px;flex:20%;border-radius: 25px;background-color: #FFECED;margin-left:5px"
                @click="handleSend">发送</button>
        </div>
    </div>
</template>

<script>
import config from '@/api/config'
import { GetForum } from '@/api/ForumApi'
import { LikePost, CancelLikePost, CollectPost, CancelCollectPost, AddRead, GetPost, GetPostReply } from '@/api/PostApi'
import { LikeReply, CancelLikeReply, NewReply } from '@/api/ReplyApi'
import { ConcernUser, CancelConcernUser } from '@/api/UserApi'
import ReplyList from '@/components/ReplyList.vue'
import LoadRefresh from '@/components/LoadRefresh.vue'

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
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJuaWNrbmFtZVwiOlwiU29uY2VcIixcImludHJvXCI6XCLlj6_ku6XkuI3niLHvvIzor7fliKvkvKTlrrNcIixcImdlbmRlclwiOjAsXCJyZWdpc3RlclRpbWVcIjpcIjIwMjItMDYtMjQgMTU6MTc6NTNcIixcImZhbnNOdW1cIjoxLFwiZm9sbG93TnVtXCI6MSxcImF2YXRhclwiOlwiL2ltYWdlLzBkY2Q3YzI1LTZlMzktNGE2Zi05YTBmLTkwOTU2NmE0ODJjZC5qcGdcIixcImJhY2tncm91bmRcIjpcIi9pbWFnZS8yNjA3YWJmNi1lNDRlLTQxNDEtYWRiMi1lYTIzNjQxZmJjNTMuanBnXCIsXCJ1c2VybmFtZVwiOlwiU29uY2VcIixcInBhc3N3b3JkXCI6XCIkMmEkMTIkRFhHWGRaVy9OaTdGMFJPMERia3lFdW9OdE5Vc3U0NWJOSzE1NjgubDAubUhtUTR2UnI5d2FcIixcInVpZFwiOjl9IiwidWlkIjo5LCJleHAiOjE2NTY0MDk1OTEsInVzZXJuYW1lIjoiU29uY2UifQ.X3xbeb17XD4etZd9XktXqOpW739WZrz9jNSSFGAfdyQ"
            },
            input: '',
            buttonShow: true,
            canLoad: true
        }
    },
    components: {
        ReplyList,
        LoadRefresh
    },
    mounted() {
        this.user.uid = window.jsAdapter.getUid()
        this.user.token = window.jsAdapter.getToken()
        AddRead({
            pid: this.$route.params.pid
        }, {
            token: this.user.token
        }).then(() => {

        })
        this.getInitData()
        document.querySelector('body').setAttribute('style', 'margin:0;')
    },
    unmounted() {
        document.body.removeAttribute('style')
    },
    methods: {
        handleFollow(item) {
            (!item.isFollowed) ?
                ConcernUser({
                    followedId: item.uid,
                    followingId: this.user.uid
                }, {
                    token: this.user.token
                }).then((response) => {
                    if (response.data.code == -1) {
                        throw new Error(response.data.message)
                    }
                    item.isFollowed = true
                    console.log(response)
                }).catch((err) => {
                    console.log(err)
                })
                :
                CancelConcernUser({
                    followedId: item.uid,
                    followingId: this.user.uid
                }, {
                    token: this.user.token
                }).then((response) => {
                    if (response.data.code == -1) {
                        throw new Error(response.data.message)
                    }
                    item.isFollowed = false
                    console.log(response)
                }).catch((err) => {
                    console.log(err)
                })
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
            if (dayDiff > 0) {
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
        focusInput() {
            this.buttonShow = false
        },
        blurInput() {
            this.buttonShow = true
        },
        async handleSend() {
            NewReply({
                uid: this.user.uid,
                fid: this.ForumInfo.fid,
                pid: this.PostInfo.pid,
                content: this.input
            }, {
                token: this.user.token
            }).then(() => {
                this.input = ''
                GetPostReply({
                    pid: this.$route.params.pid,
                    uid: this.user.uid,
                    offset: this.ReplyList.length,
                    pageSize: 1,
                    order: 0,
                    token: this.user.token
                }).then(response => {
                    this.ReplyList.push.apply(this.ReplyList, response.data.data)
                }).catch(err => console.log(err))
                this.PostInfo.replyNum++
            }
            ).catch(err => console.log(err))
            console.log('send')
        },
        backToPostList() {
            window.jsAdapter.finishCurrentActivity()
        },
        async handleLikeReply(item) {
            (!item.isLike) ?
                LikeReply({
                    uid: this.user.uid,
                    rid: item.rid,
                }, {
                    token: this.user.token
                }).then((response) => {
                    console.log(response)
                    item.isLike = true
                    item.likeNum++
                })
                :
                CancelLikeReply({
                    uid: this.user.uid,
                    rid: item.rid,
                }, {
                    token: this.user.token
                }).then((response) => {
                    console.log(response)
                    item.isLike = false
                    item.likeNum--
                })
        },

        async handleLikePost(item) {
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
                CancelLikePost({
                    uid: this.user.uid,
                    pid: this.PostInfo.pid,
                }, {
                    token: this.user.token
                }).then(() => {
                    item.isLike = false
                    item.likeNum--
                })
        },
        async handleCollectPost(item) {
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
                CancelCollectPost({
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
            this.canLoad = true
            return await this.getInitData()
        },
        async loadingEmit() {
            return await this.getLoadData()
        },
        async getInitData() {
            console.log()
            await GetPost({
                pid: this.$route.params.pid,
                uid: this.user.uid,
                token: this.user.token
            }).then(response => {
                this.PostInfo = response.data.data
            }).catch(err => console.log(err))
            await GetForum({
                id: this.PostInfo.fid,
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
            if (!this.canLoad) {
                return
            }
            GetPostReply({
                pid: this.$route.params.pid,
                uid: this.user.uid,
                offset: this.ReplyList.length,
                pageSize: 10,
                order: 0,
                token: this.user.token
            }).then(response => {
                if (response.data.data == null) {
                    this.canLoad = false
                    throw new Error(response.data.message)
                }
                this.ReplyList.push.apply(this.ReplyList, response.data.data)
            }).catch(err => console.log(err))
        },
    }
}
</script>

<style scoped>
.Pid {
    height: 100vh;
}

.header {
    display: flex;
    padding: 8px 10px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 1;
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

.footer #reply {
    background-color: #FFECED;
    border-radius: 25px;
    flex: 80%;
    outline: none;
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
    background-color: #fde3e4;
    margin-top: 10px;
}

.content .forum .picture {
    height: 42px;
}

#reply_button {
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

#subsribe_button {
    width: 50px;
    border-radius: 20px;
    background-color: #FFECED;
    color: #E67E7E;
    border-style: hidden;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    padding: 5px;
    outline: none;
}

.reply_header {
    display: flex;
    width: 100vw;
    padding: 10px;
    background-color: #FFECED;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    margin-bottom: 10px
}
</style>