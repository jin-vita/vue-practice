<template>
  <HeaderView />
  <div id="wrapper">
    <RouterView />
  </div>
  <FooterView />
</template>

<script>
import HeaderView from "./components/HeaderView.vue";
import FooterView from "./components/FooterView.vue";

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
