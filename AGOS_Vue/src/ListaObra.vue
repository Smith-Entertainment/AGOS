<script>
  import List from './components/Lista.vue'

  export default {
    components: {
      List
    }
  }
</script>

<template>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <header>
  </header>

  <main>
    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <input class="rounded" type="search" placeholder="Buscar...">
        </div>

        <div class="col justify-content-center">
          <span class="material-symbols-outlined">filter_alt</span>
          <a href="#"><button class="rounded">Adicionar</button></a>
        </div>
      </div>
    </div>
    <List />
  </main>
</template>

<style>
</style>