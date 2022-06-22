<template>
  <div class="container">
    <!--这里用于单page测试-->
    <rcmd-page v-if="true"></rcmd-page>
    <top-page v-if="false"></top-page>
    <search-page v-if="false"></search-page>
    <post-page v-if="false"></post-page>
  </div>
</template>

<script>
import SearchPage from "./pages/SearchPage.vue";
import PostPage from "./pages/PostPage.vue";
import RcmdPage from "./pages/RcmdPage.vue";
import TopPage from "./pages/TopPage.vue";
export default {
  name: "App",
  data() {
    return {
    };
  },
  components: { SearchPage, PostPage, RcmdPage, TopPage },
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
