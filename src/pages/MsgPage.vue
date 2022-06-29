<template>
    <div id="MesPage" style="margin-top:5px">
        <load-refresh @refresh="refreshEmit()" @load="loadingEmit()" :canLoad="canLoad">
            <div v-for="key in 10" :key="key">
                <div style="display:flex;padding: 10px 8px">
                    <img src="../assets/icon.png" alt="icon" style="height: 45px;width:45px;margin-right: 10px;">
                    <div>
                        <div style="display: flex;margin-bottom: 10px;">
                            <div style="margin-right:20px;font-weight: 800;">{{ "路人A" }}</div>
                            <div style="color:gray">{{ "回复" }}了我的{{ "评论" }}</div>
                        </div>
                        <div @click="console.log('click')">
                            <div style="margin-bottom: 5px;">这句话说的好</div>
                            <div style="display:flex;color:gray;margin-bottom: 5px;">
                                <div class="bar"></div>
                                <div>{{ "我的" + "评论" + "：" }}我上次评论还是上次我上次评论还是上次我上次评论还是上次我上次评论还是上次</div>
                            </div>
                        </div>

                        <div style="font-size:small;color:gray">{{ "2022-2-22" }}</div>
                    </div>
                </div>
                <hr style="border-style: none;background-color: gray;height: 0.05rem;" v-show="key != 10">
            </div>
        </load-refresh>
    </div>
</template>

<script>
import LoadRefresh from '@/components/LoadRefresh.vue'
import config from '@/api/config'
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
        // this.getInitData()
        document.querySelector('body').setAttribute('style', 'margin:0')
    },
    unmounted() {
        document.body.removeAttribute('style')
    },
    computed: {
        console: () => console,
        window: () => window
    },
    methods: {
        async refreshEmit() {
            this.canLoad = true
            return await this.getInitData()
        },
        async loadingEmit() {
            return await this.getLoadData()
        },
        async getInitData() {

        },
        async getLoadData() {

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