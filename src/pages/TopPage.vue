<template>
  <div class="top">
    <simple-list :rankShow="true"></simple-list>
  </div>
</template>

<script>
import SimpleList from "@/components/SimpleList.vue";
export default {
  components: { SimpleList },
  name: "TopPage",
};
</script>

<style>
</style>