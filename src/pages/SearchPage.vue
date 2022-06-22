<template>
    <div id="container">
        <simple-list :rankShow='true'></simple-list>
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

<style>
</style>