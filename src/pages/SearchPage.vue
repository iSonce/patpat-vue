<template>
    <div id="container">
        <TopList :rankShow='false'></TopList>
    </div>
</template>

<script>
import TopList from "@/components/TopList.vue";
export default {
    name: "SearchPage",
    components: {
        TopList
    }
}

</script>

<style>
</style>