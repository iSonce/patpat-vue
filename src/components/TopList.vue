<template>
  <div class="top-list" id="top-list">
    <LoadRefresh @refresh="refresh()" @load="additem()">
      <a class="top-item" :key="TopInfo.id" v-for="TopInfo in gameList" :href="TopInfo.url">
        <p id="rank" v-if="rankShow">{{ TopInfo.id }}</p>
        <img src="../assets/marioicon.png" alt="icon" id="icon" />
        <div class="content">
          <h3 id="name">{{ TopInfo.name }}</h3>
          <div class="score">
            <img src="../assets/heart.png" alt="heart" id="heart" />
            <p id="num">{{ TopInfo.score }}</p>
            <div id="type_container">
              <div :key="index" v-for="(value, index) in TopInfo.type">
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
import LoadRefresh from './LoadRefresh.vue';
export default {
  props: {
    rankShow: Boolean
  },
  data() {
    return {
      gameList: [
        { id: 1, name: "mario1", score: "8.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 2, name: "mario2", score: "7.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 3, name: "mario2", score: "6.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 4, name: "mario1", score: "8.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 5, name: "mario2", score: "7.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 6, name: "mario2", score: "6.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 7, name: "mario1", score: "8.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 8, name: "mario2", score: "7.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 9, name: "mario2", score: "6.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 10, name: "mario1", score: "8.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 11, name: "mario2", score: "7.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 12, name: "mario2", score: "6.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 13, name: "mario1", score: "8.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 14, name: "mario2", score: "7.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 15, name: "mario2", score: "6.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
      ],
      display: {
        head: false,
        end: false,
      },
      loadBusy: false,
      curnum: 15,
      isRefresh: false
    };
  },
  mounted() {
  },
  methods: {
    additem() {
      console.log("加载");
      this.gameList.push.apply(this.gameList, [
        { id: ++this.curnum, name: "mario1", score: "8.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: ++this.curnum, name: "mario2", score: "7.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: ++this.curnum, name: "mario2", score: "6.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
      ]);
      console.log(this.gameList.length);
    },
    refresh() {
      console.log("刷新");
      this.gameList = [
        { id: 1, name: "mario1", score: "8.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 2, name: "mario2", score: "7.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 3, name: "mario2", score: "6.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 4, name: "mario1", score: "8.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 5, name: "mario2", score: "7.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 6, name: "mario2", score: "6.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 7, name: "mario1", score: "8.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 8, name: "mario2", score: "7.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 9, name: "mario2", score: "6.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 10, name: "mario1", score: "8.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 11, name: "mario2", score: "7.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 12, name: "mario2", score: "6.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 13, name: "mario1", score: "8.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 14, name: "mario2", score: "7.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
        { id: 15, name: "mario2", score: "6.0", url: "https://37.com", type: ["高画质", "开放世界", "ARPG", "多人"] },
      ];
      this.curnum = 15;
      console.log(this.gameList.length);
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
  margin: 0;
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