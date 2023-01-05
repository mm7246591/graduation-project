<script setup lang="ts">
import { NDropdown, NButton } from 'naive-ui'
import { useRouter } from 'vue-router';
import { Popup } from 'vant';
import { ref } from 'vue';

const router = useRouter()

const infos = [
    {
        label: '實體展覽',
        key: 'Traffic',
    },
    {
        label: '影展',
        key: "Film"
    },
    {
        label: '線上集章',
        key: 'Point'
    },
]
const works = [
    {
        label: '遊戲',
        key: 'Game',
    },
    {
        label: '互動',
        key: "Interact"
    },
    {
        label: '動畫影視',
        key: 'Animation'
    },
    {
        label: '行銷',
        key: 'Market'
    },
]
const announcement = [
    {
        label: '一般消息',
        key: 'New',
    },
    {
        label: '活動快訊',
        key: "Activity"
    },
]
const show = ref<boolean>(false)

const handleToHome = () => {
    if (show.value) {
        show.value = false
    }
    router.push('/')
}

const handleToAbout = () => {
    if (show.value) {
        show.value = false
    }
    router.push('/about')
}

const handleSelect = (key: string | number) => {
    if (show.value) {
        show.value = false
    }
    router.push({ name: `${key}` })
}

const handleMenu = () => {
    show.value = true
}
</script>

<template>
    <header class="bg-[rgba(216,250,255,.5)]">
        <div class="w-[90vw] h-[10vh] flex justify-between items-center mx-auto">
            <div class="lg:text-2xl sm:text-xl font-bold text-[#181818] cursor-pointer" @click="handleToHome">成長tone
            </div>
            <div class="lg:hidden md:flex">
                <img src="@/assets/img/menu.png" class="object-cover cursor-pointer" @click="handleMenu">
            </div>
            <Popup v-model:show="show" position="left" class="w-[40vw] h-full">
                <div class="flex flex-col justify-around h-[30vh]">
                    <NDropdown trigger="click">
                        <NButton @click="handleToHome">首頁</NButton>
                    </NDropdown>
                    <NDropdown trigger="click" :show-arrow="true" :options="infos" @select="handleSelect">
                        <NButton icon-placement="right">展覽資訊</NButton>
                    </NDropdown>
                    <NDropdown trigger="click" :show-arrow="true" :options="works" @select="handleSelect">
                        <NButton icon-placement="right">展覽作品</NButton>
                    </NDropdown>
                    <NDropdown trigger="click" :show-arrow="true" :options="announcement" @select="handleSelect">
                        <NButton icon-placement="right">公告</NButton>
                    </NDropdown>
                    <NDropdown trigger="click">
                        <NButton @click="handleToAbout">關於我們</NButton>
                    </NDropdown>
                </div>
            </Popup>
            <div class="lg:flex md:hidden">
                <NDropdown trigger="click" :show-arrow="true" :options="infos" @select="handleSelect">
                    <NButton icon-placement="right">展覽資訊</NButton>
                </NDropdown>
                <NDropdown trigger="click" :show-arrow="true" :options="works" @select="handleSelect">
                    <NButton icon-placement="right">展覽作品</NButton>
                </NDropdown>
                <NDropdown trigger="click" :show-arrow="true" :options="announcement" @select="handleSelect">
                    <NButton icon-placement="right">公告</NButton>
                </NDropdown>
                <NDropdown trigger="click">
                    <NButton @click="handleToAbout">關於我們</NButton>
                </NDropdown>
            </div>
        </div>
    </header>
</template>

<style>
header .n-button {
    --n-ripple-color: rgba(216, 250, 255, .5) !important;
    --n-text-color-hover: black !important;
    --n-text-color-pressed: black !important;
    --n-text-color-focus: black !important;
    --n-border: 1px solid rgba(216, 250, 255, .5) !important;
    --n-border-hover: 1px solid rgba(216, 250, 255, .5) !important;
    --n-border-pressed: 1px solid rgba(216, 250, 255, .5) !important;
    --n-border-focus: 1px solid rgba(216, 250, 255, .5) !important;
    --n-font-size: 18px !important;
    font-weight: 500 !important;
    --n-padding: 0 0 !important;
    margin: 0 1rem;
}

@media (max-width:480px) {
    header .n-button {
        --n-font-size: 16px !important;
    }

    header .van-popup {
        --van-popup-background: rgba(216, 250, 255);
    }
}
</style>