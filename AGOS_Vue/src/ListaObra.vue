<template>
  <div>
    <header></header>

    <div class="container mt-4">
      <div class="row">
        <div class="col">
          <input class="rounded" type="search" placeholder="Buscar..." />
        </div>

        <div class="col">
          <span class="material-symbols-outlined">filter_alt</span>
          <a href="/cadastro-obra">
            <button class="rounded">Adicionar</button>
          </a>
        </div>
      </div>
    </div>

    <List />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import List from "./components/List.vue";

export default {
  components: {
    Header,
    List,
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

input.rounded,
button.rounded {
  border-radius: 20px;
}

.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
}
</style>
