<template>
    <main class="w-full rounded-lg bg-white ">
        <div class="flex items-center gap-4 border-b shadow-sm" :class="!user ? 'disabled-content' : '' ">
            <img src="@/assets/duck.jpg" width="40" class="border rounded-full m-4" alt="duck">
            <input type="text" class="h-10 w-[500px] rounded-full px-4"
             placeholder="start a post" 
              v-model="description"
             >
            <button 
            @click="addPost"
            class="bg-[#378fe9] text-white px-2 py-0.5 rounded-full hover:bg-[#116592]" 
            >post</button>
        </div>

        <div v-for="post in posts.current" class="border p-4">
            <div class="w-full relative">
                <button class="hover:text-[#378fe9] w-12 z-10 absolute right-0 bg-gray-600 text-white m-auto"
                @click="savePost(post)">save</button> 
                <div class="flex items-center">
                    <img src="@/assets/duck.jpg" width="40" class="border rounded-full m-4" alt="duck">
                    <h3 class="font-bold mt-3">Author: {{ `Duck - ${post.postAuthor}` }}</h3>
                </div>
                <h4>post: </h4>
                <p class="ml-12 mt-4 border px-2 py-4">{{ post.post }}</p>
                <button>
                    <!-- <img src="@/assets/icons/heart.png" width="20" alt=""> -->
                    <img class="ml-12" src="@/assets/icons/heart_not-active.png" width="20" alt="">
                </button>
            </div>
        </div>
    </main>
</template>


<script setup>
import { posts } from "@/lib/stores/posts";
import { savedPosts } from "@/lib/stores/savedPosts";
import { user } from "@/lib/stores/user";
import { onBeforeMount, ref } from "vue";

const description = ref("");

function savePost(post){
    savedPosts.add({
        post: post.post,
        postAuthor: post.postAuthor,
        savedPerson: user.current.name
    })
}

function addPost() {
    posts.add({
        post: description.value,
        postAuthor: user.current.name
    })
    description.value = ""
}

onBeforeMount(() => {
    posts.init()
})

</script>