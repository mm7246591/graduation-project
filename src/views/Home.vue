<script setup lang="ts">
import { groups } from '@/utils/index'
</script>

<template>
    <div class="w-full">
        <div class="flex justify-center items-center">
            <img src="@/assets/img/Kanban.png" class="w-full object-cover">
        </div>
        <div class="intro flex flex-col justify-center py-[4vh] mx-auto bg-[#F5F5F5]">
            <div class="w-[90vw] mx-auto">
                <div class="relative title px-[8vw] text-3xl sm:text-xl font-bold text-[rgba(42,55,82,0.84)]">
                    元智大學
                    <br>
                    資訊傳播學系第26屆畢業展
                    <br>
                    — 成長TONE
                </div>
                <div class="my-[2vh] px-[6vw] text-2xl sm:text-sm text-[#2A3752]">
                    成長TONE不僅代表每個人的步調不同，
                    也是取「痛」的諧音。
                    每個人都有自己的想法、目標。
                    我們不能要求每個人
                    都以相同的方法達到目的地，
                    正是因為每個人的想法不同
                    才能造就自己的獨特，
                    也因為獨特而顯現魅力。
                </div>
            </div>
        </div>
        <div class="work relative text-[#2A3752] bg-[#FFFFFF] rounded-[30px]">
            <div class="w-[90vw] flex flex-col justify-center items-center py-[4vh] mx-auto">
                <div class="my-[2vh] text-center text-2xl sm:text-sm">
                    今年共有22組作品共同參與畢業展，<br>其包含了4組影視短片、1組行銷企劃、<br>11組互動裝置、4組遊戲開發及2組專題研究組成。
                </div>
                <div class="w-[90vw] flex sm:flex-col justify-evenly items-center">
                    <div v-for="group of groups" :key="group.id"
                        class="w-[18vw] sm:w-[70vw] flex flex-col justify-center items-center sm:my-[2vh] cursor-pointer">
                        <div class="sm:w-full lg:my-[2vh]">
                            <img :src="group.img" class="w-full h-full object-contain" />
                        </div>
                        <div class="name relative text-xl font-bold my-[1vh] ">
                            {{ group.name }}
                        </div>
                        <div class="h-[15vh] p-3 text-center text-sm whitespace-pre-line">
                            {{ group.text }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (max-width:480px) {
    .title::before {
        content: "";
        position: absolute;
        top: 40%;
        left: -10%;
        width: 100px;
        height: 9px;
        border-radius: 50px;
        background-color: #00E4FF;
        transform: rotate(90deg);
    }

    .work::before {
        content: "展覽內容介紹";
        position: absolute;
        top: 0%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1vh 10vw;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5rem;
        color: #E3F4F7;
        background-color: #2A3752;
        border-radius: 31.5px;
    }

    .name::after {
        content: "";
        position: absolute;
        bottom: -10%;
        left: 50%;
        transform: translateX(-50%);
        width: 20px;
        height: 3px;
        background-color: #00E4FF;
    }
}
</style>