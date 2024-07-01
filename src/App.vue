<template>
    <div class="bg-[#f4f2ee]">
        <theHeader/>
        <div class="flex gap-12 mx-24 my-12">
            <sidebar />
            <RouterView />
        </div>
    </div>
</template>

<script setup>
    import sidebar from "@/components/sidebar.vue";
    import theHeader from '@/components/theHeader.vue';
</script>
