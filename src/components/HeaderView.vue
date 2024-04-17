<template>
  <header>
    <nav class="nav nav-pills">
      <div
          v-for="nav in navigations"
          :key="nav.name"
          class="nav-item">
        <RouterLink
            :to="nav.href"
            active-class="active"
            class="nav-link">
          <b>{{ nav.name }}</b>
        </RouterLink>
      </div>
    </nav>
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
          name: 'Movie',
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
  justify-content: center;
  display: flex;
}
</style>