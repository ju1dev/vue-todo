<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<template>
  <HeaderComponent />
  <div>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
