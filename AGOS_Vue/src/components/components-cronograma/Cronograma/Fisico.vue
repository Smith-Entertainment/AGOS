<template>
    <div :class="{ blur: show }">
      <div class="d-flex justify-content-center align-items-center My-table">
        <table class="styled-table">
          <thead>
            <tr>
              <th rowspan="2">Descrição <button @click="showPopup">+</button></th>
              <th rowspan="1">Previsto</th>
              <th rowspan="1">Realizado</th>
              <th rowspan="1">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>
                <input type="text" v-model="item.descricao" :disabled="item.editando" />
              </td>
              <td>
                <input type="number" v-model="item.previsto" :disabled="item.editando" />
              </td>
              <td>
                <input type="number" v-model="item.realizado" :disabled="item.editando" />
              </td>
              <td>
                <div v-if="item.editando">
                  <button @click="salvarEdicao(index)">Salvar</button>
                  <button @click="cancelarEdicao(index)">Cancelar</button>
                </div>
                <div v-else>
                  <button @click="editarItem(index)">Editar</button>
                  <button @click="removerItem(index)">Remover</button>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total:</td>
              <td>{{ previstoTotal }}</td>
              <td>{{ realizadoTotal }}</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
      </div>
  
      <div class="overlay" v-if="show">
        <div class="popup">
          <h2>Adicionar item</h2>
          <div class="form-group">
            <label for="descricao">Descrição:</label>
            <input type="text" v-model="novoItem.descricao" placeholder="Nome do item" />
          </div>
          <div class="form-group">
            <label for="previsto">Previsto:</label>
            <input type="number" v-model="novoItem.previsto" placeholder="Valor previsto" />
          </div>
          <div class="form-group">
            <label for="realizado">Realizado:</label>
            <input type="number" v-model="novoItem.realizado" placeholder="Valor realizado" />
          </div>
          <button @click="adicionarItem">Adicionar</button>
          <button @click="cancelarAdicao">Cancelar</button>
        </div>
      </div>
    </div>
  </template>
<script>

export default {
data() {
return {
show: false,
novoItem: {
descricao: "",
previsto: 0,
realizado: 0,
editing: false,
},
items: [
{ descricao: "Item 1", previsto: 100, realizado: 80, editing: false },
{ descricao: "Item 2", previsto: 200, realizado: 180, editing: false },
{ descricao: "Item 3", previsto: 300, realizado: 250, editing: false },
],
};
},
methods: {
showPopup() {
this.show = true;
},
adicionarItem() {
if (this.novoItem.descricao !== "" && this.novoItem.previsto !== "" && this.novoItem.realizado !== "") {
this.items.push({ ...this.novoItem, editing: false });
this.novoItem.descricao = "";
this.novoItem.previsto = 0;
this.novoItem.realizado = 0;
this.show = false;
}
},
cancelarAdicao() {
this.novoItem.descricao = "";
this.novoItem.previsto = 0;
this.novoItem.realizado = 0;
this.show = false;
},
editarItem(index) {
this.items[index].editing = true;
},
salvarEdicao(index) {
this.items[index].editing = false;
},
cancelarEdicao(index) {
this.items[index].editing = false;
},
removerItem(index) {
this.items.splice(index, 1);
},
},
computed: {
previstoTotal() {
return this.items.reduce((total, item) => total + item.previsto, 0);
},
realizadoTotal() {
return this.items.reduce((total, item) => total + item.realizado, 0);
},
},
};
</script>

<style scoped>
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  background-color: #fff;
}
.overlay button{
    margin-right: 25px;
}
.styled-table thead tr {
  background-color: #a5cf3a;
  color: #fff;
  text-align: left;
}

.styled-table th {
  padding: 12px 15px;
}

.styled-table td {
  padding: 12px 15px;
}

.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #a5cf3a;
}

.styled-table tbody input[type="text"],
.styled-table tbody input[type="number"] {
  border: none;
  padding: 6px;
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 3px;
}

.styled-table tfoot td {
  font-weight: bold;
}

.styled-table tfoot td:first-of-type {
  text-align: right;
}

.styled-table tfoot td:not(:first-of-type) {
  text-align: center;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background-color: #fff;
  width: 500px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.popup h2 {
  margin-top: 0;
}

.form-group {
  margin-bottom: 10px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input[type="text"],
.form-group input[type="number"] {
  border: none;
  padding: 6px;
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 3px;
}

.form-group input[type="number"]::-webkit-outer-spin-button,
.form-group input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.form-group input[type="number"] {
  -moz-appearance: textfield;
}

button {
  border: none;
  padding: 10px 15px;
  margin: 0 5px;
  border-radius: 3px;
  font-weight: bold;
  color: #fff;
  background-color: #a5cf3a;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #8bbf32;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #a5cf3a;
}
</style>