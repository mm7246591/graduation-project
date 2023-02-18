<script setup lang="ts">
import { news } from '@/utils/new/index'
import { NModal, NCard } from 'naive-ui';
import { ref } from 'vue';

interface New {
    id: string,
    title: string,
    text: string,
    time: string
}

const selectItem = ref<New[]>([])
const show = ref<boolean>(false)

// const handleSelect = (id: string) => {
//     show.value = true
//     selectItem.value = []
//     const data = news.find(item => item.id === id)
//     if (data) {
//         selectItem.value.push(data)
//     }
// }
</script>

<template>
    <div class="text-[#58595B] bg-[#F5F5F5]">
        <div class="w-full h-[90vh]">
            <div class="w-[90vw] flex flex-col justify-evenly items-center mx-auto">
                <div v-for="item of news" :key="item.id"
                    class="w-full flex flex-col justify-evenly my-[2vh] py-[3vh] rounded-[5px] bg-[rgba(255,255,255)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <div class="title relative flex flex-col px-[10vw]">
                        <div class="sm:text-sm">{{ item.time }}</div>
                        <div class="text-3xl sm:text-xl font-bold">
                            {{ item.title }}
                        </div>
                    </div>
                    <div class="mt-[2vh] px-[10vw] text-lg sm:text-sm whitespace-pre-line">
                        {{ item.text }}
                    </div>
                </div>
            </div>
        </div>
        <NModal v-model:show="show">
            <NCard class="w-[90vw] sm:w-[90vw]" :bordered="false" size="huge" role="card" aria-modal="true">
                <div class="flex flex-col text-[#58595B]">
                    <div v-for="select of selectItem" :key="select.id">
                        <div class="text-3xl sm:text-xl font-bold">
                            {{ select.title }}
                        </div>
                        <div class="my-[2vh] text-lg sm:text-base">
                            <!-- {{ select.desc }} -->
                        </div>
                        <div class="flex justify-between items-center">
                            <div>{{ select.time }}</div>
                        </div>
                    </div>
                </div>
            </NCard>
        </NModal>
    </div>
</template>

<style scoped>
.title::before {
    content: "";
    position: absolute;
    top: 40%;
    left: 0%;
    width: 50px;
    height: 5px;
    border-radius: 50px;
    background-color: #00E4FF;
    transform: rotate(90deg);
}
</style>