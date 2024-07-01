import { user } from "@/lib/stores/user"
import { defineStore } from "pinia"
import { onMounted, ref } from "vue"

export const useUserInfo = defineStore('user', () => {
    const userInfo = ref()

  onMounted(() =>{
      user.init()
      .then(() => userInfo.value = user.current.name)
  })


    return { userInfo }
  })