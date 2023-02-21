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
        <div class="img w-[90vw] h-[20vh] mx-auto py-[2vh]">
            <img src="https://picsum.photos/200/300" class="w-full h-full" />
        </div>
        <div
            class="list relative w-[90vw] flex flex-col justify-evenly items-center mx-auto my-[4vh] pt-[4vh] text-[#2A3752] bg-[#FFFFFF] rounded-[14px]">
            <div class="px-[8vw] mt-[2vh] sm:text-base font-bold text-center">
                本系是全國第一所
                <br>
                以感知設計、傳播媒體、資訊科技
                <br>
                三位一體的整合性學系。
            </div>
            <div class="w-full flex sm:flex-col justify-evenly items-center my-[2vh]">
                <div v-for="item of classes" :key="item.id"
                    class="sm:w-[75vw] h-[20vh] flex flex-col justify-evenly p-5 mx-[1vw] sm:mb-[2vh] bg-[#E3F4F7] rounded-[8px]">
                    <article class="relative text-2xl sm:text-lg font-bold">{{ item.name }}</article>
                    <section class="text-lg sm:text-sm text-center whitespace-pre-line">{{ item.text }}</section>
                    <button class="sm:w-[20vw] px-[5vw] self-end text-lg !text-[#58595B] bg-[white] rounded-[8px]"
                        @click="handleToClass(item.group)">
                        view
                    </button>
                </div>
            </div>
        </div>
        <div
            class="sponsor relative w-[90vw] flex flex-col justify-evenly items-center mx-auto my-[6vh] pt-[4vh] bg-[#FFFFFF] rounded-[14px]">
            <div class="w-full flex flex-wrap justify-evenly items-center">
                <div v-for="sponsor of sponsors" :key="sponsor.id"
                    class="w-[25vw] flex flex-col justify-center items-center my-[2vh]">
                    <div class="w-[58px]">
                        <img :src="sponsor.img" class="w-full h-full rounded-full" />
                    </div>
                    <!-- <div class="text-lg sm:text-base">{{ sponsor.name }}</div> -->
                </div>
            </div>
        </div>
        <div
            class="contact relative w-[90vw] flex flex-col justify-evenly items-center mx-auto mb-[2vh] pt-[4vh] bg-[#FFFFFF] rounded-[14px]">
            <div class="w-full flex justify-evenly my-[2vh]">
                <div v-for="contact of contacts" :key="contact.id"
                    class="w-[20vw] flex flex-col justify-center items-center">
                    <div class="sm:w-[58px]">
                        <a :href="contact.link">
                            <img :src="contact.img" class="w-full h-full rounded-full" />
                        </a>
                    </div>
                    <div class="text-lg sm:text-base">{{ contact.name }}</div>
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
    padding: 1vh 10vw;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #E3F4F7;
    background-color: #2A3752;
    border-radius: 31.5px;
}

.list article::before {
    content: "";
    position: absolute;
    top: 25%;
    left: -5%;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: #00E4FF;
}

.sponsor::before {
    content: "贊助夥伴";
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

.contact::before {
    content: "聯絡我們";
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
</style>
