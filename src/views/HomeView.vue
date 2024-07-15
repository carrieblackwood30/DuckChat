<template>
    <main class="w-full rounded-lg bg-white ">
        <div class="flex items-center gap-4 border-b shadow-sm" :class="!user ? 'disabled-content' : '' ">
            <img src="@/assets/duck.jpg" width="40" class="border rounded-full m-4" alt="duck">
            <input type="text" class="h-10 w-[500px] rounded-full px-4"
             placeholder="start a quote" 
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
                @click="savePost(post)">
                    <h3 v-if="post.isSaved">saved</h3>
                    <h3 v-if="!post.isSaved">save</h3>
                </button> 
                <div class="flex items-center">
                    <img src="@/assets/duck.jpg" width="40" class="border rounded-full my-4" alt="duck">
                    <h3 class="font-bold mt-3">Author: {{ `Duck - ${post.postAuthor}` }}</h3>
                </div>
                <h4>quote: </h4>
                <p class="ml-12 mt-4 border px-2 py-4">" {{ post.post }} "</p>
                <button 
                class="my-4 flex items-center text-white gap-2 bg-gradient-to-r px-1 py-0.5 rounded-lg from-purple-500 to-pink-500"
                @click="likePost(post)"
                >
                     <h3>quack it</h3>
                    <img src="@/assets/icons/heart_not-active.png" width="16" alt="like-icon">
                    <h3 class="mr-1" v-if="post.likes !== 0">{{ post.likes }}</h3>
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

const description = ref("")

function savePost(post){
    const isPostExist = savedPosts.current.find(savedPost  => savedPost.post === post.post && savedPost.postAuthor === post.postAuthor && savedPost.savedPerson === user.current.name)
    
    if(isPostExist){
        console.log('exist')
    }else{
        savedPosts.add({
            post: post.post,
            postAuthor: post.postAuthor,
            savedPerson: user.current.name,
            isSaved: post.isSaved
        })
    }
}

function likePost(post){
    posts.update(post.$id, post.likes += 1)
}

function addPost() {

    if(description.value !== ''){
        posts.add({
        post: description.value,
        postAuthor: user.current.name,
        likes: 0, 
        isSaved: false
        })
    }
    
    description.value = ""
}

onBeforeMount(() => {
    savedPosts.init()
    posts.init()
})

</script>