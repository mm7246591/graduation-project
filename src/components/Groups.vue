<script setup lang="ts">
import { games } from "@/utils/work/index";
import { interacts } from "@/utils/work/index";
import { markets } from "@/utils/work/index";
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const currentPath = ref<any>("")

const handleToWork = (group: string) => {
    router.push({ path: `/work/${currentPath.value}/${group}` })
}

interface Item {
  id: string;
  group: string
  img: string;
  title: string;
}

const items = ref<Item[] | null>(null);

const getData = () => {
    if (route.meta.group == "game") items.value = games;
    else if (route.meta.group == "interact") items.value = interacts;
    else if (route.meta.group == "market") items.value = markets;
};

onMounted(() => {
    currentPath.value = route.meta.group
    getData();
})
</script>

<template>
    <div class="px-10 pt-8 min-h-[90vh] bg-[#F5F5F5]">
        <div v-for="item of items" :key="item.id"
            class="flex flex-col lg:flex-row lg:justify-between mb-8 w-full">
            <div class="self-end lg:hidden text-[#2A3752] text-sm font-bold">{{ item.group }}</div>
            <img :src="item.img" class="w-full lg:w-[360px] object-contain">
            <div class="flex justify-between lg:flex-col lg:items-end lg:h-fit">
                <div class="hidden lg:block text-end text-sm">畢展標題<br>{{ item.id }}組</div>
                <div class="relative mt-3 ml-4 lg:ml-0 lg:my-20 lg:w-32 h-fit text-[#2A3752] text-base lg:text-6xl font-semibold before:content-[''] before:absolute before:bottom-0 before:-left-4 before:w-1.5 before:h-full before:rounded-full before:bg-[#00E4FF]">{{ item.title }}</div>
                <div class="cursor-pointer w-24" @click="handleToWork('1')">
                    <img src="@/assets/img/band-aid.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>

</style>