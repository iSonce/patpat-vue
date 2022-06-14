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
        { id: 1, name: "super mario", discribe: "good game", score: "9.0" },
        { id: 1, name: "super mario", discribe: "good game", score: "9.0" },
        { id: 1, name: "super mario", discribe: "good game", score: "9.0" },
        { id: 1, name: "super mario", discribe: "good game", score: "9.0" },
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
.rcmd-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  padding: 5px;
  padding-block-end: 15px;
}

.rcmd-card {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  display: grid;
  grid-template-rows: max-content 100px 1fr;
  border-radius: 25px 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.rcmd-card #poster {
  border-radius: 25px 25px 0 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
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
}
</style>