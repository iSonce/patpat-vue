<template>
    <div class="Pid">
        <header class="header">
            <img src="../assets/user_icon.png" alt="user_icon" style="width:50px;height: 50px;margin-right: 10px;">
            <div>
                <div style="font-size:large;font-weight: 800;margin-bottom: 4px;">{{postInfo.uid}}</div>
                <div style="display:flex;color: gray;font-size:small">
                    <div style="margin-right: 5px;">n小时前</div>
                    <div>2000浏览</div>
                </div>
            </div>
            <div style="display:flex;margin-left: auto;align-items: center;">
                <img src="../assets/ButtonUI/BackButton.png" alt="back_button"
                    style="width:40px;height: 40px;margin-right: 15px;">
                <button id="script_button">已关注</button>
            </div>
        </header>
        <div class="main">
            <div class="content">
                <div class="text">{{postInfo.content}}</div>
                <img v-lazy="postInfo.image" alt="op" class="img">
                <div class="forum">
                    <img src="../assets/op.webp" alt="op" class="picture">
                    <div style="margin-left:8px">
                        <div>游戏名</div>
                        <div style="display:flex">
                            <div style="display:flex">
                                <div>关注</div>
                                <div>1</div>
                            </div>
                            <div style="padding:0 5px 0 5px">·</div>
                            <div style="display:flex">
                                <div>帖子</div>
                                <div>1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="review_list">
                <div class="review_header">
                    <div style="padding-right:8px">评论</div>
                    <div>11</div>
                </div>
                <div :key="i" v-for="i in 20" class="review_item">
                    <div style="display:flex">
                        <img src="../assets/user_icon.png" alt="icon"
                            style="width:50px;height: 50px;margin-right: 8px;">
                        <div style="flex:100%">
                            <div style="margin-bottom: 5px;color: gray;">原批</div>
                            <div style="margin-bottom: 10px;">这是评论文本~这是评论文本~这是评论文本~这是评论文本~这是评论文本~这是评论文本~这是评论文本~这是评论文本~
                            </div>
                            <div style="display:flex">
                                <div style="display:flex;margin-right: 50px;">
                                    <img src="../assets/ButtonUI/ReviewButton.png" alt="review_button"
                                        id="review_button">
                                    <div style="font-size:13px">1</div>
                                </div>
                                <div style="display:flex">
                                    <img src="../assets/ButtonUI/LikeButton.png" alt="like_button" id="like_button">
                                    <div style="font-size:13px;color: gray;">1</div>
                                </div>
                                <div style="margin-left: auto;font-size:13px;color: gray;">n小时前</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <button id="review">发表你的看法</button>
            <div id="button" style="flex:30%;justify-content: space-evenly;">
                <div style="text-align:center">
                    <img src="../assets/ButtonUI/ReviewButton.png" alt="review_button" id="review_button">
                    <div style="font-size:13px">1</div>
                </div>
                <div style="text-align:center">
                    <img src="../assets/ButtonUI/LikeButton.png" alt="like_button" id="like_button">
                    <div style="font-size:13px;color: gray;">1</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            postInfo: {
                fid: "123",
                uid: "c语言系列大佬",
                title: "感觉不如原神，画质",
                content: "腾讯要是敢动原神和米哈游的话，我TM直接去把王者源码给你爬出来！然后公布，我好歹也是个c语言系列大佬",
                image: require("../assets/c_master.webp")
            }
        }
    },
    mounted() {
        document.querySelector('body').setAttribute('style', 'margin:0')
        this.getInitData()
    },
    unmounted() {
        document.body.removeAttribute('style')
    },
    methods: {
        async refreshEmit() {
            return await this.getInitData()
        },
        async loadingEmit() {
            return await this.getLoadData()
        },
        async getInitData() {
            //$route.params.pid
        },
        async getLoadData() {

        },
    }
}
</script>

<style scoped>
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
    width: 80px;
}

.review_list .review_header {
    display: flex;
    width: 100vw;
    padding: 10px;
    background-color: #FFECED;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
}

.review_list .review_item {
    padding: 10px;
}

#review_button {
    width: 18px;
    height: 18px;
}

#like_button {
    width: 17px;
    height: 17px;
}

.review_list #like_button,
#review_button {
    margin-right: 5px;
}

.footer #like_button,
#review_button {
    margin-right: 0px;
}

#script_button {
    border-radius: 20px;
    background-color: #FFECED;
    color: #E67E7E;
    border-style: hidden;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
    padding: 5px;
}
</style>