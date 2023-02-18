<script setup lang="ts">
import { videos } from '@/utils/info';
import { Swipe, SwipeItem } from 'vant';
import { NModal, NCard } from 'naive-ui';
import { ref } from 'vue';

interface Video {
    id: string,
    name: string,
    img: string,
    text: string,
}

const selectItem = ref<Video[]>([])
const show = ref<boolean>(false)

const handleSelect = (id: string) => {
    show.value = true
    selectItem.value = []
    const data = videos.find(item => item.id === id)
    if (data) {
        selectItem.value.push(data)
    }
}
</script>

<template>
    <div class="w-full pt-8 text-[#58595B] bg-[#EFEFEF]">
        <div class="w-[90vw] flex flex-col justify-evenly items-center mx-auto">
            <div class="w-full h-[70vh]">
                <img src="https://picsum.photos/200/300" class="w-full h-full">
            </div>
            <div class="mb-12 w-[80vw] flex flex-col justify-evenly py-[4vh] text-[#2A3752]">
                <div class="relative text-4xl sm:text-xl font-bold before:content-[''] before:absolute before:top-0 before:-left-5 before:w-1.5 before:h-full before:rounded-full before:bg-[#00E4FF]">元智大學資訊傳播學系<br> 第 26 屆影展
                </div>
                <div class="relative mt-[6vw] mb-[2vh] text-lg sm:text-base before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">影展日期：112/4/10</div>
                <div class="relative before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quibusdam repudiandae cupiditate
                    fuga repellendus exercitationem quas, magnam nostrum accusantium. Et quia aliquid perferendis labore
                    tempora laudantium nulla repellat voluptatem libero!</div>
            </div>
        </div>
        <div
            class="w-full lg:flex sm:hidden flex-col justify-evenly items-center py-[4vh] bg-[rgba(187,241,249,0.5)] rounded-[35px]">
            <div class="text-3xl sm:text-xl font-bold">影視作品</div>
            <div class="w-full flex flex-wrap justify-center items-center my-[4vh]">
                <div v-for="item of videos" :key="item.id"
                    class="w-[20vw] flex flex-col justify-center items-center my-[2vh]">
                    <div class="w-[15vw] h-[25vh] shadow-[0px_6px_8px_rgba(0,0,0,0.5)]">
                        <img :src="item.img" class="w-full h-full" alt="">
                    </div>
                    <div class="my-[2vh] text-xl sm:text-lg font-bold">{{ item.name }}</div>
                    <div class="text-lg sm:text-base">{{ item.text }}</div>
                </div>
            </div>
        </div>
        <div
            class="relative rounded-t-[35px] pt-[12vh] sm:flex lg:hidden flex-col justify-evenly items-center w-full bg-white">
            <div class="absolute -top-5 rounded-full px-7 py-2 bg-[#2A3752] text-[#E3F4F7] text-3xl sm:text-xl font-bold">影視作品</div>
            <div class="flex flex-col lg:flex-row lg:justify-between mb-8 w-[55vw]">
                <img src="@/assets/img/film-sample.png" alt="" class="w-full object-contain">
                <div class="flex justify-between lg:flex-col lg:items-end w-full lg:h-fit">
                    <div class="hidden lg:block text-end text-sm">畢展標題<br>o o 組</div>
                    <div class="relative mt-3 ml-4 lg:ml-0 lg:my-20 lg:w-32 h-fit text-[#2A3752] text-base lg:text-6xl font-semibold before:content-[''] before:absolute before:bottom-0 before:-left-4 before:w-1.5 before:h-full before:rounded-full before:bg-[#00E4FF]">作品標題</div>
                    <div class="cursor-pointer w-24">
                        <img src="@/assets/img/band-aid.png" alt="">
                    </div>
                </div>
            </div>
            <div class="flex flex-col lg:flex-row lg:justify-between mb-8 w-[55vw]">
                <img src="@/assets/img/film-sample.png" alt="" class="w-full object-contain">
                <div class="flex justify-between lg:flex-col lg:items-end w-full lg:h-fit">
                    <div class="hidden lg:block text-end text-sm">畢展標題<br>o o 組</div>
                    <div class="relative mt-3 ml-4 lg:ml-0 lg:my-20 lg:w-32 h-fit text-[#2A3752] text-base lg:text-6xl font-semibold before:content-[''] before:absolute before:bottom-0 before:-left-4 before:w-1.5 before:h-full before:rounded-full before:bg-[#00E4FF]">作品標題</div>
                    <div class="cursor-pointer w-24">
                        <img src="@/assets/img/band-aid.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>