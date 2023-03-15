<script setup lang="ts">
import { warns } from '@/utils/info/index'
import { onMounted, ref } from 'vue';

interface Item {
    id: string,
    img: string,
    text: string
}

const items = ref<Item[] | null>(null)

const getData = () => {
    items.value = warns
}

onMounted(() => {
    getData()
})
</script>

<template>
    <div class="w-full text-[#58595B] bg-[#F5F5F5]">
        <div class="traffic w-[90vw] flex flex-col justify-center items-center mx-auto py-[2vh]">
            <div class="my-7 rounded-full px-[4vw] py-[1.5vh] bg-[#2A3752] text-[#fff] text-xl font-bold">交通資訊</div>
            <div class="section w-full flex sm:flex-col justify-evenly items-center mb-[4vh]">
                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808.4382330023996!2d121.26234785872192!3d24.9703173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f5490d43fcd%3A0x186eb5a7e52b332b!2z5YWD5pm65aSn5a24!5e0!3m2!1szh-TW!2stw!4v1676200970601!5m2!1szh-TW!2stw"
                        style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        class="lg:w-[45vw] lg:h-[45vh] sm:w-[85vw] sm:h-[50vh]"></iframe>
                </div>
                <div class="text text-base my-[2vh] mx-[3vw] px-[3vw] lg:mr-0 lg:pr-0">
                    <div class="address mb-6">
                        <div
                            class="relative text-[#2A3752] font-bold text-base before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                            地址</div>
                        <div class="my-[1vh] text-sm text-[rgba(42,55,82,0.7)]">台北市信義區光復南路133號</div>
                    </div>
                    <div class="train mb-6">
                        <div
                            class="relative text-[#2A3752] font-bold text-base before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                            自行前往</div>
                        <div class="my-[1vh] text-sm text-[rgba(42,55,82,0.7)]">
                            於市民大道及光復南路口，從市民大道於光復南路匝道下，行駛方向由西往東往「菸廠路」駛入100公尺後，右側即可看見「松山文創園區」入口。(園內禁止行車)
                            <br>
                            <br>
                            《停車資訊》：本園區最鄰近之停車場為臺北文創大樓地下收費停車場，可由菸廠路(市民大道、光復南路口)駛入。
                        </div>
                    </div>
                    <div class="bus">
                        <div
                            class="relative text-[#2A3752] font-bold text-base before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">
                            搭乘捷運</div>
                        <div class="my-[1vh] text-sm text-[rgba(42,55,82,0.7)]">搭乘捷運板南線（藍）至國父紀念館站 → 五號出口出站 →
                            沿光復南路步行至菸廠路（市民大道、光復南路口）約550公尺。</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="map relative bg-white">
            <div class="w-[90vw] flex flex-col justify-center items-center mx-auto py-10">
                <div class="absolute -top-5 rounded-full px-[4vw] py-[1.5vh] bg-[#2A3752] text-[#fff] text-xl font-bold">
                    展區導覽圖</div>
                <div class="w-full h-[50vh] lg:h-[65vh] my-[2vh]">
                    <img src="https://picsum.photos/500/400" class="w-full h-full" alt="">
                </div>
            </div>
        </div>
        <div class="warn mt-6 w-[90vw] flex flex-col justify-center items-center mx-auto py-[2vh]">
            <div class="rounded-full px-[4vw] py-[1.5vh] bg-[#2A3752] text-[#fff] text-xl font-bold">注意事項</div>
            <div class="section w-full flex sm:flex-col lg:flex-wrap justify-center items-center my-[8vh]">
                <div v-for="item of items" :key="item.id" class="lg:w-[28vw] flex justify-evenly items-center my-[2vh]">
                    <div class="w-[10vw] sm:w-[20vw]">
                        <img :src="item.img" class="w-full h-full rounded-full" alt="">
                    </div>
                    <div class="sm:w-[35vw] w-full  mx-[2vw]">
                        <div class="text-xl sm:text-lg font-bold">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped></style>