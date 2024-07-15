<template>
    <div class="w-full rounded-lg bg-white">
        <div v-for="post in savedPosts.current" class="m-4">
        <div v-if="$route.params.user === post.savedPerson" class="border-b">
            <h3>" {{ post.post }} "</h3>
            <h4> ~ {{ post.postAuthor }}</h4>
        </div>
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