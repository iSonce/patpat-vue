<template>
    <div class="rid" v-if="main_reply">
        <header class="reply_header">
            <img src="../assets/ButtonUI/BackButton.png" alt="back_button" style="width:40px;display: block;"
                @click="this.$router.back(-1)">
            <div style="font-size:20px;margin: auto;">{{ reply_num }}回复
            </div>
            <div style="width:50px;"></div>
        </header>
        <load-refresh @refresh="refreshEmit()" @load="loadingEmit()" :canLoad="canLoad">
            <div class="main">
                <div id="main_reply" v-if="main_reply">
                    <img v-lazy='url + main_reply.avatar' alt="icon"
                        style="width:45px;height: 45px;margin-right: 8px;border-radius: 50px;"
                        @click="goToUser(main_reply.uid)">
                    <div style="flex:100%">
                        <div style="display:flex;text-align: center;align-items: center;">
                            <div style="font-weight:800;margin-bottom:5px;margin-right:5px">{{ main_reply.nickname }}
                            </div>
                            <img :src="require('../assets/Level/Level' + main_reply.level + '.png')" alt="level"
                                style="width:20px;height: 20px;">
                        </div>
                        <div style="display:flex;color:gray;margin-bottom:10px;font-size: small;">
                            {{ ComputedTime(main_reply.postTime) }}
                        </div>
                        <div>
                            {{ main_reply.content }}
                        </div>
                    </div>
                </div>
                <hr style="height:10px; background-color:rgb(240, 240, 240);border-style: none;">
                <reply-list :ReplyList="ReplyList" @handleLikeReply="handleLikeReply"></reply-list>
            </div>
        </load-refresh>
        <div class="reply_footer">
            <input id="reply" type="text" placeholder="发表你的看法"
                style="outline: none; padding:10px;border-radius: 25px;flex: 80;background-color: #FFECED;"
                @input="handleInput" v-model="input">
            <button style="padding:8px;flex:20%;border-radius: 25px;background-color: #FFECED;margin-left:5px"
                @click="handleSend">发送</button>
        </div>
    </div>

</template>

<script>
import { GetReplyList } from '@/api/ReplyApi'
import ReplyList from '@/components/ReplyList.vue'
import { LikeReply, CancelLikeReply, NewReply } from '@/api/ReplyApi'
import config from '@/api/config'
import LoadRefresh from '@/components/LoadRefresh.vue'

export default {
    name: "ReplyPage",
    data() {
        return {
            ReplyList: [],
            user: config.user,
            main_reply: null,
            url: config.url,
            input: '',
            fid: 0,
            reply_num: 0,
            canLoad: true
        }
    },
    components: {
        ReplyList,
        LoadRefresh
    },
    mounted() {
        document.querySelector('body').setAttribute('style', 'margin:0;')
        this.user.uid = window.jsAdapter.getUid()
        this.user.token = window.jsAdapter.getToken()
        this.getInitData()
    },
    unmounted() {
        document.body.removeAttribute('style')
    },
    computed: {
        console: () => console,
        window: () => window,
    },
    methods: {
        goToUser(uid) {
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
        async refreshEmit() {
            this.canLoad = true
            return await this.getInitData()
        },
        async loadingEmit() {
            return await this.getLoadData()
        },
        async handleSend() {
            NewReply({
                uid: this.user.uid,
                fid: this.fid,
                pid: this.$route.params.pid,
                content: this.input,
                replyToUid: this.main_reply.uid,
                floorNum: this.$route.params.floorNum,
                replyToRid: this.$route.params.rid
            }, {
                token: this.user.token
            }).then((response => {
                this.reply_num++
                console.log(response)
                this.input = ''
                GetReplyList({
                    rid: this.$route.params.rid,
                    uid: this.user.uid,
                    offset: this.ReplyList.length,
                    pageSize: 1,
                    order: 1,
                }).then(response => {
                    this.ReplyList.push.apply(this.ReplyList, response.data.data)
                }).catch(err => console.log(err))
            })
            ).catch(err => console.log(err))
            console.log('send')
        },
        async getInitData() {
            GetReplyList({
                rid: this.$route.params.rid,
                uid: this.user.uid,
                offset: 0,
                pageSize: 10,
                order: 1,
            }).then(response => {
                this.fid = response.data.data.fid
                this.reply_num = response.data.data.reply_num
                this.ReplyList = response.data.data.reply_list.slice(1, response.data.data.length)
                this.main_reply = response.data.data.reply_list[0]
            }).catch(err => console.log(err))
        },
        async getLoadData() {
            if (!this.canLoad) {
                return
            }
            GetReplyList({
                rid: this.$route.params.rid,
                uid: this.user.uid,
                offset: this.ReplyList.length,
                pageSize: 10,
                order: 1,
            }).then(response => {
                if (response.data.data == null) {
                    this.canLoad = false
                    throw new Error(response.data.message)
                }
                this.ReplyList.push.apply(this.ReplyList, response.data.data)
            }).catch(err => console.log(err))
        },
        async handleLikeReply(item) {
            (!item.isLike) ?
                LikeReply({
                    uid: this.user.uid,
                    rid: item.rid,
                }, {
                    token: this.user.token
                }).then(() => {
                    item.isLike = true
                    item.likeNum++
                }).catch(err => console.log(err))
                :
                CancelLikeReply({
                    uid: this.user.uid,
                    rid: item.rid,
                }, {
                    token: this.user.token
                }).then(() => {
                    item.isLike = false
                    item.likeNum--
                }).catch(err => console.log(err))
        },
    }
}
</script>

<style scoped>
.rid {
    overflow: visible;
    height: 100%;
}

.reply_header {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    background-color: white;
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    padding: 10px;
    text-align: center;
    justify-content: space-between;
}

#main_reply {
    display: flex;
    padding: 10px;
}

.main {
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
}

.reply_footer {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    position: sticky;
    background: white;
    bottom: 0;
    padding: 10px 10px;
}
</style>