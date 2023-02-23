<script setup lang="ts">
import { games } from "@/utils/work/index";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

interface Item {
    id: string;
    group: string;
    img: string;
    title: string;
    studio: string;
    intro: string;
    member: string;
    job: string;
}

const items = ref<Item[] | null>(null);


const getData = () => {
    items.value = games.filter(game => {
        if (game.id === route.params.id) {
            return game
        }
    })
    console.log(items.value)
};

onMounted(() => {
    getData();
});
</script>

<template>
    <div class="px-6 py-10 min-h-[90vh] bg-[#F5F5F5]">
        <RouterLink to="/work/game">&lt&lt 回上一頁</RouterLink>
        <div v-for="group of items" :key="group.id">
            <img :src="group.img" class="mt-4 lg:mt-9 mb-9 lg:mb-24 w-full object-contain">
            <div class="lg:relative mx-5 lg:mx-24 text-[#2A3752]">
                <div
                    class="relative mb-8 lg:mb-10 font-bold text-2xl lg:text-6xl before:content-[''] before:absolute before:bottom-0 before:-left-4 before:w-1.5 before:h-full before:rounded-full before:bg-[#00E4FF]">
                    {{ group.title }}</div>
                <div class="text-sm">
                    <div
                        class="relative mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                        工作室名</div>
                    <div class="mb-8 lg:mb-10">{{ group.studio }}</div>
                    <div
                        class="relative mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                        作品介紹</div>
                    <div class="mb-8 lg:mb-10">
                        {{ group.intro }}</div>
                    <div
                        class="relative mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                        團隊成員</div>
                    <div class="mb-8 lg:mb-10">{{ group.member }}</div>
                    <div
                        class="relative mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                        組內分工</div>
                    <div>
                        {{ group.job }}
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>



<style scoped></style>