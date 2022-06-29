<template>
  <div class="top-list" id="top-list" v-if="GameList.length">
    <LoadRefresh @refresh="refreshEmit()" @load="loadingEmit()" :canLoad="canLoad">
      <a class="top-item" :key="game.gid" v-for="(game, index1) in GameList" @click="goToUrl(game.url)">
        <p id="rank" v-if="rankShow">{{ index1 + 1 }}</p>
        <img v-lazy="game.icon" alt="icon" id="icon" />
        <div class="content">
          <h3 id="name">{{ (game.name.length > 8) ? game.name.substr(0, 8) + '...' : game.name }}</h3>
          <div class="score">
            <img src="../assets/heart.png" alt="heart" id="heart" />
            <p id="num">{{ (game.score).toFixed(1) }}</p>
            <div id="type_container">
              <div class="type">
                {{divideTypes(game.types)}}
              </div>
            </div>
          </div>
        </div>
        <div id="download">官网</div>
      </a>
    </LoadRefresh>
  </div>
</template>

<script>
import { GetGamesByRank, GetGamesByType } from '@/api/GameApi';
import LoadRefresh from './LoadRefresh.vue';
export default {
  name: "SimpleList",
  props: {
    rankShow: Boolean,
    type: String,
    keyWord: String,
  },
  data() {
    return {
      GameList: [],
      display: {
        head: false,
        end: false,
      },
      canLoad: true
    };
  },
  mounted() {
    this.getInitData()
  },
  methods: {
    goToUrl(url) {
      window.jsAdapter.goToUrl(url)
    },
    divideTypes(types) {
      if (types == null) {
        return null
      }
      let arr = types.split(',')
      return arr[0]+' · '+arr[1]
    },
    async refreshEmit() {
      this.canLoad = true
      return await this.getInitData()
    },
    async loadingEmit() {
      return await this.getLoadData()
    },
    async getInitData() {
      (this.type == undefined) ?
        GetGamesByRank({
          pageSize: 15,
          offset: 0,
        }).then((response) => {
          //GameList重设为结果
          this.GameList = response.data.data
        })
        :
        GetGamesByType({
          type: this.type,
          pageSize: 15,
          offset: 0,
        }).then((response) => {
          //GameList重设为结果
          this.GameList = response.data.data
        })
    },
    async getLoadData() {
      (this.type == undefined) ?
        GetGamesByRank({
          pageSize: 15,
          offset: this.GameList.length
        }).then((response) => {
          if (response.data.data == null) {
            this.canLoad = false
            throw (new Error(response.data.message))
          }
          //拼接上新数据
          this.GameList.push.apply(this.GameList, response.data.data)
        }).catch(err => console.log(err))
        :
        GetGamesByType({
          type: this.type,
          pageSize: 15,
          offset: this.offset,
        }).then((response) => {
          if (response.data.data == null) {
            this.canLoad = false
            throw (new Error(response.data.message))
          }
          //拼接上新数据
          this.GameList.push.apply(this.GameList, response.data.data)
        })
    },
  },
  components: { LoadRefresh }
};
</script>

<style>
.top-list {
  padding: 5px;
}

.top-item {
  align-items: center;
  text-decoration: none;
  display: flex;
  padding-block-end: 15px;
  -webkit-tap-highlight-color: transparent;
}

.top-item #rank {
  color: black;
  font-size: medium;
  font-weight: 500;
  width: 20px;
  padding-right: 8px;
}

.top-item #icon {
  width: 52px;
  height: 52px;
  border-radius: 15px;
  margin: 0 8px 0 0px;
}

.top-item #download {
  margin-left: auto;
  text-decoration: none;
  color: rgb(187, 71, 90);
  float: right;
  background-color: #ffeced;
  border-radius: 18px;
  text-align: center;
  width: 70px;
  padding: 5px 0px 5px 0px;
  font-size: 16px;
  font-weight: bolder;
}

.top-item .content #name {
  color: black;
  margin: 0 0 10px 0;
  font-size: medium;
}

.top-item .content .score {
  display: flex;
  text-align: center;
  align-items: center;
}


.top-item .content .score #type_container {
  margin-left: 10px;
  display: flex;
  text-align: center;
  align-items: center;
}

.top-item .content .score #type_container .type {
  color: gray;
  font-size: 12px;
}

.top-item .content .score #heart {
  width: 20px;
  height: 20px;
}

.top-item .content .score #num {
  color: red;
  font-weight: 800;
  margin: 0;
  width: auto;
}
</style>