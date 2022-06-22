<template>
  <div class="top-list" id="top-list">
    <LoadRefresh @refresh="refresh()" @load="additem()">
      <a class="top-item" :key="game.gid" v-for="(game, index) in GameList" :href="game.url">
        <p id="rank" v-if="rankShow">{{ index + 1 }}</p>
        <img v-lazy="game.icon" alt="icon" id="icon" />
        <div class="content">
          <h3 id="name">{{ game.name }}</h3>
          <div class="score">
            <img src="../assets/heart.png" alt="heart" id="heart" />
            <p id="num">{{ (game.score).toFixed(1) }}</p>
            <div id="type_container">
              <div :key="index" v-for="(value, index) in game.types">
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
  name: "SimpleList",
  props: {
    rankShow: Boolean
  },
  data() {
    return {
      GameList: [
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.taptap.com/app/193994',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
      ],
      display: {
        head: false,
        end: false,
      },
      loadBusy: false,
      isRefresh: false
    };
  },
  mounted() {
  },
  methods: {
    additem() {
      console.log("加载");
      this.GameList.push.apply(this.GameList, [
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
      ]);
      console.log(this.GameList.length);
    },
    refresh() {
      console.log("刷新");
      this.GameList = [
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          types: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        },
      ],
      this.curnum = 15;
      console.log(this.GameList.length);
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