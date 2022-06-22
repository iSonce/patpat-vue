<template>
    <div id="post" style="margin-top:10px">
        <LoadRefresh @refresh="refresh()" @load="additem()">
            <div :key="item.pid" v-for="item in PostList" style="margin-bottom:10px" class="post_item">
                <div class="user_info">
                    <img v-lazy="item.usericon" alt="user_icon" class="user_icon" @click="toUser()">
                    <div style="padding-top: 2px">
                        <div id="user_name">{{ item.username }}</div>
                        <div style="display:flex">
                            <div class="time">
                                {{ item.post_time }}
                            </div>
                            <div class="forum">
                                {{ item.forum_name }}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div @click="toPost()">
                        <div class="title">
                            {{ item.title }}
                        </div>
                        <img v-lazy="item.post_img" alt="op" class="post_img">
                    </div>
                    <div class="button">
                        <img src="../assets/ButtonUI/ShareButton.png" alt="share" style="width:20px" @click="share()">
                        <div style="display: flex" @click="toPost()">
                            <img src="../assets/ButtonUI/ReviewButton.png" alt="message" style="width:20px">
                            <div style="width: 0px; color:gray">{{ item.review }}</div>
                        </div>
                        <div style="display:flex" @click="addLike()">
                            <img src="../assets/ButtonUI/LikeButton.png" alt="star" style="width:20px">
                            <div style="width: 0px; color:gray">{{ item.like }}</div>
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
export default {
    name: "PostPage",
    data() {
        return {
            PostList: [
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
            ]
        };
    },
    methods: {
        toPost() {
            console.log("toPost");
        },
        toUser() {
            console.log("toUser");
        },
        addLike() {
            console.log("addLike");
        },
        share() {
            console.log("share");
        },
        refresh() {
            this.PostList = [
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
            ];
            console.log("refresh");
        },
        additem() {
            this.PostList.push.apply(this.PostList, [
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
                { pid: 123, title: "感觉不如原神，画质", forum_name: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require("../assets/user_icon.png"), post_img: require("../assets/op.webp") },
            ]);
            console.log("load");
        }
    },
    components: { LoadRefresh }
}
</script>
<style>
#post .user_info {
    display: flex;
}

#post .user_icon {
    width: 50px;
    margin-right: 10px;
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
    padding: 10px 40px 10px 40px;
    display: flex;
    justify-content: space-between;
}

#post .title {
    padding: 5px;
    font-size: large;
    font-weight: bolder;
}

#post .line {
    width: 95%;
    border-top: 1px solid #d0d0d5;
}
</style>