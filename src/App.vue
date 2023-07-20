<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
  <Header/>
  <RouterView />
</template>

<style>
@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
