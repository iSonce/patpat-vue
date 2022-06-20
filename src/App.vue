<template>
  <div class="container">
    <!--这里用于单page测试-->
    <main-top v-if="false"></main-top>
    <main-rcmd v-if="true"></main-rcmd>
    <login-page v-if="false"></login-page>
  </div>
</template>

<script>
import MainTop from "./pages/MainTop.vue";
import MainRcmd from "./pages/MainRcmd.vue";
import LoginPage from "./pages/LoginPage.vue";
export default {
  name: "App",
  data() {
    return {
      num: 50,
    };
  },
  components: { MainTop, MainRcmd, LoginPage },
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
