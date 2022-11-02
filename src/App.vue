<script setup lang="ts">
// import demoCss from "./assets/styles/demo.module.scss"
// console.log(demoCss)
// document.querySelector('h1')?.className = demoCss.red

import logo from "./assets/images/vue.png"
import logoUrl from "./assets/images/vue.png?url"
import logoRaw from "./assets/images/vue.png?raw"
import logoWorker from "./assets/images/vue.png?worker"
import logoWorker_inline from "./assets/images/vue.png?worker&inline"
const assets = {
  logo,
  logoUrl,
  logoRaw,
  logoWorker,
  logoWorker_inline
}
console.log(new URL(`./?adfab=adafsd`, import.meta.url))
const imageDir = import.meta.glob('/src/assets/images/**')
const getImageUrl = import.meta.glob('/src/utils/load.ts', { import: 'getImageUrl', eager: true })
console.log(imageDir, getImageUrl)
const list = Object.keys(imageDir)
</script>

<template>
  <h1>hello vue3 + vite3...</h1>
  <img v-for="(item, index) in list" :key="index" :src="item" alt="">
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
