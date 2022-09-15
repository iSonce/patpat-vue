<template>
    <div id="SearchPostPage" v-if="PostList.length" style="padding:20px">
        <div v-for="item in PostList" :key="item.pid" @click="goToPost(item.pid)">
            <div style="display:flex">
                <div>
                    <img v-lazy="url + item.picture" alt="img"
                        style="width:144px;height:80px;object-fit:cover;margin-right: 15px;border-radius: 5px;"
                        v-if="item.picture">
                </div>
                <div>
                    <p v-html="item.title"
                        style="margin:0; height: 70px; word-break: break-word; word-wrap: break-word; overflow:hidden;text-overflow:ellipsis">
                    </p>
                    <div class="end">
                        <p v-html="item.forumName" style="margin-right:3px"></p>
                        <p> · {{ (item.likeNum) ? item.likeNum : 0 }} 赞 · {{ (item.replyNum) ? item.replyNum : 0 }} 回复
                        </p>
                    </div>
                </div>
            </div>
            <hr style="border-style: none; height: 0.05rem; background-color: rgb(220, 220, 220);">
        </div>
    </div>
</template>

<script>
import { GetPostsByOneApi } from "@/api/AllPostListApi"
import config from "@/api/config"
export default {
    name: 'SearchPostPage',
    data() {
        return {
            user: config.user,
            url: config.url,
            PostList: []
        }
    },
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
        goToPost(pid) {
            console.log(pid)
            window.jsAdapter.goToPost(pid)
        },
        async refreshEmit() {
            this.canLoad = true
            return await this.getInitData()
        },
        async loadingEmit() {
            return await this.getLoadData()
        },
        async getInitData() {
            const data = {
                uid: this.user.uid,
                fid: this.$route.params.fid,
                order: (this.$route.params.uid != undefined) ? 0 : 3,
                offset: 0,
                pageSize: 10,
                type: "post",
                key: this.$route.params.key,
            }
            const headers = {
                token: this.user.token
            }
            GetPostsByOneApi('search', data, headers)
                .then((response) => {
                    console.log(response)
                    this.PostList = response.data.data
                })
                .catch(err => console.log(err))
        },
        async getLoadData() {
            const data = {
                uid: this.user.uid,
                fid: this.$route.params.fid,
                order: (this.$route.params.uid != undefined) ? 0 : 3,
                offset: this.PostList.length,
                pageSize: 10,
                type: "post",
                key: this.$route.params.key
            }
            const headers = {
                token: this.user.token
            }
            GetPostsByOneApi('search', data, headers)
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

<style>
.highlight_text {
    color: rgb(254, 145, 163)
}

.end {
    display: flex;
    color: gray;
    font-size: small;
    margin-top: auto;
}

.end p {
    margin: 0;
}
</style>