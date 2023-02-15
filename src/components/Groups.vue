<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const currentPath = ref<any>("")

const handleToWork = (group: string) => {
    router.push({ path: `/work/${currentPath.value}/${group}` })
}
onMounted(() => {
    currentPath.value = route.meta.group
})
</script>

<template>
    <div class="p-5 bg-[rgba(216,250,255,.5)]">
        <div
            class="flex flex-col lg:flex-row lg:justify-between mb-6 rounded-3xl p-5 lg:p-20 w-full bg-[rgba(255,255,255,.5)]">
            <div class="self-end lg:hidden mr-1.5 mb-3 text-sm">o o 組</div>
            <img src="https://fakeimg.pl/300/" class="mb-5 rounded-3xl w-full lg:w-[360px] object-contain">
            <div class="flex justify-between lg:flex-col lg:items-end lg:h-fit">
                <div class="hidden lg:block text-end text-sm">畢展標題<br>o o 組</div>
                <div class="ml-3 lg:ml-0 lg:my-20 lg:w-32 text-[#58595B] text-xl lg:text-6xl font-semibold">作品標題</div>
                <div class="cursor-pointer" @click="handleToWork('1')">
                    <img src="@/assets/img/band-aid.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>

</style>