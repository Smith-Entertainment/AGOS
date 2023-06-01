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
    PerfilObraNav
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