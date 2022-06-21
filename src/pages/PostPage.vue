<template>
    <div id="post" style="margin-top:10px">
        <div :key="i" v-for="i in 10" style="margin-bottom:10px" class="post_item">
            <div class="user_info">
                <img src="../assets/user_icon.png" alt="user_icon" class="user_icon" @click="toUser()">
                <div style="padding-top: 2px">
                    <div id="user_name">原批</div>
                    <div style="display:flex">
                        <div class="time">
                            n天前
                        </div>
                        <div class="forum">
                            超级马里奥
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div @click="toPost()">
                    <div class="title">
                        感觉画质不如原神
                    </div>
                    <img src="../assets/op.webp" alt="op" class="post_img">
                </div>
                <div class="button">
                    <img src="../assets/ButtonUI/ShareButton.png" alt="share" style="width:20px" @click="share()">
                    <div style="display: flex" @click="toPost()">
                        <img src="../assets/ButtonUI/ReviewButton.png" alt="message" style="width:20px">
                        <div style="padding-left:5px;color:gray">1</div>
                    </div>
                    <div style="display:flex" @click="addLike()">
                        <img src="../assets/ButtonUI/LikeButton.png" alt="star" style="width:20px">
                        <div style="padding-left:5px;color:gray">1</div>
                    </div>

                </div>
            </div>
            <hr class="line">
        </div>
    </div>
</template>

<script>
export default {
    name: "PostPage",
    data() {
        return {
            PostList: [
                { pid: 123, content: "感觉不如原神", fid: "超级马里奥", post_time: "n天前", like: 1, review: 1, username: "原批", usericon: require('../assets/user_icon.png') }
            ]
        }
    },
    methods: {
        toPost() {
            console.log('toPost')
        },
        toUser() {
            console.log('toUser')
        },
        addLike() {
            console.log('addLike')
        },
        share() {
            console.log('share')
        }
    }
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
    padding: 10px 30px 10px 30px;
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