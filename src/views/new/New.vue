<script setup lang="ts">
import { news } from '@/utils/new/index'
</script>

<template>
    <div class="text-[#2A3752] bg-[#F5F5F5]">
        <div class="w-full min-h-[90vh]">
            <div class="w-[90vw] flex flex-col justify-evenly items-center mx-auto py-5 lg:py-10">
                <div v-for="item of news" :key="item.id"
                    class="w-full flex flex-col justify-evenly my-3 lg:my-5 py-8 rounded-[10px] sm:rounded-[5px] bg-[rgba(255,255,255)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <div class="title relative flex flex-col px-[4vw] sm:px-[10vw]">
                        <div class="sm:text-sm lg:hidden">{{ item.time }}</div>
                        <div class="text-3xl sm:text-xl font-bold">
                            {{ item.title }}
                        </div>
                    </div>
                    <div class="mt-8 px-[4vw] sm:px-[10vw] text-lg sm:text-sm whitespace-pre-line">
                        <div>{{ item.text }}</div>
                        <div class="mt-8 lg:flex sm:hidden">{{ item.time }}</div>
                    </div>
                </div>
            </div>
        </div>
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
    border-radius: 14px;
    background-color: #00E4FF;
    transform: rotate(90deg);
}
</style>