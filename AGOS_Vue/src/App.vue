<<<<<<< HEAD
<script>
  import Header from './components/Header.vue'

  export default {
    components: {
      Header
  }
=======

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
>>>>>>> cae0fb151469fbd9637e9fb240fad8bc9e05424e
  }
</script>

<style scoped>

</style>
<template>
  
  <div>
  <header>
<<<<<<< HEAD
=======
    
>>>>>>> cae0fb151469fbd9637e9fb240fad8bc9e05424e
    <Header />
  </header>
  <div>
</div>
<<<<<<< HEAD

  <main>
  <router-view/>
  </main>
  
=======
  <main>
  <CadastroObra/>
  <router-link :to="{name: 'PerfilObra'}">PerfilObra</router-link> <br>
  <router-link :to="{name: 'ListaObra'}">ListaObra</router-link>
  </main>
  <router-view/>
>>>>>>> cae0fb151469fbd9637e9fb240fad8bc9e05424e

</div>
</template>

<<<<<<< HEAD
<style scoped>
=======
<style>
>>>>>>> cae0fb151469fbd9637e9fb240fad8bc9e05424e

</style>
