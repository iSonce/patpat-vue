<template>
    <div class="type">
        <simple-list :rankShow="true" :type="$route.params.type"></simple-list>
    </div>
</template>

<script>
import SimpleList from "@/components/SimpleList.vue";
export default {
  components: { SimpleList },
  name: "TypePage",
};
</script>

<style>
</style>