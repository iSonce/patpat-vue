<template>
  <div>
    <!--这里用于单page测试-->
    <main-top v-if="true"></main-top>
    <main-rcmd v-if="false"></main-rcmd>
  </div>
</template>

<script>
import MainTop from "./pages/MainTop.vue";
import MainRcmd from "./pages/MainRcmd.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { MainTop,MainRcmd },
};
</script>

<style>
</style>
