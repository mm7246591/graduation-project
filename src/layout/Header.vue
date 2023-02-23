<script setup lang="ts">
import { ArrowUpOutline } from '@vicons/ionicons5'
import { NDropdown, NButton, NIcon } from 'naive-ui'
import { useRouter } from 'vue-router';
import { Popup, BackTop } from 'vant';
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
    <header class="w-full sticky top-0 z-10 bg-[#00E4FF]">
        <div class="w-[90vw] h-[10vh] flex justify-between items-center mx-auto">
            <div class="lg:w-[100px] sm:w-[64px] cursor-pointer" @click="handleToHome">
                <img src="../assets/img/logo.png" class="object-cover" alt="">
            </div>
            <div class="lg:hidden md:flex">
                <img src="@/assets/img/menu.png" class="object-cover cursor-pointer" @click="handleMenu">
            </div>
            <div class="lg:flex sm:hidden">
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
            <Popup v-model:show="show" position="left" class="w-[40vw] h-full">
                <div class="sm:flex lg:hidden flex-col justify-around h-[30vh]">
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
        </div>
        <BackTop>
            <NIcon size="32" color="#fff">
                <ArrowUpOutline />
            </NIcon>
        </BackTop>
    </header>
</template>

<style>
header .n-button {
    --n-ripple-color: #00E4FF !important;
    --n-text-color: #FFFFFF !important;
    --n-text-color-hover: #FFFFFF !important;
    --n-text-color-pressed: #FFFFFF !important;
    --n-text-color-focus: #FFFFFF !important;
    --n-border: 1px solid #00E4FF !important;
    --n-border-hover: 1px solid #00E4FF !important;
    --n-border-pressed: 1px solid #00E4FF !important;
    --n-border-focus: 1px solid #00E4FF !important;
    --n-font-size: 18px !important;
    font-weight: 500 !important;
    --n-padding: 0 0 !important;
    margin: 0 1rem;

}

.van-back-top {
    background-color: #00E4FF !important;
}

@media (min-width:1024px) {

    header .n-button:hover {
        --n-text-color-hover: #2A3752 !important;
        /* --n-text-color-pressed: #2A3752 !important;
        --n-text-color-focus: #2A3752 !important; */
    }
}

@media (max-width:480px) {

    header .logo {
        left: 15%;
    }

    header .n-button {
        --n-font-size: 20px !important;
    }

    header .van-popup {
        --van-popup-background: #00E4FF;
    }
}
</style>