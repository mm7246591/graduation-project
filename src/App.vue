<script setup lang="ts">
import { RouterView } from "vue-router";
import Loading from "./components/loading.vue";
import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
</script>

<template>
  <Loading />
  <Header />
  <div class="h-[90vh] overflow-y-auto">
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
