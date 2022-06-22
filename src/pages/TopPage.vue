<template>
  <div class="recommend">
    <simple-list :rankShow='true'></simple-list>
  </div>
</template>

<script>
import SimpleList from "@/components/SimpleList.vue";
export default {
  components: { SimpleList },
  name: "MainTop",
};
</script>

<style>
</style>