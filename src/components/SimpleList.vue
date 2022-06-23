<template>
  <div class="top-list" id="top-list">
    <LoadRefresh @refresh="refreshEmit()" @load="loadingEmit()">
      <a class="top-item" :key="game.gid" v-for="(game, index) in GameList" :href="game.url">
        <p id="rank" v-if="rankShow">{{ index + 1 }}</p>
        <img v-lazy="game.icon" alt="icon" id="icon" />
        <div class="content">
          <h3 id="name">{{ (game.name.length > 9) ? game.name.substr(0, 9) + '...' : game.name }}</h3>
          <div class="score">
            <img src="../assets/heart.png" alt="heart" id="heart" />
            <p id="num">{{ (game.score).toFixed(1) }}</p>
            <div id="type_container">
              <div :key="index" v-for="(value, index) in divideTypes(game.types)">
                <div v-if="index == 0 || index == 1" class="type">{{ (index == 0) ? value + ' · ' : value }}
                </div>
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
import { GetGamesByRank, GetGamesByType } from '@/api/getApi';
import LoadRefresh from './LoadRefresh.vue';
export default {
  name: "SimpleList",
  props: {
    rankShow: Boolean,
    type: String,
  },
  data() {
    return {
      GameList: [],
      display: {
        head: false,
        end: false,
      },
      loadBusy: false,
      isRefresh: false,
    };
  },
  mounted() {
    this.getInitData()
  },
  methods: {
    divideTypes(types) {
      if (types == null) {
        return null
      }
      return types.split(',')
    },
    async refreshEmit() {
      return await this.getInitData()
    },
    async loadingEmit() {
      return await this.getLoadData()
    },
    async getInitData() {
      (this.type == undefined) ?
        GetGamesByRank({
          pageSize: 15,
          offset: this.offset,
        }).then((response) => {
          //GameList重设为结果
          this.GameList = response.data.data
        })
        :
        GetGamesByType({
          type: this.type,
          pageSize: 15,
          offset: this.offset,
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
          throw (new Error("没有更多数据了！"))
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
  width: 65px;
  height: 65px;
  border-radius: 15px;
  margin: 0 10px 0 0px;
}

.top-item #download {
  margin-left: auto;
  text-decoration: none;
  color: rgb(187, 71, 90);
  float: right;
  background-color: rgba(255, 192, 203, 0.549);
  border-radius: 18px;
  text-align: center;
  width: 80px;
  padding: 5px 0px 5px 0px;
  font-size: 16px;
  font-weight: bolder;
}

.top-item .content #name {
  color: black;
  margin: 0 0 10px 0;
}

.top-item .content .score {
  display: flex;
  align-items: center;
}


.top-item .content .score #type_container {
  margin-left: 10px;
  display: flex;
}

.top-item .content .score #type_container .type {
  color: gray;
  font-size: 13px;
  padding-right: 5px;
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