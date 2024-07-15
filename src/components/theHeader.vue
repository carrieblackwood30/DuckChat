<template>
    <div class="bg-white flex justify-between items-center px-24 py-2 border-b border-[#35353548]">
        <RouterLink to="/" class="h-fit">
            <div class="bg-[#116592] text-white p-1 rounded w-fit">
                Duck 'n Quote
            </div>
        </RouterLink>

        <div class="flex items-center cursor-pointer relative noselect"  @click="userSettingsToggle = !userSettingsToggle">
            <img src="@/assets/duck.jpg" width="60" alt="" class="border w-10 h-10 rounded-full" >
            <h3>Duck - {{ `${loggedInUser === null ? 'anonymous' : loggedInUser }`  }}</h3>

            <button
            class="text-white bg-[#116592] ml-4"
            @click="registerModal = true"
            v-if="!loggedInUser"
            >login</button>
            
            <div v-if="loggedInUser">
                <img src="@/assets/icons/arrow.svg" width="20" alt="arrow" :class="userSettingsToggle === false ? 'rotate-180' : ''">

                <div class="absolute top-10 right-0 bg-white w-[100px] z-20 flex flex-col" v-if="userSettingsToggle">
                    <button class="hover:text-[#116592] transition-all">settings</button>
                    <button class="hover:text-[#116592] transition-all" type="button" @click="logout">
                        Logout
                    </button>
                </div>
            </div>
        </div>

        <registerModule :is-open="registerModal" class="z-20">
            <button 
            type="button" 
            class="absolute top-0 right-0 mr-4 bg-[#00000099] w-6 rounded-b-full"
            @click="registerModal = false"
            >x</button>
        </registerModule>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import registerModule from './registerModule.vue';
import { account } from '@/lib/appwrite';
import { user } from '@/lib/stores/user';

const loggedInUser = ref(null)
const registerModal = ref(false)
const userSettingsToggle = ref(false)

onMounted(() =>{
    user.init()
    .then(() => loggedInUser.value = user.current.name)
})

  const logout = async () => {
    await account.deleteSession('current');
    loggedInUser.value = null;
    location.reload()
}

</script>