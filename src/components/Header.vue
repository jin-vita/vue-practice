<template>
  <header>
    <ul class="nav nav-pills justify-content-center">
      <li
          v-for="nav in navigations"
          :key="nav.name"
          class="nav-item">
        <RouterLink
            :to="nav.href"
            active-class="active"
            class="nav-link">
          <b>{{ nav.name }}</b>
        </RouterLink>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {
      navigations: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Game',
          href: '/movie'
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  padding: 0.5rem;
  top: 0;
  width: 100%;
  background-color: black;
  opacity: 0.8;
  z-index: 999;
  justify-content: space-between;
}
</style>