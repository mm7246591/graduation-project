<script setup lang="ts">
import { videos } from '@/utils/info';
import { NImage } from 'naive-ui';
import { useRouter } from 'vue-router';

const router = useRouter()

const handleToWork = (id: string) => {
    router.push({ path: `/intro/film/${id}` })
}
</script>

<template>
    <div class="w-full pt-8 text-[#58595B] bg-[#EFEFEF]">
        <div class="w-[90vw] flex flex-col justify-evenly items-center mx-auto">
            <div class="w-full h-[70vh]">
                <img src="https://picsum.photos/200/300" class="w-full h-full">
            </div>
            <div class="mb-12 w-[80vw] flex flex-col justify-evenly py-[4vh] lg:py-[8vh] text-[#2A3752]">
                <div
                    class="relative text-4xl sm:text-xl font-bold before:content-[''] before:absolute before:top-0 before:-left-5 lg:before:-left-8 before:w-1.5 lg:before:w-3 before:h-full before:rounded-full before:bg-[#00E4FF]">
                    元智大學資訊傳播學系<br> 第 26 屆影展
                </div>
                <div
                    class="relative lg:hidden mt-[6vw] mb-[2vh] text-lg sm:text-base before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                    影展日期：112/4/14</div>
                <div class="hidden lg:inline-block mt-12 mb-[2vh] text-2xl">1 1 2 年 4 月 1 4 日</div>
                <div
                    class="relative lg:text-base before:content-[''] lg:before:hidden before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quibusdam repudiandae cupiditate
                    fuga repellendus exercitationem quas, magnam nostrum accusantium. Et quia aliquid perferendis labore
                    tempora laudantium nulla repellat voluptatem libero!</div>
            </div>
        </div>
        <div class="relative w-full lg:flex hidden flex-col justify-evenly items-center bg-white rounded-[35px]">
            <div class="absolute -top-5 rounded-full px-7 py-2 bg-[#2A3752] text-[#fff] text-3xl sm:text-xl font-bold">
                影視作品</div>
            <div class="w-full flex flex-wrap justify-between items-center px-[5vw] pt-20 pb-16">
                <div v-for="item of videos" :key="item.id" class="flex flex-col justify-center items-center my-8 w-[40vw]">
                    <NImage :src="item.poster" :lazy="true" class="w-full object-contain" />
                    <div class="flex justify-between mt-2 w-full">
                        <div
                            class="relative flex items-end ml-4 mt-2 h-10 text-[#2A3752] text-base font-semibold before:content-[''] before:absolute before:bottom-0 before:-left-4 before:w-1.5 lg:before:w-2 before:h-full before:rounded-full before:bg-[#00E4FF]">
                            {{ item.title }}</div>
                        <div class="cursor-pointer w-24" @click="handleToWork(item.id)">
                            <img src="/img/band-aid-pc.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="relative rounded-t-[35px] pt-[12vh] flex lg:hidden flex-col justify-evenly items-center w-full bg-white">
            <div class="absolute -top-5 rounded-full px-7 py-2 bg-[#2A3752] text-[#fff] text-3xl sm:text-xl font-bold">
                影視作品</div>
            <div v-for="item of videos" :key="item.id" class="flex flex-col lg:flex-row mb-8 w-[55vw]">
                <NImage :src="item.poster_mobile" :lazy="true" class="w-full object-contain" />
                <div class="flex justify-between w-full">
                    <div
                        class="relative mt-3 ml-4 h-fit text-[#2A3752] text-base font-semibold before:content-[''] before:absolute before:bottom-0 before:-left-4 before:w-1.5 before:h-full before:rounded-full before:bg-[#00E4FF]">
                        {{ item.title }}</div>
                    <div class="cursor-pointer w-24" @click="handleToWork(item.id)">
                        <img src="/img/band-aid.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>