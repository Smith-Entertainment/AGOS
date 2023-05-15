<template>
    <div>
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