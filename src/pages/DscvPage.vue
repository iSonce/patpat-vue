<template>
  <div class="loading">
    <a :key="i" v-for="i in 25" @click="clickFunc"> </a>
  </div>
</template>

<script>
export default {
  name: "DscvPage",
  data() {
    return {};
  },
  methods: {
    clickFunc() {
      console.log("click");
    },
  },
};
</script>

<style>
body {
  background-color: pink;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  padding-top: 160px;
}

.loading {
  transform: rotate(-45deg);
  width: 480px;
  height: 480px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
}

.loading a {
  background-color: pink;
  --shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2), 0 2px 5px 0 rgba(0, 0, 0, 0.19);
}

.loading a:nth-child(-n + 5):nth-child(n + 4) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading a:nth-child(-n + 10):nth-child(n + 8) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading a:nth-child(-n + 14):nth-child(n + 12) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading a:nth-child(-n + 18):nth-child(n + 16) {
  background-color: white;
  box-shadow: var(--shadow);
}

.loading a:nth-child(-n + 22):nth-child(n + 21) {
  background-color: white;
  box-shadow: var(--shadow);
}
</style>