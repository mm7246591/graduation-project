<script setup lang="ts">
import { data } from '@/utils/info/index'
import { onMounted, ref } from 'vue';

interface Item {
    id: string,
    img: string,
    name: string,
    text: string
}

const items = ref<Item[] | null>(null)

const getData = () => {
    items.value = data
}

onMounted(() => {
    getData()
})
</script>

<template>
    <div class="w-full text-[#58595B] bg-[#CFF1F580]">
        <div class="traffic w-[90vw] flex flex-col justify-center items-center mx-auto py-[2vh]">
            <div class="text-3xl sm:text-xl font-bold">交通資訊</div>
            <div class="section w-full flex sm:flex-col justify-evenly items-center my-[4vh]">
                <div class="img">
                    <img src="https://picsum.photos/400/300" class="w-full h-full" alt="">
                </div>
                <div class="text text-base mx-[3vw]">
                    <div class="address">
                        <div class="font-bold">地址</div>
                        <div class="my-[1vh]">ＯＯＯ市ＯＯＯ區ＯＯＯ路ＯＯＯ號</div>
                    </div>
                    <div class="mrt">
                        <div class="font-bold">捷運</div>
                        <div class="my-[1vh]">搭乘捷運ＯＯ線 至 捷運ＯＯＯ站Ｏ號出口步行約ＯＯＯ公尺</div>
                    </div>
                    <div class="bus">
                        <div class="font-bold">客運</div>
                        <div class="my-[1vh]">ＯＯＯ、ＯＯＯ、ＯＯＯ、ＯＯＯ、ＯＯＯ到ＯＯＯ站下車步行約ＯＯＯ公尺</div>
                    </div>
                    <div class="parking">
                        <div class="font-bold">停車位</div>
                        <div class="my-[1vh]">免費—ＯＯＯＯＯＯＯＯＯ付費—ＯＯＯ停車場，OO／小時</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="map bg-[rgba(187,241,249,0.5)]">
            <div class="w-[90vw] flex flex-col justify-center items-center mx-auto py-[4vh]">
                <div class="text-3xl sm:text-xl font-bold">展區導覽圖</div>
                <div class="w-full h-[50vh] my-[2vh]">
                    <img src="https://picsum.photos/500/400" class="w-full h-full" alt="">
                </div>
            </div>
        </div>
        <div class="warn w-[90vw] flex flex-col justify-center items-center mx-auto py-[2vh]">
            <div class="text-3xl sm:text-xl font-bold">注意事項</div>
            <div class="section w-full flex sm:flex-col lg:flex-wrap justify-center items-center my-[4vh]">
                <div v-for="item of items" :key="item.id"
                    class="lg:w-[30vw] flex justify-evenly items-center my-[2vh] sm:mx-[2vw]">
                    <div class="w-[10vw] sm:w-[20vw]">
                        <img :src="item.img" class="rounded-full" alt="">
                    </div>
                    <div class="mx-[2vw]">
                        <div class="text-xl sm:text-lg font-bold">{{ item.name }}</div>
                        <div class="text-lg sm:text-base">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>

</style>