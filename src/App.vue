<template>
  <div>
    <post-page></post-page>
  </div>
</template>

<script>
import PostPage from "./pages/PostPage.vue";
export default {
  components: { PostPage },
  name: "App",
  data() {
    return {
      state: "",
    };
  },
  component() {
    PostPage
  },
};
</script>

<style>
</style>
