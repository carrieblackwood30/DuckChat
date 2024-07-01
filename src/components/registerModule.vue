<template>
    <div class="fixed top-0 bottom-0 left-0 right-0" v-if="isOpen">
        
      <div class="bg-[rgba(0,0,0,0.8)] w-full h-full flex justify-center items-center z-50">
          <form class="bg-white px-12 py-6 rounded-xl relative flex flex-col gap-6 justify-center items-center">
  
            <slot />

            <h3>LOGIN | REGISTER</h3>
  
            <input type="email" placeholder="Email" v-model="email" />
            <input type="password" placeholder="Password" v-model="password" />
            <input type="text" placeholder="Name" v-model="name" />
  
            <button type="button" @click="user.login(email, password)" class="border-b border-[#00000099]">Login</button>
            <button type="button" @click="user.register(email, password, name)" class="border-b border-[#00000099]"> Register</button>
          </form>
      </div>
  
    </div>
  
    
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { user } from "@/lib/stores/user";

  const email = ref('');
  const password = ref('');
  const name = ref('');
  
  const props = defineProps({
    isOpen: Boolean
  })

  
  </script>