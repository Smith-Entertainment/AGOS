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
  <router-link :to="{name: 'CadastroObra'}">CadastroObra</router-link> <br>
  <router-link :to="{name: 'PerfilObra'}">PerfilObra</router-link> <br>
  <router-link :to="{name: 'ListaObra'}">ListaObra</router-link>

  <router-view/>
  </main>
  

</div>
</template>

<style scoped>

</style>
