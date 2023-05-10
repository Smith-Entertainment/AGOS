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
  <div>
  <header>
    <Header />
  </header>
  <div>
</div>
  <main>
    <Lista />
  </main>
</div>
</template>

<style scoped>
</style>
