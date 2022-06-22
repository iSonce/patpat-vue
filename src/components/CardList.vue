<template>
  <div class="game-cards" id="rcmd-cards">
    <LoadRefresh @refresh="refreshEmit()" @load="loadingEmit()">
      <a class="game-card" :href="game.url" :key="game.gid" v-for="game in GameList">
        <img v-lazy="game.picture" alt="Game Poster" id="poster" />
        <div class="content">
          <div class="text">
            <div id="name">{{ game.name }}</div>
            <div id="discribe">{{ game.intro }}</div>
          </div>
          <div class="score">
            <img src="../assets/heart.png" alt="heart" id="heart" />
            <div id="num">{{ game.score.toFixed(1) }}</div>
          </div>
        </div>
      </a>
    </LoadRefresh>
  </div>
</template>

<script>
import { GetGames } from '@/api/getApi';
import LoadRefresh from './LoadRefresh.vue';
export default {
  name: "CardList",
  data() {
    return {
      GameList: [],
      offset: 0,
    };
  },
  async mounted() {
    this.getInitData()
  },
  methods: {
    async refreshEmit() {
      return await this.getInitData()
    },
    async loadingEmit() {
      return await this.getLoadData()
    },
    async getInitData() {
      //设置随机offset
      this.offset = Math.floor(Math.random() * 101);
      GetGames({
        pageSize: 10,
        offset: this.offset,
      }).then((response) => {
        //GameList重设为结果
        this.GameList = response.data.data
      })
    },
    async getLoadData() {
      GetGames({
        pageSize: 10,
        offset: this.offset + this.GameList.length
      }).then((response) => {
        //GameList重设为结果
        if (response.data.data == null) {
          throw (new Error("没有更多数据了！"))
        }
        this.GameList.push.apply(this.GameList, response.data.data)
      }).catch(err => console.log(err))
    },
  },
  components: { LoadRefresh }
};
</script>

<style>
:root {
  --card-redius: 25px;
}

.game-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
  padding: 0px 10px 0 10px;
}

.game-card {
  -webkit-tap-highlight-color: transparent;
  text-decoration: none;
  display: grid;
  grid-template-rows: max-content 85px 1fr;
  border-radius: var(--card-redius) var(--card-redius);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 20px;
}

.game-card #poster {
  border-radius: var(--card-redius) var(--card-redius) 0 0;
  object-fit: cover;
  /*使用百分比一定要写!important,否则会失效 */
  width: 100% !important;
}

.game-card .content {
  margin: 0px 12px;
  justify-content: space-between;
  display: flex;
}

.game-card .content .text #nameAndType {
  margin-top: 10px;
  display: flex;
}

.game-card .content .text #name {
  font-size: 15px;
  font-weight: 800;
  color: black;
  margin-top: 10px;
}

.game-card .content .text #discribe {
  margin: 10px 0px 0px 0px;
  color: grey;
  font-size: 10px;
}

.game-card .content .score {
  align-items: center;
  display: flex;
  float: right;
}

.game-card .content .score #heart {
  width: 30px;
  height: 30px;
  margin-right: 5px;
}

.game-card .content .score #num {
  color: red;
  font-size: 15px;
  font-weight: bold;
}
</style>