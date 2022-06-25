<template>
  <div class="type">
    <simple-list :rankShow="false" :type="$route.params.type"></simple-list>
  </div>
</template>

<script>
import SimpleList from "@/components/SimpleList.vue";
export default {
  components: { SimpleList },
  name: "TypePage",
  mounted() {
    console.log('goToGameList: ', this.$route.params.type)
    window.jsAdapter.goToGameList(this.$route.params.type)
  },
  unmounted(){
    console.log('backToAllType')
    window.jsAdapter.backToGameList()
  },
  methods: {
  },
};
</script>

<style scoped>
</style>