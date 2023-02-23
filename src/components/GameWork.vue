<script setup lang="ts">
import { games } from "@/utils/work/index";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

interface Item {
  id: string;
  group: string;
  img: string;
  title: string;
  studio: string;
  intro: string;
  member: string;
  job: string;
}

const item = ref<Item | null>(null);

const getData = () => {
    const id = parseInt(route.params.id[0]) - 1;
    item.value = games[id];
};

onMounted(() => {
    getData();
});
</script>

<template>
    <div class="px-6 py-10 min-h-[90vh] bg-[#F5F5F5]">
        <RouterLink to="/work/game">&lt&lt 回上一頁</RouterLink>
        <img src="https://fakeimg.pl/350x200/?text=Fake" class="mt-4 lg:mt-9 mb-9 lg:mb-24 w-full object-contain">
        <div class="lg:relative mx-5 lg:mx-24 text-[#2A3752]">
            <div class="relative mb-8 lg:mb-10 font-bold text-2xl lg:text-6xl before:content-[''] before:absolute before:bottom-0 before:-left-4 before:w-1.5 before:h-full before:rounded-full before:bg-[#00E4FF]">作品標題</div>
            <div class="text-sm">
                <div class="relative mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">工作室名</div>
                <div class="mb-8 lg:mb-10">2205 Studio</div>
                <div class="relative mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">作品介紹</div>
                <div class="mb-8 lg:mb-10">在方形封閉的空間裡，團隊將打造一個爵士酒吧氛圍的展場，利用酒吧中常見的元素作為互動裝置並結合樂隊演出的投影，展現出爵士樂即興與自由的特性，讓觀展者在JazzBox裡組合出自己的爵士特調！</div>
                <div class="relative mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">團隊成員</div>
                <div class="mb-8 lg:mb-10">邱郁琳、張耘嘉、何若齊、謝昕倢、林劭謙 、徐振瑄</div>
                <div class="relative mb-2.5 text-[#2A3752] font-bold before:content-[''] before:absolute before:top-1.5 before:-left-5 before:w-3 before:h-3 before:rounded-full before:bg-[#00E4FF]">組內分工</div>
                <div>
                    邱郁琳：主視覺設計、貼文設計、專案管理<br>
                    張耘嘉：文案撰寫、廠商聯繫<br>
                    何若齊：logo設計、展場視覺設計、展間規劃、投影動畫原畫<br>
                    謝昕倢：動畫製作、企劃發想<br>
                    林劭謙：企劃書統整與編排、會計<br>
                    徐振瑄：程式編寫、網頁設計、軟硬體測試
                </div>
            </div>
        </div>
    </div>
</template>



<style scoped>

</style>