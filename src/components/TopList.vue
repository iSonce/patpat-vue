<template>
  <div class="top-list" id="top-list">
    <div class="refreshImg">
      <img src="../assets/loading.gif" alt="loading" v-show="display.head" />
    </div>
    <a class="top-item" :key="TopInfo.id" v-for="TopInfo in gameList" href="baidu.com">
      <p id="num">{{ TopInfo.id }}</p>
      <img src="../assets/marioicon.png" alt="icon" id="icon" />
      <div class="content">
        <h3 id="name">{{ TopInfo.name }}</h3>
        <div class="score">
          <img src="../assets/heart.png" alt="heart" id="heart" />
          <p id="num">{{ TopInfo.score }}</p>
        </div>
      </div>
    </a>
    <div class="refreshImg">
      <img src="../assets/loading.gif" alt="loading" v-show="display.end" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameList: [
        { id: 1, name: "mario1", score: "8.0" },
        { id: 2, name: "mario2", score: "7.0" },
        { id: 3, name: "mario2", score: "6.0" },
        { id: 4, name: "mario1", score: "8.0" },
        { id: 5, name: "mario2", score: "7.0" },
        { id: 6, name: "mario2", score: "6.0" },
        { id: 7, name: "mario1", score: "8.0" },
        { id: 8, name: "mario2", score: "7.0" },
        { id: 9, name: "mario2", score: "6.0" },
        { id: 10, name: "mario1", score: "8.0" },
        { id: 11, name: "mario2", score: "7.0" },
        { id: 12, name: "mario2", score: "6.0" },
        { id: 13, name: "mario1", score: "8.0" },
        { id: 14, name: "mario2", score: "7.0" },
        { id: 15, name: "mario2", score: "6.0" },
      ],
      display: {
        head: false,
        end: false,
      },
      busy: false,
      curnum: 15,
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      if (scrollHeight - clientHeight - scrollTop < 1 && !this.busy) {
        //加锁
        this.busy = true;
        this.display.end = true;
        window.setTimeout(() => {
          this.display.end = false;
          this.additem();
          //解锁
          this.busy = false;
        }, 1000);
      }
    });
    var _element = document.getElementById("top-list"),
      _startPos = 0, // 初始的值
      _transitionHeight = 0; // 移动的距离

    _element.addEventListener("touchstart", (e) => {
      _startPos = e.touches[0].pageY; // 记录初始位置
      _element.style.position = "relative";
      _element.style.transition = "transform 0s";
    });

    _element.addEventListener("touchmove", (e) => {
      _transitionHeight = e.touches[0].pageY - _startPos; // 记录差值
      if (
        _transitionHeight > 0 &&
        _transitionHeight < 40 &&
        document.documentElement.scrollTop == 0
      ) {
        this.display.head = true;
        _element.style.transform = "translateY(" + _transitionHeight + "px)";
      }
    });

    _element.addEventListener("touchend", () => {
      if (document.documentElement.scrollTop == 0) {
        //这里需要检测是否在顶部
        _element.style.transition = "transform 0.5s ease 1s";
        _element.style.transform = "translateY(0px)";
        this.refresh();
        setTimeout(() => {
          this.display.head = false;
        }, 1000);
      }
    });
  },
  methods: {
    additem() {
      console.log("加载");
      this.gameList.push.apply(this.gameList, [
        { id: ++this.curnum, name: "mario1", score: "8.0" },
        { id: ++this.curnum, name: "mario2", score: "7.0" },
        { id: ++this.curnum, name: "mario2", score: "6.0" },
      ]);
      console.log(this.gameList.length);
    },
    refresh() {
      console.log("刷新");
      this.gameList = [
        { id: 1, name: "mario1", score: "8.0" },
        { id: 2, name: "mario2", score: "7.0" },
        { id: 3, name: "mario2", score: "6.0" },
        { id: 4, name: "mario1", score: "8.0" },
        { id: 5, name: "mario2", score: "7.0" },
        { id: 6, name: "mario2", score: "6.0" },
        { id: 7, name: "mario1", score: "8.0" },
        { id: 8, name: "mario2", score: "7.0" },
        { id: 9, name: "mario2", score: "6.0" },
        { id: 10, name: "mario1", score: "8.0" },
        { id: 11, name: "mario2", score: "7.0" },
        { id: 12, name: "mario2", score: "6.0" },
        { id: 13, name: "mario1", score: "8.0" },
        { id: 14, name: "mario2", score: "7.0" },
        { id: 15, name: "mario2", score: "6.0" },
      ];
      this.curnum = 15;
      console.log(this.gameList.length);
    },
  },
};
</script>

<style>
.refreshImg {
  text-align: center;
}

.refreshImg img {
  height: 40px;
}

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

.top-item #num {
  color: black;
  font-size: medium;
  font-weight: 500;
  width: 20px;
}

.top-item #icon {
  width: 65px;
  height: 65px;
  border-radius: 15px;
  margin: 0 10px 0 0px;
}

.top-item #download {
  margin-left: auto;
}

.top-item .content #name {
  color: black;
  margin: 0;
}

.top-item .content .score {
  display: flex;
  align-items: center;
}

.top-item .content .score #heart {
  width: 30px;
  height: 30px;
}

.top-item .content .score #num {
  color: red;
  font-weight: 800;
  margin: 0;
  width: auto;
}
</style>