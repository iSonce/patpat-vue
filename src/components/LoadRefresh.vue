<!-- Todo: 根据滑动距离更改动画 -->
<template>
    <div id="load-refresh">
        <div class="refreshImg">
            <img src="../assets/loading.gif" alt="loading" v-show="load_refresh_img_show.head" />
        </div>
        <slot></slot>
        <div class="refreshImg">
            <img src="../assets/loading.gif" alt="loading" v-show="load_refresh_img_show.end" />
        </div>
    </div>
</template>

<script>
export default {
    emits: ['refresh', 'load'],
    props:['canLoad'],
    data() {
        return {
            load_refresh_img_show: {
                head: false,
                end: false
            },
            //用于防止加载两次，相当于加个锁
            is_load_busy: false,
            //判断是否刷新
            is_refresh: false
        };
    },
    mounted() {
        window.addEventListener("scroll", () => {
            let scrollTop = document.documentElement.scrollTop;
            let scrollHeight = document.documentElement.scrollHeight;
            let clientHeight = document.documentElement.clientHeight;
            if (scrollHeight - clientHeight - scrollTop < 1 && !this.is_load_busy && this.canLoad) {
                //加锁
                this.is_load_busy = true
                this.load_refresh_img_show.end = true;
                scroll(0, scrollHeight)
                window.setTimeout(() => {
                    this.load_refresh_img_show.end = false;
                    this.$emit('load')
                    //解锁
                    this.is_load_busy = false
                }, 1000);
            }
        });
        var _element = document.getElementById("load-refresh"),
            _startPos = 0, // 初始的值
            _transitionHeight = 0; // 移动的距离

        _element.addEventListener("touchstart", (e) => {
            _startPos = e.touches[0].pageY; // 记录初始位置
            _element.style.position = "relative";
            _element.style.transition = "transform 0s";
        });

        _element.addEventListener("touchmove", (e) => {
            _transitionHeight = e.touches[0].pageY - _startPos; // 记录差值
            if (
                _transitionHeight > 0 &&
                _transitionHeight < 30 &&
                document.documentElement.scrollTop == 0
            ) {
                _element.style.transform = "translateY(" + _transitionHeight + "px)";
                if (_transitionHeight > 10) {
                    this.load_refresh_img_show.head = true;
                    this.is_refresh = true;
                }
            }
        });

        _element.addEventListener("touchend", async () => {
            if (document.documentElement.scrollTop == 0 && this.is_refresh) {
                //这里需要检测是否在顶部
                this.is_refresh = false;
                _element.style.transition = "transform 0.5s ease 1s";
                _element.style.transform = "translateY(0px)";
                this.$emit('refresh');
                setTimeout(() => {
                    this.load_refresh_img_show.head = false;
                }, 1000);
            }
        });
    },
}
</script>

<style>
.refreshImg {
    text-align: center;
}

.refreshImg img {
    height: 40px;
}
</style>