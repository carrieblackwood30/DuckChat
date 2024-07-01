<template>
    <div class="bg-white min-w-[280px] h-[400px] rounded-lg">
        <div class="rounded-t-lg bg-gradient-to-r from-purple-500 to-pink-500 h-fit flex items-center text-white text-xl font-semibold">
            <img src="@/assets/duck.jpg" width="50" alt="" class="border rounded-full m-4">
            <h3>Duck - {{ loggedInUser || 'anonymous' }}</h3>
        </div>

        <ul>
            <li class="m-4 border-b pb-2 border-[#00000056] hover:shadow-md hover:border-[black]">
                <RouterLink to="/" class="flex items-center gap-4">
                    <img src="@/assets/icons/main.png" alt="profile" width="30">
                    <p class="text-lg">Home</p>
                </RouterLink>
            </li>
            <li class="m-4 border-b pb-2 border-[#00000056] hover:shadow-md hover:border-[black]">
                <RouterLink to="/userSettings" class="flex items-center gap-4">
                    <img src="@/assets/icons/profile.svg" alt="profile" width="30">
                    <p class="text-lg">Profile</p>
                </RouterLink>
            </li>
            <li class="m-4 border-b pb-2 border-[#00000056] hover:shadow-md hover:border-[black]">
                <RouterLink :to="`/${loggedInUser}/userSavedPosts`" class="flex items-center gap-4">
                    <img src="@/assets/icons/savedPosts.png" alt="profile" width="30">
                    <p class="text-lg">Saved Posts</p>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { user } from '@/lib/stores/user';
import { onBeforeMount, ref } from 'vue';

const loggedInUser = ref(null)

onBeforeMount(() =>{
    user.init()
    .then(() => loggedInUser.value = user.current.name)
})

</script>