<template>
  <div class="loading">
    <a :key="key" v-for="(value, key) in map" @click="clickFunc" href="https://www.37.com/">
      <div
        id="content"
        v-if="
          [
            '4',
            '5',
            '8',
            '9',
            '10',
            '12',
            '13',
            '14',
            '16',
            '17',
            '18',
            '21',
            '22',
          ].includes(key)
        "
      >
        <img :src="value.imgName" alt="MOBA" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "DscvPage",
  data() {
    return {
      map: {
        4: {name: "Sandbox",imgName: require("../assets/GameType/Sandbox.png")},
        5: { name: "MOBA", imgName: require("../assets/GameType/MOBA.png") },
        8: { name: "Card", imgName: require("../assets/GameType/Card.png") },
        9: { name: "Online", imgName: require("../assets/GameType/Online.png") },
        10: { name: "Music", imgName: require("../assets/GameType/Music.png") },
        12: { name: "Place", imgName: require("../assets/GameType/Place.png") },
        13: { name: "Pixel", imgName: require("../assets/GameType/Pixel.png") },
        14: { name: "Yizhi", imgName: require("../assets/GameType/Yizhi.png") },
        16: { name: "Shooting", imgName: require("../assets/GameType/Shooting.png") },
        17: { name: "Puzzle", imgName: require("../assets/GameType/Puzzle.png") },
        18: { name: "Speed", imgName: require("../assets/GameType/Speed.png") },
        21: { name: "Story", imgName: require("../assets/GameType/Story.png") },
        22: { name: "Survival", imgName: require("../assets/GameType/Survival.png") },
      },
    };
  },
  methods: {
    clickFunc() {
      console.log("click");
    },
  },
  mounted() {
    for (let i = 1; i <= 25; i++) {
      if (![4, 5, 8, 9, 10, 12, 13, 14, 16, 17, 18, 21, 22].includes(i)) {
        this.map[i] = {};
      }
    }
  },
};
</script>

<style>
body,
html {
  /* 消除右侧间距 */
  overflow-x: hidden;
}

body {
  background-color: pink;
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading {
  transform: rotate(-45deg);
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

.loading a {
  padding: 0;
  margin: 0;
  display: flex;
  background-color: pink;
  --shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
  align-items: center;
  justify-content: center;
  width: 92px;
  height: 92px;
}

.loading a #content {
  transform: rotate(45deg);
}

.loading a #content img {
  width: 50px;
}

.loading a #content p {
  font-size: small;
  padding: 0;
  margin: 0;
}

.loading a:nth-child(-n + 5):nth-child(n + 4) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading a:nth-child(-n + 10):nth-child(n + 8) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading a:nth-child(-n + 14):nth-child(n + 12) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading a:nth-child(-n + 18):nth-child(n + 16) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading a:nth-child(-n + 22):nth-child(n + 21) {
  background-color: white;
  box-shadow: var(--shadow);
}
</style>