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
    <div class="w-full py-[4vh] text-[#58595B] bg-[rgba(216,250,255,0.5)]">
        <div class="w-[90vw] flex flex-col justify-evenly items-center mx-auto">
            <div class="w-full h-[70vh]">
                <img src="https://picsum.photos/200/300" class="w-full h-full">
            </div>
            <div class="w-[80vw] flex flex-col justify-evenly py-[4vh]">
                <div class="text-4xl sm:text-xl font-bold">元智大學資訊傳播學系<br> 第 26 屆影展
                </div>
                <div class="my-[2vh] text-lg sm:text-base">１１２年ＯＯ月ＯＯ日</div>
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit quibusdam repudiandae cupiditate
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
            class="w-full sm:flex lg:hidden flex-col justify-evenly items-center py-[4vh] bg-[rgba(187,241,249,0.5)] rounded-[35px]">
            <div class="text-3xl sm:text-xl font-bold">影視作品</div>
            <div class="w-full flex flex-wrap justify-center items-center my-[4vh]">
                <Swipe class="w-[90vw] mx-auto relative" indicator-color="white">
                    <SwipeItem v-for="item of videos" :key="item.id" @click="handleSelect(item.id)">
                        <img :src="item.img" class="w-full">
                        <div class="drop-shadow w-full absolute bottom-10 text-center text-lg font-bold ">
                            {{ item.name }}</div>
                    </SwipeItem>
                </Swipe>
            </div>
        </div>
        <div>
            <NModal v-model:show="show">
                <NCard class="w-[90vw] sm:w-[90vw]" :bordered="false" size="huge" role="card" aria-modal="true">
                    <div class="flex flex-col text-[#58595B]">
                        <div v-for="select of selectItem" :key="select.id">
                            <div class="text-3xl sm:text-xl font-bold">
                                {{ select.name }}
                            </div>
                            <div class="my-[2vh] text-lg sm:text-base">
                                {{ select.text }}
                            </div>
                        </div>
                    </div>
                </NCard>
            </NModal>
        </div>
    </div>
</template>

<style scoped>
.drop-shadow {
    -webkit-filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, .7));
    filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, .7))
}
</style>