<template>
    <div v-for="post in savedPosts.current" >
        <div v-if="$route.params.user === post.savedPerson">
            {{ post.post }}
            {{ post.postAuthor }}
        </div>
    </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { savedPosts } from "@/lib/stores/savedPosts";

onBeforeMount(() => {
    savedPosts.init()
})
</script>