<script setup lang="ts">
import { news } from '@/utils/new/index'
import { NModal, NCard } from 'naive-ui';
import { ref } from 'vue';

interface New {
    id: string,
    title: string,
    text: string,
    desc: string,
    time: string
}

const selectItem = ref<New[]>([])
const show = ref<boolean>(false)

const handleSelect = (id: string) => {
    show.value = true
    selectItem.value = []
    const data = news.find(item => item.id === id)
    if (data) {
        selectItem.value.push(data)
    }
}
</script>

<template>
    <div class="w-full py-[4vh] text-[#58595B] bg-[rgba(187,241,249,0.5)]">
        <div class="w-[90vw] flex flex-col justify-evenly items-center mx-auto">
            <div v-for="item of news" :key="item.id"
                class="flex flex-col justify-evenly my-[2vh] p-5 bg-[rgba(255,255,255,0.5)]">
                <div class="text-3xl sm:text-xl font-bold">
                    {{ item.title }}
                </div>
                <div class="my-[2vh] text-lg sm:text-base">
                    {{ item.text }}
                </div>
                <div class="flex justify-between items-center">
                    <div>{{ item.time }}</div>
                    <button class="w-[5vw] sm:w-[15vw] self-center text-lg bg-[white]"
                        @click="handleSelect(item.id)">view
                    </button>
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
                            {{ select.desc }}
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

</style>