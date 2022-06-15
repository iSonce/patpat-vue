<template>
  <a class="rcmd-cards">
    <a
      class="rcmd-card"
      href="www.baidu.com"
      :key="gameInfo.id"
      v-for="gameInfo in gameInfos"
    >
      <img src="../assets/mariopost.jpg" alt="Game Poster" id="poster" />
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
  </a>
</template>

<script>
export default {
  name: "RcmdList",
  data() {
    return {
      gameInfos: [
        { id: 1, name: "super mario", discribe: "good game", score: "9.0" },
        { id: 2, name: "super mario", discribe: "good game", score: "9.0" },
        { id: 3, name: "super mario", discribe: "good game", score: "9.0" },
        { id: 4, name: "super mario", discribe: "good game", score: "9.0" },
        { id: 5, name: "super mario", discribe: "good game", score: "9.0" },
      ],
    };
  },
  methods: {
    updatedInfos(json) {
      //用于更新gameInfos的函数,给Android调用
      this.gameInfos = JSON.parse(json).gameInfos;
    },
  },
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
  margin: 10px;
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