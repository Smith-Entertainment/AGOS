<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      Header
  }
  }
</script>

<style scoped>

</style>
<template>
  
  <div>
  <header>
    <Header />
  </header>
  <div>
</div>

  <main>
  <router-view/>
  </main>
  

</div>
</template>

<style scoped>

</style>
