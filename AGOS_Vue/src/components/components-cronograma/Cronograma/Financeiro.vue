
<template>
  <div>

  <Item/>
  <Data/>
  <table>
  <tr>
    <th>Período</th>
  </tr>
  <tr>
    <td v-for="periodo in periodos" :key="periodo.id" class="periodo-cell">
      {{ periodo.nomeMes }} {{ periodo.ano }}
    </td>
  </tr>
</table>

  </div>
  </template>
  
  <script>
  import Data from "./cadastro-inicio-termino.vue"
  import Item from './cadastro-item.vue'

export default {
    components: {
      Item,
      Data
    
    },
    data() {
  return {
    periodos: [] 
  }
},
mounted() {
  this.buscarPeriodos();
},

methods: {
  buscarPeriodos() {
    const url = 'http://localhost:8080/obra/periodo/lista';

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Erro ao buscar os períodos');
        }
      })
      .then(data => {
        this.periodos = data; // Armazena os períodos na variável
      })
      .catch(error => {
        alert('Erro ao buscar os períodos: ' + error.message);
      });
  }
},

    }
    
  </script>
  
  <style scoped>
.periodo-cell {
  display: inline-block;
  margin-right: 10px; /* Espaçamento entre as células */
}
</style>