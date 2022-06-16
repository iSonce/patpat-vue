<template>
  <div>
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
    return {};
  },
  components: { MainTop, MainRcmd, LoginPage },
};
</script>

<style>
</style>
