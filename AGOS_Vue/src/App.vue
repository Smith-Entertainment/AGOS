
<script>
import PerfilObraInfo from './components/PerfilObraInfo.vue'
import Header from './components/Header.vue'
import PerfilObraNav from './components/PerfilObraNav.vue';
import CadastroObra from './components/CadastroObra.vue';
  export default {
   components: {
    Header,
    PerfilObraInfo,
    PerfilObraNav,
    CadastroObra
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
  <CadastroObra/>
  </main>
  
</div>
</template>

<style>

</style>
