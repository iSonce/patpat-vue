<template>
  <div class="loading">
    <span :key="key" v-for="(value, key) in map" class="cube">
      <div id="content" v-if="
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
      ">
        <router-link :to="'/discover/' + value.name" style="text-decoration:none;text-align: center;">
          <img :src="value.imgName" alt="MOBA" />
          <p>{{ value.name }}</p>
        </router-link>
      </div>
    </span>
  </div>
</template>

<script>
export default {
  name: "DscvPage",
  data() {
    return {
      map: {
        4: {
          name: "养成",
          imgName: require("../assets/GameType/养成.png"),
        },
        5: {
          name: "策略",
          imgName: require("../assets/GameType/策略.png"),
        },
        8: {
          name: "单机",
          imgName: require("../assets/GameType/单机.png"),
        },
        9: {
          name: "角色扮演",
          imgName: require("../assets/GameType/角色扮演.png"),
        },
        10: {
          name: "冒险",
          imgName: require("../assets/GameType/冒险.png"),
        },
        12: {
          name: "多人联机",
          imgName: require("../assets/GameType/多人联机.png"),
        },
        13: {
          name: "卡牌",
          imgName: require("../assets/GameType/卡牌.png"),
        },
        14: {
          name: "竖屏",
          imgName: require("../assets/GameType/竖屏.png"),
        },
        16: {
          name: "休闲",
          imgName: require("../assets/GameType/休闲.png"),
        },
        17: {
          name: "放置",
          imgName: require("../assets/GameType/放置.png"),
        },
        18: {
          name: "二次元",
          imgName: require("../assets/GameType/二次元.png"),
        },
        21: {
          name: "收集",
          imgName: require("../assets/GameType/收集.png"),
        },
        22: {
          name: "动作",
          imgName: require("../assets/GameType/动作.png"),
        },
      },
    };
  },
  methods: {
  },
  created() {
    for (let i = 1; i <= 25; i++) {
      if (![4, 5, 8, 9, 10, 12, 13, 14, 16, 17, 18, 21, 22].includes(i)) {
        this.map[i] = {};
      }
    }
  },
  mounted() {
    document.querySelector('body').setAttribute('style',
      'background-color: #ffeced; align-items: center; justify-content: center;overflow-x: hidden; padding: 0; margin: 0; height: 100vh; width: 100vw; display: flex;')
    document.querySelector('html').setAttribute('style',
      'overflow-x: hidden;'
    )
  },
  unmounted() {
    document.body.removeAttribute('style')
    document.querySelector('html').removeAttribute('style')
  }
};
</script>

<style scoped>
.loading {
  transform: rotate(-45deg);
  width: 430px;
  height: 430px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

.loading .cube {
  text-decoration: none;
  padding: 0;
  margin: 0;
  display: flex;
  --shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
  align-items: center;
  justify-content: center;
}

.loading .cube #content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
}

.loading .cube #content img {
  width: 40px;
}

.loading .cube #content p {
  font-size: small;
  padding: 0;
  margin: 0;
  color: rgb(247, 165, 178);
  font-size: small;
}

.loading .cube:nth-child(-n + 5):nth-child(n + 4) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading .cube:nth-child(-n + 10):nth-child(n + 8) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading .cube:nth-child(-n + 14):nth-child(n + 12) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading .cube:nth-child(-n + 18):nth-child(n + 16) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading .cube:nth-child(-n + 22):nth-child(n + 21) {
  background-color: white;
  box-shadow: var(--shadow);
}
</style>