<template>
  <div class="PostPage">
    <div id="header">
      <button id="back" @click="ClickBack()">back</button>
      <span id="username">PatPat</span>
      <button id="more" @click="ClickMore()">more</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  methods: {
    ClickBack() {},
    ClickMore() {},
  },
};
</script>
<style>
.PostPage {
  text-align: center;
}
.PostPage #header {
  position: sticky;
  top: 10px;
  z-index: 100;
  justify-content: space-between;
  display: flex;
  width: 100%;
  background-color: white;
  box-shadow: 0 -10px #fff;
}
</style>