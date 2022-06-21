<template>
  <div class="rcmd-cards" id="rcmd-cards">
    <LoadRefresh @refresh="refresh()" @load="additem()">
      <a class="rcmd-card" href="http://www.baidu.com" :key="gameInfo.id" v-for="gameInfo in gameList">
        <img v-lazy="gameInfo.img" alt="Game Poster" id="poster" />
        <div class="content">
          <div class="text">
            <div id="name">{{ gameInfo.name }}</div>
            <div id="discribe">{{ gameInfo.discribe }}</div>
          </div>
          <div class="score">
            <img src="../assets/heart.png" alt="heart" id="heart" />
            <div id="num">{{ gameInfo.score }}</div>
          </div>
        </div>
      </a>
    </LoadRefresh>
  </div>
</template>

<script>
import LoadRefresh from './LoadRefresh.vue';
/** Todo: 获取后端数据*/
// import { GetGameList } from "@/api/getApi";
export default {
  name: "RcmdList",
  data() {
    return {
      gameList: [
        { id: 1, name: "超级马里奥之感觉不如原神，画质", discribe: "感觉不如原神感觉不如原神感觉不如原神感觉不如原神感觉不如原神感觉不如原神", score: "10.0", img: require("../assets/op.webp") },
        { id: 1, name: "马里奥", discribe: "good game", score: "10.0", img: require("../assets/marioposter.jpg") },
        { id: 1, name: "op", discribe: "good game", score: "10.0", img: require("../assets/op.webp") },
        { id: 1, name: "op", discribe: "good game", score: "10.0", img: require("../assets/op.webp") },
        { id: 1, name: "op", discribe: "good game", score: "10.0", img: require("../assets/op.webp") },
      ],
    };
  },
  mounted() {

  },
  methods: {
    additem() {
      console.log("加载");
      this.gameList.push.apply(this.gameList, [
        { id: 1, name: "op", discribe: "good game", score: "10.0", img: require("../assets/op.webp") },
        { id: 1, name: "op", discribe: "good game", score: "10.0", img: require("../assets/op.webp") },
        { id: 1, name: "op", discribe: "good game", score: "10.0", img: require("../assets/op.webp") },
        { id: 1, name: "op", discribe: "good game", score: "10.0", img: require("../assets/op.webp") },
        { id: 1, name: "op", discribe: "good game", score: "10.0", img: require("../assets/op.webp") },
      ]);
      console.log(this.gameList.length);
    },
    refresh() {
      console.log("刷新");
      this.gameList = [
        { id: 1, name: "超级马里奥之感觉不如原神，画质", discribe: "感觉不如原神感觉不如原神感觉不如原神感觉不如原神感觉不如原神感觉不如原神", score: "10.0", img: require("../assets/op.webp") },
        { id: 1, name: "马里奥", discribe: "good game", score: "10.0", img: require("../assets/marioposter.jpg") },
        { id: 1, name: "op", discribe: "good game", score: "10.0", img: require("../assets/op.webp") },
        { id: 1, name: "op", discribe: "good game", score: "10.0", img: require("../assets/op.webp") },
        { id: 1, name: "op", discribe: "good game", score: "10.0", img: require("../assets/op.webp") },
      ];
      console.log(this.gameList.length);
    },
  },
  components: { LoadRefresh }
};
</script>

<style>
:root {
  --card-redius: 25px;
}

.rcmd-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
  padding: 0px 10px 0 10px;
}

.rcmd-card {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  display: grid;
  grid-template-rows: max-content 85px 1fr;
  border-radius: var(--card-redius) var(--card-redius);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 20px;
}

.rcmd-card #poster {
  border-radius: var(--card-redius) var(--card-redius) 0 0;
  object-fit: cover;
  /*使用百分比一定要写!important,否则会失效 */
  width: 100% !important;
}

.rcmd-card .content {
  margin: 0px 12px;
  justify-content: space-between;
  display: flex;
}

.rcmd-card .content .text #nameAndType {
  margin-top: 10px;
  display: flex;
}

.rcmd-card .content .text #name {
  font-size: 15px;
  font-weight: 800;
  color: black;
  margin-top: 10px;
}

.rcmd-card .content .text #discribe {
  margin: 10px 0px 0px 0px;
  color: grey;
  font-size: 10px;
}

.rcmd-card .content .score {
  align-items: center;
  display: flex;
  float: right;
}

.rcmd-card .content .score #heart {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

.rcmd-card .content .score #num {
  color: red;
  font-size: 15px;
  font-weight: bold;
}
</style>