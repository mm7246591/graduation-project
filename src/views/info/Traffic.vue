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
    <div class="w-full text-[#58595B] bg-[#CFF1F580]">
        <div class="traffic w-[90vw] flex flex-col justify-center items-center mx-auto py-[2vh]">
            <div class="text-3xl sm:text-xl font-bold">交通資訊</div>
            <div class="section w-full flex sm:flex-col justify-evenly items-center my-[4vh]">
                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1808.4382330023996!2d121.26234785872192!3d24.9703173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f5490d43fcd%3A0x186eb5a7e52b332b!2z5YWD5pm65aSn5a24!5e0!3m2!1szh-TW!2stw!4v1676200970601!5m2!1szh-TW!2stw"
                        style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        class="lg:w-[40vw] lg:h-[35vh] sm:w-[85vw] sm:h-[50vh]"></iframe>
                </div>
                <div class="text text-base my-[2vh] mx-[3vw]">
                    <div class="address">
                        <div class="font-bold">地址</div>
                        <div class="my-[1vh]">桃園市中壢區遠東路135號。</div>
                    </div>
                    <div class="train">
                        <div class="font-bold">火車（內壢火車站）</div>
                        <div class="my-[1vh]">內壢站前站往北(右)步行約五分鐘，則可看見中華路與遠東路口有元智大學指示牌，右轉過平交道，再沿右邊步行約十分鐘即可抵達。</div>
                    </div>
                    <div class="bus">
                        <div class="font-bold">公車（155、156）</div>
                        <div class="my-[1vh]">在中壢車站搭乘155、156路桃園客運直接坐到元智大學內。</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="map bg-[rgba(187,241,249,0.5)] rounded-[40px]">
            <div class="w-[90vw] flex flex-col justify-center items-center mx-auto py-[4vh]">
                <div class="text-3xl sm:text-xl font-bold">展區導覽圖</div>
                <div class="w-full h-[50vh] my-[2vh]">
                    <img src="https://picsum.photos/500/400" class="w-full h-full" alt="">
                </div>
            </div>
        </div>
        <div class="warn w-[90vw] flex flex-col justify-center items-center mx-auto py-[2vh]">
            <div class="text-3xl sm:text-xl font-bold text-[#58595B]">注意事項</div>
            <div
                class="section w-full flex sm:flex-col lg:flex-wrap justify-center items-center my-[4vh] border-solid border-[2px] border-[#FFFFFF] rounded-[25px]">
                <div v-for="item of items" :key="item.id" class="lg:w-[28vw] flex justify-evenly items-center my-[2vh]">
                    <div class="w-[10vw] sm:w-[20vw]">
                        <img :src="item.img" class="w-full h-full rounded-full" alt="">
                    </div>
                    <div class="sm:w-[50vw] w-full mx-[2vw]">
                        <div class="text-xl sm:text-lg font-bold">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>

</style>