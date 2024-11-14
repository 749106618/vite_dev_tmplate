<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
@import 'normalize.css';
#app {
  /** 字体抗锯齿，让字体看起来更清晰 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #2c3e50;
}
</style>
