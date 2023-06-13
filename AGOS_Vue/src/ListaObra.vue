<script>
  import List from './components/List.vue'

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
          <input class="rounded rounded-4 ps-2 h-100 w-30" type="search" placeholder="Buscar...">
        </div>

        <div class="col align-bottom">
          <button class="border-0 bg-white"><span class="material-symbols-outlined">filter_alt</span></button>
          <a href="/cadastro-obra"><button class="rounded rounded-4 border-0 green-backgorund h-100 w-20">Adicionar</button></a>
        </div>
      </div>
    </div>
    <List />
  </main>
</template>

<style scoped>
.green-backgorund{
  background-color: #A5CF3A;
}
</style>
