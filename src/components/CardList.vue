<template>
  <div class="game-cards" id="rcmd-cards">
    <LoadRefresh @refresh="refresh()" @load="additem()">
      <a class="game-card" :href="game.url" :key="game.gid" v-for="game in GameList">
        <img v-lazy="game.picture" alt="Game Poster" id="poster" />
        <div class="content">
          <div class="text">
            <div id="name">{{ game.name }}</div>
            <div id="discribe">{{ game.intro }}</div>
          </div>
          <div class="score">
            <img src="../assets/heart.png" alt="heart" id="heart" />
            <div id="num">{{ game.score }}</div>
          </div>
        </div>
      </a>
    </LoadRefresh>
  </div>
</template>

<script>
import { GetGames } from '@/api/getApi';
import LoadRefresh from './LoadRefresh.vue';
/** Todo: 获取后端数据*/
export default {
  name: "CardList",
  data() {
    return {
      GameList: [
        {
          name: "原神",
          score: 10.0,
          hot: 0,
          url: 'https://www.37.com',
          intro: "感觉不如",
          picture: "https://img.tapimg.com/market/images/01b89c80ba2181e1cf31eea84c7c5cf9.jpg?imageView2/0/w/1080/h/9999/q/80/format/jpg/interlace/1/ignore-error/1",
          icon: "https://img.tapimg.com/market/lcs/6bf4ed787c07d8dd9e3ae5a6ffc96815_360.png?imageMogr2/auto-orient/strip",
          type: ["高画质", "开放世界", "多人联机"],
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
          type: ["高画质", "开放世界", "多人联机"],
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
          type: ["高画质", "开放世界", "多人联机"],
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
          type: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        }
      ],
    };
  },
  async mounted() {
    // this.getInitData()
  },
  methods: {
    async refreshEmit() {
      return await this.getInitData()
    },
    async loadingEmit() {
      return await this.getLoadData()
    },
    async getInitData() {
      GetGames({
        type: "",
        num: 10
      }).then((response) => {
        //GameList重设为结果
        console.log(response)
      })
    },
    async getLoadData() {
      GetGames({
        type: "",
        num: 10
      }).then((response) => {
        //将结果拼接在GameList后面
        console.log(response)
      })
    },

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
          type: ["高画质", "开放世界", "多人联机"],
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
          type: ["高画质", "开放世界", "多人联机"],
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
          type: ["高画质", "开放世界", "多人联机"],
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
          type: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        }
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
          type: ["高画质", "开放世界", "多人联机"],
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
          type: ["高画质", "开放世界", "多人联机"],
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
          type: ["高画质", "开放世界", "多人联机"],
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
          type: ["高画质", "开放世界", "多人联机"],
          gid: 12345
        }
      ]
      console.log(this.GameList.length);
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