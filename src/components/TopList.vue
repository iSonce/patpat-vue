<template>
  <div class="top-list">
    <div class="top-item" :key="i" v-for="i in 50">
      <p id="num">1</p>
      <img src="../assets/marioicon.png" alt="icon" id="icon" />
      <div class="content">
        <h3 id="name">Helltaker</h3>
        <div class="score">
          <img src="../assets/heart.png" alt="heart" id="heart" />
          <p id="num">8.0</p>
        </div>
      </div>
      <button id="download">下载</button>
    </div>
  </div>
</template>

<script>
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
}

.top-item #num {
}

.top-item #icon {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  margin: 0 10px 0 10px;
}

.top-item #download {
  margin-left: auto;
}

.top-item .content .score {
  display: flex;
}

.top-item .content #name {
    
}

.top-item .content .score #heart {
  width: 30px;
  height: 30px;
}
</style>