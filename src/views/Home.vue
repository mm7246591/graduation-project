<script setup lang="ts">
import { groups } from '@/utils/index'
import { useRouter } from 'vue-router';

const router = useRouter()
const handleToWork = (route: string) => {
    router.push(route)
}
</script>

<template>
    <div class="w-full bg-[#F5F5F5] text-[#2A3752]">
        <div class="flex justify-center items-center">
            <img src="/img/Kanban.png" class="w-full object-cover">
        </div>
        <div class="intro flex flex-col justify-center py-12 mx-auto">
            <div class="w-[90vw] mx-auto">
                <div
                    class="relative title px-[5vw] sm:px-[8vw] text-4xl sm:text-xl font-bold sm:text-[rgba(42,55,82,0.84)]">
                    元智大學
                    <br>
                    資訊傳播學系第26屆畢業展
                    <br>
                    『 成長TONE 』
                </div>
                <div class="my-16 sm:my-12 px-[1.5vw] text-2xl sm:text-sm font-medium text-center !leading-7">
                    成長TONE不僅代表每個人的步調不同，
                    <br>
                    也是取「痛」的諧音。
                    <br>
                    每個人都有自己的想法、目標。
                    <br>
                    我們不能要求每個人
                    都以相同的方法達到目的地，
                    <br>
                    正是因為每個人的想法不同
                    才能造就自己的獨特，
                    <br>
                    也因為獨特而顯現魅力。
                </div>
            </div>
        </div>
        <div
            class="work relative bg-[#E3F4F7] rounded-tr-[64px] rounded-tl-[64px] sm:rounded-tr-[34px] sm:rounded-tl-[34px]">
            <div class="w-[90vw] flex flex-col justify-center items-center py-12 mx-auto">
                <div class="sm:flex lg:hidden my-4 text-center text-sm">
                    今年共有22組作品共同參與畢業展，<br>其包含了4組影視短片、1組行銷企劃、<br>11組互動裝置、4組遊戲開發及2組專題研究組成。
                </div>
                <div class="lg:flex sm:hidden my-6 text-center text-xl ">
                    今年共有22組作品共同參與畢業展，<br>其包含了4組影視短片、1組行銷企劃、11組互動裝置、4組遊戲開發及2組專題研究組成。
                </div>
                <div class="w-[90vw] flex sm:flex-col justify-evenly items-center">
                    <div v-for="group of groups" :key="group.id"
                        class="w-full sm:w-[70vw] flex flex-col justify-center items-center my-6 cursor-pointer"
                        @click="handleToWork(group.route)">
                        <div class="w-[15vw] sm:w-[50vw] lg:my-4 bg-[#FFFFFF] rounded-full">
                            <img :src="group.img" class="w-full h-full" />
                        </div>
                        <div class="name relative text-xl font-bold my-2 ">
                            {{ group.name }}
                        </div>
                        <div class="mt-2 w-full sm:px-[2vw] text-center text-sm whitespace-pre-line">
                            {{ group.text }}
                        </div>
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
    left: -5%;
    width: 100px;
    height: 9px;
    border-radius: 14px;
    background-color: #00E4FF;
    transform: rotate(90deg);
}

.work::before {
    content: "展覽內容介紹";
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5vh 4vw;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.5rem;
    color: #FFFFFF;
    background-color: #2A3752;
    border-radius: 31.5px;
}

@media (max-width:480px) {
    .title::before {
        left: -10%;
    }

    .work::before {
        padding: 1vh 10vw;
        font-size: 1rem;
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