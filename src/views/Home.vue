<script setup lang="ts">
import { groups } from '@/utils/index'
</script>

<template>
    <div class="w-full text-[#58595B] bg-[rgba(216,250,255,.5)]">
        <div class="img flex justify-center items-center w-[90vw] mx-auto">
            <img src="@/assets/img/Kanban.png" class="w-full object-cover">
        </div>
        <div class="intro w-[90vw] flex flex-col justify-center my-[4vh] mx-auto">
            <div class="text-3xl sm:text-xl font-bold">
                元智大學
                <br>
                資訊傳播學系第26屆
                <br>
                畢業展覽
            </div>
            <div class="mt-[2vh] text-2xl sm:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iste quisquam vitae deleniti dignissimos
                officia ipsa cupiditate repudiandae et dolores doloremque consequatur eum, accusantium praesentium atque
                assumenda adipisci doloribus ratione!
            </div>
        </div>
        <div class="work bg-[rgba(187,241,249,0.5)]">
            <div class="w-[90vw] flex flex-col justify-center items-center mx-auto py-[4vh]">
                <div class="text-3xl sm:text-xl font-bold   ">
                    展覽作品
                </div>
                <div class="my-[2vh] text-2xl sm:text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur tempora porro laboriosam
                    perspiciatis
                    nemo, provident possimus vel quisquam consequuntur magnam eum obcaecati odio autem odit minima
                    soluta
                    sit, nobis cum?
                </div>
                <div class="w-[90vw] flex sm:flex-col justify-evenly items-center">
                    <div v-for="group of groups" :key="group.id"
                        class="w-[18vw] sm:w-[70vw] h-[50h] flex flex-col justify-center items-center bg-[rgba(255,255,255,.5)] rounded-[16px] sm:my-[2vh] cursor-pointer">
                        <div class="w-[13vw] sm:!w-full h-[20vh] sm:!h-full lg:my-[2vh]">
                            <img :src="group.img" class="w-full h-full" />
                        </div>
                        <div class="text-xl font-bold sm:!mt-[1vh]">
                            {{ group.name }}
                        </div>
                        <div class="p-3 text-center">
                            {{ group.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>