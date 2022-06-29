<template>
    <div id="container">
        <simple-list :rankShow='false' :keyWord="this.$route.params.key"></simple-list>
    </div>
</template>

<script>
import SimpleList from "@/components/SimpleList.vue";
export default {
    name: "SearchPage",
    components: {
        SimpleList
    }
}

</script>

<style scoped>
</style>