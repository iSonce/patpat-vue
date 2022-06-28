<template>
    <div class="reply_list">
        <div :key="reply.rid" v-for="reply in ReplyList" class="reply_item">
            <div style="display:flex">
                <img v-lazy='url + reply.avatar' alt="icon"
                    style="width:45px;height: 45px;margin-right: 8px;border-radius: 50px;">
                <div style="flex:100%">
                <div style="display:flex;text-align: center;align-items: center;">
                    <div style="margin-bottom: 5px;color: gray;margin-right: 5px;">{{ reply.nickname }}</div>
                    <img :src="require('../assets/Level/Level' + reply.level + '.png')" alt="level" style="width:20px;height: 20px;">
                </div>
                    
                    <router-link :to="{ path: this.$route.path + '/reply/' + reply.rid + '/' + reply.floorNum }"
                        style="text-decoration:none;color: black;" v-if="!this.$route.params.rid">
                        <div style="margin-bottom: 10px;">{{ reply.content }}
                        </div>
                    </router-link>
                    <div v-if="this.$route.params.rid">
                        <div style="margin-bottom: 10px;">{{ reply.content }}
                        </div>
                    </div>
                    <div style="display:flex">
                        <div style="display:flex;margin-right: 50px;">
                            <img src="../assets/ButtonUI/ReviewButton.png" alt="review_button" id="reply_button"
                                style="margin-right:5px">
                            <div style="font-size:13px">{{ reply.replyNum }}</div>
                        </div>
                        <div style="display:flex" @click="this.$emit('handleLikeReply', reply)">
                            <img :src='(reply.isLike) ? require("../assets/ButtonUI/LikeButtonOn.png") : require("../assets/ButtonUI/LikeButton.png")'
                                alt="like_button" id="like_button" style="margin-right:5px">
                            <div style="font-size:13px;color: gray;">{{ reply.likeNum }}</div>
                        </div>
                        <div style="margin-left: auto;font-size:13px;color: gray;margin-right: 5px;">{{ComputedTime( reply.postTime) }}</div>
                    </div>
                </div>
            </div>
            <hr style="background-color: rgb(214, 214, 214); border-width:0px; height: 1px;margin:20px 0 0 0">
        </div>
    </div>
</template>

<script>
import config from '@/api/config'
export default {
    name: "ReplyList",
    emits: ["handleLikeReply"],
    data() {
        return {
            url: config.url
        }
    },
    props: {
        ReplyList: Array
    },
    methods: {
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
    },
    mounted() {
    }
}
</script>

<style scoped>
.reply_list {
    height: 100vh;
}

.reply_list .reply_item {
    padding: 10px;
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
</style>