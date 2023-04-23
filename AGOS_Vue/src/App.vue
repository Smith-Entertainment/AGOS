<script>
  import Lista from './components/Lista.vue'
  import Header from './components/Header.vue'

  export default {
    components: {
      Lista,
      Header
    }
  }
</script>

<template>
  <header>
    <Header />
  </header>

  <main>
    <Lista />
  </main>
</template>

<style scoped>
</style>
