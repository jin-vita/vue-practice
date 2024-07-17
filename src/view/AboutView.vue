<template>
  <h1>About View</h1>

  <div>
    <v-btn @click="goToHome">go home</v-btn>
  </div>
</template>

<script setup>

// '정보 화면으로' 버튼 클릭 시
import router from "../router/index.js";

const goToHome = () => {
  router.replace({ path: '/' })
}
</script>

<style scoped>

</style>