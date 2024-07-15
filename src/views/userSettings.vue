<template>
    <div class="w-full rounded-lg bg-white">
        <div class="bg-gray-500">
            <img src="@/assets/duck.jpg" width="80" class="border rounded-full m-8 " alt="duck">
        </div>
        <h3 class="font-bold text-2xl">
            Duck - {{ loggedInUser }}
        </h3>

        <div>
            <h3 class="text-xl">User quotes:</h3>
            <div v-for="post in posts.current" >
                <div v-if="post.postAuthor === loggedInUser">
                    <h3> " {{ post.post }} " </h3>
                </div>
            </div>
        </div> 
    </div>
</template>

<script setup>
import { user } from '@/lib/stores/user';
import { posts } from '@/lib/stores/posts';
import { onMounted, ref } from 'vue';

const loggedInUser = ref(null)

onMounted(() =>{
    user.init()
    .then(() => loggedInUser.value = user.current.name)
    posts.init()
})

</script>