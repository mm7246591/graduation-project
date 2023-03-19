<script setup lang="ts">
import { C1, C2 } from '@/utils/index'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { NModal, NCard, NImage } from 'naive-ui';

interface Item {
    id: string
    img: string
    name: string
    mail: string
    profile: string
    experience: string[]
    skill: string[]
}

const route = useRoute()
const items = ref<Item[] | null>(null)
const selectItem = ref<Item[]>()
const routeName = ref<any>("")
const show = ref<boolean>(false)

const handleSelect = (id: string) => {
    show.value = !show.value
    selectItem.value = items.value?.filter(item => item.id === id)
}

onMounted(() => {
    if (route.params.name === 'c1') {
        items.value = C1
        routeName.value = '科技組'
    } else {
        items.value = C2
        routeName.value = '設計組'
    }
})
</script>

<template>
    <div class="w-full flex flex-col bg-[#EFEFEF]">
        <div class="w-[90vw] mx-auto my-[2vh] sm:text-sm font-bold text-[#000]">
            <RouterLink to="/about">&lt&lt 回上一頁</RouterLink>
        </div>
        <div class="relative w-[90vw] flex flex-col justify-center items-center mx-auto mb-[2vh] py-[4vh] bg-[#FFFFFF] rounded-[35px]"
            :class="[routeName === '科技組' ? 'c1' : 'c2']">
            <div class="sm:w-[90vw] flex flex-wrap justify-center items-center">
                <div v-for="item of items" :key="item.id"
                    class="w-[10vw] sm:w-[25vw] flex flex-col justify-center items-center mx-[1vw] my-[2vh] bg-[#E3F4F7]">
                    <div class="w-[5vw] sm:w-[20vw] mx-auto my-[2vh]">
                        <NImage :src="item.img" :lazy="true" class="w-full h-full rounded-full object-contain" />
                    </div>
                    <div class="text-lg font-bold">
                        {{ item.name }}
                    </div>
                    <button class="w-[5vw] sm:w-[15vw] text-base my-[2vh] bg-[white] !font-['Times_New_Roman']"
                        @click="handleSelect(item.id)">view</button>
                </div>
            </div>
        </div>
        <NModal v-model:show="show">
            <NCard class="lg:w-[50vw] sm:w-[90vw]" :bordered="false" size="huge" role="card" aria-modal="true">
                <div v-for="select of selectItem" :key="select.id" class="flex justify-center">
                    <div class="w-full flex flex-col justify-around items-center mx-[2vw]">
                        <div class="flex flex-col items-center">
                            <div class="w-[10vw] sm:w-[20vw]">
                                <NImage :src="select.img" :lazy="true" class="w-full h-full rounded-full object-contain" />
                            </div>
                            <div class="flex flex-col justify-center items-center mt-[1vh]">
                                <div class="text-lg sm:text-lg font-bold">{{ select.name }}</div>
                            </div>
                        </div>
                        <div class="flex flex-col mt-[1vh]">
                            <div class="flex">
                                <a :href="'mailto:' + select.mail" class="w-[23px] object-cover cursor-pointer"><img
                                        src="/img/email.png" alt=""></a>
                                <a v-if="select.profile === '無'" href="#"
                                    class="w-[23px] object-cover cursor-pointer mx-[1vw]"><img src="/img/portfolio.png"
                                        alt="">
                                </a>
                                <a v-else :href="'' + select.profile"
                                    class="w-[23px] object-cover cursor-pointer mx-[1vw]"><img src="/img/portfolio.png"
                                        alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="w-full flex flex-col">
                        <div
                            class="w-[84px] sm:text-sm text-center font-bold py-[.5vh] my-[1vh] text-[#fff] bg-[#2A3752] rounded-[31.5px]">
                            經歷
                        </div>
                        <div class="sm:w-[32vw] sm:self-center">
                            <ul v-for="experience of select.experience" :key="experience"
                                class="list-disc text-base sm:text-sm">
                                <li>{{ experience }}</li>
                            </ul>
                        </div>
                        <div
                            class="w-[84px] sm:text-sm text-center font-bold py-[.5vh] my-[1vh] text-[#fff] bg-[#2A3752] rounded-[31.5px]">
                            專長
                        </div>
                        <div class="sm:w-[32vw] sm:self-center">
                            <ul v-for="skill of select.skill" :key="skill" class="list-disc text-base sm:text-sm">
                                <li>{{ skill }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </NCard>
        </NModal>
    </div>
</template>

<style>
.n-modal-mask {
    background-color: rgba(0, 0, 0, .5);
}

.n-card__content {
    --n-padding-left: 20px !important;
    background-color: #E3F4F7 !important;
}

.c1::before {
    content: "科技組";
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1vh 10vw;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    color: white;
    background-color: #2A3752;
    border-radius: 31.5px;
}

.c2::before {
    content: "設計組";
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1vh 10vw;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.5rem;
    color: white;
    background-color: #2A3752;
    border-radius: 31.5px;
}

@media (min-width:1024px) {
    .c1::before {
        padding: 1vh 3vw;
    }

    .c2::before {
        padding: 1vh 3vw;
    }
}
</style>