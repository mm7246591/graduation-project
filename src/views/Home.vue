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
                成長TONE不僅代表每個人的步調不同，也是取「痛」的諧音。每個人都有自己的想法、目標。我們不能要求每個人都以相同的方法達到目的地，正是因為每個人的想法不同才能造就自己的獨特，也因為獨特而顯現魅力。每個人面對人生不同階段，都有各自的步調，找出自己的步調，過程中能夠欣賞周遭、享受每一份幸福，即使結果不如預期也能從中成長。
            </div>
        </div>
        <div class="work bg-[rgba(187,241,249,0.5)] rounded-[30px]">
            <div class="w-[90vw] flex flex-col justify-center items-center mx-auto py-[4vh]">
                <div class="text-3xl sm:text-xl font-bold   ">
                    展覽作品
                </div>
                <div class="my-[2vh] text-2xl sm:text-lg">
                    今年共有22組作品共同 參與畢業展，其包含了4組影視短片、1組行銷企劃、11組互動裝置、 4組遊戲開發及2組專題研究組成。
                </div>
                <div class="w-[90vw] flex sm:flex-col justify-evenly items-center">
                    <div v-for="group of groups" :key="group.id"
                        class="w-[18vw] sm:w-[70vw] flex flex-col justify-center items-center lg:bg-[rgba(255,255,255,.5)] rounded-[16px] sm:my-[2vh] shadow-[0px_6px_8px_rgba(0,0,0,0.5)] cursor-pointer">
                        <div class="w-[13vw] sm:w-full h-[20vh] lg:my-[2vh]">
                            <img :src="group.img" class="w-full h-full object-contain" />
                        </div>
                        <div class="text-xl font-bold mt-[1vh]">
                            {{ group.name }}
                        </div>
                        <div class="h-[15vh] p-3 text-center text-base">
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