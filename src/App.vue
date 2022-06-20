<template>
  <div class="container">
    <!--这里用于单page测试-->
    <main-top v-if="false"></main-top>
    <main-rcmd v-if="false"></main-rcmd>
    <search-page v-if="true"></search-page>
  </div>
</template>

<script>
import MainTop from "./pages/MainTop.vue";
import MainRcmd from "./pages/MainRcmd.vue";
import SearchPage from "./pages/SearchPage.vue";
export default {
  name: "App",
  data() {
    return {
      num: 50,
    };
  },
  components: { MainTop, MainRcmd, SearchPage },
  methods: {
    addNum() {
      this.num += 10;
    },
    reset() {
      this.num = 50;
    },
  },
};
</script>
<style>
</style>
