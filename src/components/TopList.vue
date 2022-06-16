<template>
  <div class="top-list">
    <a
      class="top-item"
      :key="TopInfo.id"
      v-for="TopInfo in TopInfos"
      href="baidu.com"
    >
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      TopInfos: [
        { id: 1, name: "mario1", score: "8.0" },
        { id: 2, name: "mario2", score: "7.0" },
        { id: 3, name: "mario2", score: "6.0" },
      ],
    };
  }
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