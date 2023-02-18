<script setup lang="ts"></script>

<template>
    <div class="w-full bg-[#F5F5F5] text-[#2A3752] py-[4vh]">
        <div class="QR-Code relative w-full flex flex-col items-center mx-auto bg-[#FFFFFF] mb-[4vh]">
            <div class="w-[90vw] h-[20vh] mt-[6vh]">
                <img src="https://picsum.photos/200/300" class="w-full h-full" />
            </div>
            <div class="w-[90vw] flex flex-col justify-center mx-auto pt-[2vh]">
                <div class="text-lg sm:text-sm">
                    訪談系上同學，影片內容為大學四年學習過程的成長痛以及對出社會的期許。
                </div>
            </div>
            <div class="w-[70vw] flex flex-col justify-center mx-auto pb-[4vh]">
                <div class="time relative my-[4vh] text-lg sm:text-sm text-[#2A3752]">
                    <div class="font-bold">活動時間 :</div>
                    <div class="">3/13~ 4/8</div>
                </div>
                <div class="location relative mt-[1vh] text-lg sm:text-sm text-[#2A3752] ">
                    <div class="font-bold">活動地點 :</div>
                    <div>五館一樓</div>
                </div>
            </div>
        </div>
        <div class="leader-board relative w-full flex flex-col items-center mx-auto bg-[#FFFFFF]">
            <div class="w-[90vw] h-[20vh] mt-[6vh]">
                <img src="https://picsum.photos/200/300" class="w-full h-full" />
            </div>
            <div class="w-[90vw] flex flex-col justify-center mx-auto pt-[2vh]">
                <div class="text-lg sm:text-sm">
                    各組的代表物作為投票之標記物，觀展人獲得OK 蹦便條紙後，可將便條貼在自己喜歡組別的代表物上，於展覽期間， 票選出三組最佳人氣王。
                </div>
            </div>
            <div class="w-[70vw] flex flex-col justify-center mx-auto py-[4vh]">
                <div class="time relative my-[4vh] text-lg sm:text-sm text-[#2A3752]">
                    <div class="font-bold">活動時間 :</div>
                    <div class="">5/11~ 5/15</div>
                </div>
                <div class="location relative mt-[1vh] text-lg sm:text-sm text-[#2A3752] ">
                    <div class="font-bold">活動地點 :</div>
                    <div>松菸南向製菸廠</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.QR-Code::before {
    content: "宣傳片";
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

.leader-board::before {
    content: "排行榜";
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

.time::before {
    content: "";
    position: absolute;
    top: 10%;
    left: -8%;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #00E4FF;
    transform: rotate(90deg);
}

.location ::before {
    content: "";
    position: absolute;
    top: 10%;
    left: -8%;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    background-color: #00E4FF;
    transform: rotate(90deg);
}
</style>
