<script setup lang="ts">
import { games } from "@/utils/work/index";
import { interacts } from "@/utils/work/index";
import { markets } from "@/utils/work/index";
import { researches } from "@/utils/work/index";
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const currentPath = ref<any>("")

const handleToWork = (id: string) => {
  router.push({ path: `/work/${currentPath.value}/${id}` })
}

interface Item {
  id: string;
  group: string
  poster: string;
  title: string;
}

const items = ref<Item[] | null>(null);
const research_items = ref<Item[] | null>(null);

const getData = () => {
  if (route.meta.group == "game") items.value = games;
  else if (route.meta.group == "interact") items.value = interacts;
  else if (route.meta.group == "market") {
    items.value = markets;
    research_items.value = researches;
  }
};

onMounted(() => {
  currentPath.value = route.meta.group
  getData();
})
</script>

<template>
  <div class="px-10 lg:px-[10vw] pt-8 lg:pt-28 min-h-[90vh] bg-[#F5F5F5]">
    <div v-for="item of items" :key="item.id" class="flex flex-col lg:flex-row lg:justify-between pb-8 lg:pb-20 w-full">
      <div class="self-end lg:hidden text-[#2A3752] text-sm font-bold">{{ item.group }}</div>
      <img :src="item.poster" class="w-full lg:w-[56vw] object-contain">
      <div class="flex justify-between lg:flex-col lg:items-end">
        <div class="hidden lg:block text-end text-xl">{{ item.group }}</div>
        <div class="flex lg:flex-col lg:grow justify-between lg:justify-end lg:items-end w-full">
          <div
            class="relative flex items-end ml-4 mt-2 lg:mb-8 lg:w-32 h-8 lg:h-44 text-[#2A3752] text-base lg:text-6xl font-semibold lg:whitespace-pre-line before:content-[''] before:absolute before:bottom-0 before:-left-4 lg:before:-left-8 before:w-1.5 lg:before:w-3.5 before:h-full before:rounded-full before:bg-[#00E4FF]">
            {{ item.title }}</div>
          <div class="cursor-pointer flex items-end w-24 lg:w-40" @click="handleToWork(item.id)">
            <img src="/img/band-aid.png" alt="" class="lg:hidden">
            <img src="/img/band-aid-pc.png" alt="" class="hidden lg:block">
          </div>
        </div>
      </div>
    </div>

    <div v-for="item of research_items" :key="item.id"
      class="flex flex-col lg:flex-row lg:justify-between pb-8 lg:pb-20 w-full">
      <div class="self-end lg:hidden text-[#2A3752] text-sm font-bold">{{ item.group }}</div>
      <img :src="item.poster" class="w-full lg:w-[56vw] object-contain">
      <div class="flex justify-between lg:flex-col lg:items-end">
        <div class="hidden lg:block text-end text-xl">{{ item.group }}</div>
        <div class="flex lg:flex-col lg:grow justify-between lg:justify-end lg:items-end w-full">
          <div
            class="relative flex items-end ml-4 mt-2 lg:mb-8 lg:w-32 h-8 lg:h-44 text-[#2A3752] text-base lg:text-2xl font-semibold lg:whitespace-pre-line before:content-[''] before:absolute before:bottom-0 before:-left-4 lg:before:-left-8 before:w-1.5 lg:before:w-3.5 before:h-full before:rounded-full before:bg-[#00E4FF]">
            {{ item.title }}</div>
          <div class="cursor-pointer flex items-end w-24 lg:w-40" @click="handleToWork(item.id)">
            <img src="/img/band-aid.png" alt="" class="lg:hidden">
            <img src="/img/band-aid-pc.png" alt="" class="hidden lg:block">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped></style>