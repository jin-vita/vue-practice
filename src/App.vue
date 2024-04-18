<template>
  <HeaderView />
  <div id="wrapper">
    <RouterView />
  </div>
  <FooterView />
</template>

<script>
import HeaderView from "./components/Header.vue";
import FooterView from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderView,
    FooterView,
  },
}
</script>

<style scoped>
#wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
