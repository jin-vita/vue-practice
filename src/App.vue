<template>
  <HeaderView />
  <div id="wrapper">
    <RouterView />
  </div>
  <FooterView />
</template>

<script setup>
import HeaderView from "./components/Header.vue";
import FooterView from "./components/Footer.vue";
</script>

<style scoped>
#wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
