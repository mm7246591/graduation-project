<script setup lang="ts">

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useSettingState } from "@/utils/hook/useSetting";

const { getSettingLoading } = useSettingState();

</script>
<template>
    <div>
        <Loading v-model:active="getSettingLoading" :can-cancel="false" :is-full-page="true" />
    </div>
</template>

<style scoped>

</style>
