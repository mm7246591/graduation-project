<script setup lang="ts">
import { classes, sponsors, contacts } from "@/utils/index";
import { useRouter } from "vue-router";

const router = useRouter();

const handleToClass = (name: string) => {
    router.push({ name: "List", params: { name } });
};
</script>

<template>
    <div class="w-full bg-[rgba(216,250,255,.5)]">
        <div class="img w-[90vw] h-[60vh] mx-auto py-[2vh]">
            <img src="https://picsum.photos/200/300" class="w-full h-full" />
        </div>
        <div
            class="list w-[90vw] flex flex-col justify-evenly items-center mx-auto py-[4vh] bg-[rgba(187,241,249,0.5)]">
            <div class="text-3xl sm:text-xl font-bold">獵人名單</div>
            <div class="w-full flex sm:flex-col justify-evenly items-center my-[2vh]">
                <div v-for="item of classes" :key="item.id"
                    class="c2 w-[35vw] sm:w-[80vw] h-[40vh] flex flex-col justify-evenly p-5 mx-[1vw] sm:mb-[1vh] bg-[rgba(255,255,255,0.5)]">
                    <article class="text-2xl sm:text-lg font-bold">{{ item.name }}</article>
                    <section class="text-lg sm:text-base">{{ item.text }}</section>
                    <button class="w-[5vw] sm:w-[15vw] self-center text-lg bg-[white]"
                        @click="handleToClass(item.name)">
                        view
                    </button>
                </div>
            </div>
        </div>
        <div class="sponsor w-[90vw] flex flex-col justify-evenly items-center mx-auto py-[4vh]">
            <div class="text-3xl sm:text-xl font-bold">贊助夥伴</div>
            <div class="w-full flex flex-wrap justify-evenly items-center my-[2vh]">
                <div v-for="sponsor of sponsors" :key="sponsor.id"
                    class="w-[20vw] flex flex-col justify-center items-center">
                    <div class="w-[10vw]">
                        <img :src="sponsor.img" class="w-full h-full rounded-full" />
                    </div>
                    <div class="text-lg sm:text-base">{{ sponsor.name }}</div>
                </div>
            </div>
        </div>
        <div
            class="contact w-[90vw] flex flex-col justify-evenly items-center mx-auto py-[4vh] bg-[rgba(187,241,249,0.5)]">
            <div class="text-3xl sm:text-xl font-bold">聯絡我們</div>
            <div class="w-full flex justify-evenly my-[2vh]">
                <div v-for="contact of contacts" :key="contact.id"
                    class="w-[20vw] flex flex-col justify-center items-center">
                    <div class="w-[5vw] sm:w-[10vw]">
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

</style>
