<template>
  <div class="rcmd-cards" id="rcmd-cards">
    <div class="refreshImg">
      <img src="../assets/loading.gif" alt="loading" v-show="display.head" />
    </div>
    <a
      class="rcmd-card"
      href="http://www.baidu.com"
      :key="gameInfo.id"
      v-for="gameInfo in gameList"
    >
      <img src="../assets/op.webp" alt="Game Poster" id="poster" />
      <div class="content">
        <div class="text">
          <h1 id="name">{{ gameInfo.name }}</h1>
          <p id="discribe">{{ gameInfo.discribe }}</p>
        </div>
        <div class="score">
          <img src="../assets/heart.png" alt="heart" id="heart" />
          <div id="num">{{ gameInfo.score }}</div>
        </div>
      </div>
    </a>
    <div class="refreshImg">
      <img src="../assets/loading.gif" alt="loading" v-show="display.end" />
    </div>
  </div>
</template>

<script>
/** Todo: 图片未加载显示白色，需要固定图片大小*/
/** Todo: 获取后端数据*/
// import { GetGameList } from "@/api/getApi";
export default {
  name: "RcmdList",
  data() {
    return {
      gameList: [
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
      ],
      display: {
        head: false,
        end: false,
      },
      //用于防止加载两次，相当于加个锁
      busy: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      if (scrollHeight - clientHeight - scrollTop < 1 && !this.busy) {
        //加锁
        this.busy = true
        this.display.end = true;
        window.setTimeout(() => {
          this.display.end = false;
          this.additem();
          //解锁
          this.busy = false
        }, 1000);
      }
    });
    var _element = document.getElementById("rcmd-cards"),
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
        _transitionHeight < 40 &&
        document.documentElement.scrollTop == 0
      ) {
        this.display.head = true;
        _element.style.transform = "translateY(" + _transitionHeight + "px)";
      }
    });

    _element.addEventListener("touchend", () => {
      if (document.documentElement.scrollTop == 0) {
        //这里需要检测是否在顶部
        _element.style.transition = "transform 0.5s ease 1s";
        _element.style.transform = "translateY(0px)";
        this.refresh();
        setTimeout(() => {
          this.display.head = false;
        }, 1000);
      }
    });
  },
  methods: {
    additem() {
      console.log("加载");
      this.gameList.push.apply(this.gameList, [
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
      ]);
    },
    refresh() {
      console.log("刷新");
      this.gameList = [
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
        { id: 1, name: "op", discribe: "good game", score: "10.0" },
      ];
    },
  },
};
</script>

<style>
:root {
  --card-redius: 25px;
}

.refreshImg {
  text-align: center;
}

.refreshImg img {
  height: 40px;
}

.rcmd-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  margin: 10px;
  margin-top: 0;
}

.rcmd-card {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  display: grid;
  grid-template-rows: max-content 100px 1fr;
  border-radius: var(--card-redius) var(--card-redius);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.rcmd-card #poster {
  border-radius: var(--card-redius) var(--card-redius) 0 0;
  object-fit: cover;
  /*使用百分比一定要写!important,否则会失效 */
  width: 100% !important;
}

.rcmd-card .content {
  margin: 0px 20px;
  justify-content: space-between;
  display: flex;
}

.rcmd-card .content .text #name {
  margin: 10px 0px 0px 0px;
  color: black;
}

.rcmd-card .content .text #discribe {
  margin: 10px 0px 0px 0px;
  color: grey;
}

.rcmd-card .content .score {
  align-items: center;
  display: flex;
  float: right;
}

.rcmd-card .content .score #heart {
  width: 60px;
  height: 60px;
}

.rcmd-card .content .score #num {
  color: red;
  font-size: larger;
  font-weight: bold;
}
</style>