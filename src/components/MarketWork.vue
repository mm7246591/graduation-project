<script setup lang="ts">
import { markets } from "@/utils/work/index";
import { NCarousel } from "naive-ui";
import { Swipe, SwipeItem } from 'vant';
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

interface Item {
    id: string;
    group: string;
    poster: string;
    imgs: string[],
    title: string;
    studio: string;
    intro: string;
    member: string;
    job: string;
}

const items = ref<Item[] | null>(null);

const getData = () => {
    items.value = markets.filter(market => {
        if (market.id === route.params.id) {
            return market
        }
    })
};

onMounted(() => {
    getData();
});
</script>

<template>
    <div class="px-6 lg:px-[10vw] py-10 min-h-[90vh] bg-[#F5F5F5]">
        <RouterLink to="/work/market">&lt&lt 回上一頁</RouterLink>
        <div v-for="group of items" :key="group.id">
            <NCarousel class="hidden lg:block mt-9 mb-24 w-full" draggable autoplay>
                <div v-for="image in group.imgs">
                    <img :src="image" class="w-full h-full object-contain">
                </div>
            </NCarousel>
            <Swipe class="lg:hidden mt-4 mb-9 w-full" indicator-color="white" :autoplay="3000">
                <SwipeItem v-for="image in group.imgs">
                    <img :src="image" class="w-full h-full object-contain">
                </SwipeItem>
            </Swipe>
            <div class="lg:flex">
                <div class="mx-5 lg:w-1/3 lg:mx-24 text-[#2A3752]">
                    <div
                        class="relative mb-8 lg:flex lg:items-end lg:mb-10 lg:pt-12 font-bold text-2xl lg:text-6xl before:content-[''] before:absolute before:bottom-0 before:-left-4 lg:before:-left-8 before:w-1.5 lg:before:w-3.5 before:h-full before:rounded-full before:bg-[#00E4FF]">
                        {{ group.title }}</div>
                    <div class="text-sm lg:text-base">
                        <div
                            class="relative lg:hidden mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                            工作室名</div>
                        <div class="mb-8 lg:mb-10 lg:text-2xl">{{ group.studio }}</div>
                        <div
                            class="relative lg:hidden mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                            作品介紹</div>
                        <div class="lg:hidden mb-8 lg:mb-10">
                            {{ group.intro }}</div>
                        <div
                            class="relative lg:hidden mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                            團隊成員</div>
                        <div class="hidden lg:inline-flex">團隊成員:<br><br></div>
                        <div class="mb-8 lg:mb-10 lg:w-[12rem]">{{ group.member }}</div>
                        <div
                            class="relative lg:hidden mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                            組內分工</div>
                        <div class="lg:hidden whitespace-pre-line">
                            {{ group.job }}
                        </div>
                    </div>
                </div>
                <div class="hidden lg:flex flex-col w-2/3 text-base">
                    <div
                        class="relative mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                        作品介紹</div>
                    <div class="mb-8 lg:mb-10">
                        {{ group.intro }}</div>
                    <div
                        class="relative mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                        組內分工</div>
                    <div class="whitespace-pre-line">
                        {{ group.job }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>