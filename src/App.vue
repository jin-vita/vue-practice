<script>
import HeaderView from "./components/HeaderView.vue";
import FooterView from "./components/FooterView.vue";

export default {
  components: {
    HeaderView,
    FooterView,
  },
}
</script>

<template>
  <HeaderView />
  <div id="wrapper">
    <RouterView />
  </div>
  <FooterView />
</template>

<style scoped>
#wrapper {
}
</style>
