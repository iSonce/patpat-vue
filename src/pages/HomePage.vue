<template>
    <div style="display:flex;flex-direction:column;align-items: center;">
        <router-link to="/recommend">recommend</router-link>
        <router-link to="/post">post</router-link>
        <router-link to="/top">top</router-link>
        <router-link to="/discover">discover</router-link>
        <div v-html="title" id="title"></div>
    </div>
</template>

<script setup>
const title = `王<span class="highlight_text">者荣</span>耀`
</script>

<style scoped>
a {
    margin: 5px;
    text-decoration: none;
    color: black;
}

#title>>>.highlight_text {
    color: red
}
</style>