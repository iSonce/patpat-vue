<template>
    <div id="UserReplyPage">
        <load-refresh @refresh="refreshEmit()" @load="loadingEmit()" :canLoad="canLoad">
            <div v-for="reply in ReplyList" :key="reply.rid">
                <div style="display: flex;">
                    <img v-lazy="url + reply.avatar" alt="avatar"
                        style="height:45px;width:45px;border-radius: 45px;margin-right:5px">
                    <div @click="goToReply(reply.rid)">
                        <div style="margin-bottom:5px;color:gray">{{ (this.$route.params.uid == user.uid) ? '你' :
                        reply.nickname
                        }}
                        </div>
                        <div style="margin-bottom:5px">{{ reply.content }}</div>
                        <div id="gray" @click="(reply.r2uid) ? goToReply(reply.rid) : goToPost(reply.rid)">
                            <div style="font-weight: 800;font-size: large;margin-bottom:10px;">
                                {{ reply.r2title }}
                            </div>
                            <div
                                style="text-overflow: ellipsis;overflow: hidden;white-space: nowrap;width:100%;font-size: smaller;">
                                {{ reply.r2content }}
                            </div>
                        </div>
                    </div>
                </div>
                <hr style="border-style: none;height: 0.1rem;background-color: rgb(228, 228, 228);margin:10px 0">
            </div>
        </load-refresh>

    </div>
</template>

<script>
import LoadRefresh from '@/components/LoadRefresh.vue'
import { GetUserReply } from '@/api/UserApi'
import config from "@/api/config";
import { GetReplyList } from '@/api/ReplyApi'
export default {
    name: 'UserReplyPage',
    data() {
        return {
            ReplyList: [],
            canLoad: true,
            user: config.user,
            url: config.url
        }
    },
    created() {
        // this.user.uid = window.jsAdapter.getUid()
        // this.user.token = window.jsAdapter.getToken()
        this.getInitData()
    },
    components: {
        LoadRefresh
    },
    methods: {
        async goToReply(rid) {
            GetReplyList({
                rid: rid,
                uid: this.$route.params.uid,
                offset: 0,
                pageSize: 1,
                order: 1,
            }).then(response => {
                let pid = response.data.data.pid
                let floorNum = response.data.data.floor_num
                console.log(pid, rid, floorNum)
                window.jsAdapter.goToReply(pid, rid, floorNum)
            }).catch(err => console.log(err))
        },
        async goToPost(rid) {
            GetReplyList({
                rid: rid,
                uid: this.$route.params.uid,
                offset: 0,
                pageSize: 1,
                order: 1,
            }).then(response => {
                let pid = response.data.data.pid
                console.log(pid)
                window.jsAdapter.goToPost(pid)
            }).catch(err => console.log(err))
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
            GetUserReply({
                uid: this.$route.params.uid,
                offset: 0,
                pageSize: 10,
                order: 0,
            }, {
                token: this.user.token
            }).then(response => {
                console.log(response)
                this.ReplyList = response.data.data
            }).catch(err => console.log(err))
        },
        async getLoadData() {
            if (!this.canLoad) {
                return
            }
            GetUserReply({
                uid: this.$route.params.uid,
                offset: this.ReplyList.length,
                pageSize: 10,
                order: 0,
            }, {
                token: this.user.token
            }).then(response => {
                if (response.data.data == null) {
                    this.canLoad = false
                    throw new Error(response.data.message)
                }
                this.ReplyList.push.apply(this.ReplyList, response.data.data)
            }).catch(err => console.log(err))
        },
    },
}
</script>

<style scoped>
#UserReplyPage {
    padding: 10px 5px;
}

#gray {
    color: gray;
    background-color: rgb(223, 223, 223);
    padding: 5px 10px;
    border-radius: 10px;
    width: 75vw;
}
</style>