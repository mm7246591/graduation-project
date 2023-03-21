<script setup lang="ts"></script>

<template>
    <div class="w-full bg-[#F5F5F5] text-[#2A3752] lg:pt-20 lg:pb-12 sm:py-12">
        <div
            class="video relative w-[95vw] flex flex-col items-center mx-auto bg-[#FFFFFF] mb-16 lg:mb-20 rounded-[45px] sm:rounded-[17px]">
            <div class="w-[85vw] mt-12 lg:mt-16">
                <iframe src="https://www.youtube.com/embed/GCVCTLVRG8Y"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen class="w-full aspect-video"></iframe>
            </div>
            <div class="w-[75vw] sm:w-[85vw] flex flex-col justify-center mx-auto pt-4 lg:mt-8">
                <div class="video-desc relative text-2xl lg:font-bold sm:text-sm">
                    訪談系上同學，影片內容為大學四年學習過程的成長痛以及對出社會的期許。
                </div>
            </div>
            <div class="w-[70vw] sm:w-[70vw] flex flex-col justify-center text-xl mx-auto pb-8 lg:pb-12">
                <div class="time relative lg:flex my-4 lg:my-8 sm:text-sm">
                    <div class="font-bold">活動時間 :</div>
                    <div class="lg:mx-[1vw]">3/13~ 4/8</div>
                </div>
                <div class="location relative lg:flex sm:text-sm">
                    <div class="font-bold">活動地點 :</div>
                    <div class="lg:mx-[1vw]">五館一樓</div>
                </div>
            </div>
        </div>
        <div
            class="leader-board relative w-[95vw] flex flex-col items-center mx-auto bg-[#FFFFFF] rounded-[45px] sm:rounded-[17px]">
            <div class="sm:w-[85vw] sm:h-[20vh] w-[85vw] h-[70vh] mt-12 lg:mt-20">
                <img src="https://picsum.photos/200/300" class="w-full h-full" />
            </div>
            <div class="w-[75vw] sm:w-[85vw] flex flex-col justify-center mx-auto pt-4 lg:pt-8">
                <div class="leader-board-desc relative text-2xl lg:font-bold sm:text-sm">
                    各組的代表物作為投票之標記物，觀展人獲得OK 蹦便條紙後，可將便條貼在自己喜歡組別的代表物上，於展覽期間， 票選出三組最佳人氣王。
                </div>
            </div>
            <div class="w-[70vw] sm:w-[70vw] flex flex-col justify-center text-xl mx-auto pb-[4vh]">
                <div class="time relative lg:flex my-4 lg:my-8 sm:text-sm">
                    <div class="font-bold">活動時間 :</div>
                    <div class="lg:mx-[1vw]">5/11~ 5/15</div>
                </div>
                <div class="location relative lg:flex sm:text-sm">
                    <div class="font-bold">活動地點 :</div>
                    <div class="lg:mx-[1vw]">松菸南向製菸廠</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@media (min-width:1024px) {
    .video-desc::before {
        content: "";
        position: absolute;
        top: 10%;
        left: -5%;
        width: 50px;
        height: 9px;
        border-radius: 14px;
        background-color: #00E4FF;
        transform: rotate(90deg);
    }

    .leader-board-desc::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -5%;
        width: 50px;
        height: 9px;
        border-radius: 14px;
        background-color: #00E4FF;
        transform: rotate(90deg);
    }
}

.video::before {
    content: "宣傳片";
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


.leader-board::before {
    content: "排行榜";
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

.time::before,
.location ::before {
    content: "";
    position: absolute;
    top: 10%;
    left: -4%;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    background-color: #00E4FF;
}

@media (max-width:480px) {

    .video::before,
    .leader-board::before {
        padding: 1vh 10vw;
        font-size: 1rem;
    }

    .time::before,
    .location ::before {
        width: 10px;
        height: 10px;
        left: -8%;
    }
}
</style>
