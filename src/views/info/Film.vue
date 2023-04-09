<script setup lang="ts">
import { videos } from '@/utils/info';
import { NCarousel } from "naive-ui";
import { Swipe, SwipeItem } from 'vant';
import { useRouter } from 'vue-router';

const router = useRouter()

const handleToWork = (id: string) => {
    router.push({ path: `/intro/film/${id}` })
}

const isTitta = (id: string) => {
    if (id == '3') {
        return true;
    }
}
</script>

<template>
    <div class="w-full pt-8 text-[#58595B] bg-[#EFEFEF]">
        <div class="w-[80vw] flex flex-col justify-evenly items-center mx-auto">
            <div class="w-full">
                <NCarousel class="hidden lg:block mt-9 mb-24 w-full" draggable autoplay show-arrow>
                    <div v-for="item of videos" :key="item.id">
                        <img v-lazy="item.poster" class="w-full object-contain" />
                    </div>
                </NCarousel>
                <Swipe class="lg:hidden mt-4 mb-9 w-full" indicator-color="white" :autoplay="3000">
                    <SwipeItem v-for="item of videos" :key="item.id">
                        <img v-lazy="item.poster" class="w-full object-contain" />
                    </SwipeItem>
                </Swipe>
            </div>
            <div class="mb-12 w-[80vw] flex flex-col justify-evenly pb-[4vh] lg:pb-[8vh] text-[#2A3752]">
                <div
                    class="relative text-4xl sm:text-xl font-bold before:content-[''] before:absolute before:top-0 before:-left-5 lg:before:-left-8 before:w-1.5 lg:before:w-3 before:h-full before:rounded-full before:bg-[#00E4FF]">
                    元智大學資訊傳播學系<br> 第 26 屆影展
                </div>
                <div
                    class="relative lg:hidden mt-[6vw] mb-[2vh] text-lg sm:text-base before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                    日期：112/4/14</div>
                <div
                    class="relative lg:hidden mb-[2vh] text-lg sm:text-base before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                    時間：18:30 - 20:30</div>
                <div
                    class="relative lg:hidden mb-[2vh] text-lg sm:text-base before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                    地點：元智大學五館 5310</div>
                <div class="hidden lg:inline-block mt-12 mb-[2vh] text-2xl">112 年 4 月 14 日 18:30 - 20:30 元智大學五館 5310</div>
                <div
                    class="relative lg:text-base before:content-[''] lg:before:hidden before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quibusdam repudiandae cupiditate
                    fuga repellendus exercitationem quas, magnam nostrum accusantium. Et quia aliquid perferendis labore
                    tempora laudantium nulla repellat voluptatem libero!</div>
            </div>
        </div>
        <div class="relative w-full lg:flex hidden flex-col justify-evenly items-center bg-white rounded-[35px]">
            <div
                class="absolute -top-5 rounded-full px-[4vw] sm:px-[10vw] py-[1.5vh] sm:py-[1vh] bg-[#2A3752] text-[#fff] text-xl sm:text-base font-bold">
                影視作品</div>
            <div class="w-full flex flex-wrap justify-between items-center px-[5vw] pt-20 pb-16">
                <div v-for="item of videos" :key="item.id" class="flex flex-col justify-center items-center my-8 w-[40vw]">
                    <img v-lazy="item.poster" class="w-full object-contain" />
                    <div class="flex justify-between mt-2 w-full">
                        <div
                            class="relative flex items-end ml-4 mt-2 h-10 text-[#2A3752] text-base font-semibold before:content-[''] before:absolute before:bottom-0 before:-left-4 before:w-1.5 lg:before:w-2 before:h-full before:rounded-full before:bg-[#00E4FF]">
                            {{ item.title }}
                            <div v-if="isTitta(item.id)" class="font-normal">（未參與影展）</div>
                        </div>
                        <div class="cursor-pointer w-24" @click="handleToWork(item.id)">
                            <img src="/img/band-aid-pc.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="relative rounded-t-[35px] pt-[12vh] flex lg:hidden flex-col justify-evenly items-center w-full bg-white">
            <div
                class="absolute -top-5 rounded-full px-[4vw] sm:px-[10vw] py-[1.5vh] sm:py-[1vh] bg-[#2A3752] text-[#fff] text-xl sm:text-base font-bold">
                影視作品</div>
            <div v-for="item of videos" :key="item.id" class="flex flex-col lg:flex-row mb-8 w-[64vw]">
                <img v-lazy="item.poster_mobile" class="w-full object-contain" />
                <div class="flex justify-between w-full">
                    <div>
                        <div
                            class="relative mt-3 ml-4 h-fit text-[#2A3752] text-base font-semibold before:content-[''] before:absolute before:bottom-0 before:-left-4 before:w-1.5 before:h-full before:rounded-full before:bg-[#00E4FF]">
                            {{ item.title }}
                        </div>
                        <div v-if="isTitta(item.id)" class="font-normal">（未參與影展）</div>
                    </div>
                    <div class="cursor-pointer w-20" @click="handleToWork(item.id)">
                        <img src="/img/band-aid.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>