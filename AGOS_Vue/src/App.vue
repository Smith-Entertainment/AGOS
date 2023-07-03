
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
  <router-link :to="{name: 'PerfilObra'}">PerfilObra</router-link> <br>
  <router-link :to="{name: 'ListaObra'}">ListaObra</router-link>
  </main>
  <router-view/>

</div>
</template>

<style>

</style>
