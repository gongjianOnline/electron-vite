<template>
  <h1>{{ msg }}</h1>
</template>

<script setup>
import { ref } from 'vue';
const {ipcRenderer} = require("electron")

ipcRenderer.send("xxx","this is xxx")

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
