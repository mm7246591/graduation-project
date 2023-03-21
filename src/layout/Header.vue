<script setup lang="ts">
import { ArrowUpOutline } from '@vicons/ionicons5'
import { NDropdown, NButton, NIcon } from 'naive-ui'
import { useRouter } from 'vue-router';
import { Popup, BackTop, Collapse, CollapseItem } from 'vant';
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
        label: '行銷&大專生',
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
const activeNames = ref('');
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
    if (key === 'Point') {
        window.location.href = 'https://yzuiccollectchaters.web.app/'
        return
    }
    if (show.value) {
        show.value = false
    }
    router.push({ name: `${key}` })
}

const handleCollpaseItem = (item: string) => {
    if (item === '線上集章') {

    }
    if (show.value) {
        show.value = false
    }
    router.push({ name: `${item}` })
}

const handleMenu = () => {
    show.value = true
}

</script>

<template>
    <header class="w-full sticky top-0 z-10 bg-[#00E4FF]">
        <div class="w-[90vw] h-[10vh] flex justify-between items-center mx-auto">
            <div class="lg:w-[100px] sm:w-[64px] cursor-pointer" @click="handleToHome">
                <img src="/img/logo.png" class="h-[9vh] object-cover" alt="">
            </div>
            <div class="lg:hidden md:flex overflow-hidden" @click="handleMenu">
                <img src="/img/menu.png" class="menu -translate-x-10 object-cover">
            </div>
            <div class="lg:flex sm:hidden">
                <NDropdown trigger="hover" :show-arrow="true" :options="infos" @select="handleSelect">
                    <NButton icon-placement="right">展覽資訊</NButton>
                </NDropdown>
                <NDropdown trigger="hover" :show-arrow="true" :options="works" @select="handleSelect">
                    <NButton icon-placement="right">展覽作品</NButton>
                </NDropdown>
                <NDropdown trigger="hover" :show-arrow="true" :options="announcement" @select="handleSelect">
                    <NButton icon-placement="right">公告</NButton>
                </NDropdown>
                <NDropdown trigger="hover">
                    <NButton @click="handleToAbout">關於我們</NButton>
                </NDropdown>
            </div>
            <Popup v-model:show="show" position="right" class="w-[45vw] h-full">
                <div class="sm:flex lg:hidden flex-col justify-evenly py-[2vh]">
                    <Collapse v-model="activeNames" accordion :border="false">
                        <CollapseItem title="展覽資訊" name="1" :border="false">
                            <div @click="handleCollpaseItem('Traffic')">實體展覽</div>
                            <div class="my-[1.5vh]" @click="handleCollpaseItem('Film')">影展</div>
                            <a href="https://yzuiccollectchaters.web.app/">線上集章</a>
                        </CollapseItem>
                        <CollapseItem title="展覽作品" name="2" :border="false">
                            <div @click="handleCollpaseItem('Game')">遊戲</div>
                            <div class="my-[1.5vh]" @click="handleCollpaseItem('Interact')">互動</div>
                            <div @click="handleCollpaseItem('Market')">行銷&大專生</div>
                        </CollapseItem>
                        <CollapseItem title="公告" name="3" :border="false">
                            <div class="mb-[1.5vh]" @click="handleCollpaseItem('New')">一般消息</div>
                            <div @click="handleCollpaseItem('Activity')">活動快訊</div>
                        </CollapseItem>
                        <CollapseItem title="關於我們" :readonly="true" :border="false" @click="handleCollpaseItem('About')">
                        </CollapseItem>
                    </Collapse>
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
    --n-font-size: 1.2rem !important;
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
    }
}

@media (max-width:480px) {
    header .menu {
        filter: drop-shadow(40px 0 white);
    }

    header .logo {
        left: 15%;
    }

    header .van-popup {
        --van-popup-background: #00E4FF;
    }

    header .van-cell,
    header .van-collapse-item__content {
        color: white;
        background-color: #00E4FF !important;
        font-size: 1.1rem;
        margin: 0.5vh 0;
    }

    header .van-collapse {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    header .van-cell__right-icon {
        color: white;
    }
}
</style>