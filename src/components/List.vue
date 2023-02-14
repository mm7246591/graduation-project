<script setup lang="ts">
import { C1, C2 } from '@/utils/index'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { NModal, NCard } from 'naive-ui';

interface Item {
    id: string,
    img: string,
    name: string
}

const route = useRoute()
const items = ref<Item[] | null>(null)
const show = ref<boolean>(false)

onMounted(() => {
    route.params.name === '科技組' ? items.value = C1 : items.value = C2
})
</script>

<template>
    <div class="w-full flex flex-col text-[#58595B] bg-[rgba(216,250,255,.5)]">
        <div class="w-[90vw] mx-auto my-[2vh] px-[4vw] text-4xl sm:text-xl font-bold">獵人名單</div>
        <div
            class="w-[90vw] flex flex-col justify-center items-center mx-auto py-[4vh] bg-[rgba(187,241,249,0.5)] rounded-[35px]">
            <div class="text-3xl sm:text-xl font-bold">
                {{ route.params.name }}
            </div>
            <div class="w-[60vw] sm:w-[90vw] flex flex-wrap justify-center items-center">
                <div v-for="item of items" :key="item.id"
                    class="w-[10vw] sm:w-[25vw] flex flex-col justify-center items-center mx-[1vw] my-[2vh] bg-[rgba(255,255,255,.5)]">
                    <div class="w-[5vw] sm:w-[20vw] mx-auto my-[2vh]">
                        <img :src="item.img" class="w-full h-full rounded-full" />
                    </div>
                    <div class="text-lg font-bold">
                        {{ item.name }}
                    </div>
                    <button class="w-[5vw] sm:w-[15vw] text-lg my-[2vh] bg-[white]" @click="show = true">view</button>
                </div>
            </div>
        </div>
        <NModal v-model:show="show">
            <NCard class="w-[600px] sm:w-[90vw]" :bordered="false" size="huge" role="card" aria-modal="true">
                <div class="flex flex-col">
                    <div class="flex justify-around items-center">
                        <div class="flex flex-col items-center">
                            <div class="w-[8vw] sm:w-[20vw]">
                                <img src="https://fakeimg.pl/300/" class="w-full h-full rounded-full">
                            </div>
                            <div class="flex flex-col justify-center items-center mt-[1vh]">
                                <div class="text-lg sm:text-base font-bold">李油伯</div>
                                <div class="text-base">Weybabe Lee</div>
                            </div>
                        </div>
                        <div class="w-[15vw] sm:w-[30vw] flex flex-col">
                            <div class="text-xl sm:text-base font-bold mb-[1vh]">經歷</div>
                            <div class="self-center">
                                <ul class="list-disc text-base sm:text-sm">
                                    <li>xxx公司 塗裝實習生</li>
                                    <li>xxx大專生競賽 佳作</li>
                                    <li>xxx公司 社群小編</li>
                                </ul>
                            </div>
                            <div class="flex flex-wrap">
                                <div class="w-[3vw] sm:w-[8vw] my-[2vh] mx-[1vw]">
                                    <img src="https://fakeimg.pl/300/" class="w-full h-full rounded-full">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col justify-center items-center mt-[2vh]">
                        <div class="flex justify-center items-center">
                            <div class="text-center ml-[.5vw] sm:ml-[2vw] text-lg sm:text-base font-bold">
                                聯絡資訊 :
                            </div>
                            <div class="text-base mx-[1vw]">s108xxxx@mail.yzu.edu.tw</div>
                        </div>
                        <div class="flex justify-center items-center">
                            <div class="text-lg sm:text-base font-bold">作品集連結 :</div>
                            <div class="text-base mx-[1vw]">www.wwww.wwww.www</div>
                        </div>
                    </div>
                </div>
            </NCard>
        </NModal>
    </div>
</template>

<style>
.n-modal-mask {
    background-color: rgba(0, 0, 0, .5);
}

.n-card__content {
    --n-padding-left: 20px !important;
}
</style>