<template>
  <div class="container">
    <!--这里用于单page测试-->
    <main-top v-if="false"></main-top>
    <main-rcmd v-if="false"></main-rcmd>
    <search-page v-if="false"></search-page>
    <post-page v-if="true"></post-page>
  </div>
</template>

<script>
import MainTop from "./pages/MainTop.vue";
import MainRcmd from "./pages/MainRcmd.vue";
import SearchPage from "./pages/SearchPage.vue";
import PostPage from "./pages/PostPage.vue";
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: { MainTop, MainRcmd, SearchPage, PostPage},
  methods: {
    refresh() {
      console.log('refresh')
    },
    load() {
      console.log('load')
    }
  },
};
</script>
<style>
</style>
