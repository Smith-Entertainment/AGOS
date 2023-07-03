<<<<<<< HEAD
<script>
import PerfilObraInfo from './components/PerfilObraInfo.vue'
import PerfilObraNav from './components/PerfilObraNav.vue';

export default {
  data() {
    return {
      id: this.$route.params.id,
      obra: {}
    }
  },
  created() {
    fetch(`http://localhost:8080/api/obra/${this.id}`)
      .then(response => { response.json().then(data => { this.obra = data }) })
      .catch(error => { console.log(error) })
  },
  components: {
    PerfilObraInfo,
    PerfilObraNav,

  }
}
</script>

<template>
  <main>
    <PerfilObraInfo  :obra="this.obra"/>
    <PerfilObraNav />
  </main>
</template>

<style scoped></style>
=======
<template>
    <div>
<Header/>
    </div>
    <main><PerfilObraInfo/><PerfilObraNav/></main>
 
</template>

<script>

  import PerfilObraInfo from './components/PerfilObraInfo.vue'
  import Header from './components/Header.vue'
  import PerfilObraNav from './components/PerfilObraNav.vue';
    export default {
     components: {
        Header,
        PerfilObraInfo,
        PerfilObraNav
    }
    }
</script>

<style scoped>

</style>
>>>>>>> cae0fb151469fbd9637e9fb240fad8bc9e05424e
