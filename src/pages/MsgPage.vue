<template>
    <div id="MesPage" style="margin-top:5px" v-if="MsgList">
        <load-refresh @refresh="refreshEmit()" @load="loadingEmit()" :canLoad="canLoad">
            <div v-for="(msg, idx) in MsgList" :key="idx">
                <div style="display:flex;padding: 10px 8px">
                    <img v-lazy='(msg.avatar) ? (url + msg.avatar) : require("../assets/icon.png")' alt="icon"
                        style="height: 45px;width:45px;margin-right: 10px;border-radius: 45px;"
                        @click="goToUser(msg.uid)">
                    <div @click="(msg.type[0] == 'r') ? goToReply(msg.jid) : goToPost(msg.jid)">
                        <div style="display: flex;margin-bottom: 10px;">
                            <div style="margin-right:20px;font-weight: 800;">{{ msg.nickname }}</div>
                            <div style="color:gray">{{ (this.$route.params.type == 'reply') ? "回复" : "点赞"
                            }}了我的{{ (msg.type[0] == 'r') ? "回复" : "帖子" }}
                            </div>
                        </div>
                        <div>
                            <div style="margin-bottom: 5px;">{{msg.content}}</div>
                            <div style="display:flex;color:gray;margin-bottom: 5px;">
                                <div class="bar"></div>
                                <div>我的{{ (msg.type[0] == 'r') ? "回复" + "：" + msg.ucontent : "帖子" + "：《" + msg.utitle
                                        + "》"
                                }}</div>
                            </div>
                        </div>

                        <div style="font-size:small;color:gray" v-if="msg.postTime">{{ ComputedTime(msg.postTime) }}
                        </div>
                    </div>
                </div>
                <hr style="border-style: none;background-color: gray;height: 0.05rem;">
            </div>
        </load-refresh>
    </div>
</template>

<script>
import LoadRefresh from '@/components/LoadRefresh.vue'
import config from '@/api/config'
import { GetMessage } from '@/api/UserApi'
import { GetReplyList } from '@/api/ReplyApi'
export default {
    name: "MsgPage",
    data() {
        return {
            MsgList: [],
            canLoad: true,
            user: config.user,
            url: config.url
        }
    },
    components: {
        LoadRefresh
    },
    mounted() {
        // this.user.uid = window.jsAdapter.getUid()
        // this.user.token = window.jsAdapter.getToken()
        this.getInitData()
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
        goToPost(pid) {
            window.jsAdapter.goToPost(pid)
        },
        async goToReply(rid) {
            GetReplyList({
                rid: rid,
                uid: this.user.uid,
                offset: 0,
                pageSize: 1,
                order: 1,
            }).then(response => {
                console.log(response)
                let pid = response.data.data.pid
                let floorNum = response.data.data.floor_num
                // console.log(pid, rid, floorNum)
                window.jsAdapter.goToReply(pid, rid, floorNum)
            }).catch(err => console.log(err))
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
        async getInitData() {
            GetMessage({
                uid: this.user.uid,
                type: this.$route.params.type,
                offset: 0,
                pageSize: 10
            }, {
                token: this.user.token
            }).then(
                (response) => {
                    this.MsgList = response.data.data
                    console.log(this.MsgList)
                }
            )
        },
        async getLoadData() {
            GetMessage({
                uid: this.user.uid,
                type: this.$route.params.type,
                offset: this.MsgList.length,
                pageSize: this.MsgList.length
            }, {
                token: this.user.token
            }).then(
                (response) => {
                    if (!response.data.data) {
                        this.canLoad = false
                        return
                    }
                    this.MsgList.push.apply(this.MsgList, response.data.data)
                }
            )
        },
    }
}
</script>

<style scoped>
.bar {
    margin-right: 10px;
    min-width: 3px;
    max-width: 3px;
    background-color: rgb(179, 179, 179);
    border-style: none;
}
</style>