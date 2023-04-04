<script setup lang="ts">
import { classes, sponsors, contacts } from "@/utils/index";
import { useRouter } from "vue-router";

const router = useRouter();

const handleToClass = (group: string) => {
    router.push({ name: "List", params: { name: group } });
};
</script>

<template>
    <div class="w-full bg-[#F5F5F5] py-[2vh]">
        <div class="img w-[85vw] sm:w-[80vw] mx-auto py-[2vh]">
            <img src="/img/Kanban.png" class="w-full object-cover">
        </div>
        <div
            class="list relative w-[95vw] sm:w-[90vw] flex flex-col justify-evenly items-center mx-auto my-12 lg:my-20 lg:pt-12 pb-10 text-[#2A3752] bg-[#FFFFFF] rounded-[35px] sm:rounded-[14px]">
            <div class="lg:flex sm:hidden px-[8vw] my-10 text-2xl sm:text-base font-bold text-center">
                本系是全國第一所以感知設計、傳播媒體、資訊科技三位一體的整合性學系
                <br>
                以「互動媒體技術之發展與應用」為主要研究發展方向，輔以「數位媒體內容之設計與整合」
            </div>
            <div class="lg:hidden sm:flex px-[8vw] my-8 text-sm text-center">
                本系是全國第一所
                <br>
                以感知設計、傳播媒體、資訊科技
                <br>
                三位一體的整合性學系，
                <br>
                以「互動媒體技術之發展與應用」
                <br>
                為主要研究發展方向，
                <br>
                輔以「數位媒體內容之設計與整合」
            </div>
            <div class="w-full flex sm:flex-col justify-evenly items-center my-[2vh]">
                <div v-for="item of classes" :key="item.id"
                    class="w-[40vw] sm:w-[75vw] flex flex-col justify-evenly py-[4vh] px-[5vw] sm:px-[8vw] sm:mx-[1vw] sm:mb-[2vh] bg-[#E3F4F7] rounded-[18px] sm:rounded-[8px]">
                    <article class="relative text-2xl sm:text-lg font-bold">{{ item.name }}</article>
                    <section class="text-lg sm:text-sm whitespace-pre-line lg:h-[8vh] my-[1vh]">{{ item.text }}</section>
                    <button
                        class="w-[6vw] sm:w-[20vw] sm:px-[5vw] self-end text-lg !text-[#58595B] bg-[white] rounded-[8px] "
                        @click="handleToClass(item.group)">
                        view
                    </button>
                </div>
            </div>
        </div>
        <div
            class="sponsor relative w-[90vw] flex flex-col justify-evenly items-center mx-auto my-12 lg:my-20 pt-12 pb-8 bg-[#FFFFFF] rounded-[14px]">
            <div class="w-full flex flex-wrap justify-evenly items-center">
                <div v-for="sponsor of sponsors" :key="sponsor.id"
                    class="w-[25vw] flex flex-col justify-center items-center my-[2vh]">
                    <div class="w-[10vw] sm:w-[58px]">
                        <img :src="sponsor.img" class="w-full h-full rounded-full" />
                    </div>
                </div>
            </div>
        </div>
        <div
            class="contact relative w-[90vw] flex flex-col justify-evenly items-center mx-auto mb-10 pt-12 pb-8 bg-[#FFFFFF] rounded-[14px]">
            <div class="w-full flex justify-evenly my-[2vh]">
                <div v-for="contact of contacts" :key="contact.id"
                    class="w-[20vw] flex flex-col justify-center items-center">
                    <div class="w-[5vw] sm:w-[58px]">
                        <a :href="contact.link">
                            <img :src="contact.img" class="w-full h-full rounded-full" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.list::before {
    content: "獵人名單";
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

.list article::before {
    content: "";
    position: absolute;
    top: 25%;
    left: -6%;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: #00E4FF;
}

.sponsor::before {
    content: "贊助名單";
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

.contact::before {
    content: "聯絡我們";
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

    .list::before,
    .sponsor::before,
    .contact::before {
        padding: 1vh 10vw;
        font-size: 1rem;
    }

    .list article::before {
        left: -8%;
    }

}
</style>
