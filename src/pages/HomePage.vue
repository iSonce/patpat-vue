<template>
    <div style="display:flex;flex-direction:column;align-items: center;">
        <router-link to="/recommend">recommend</router-link>
        <router-link to="/post">post</router-link>
        <router-link to="/top">top</router-link>
        <router-link to="/discover">discover</router-link>
    </div>
</template>

<script setup>
</script>

<style scoped>
a {
    margin: 5px;
    text-decoration: none;
    color: black;
}

#title :deep(.highlight_text) {
    color: red
}
</style>