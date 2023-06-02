<template>
  <div>
    <table class="table styled-table">
      <tr>
        <td><Data/></td>
        <td v-for="periodo in periodos" :key="periodo.id" class="periodo-cell">
          <div class="centered">{{ periodo.nomeMes }} {{ periodo.ano }}</div>
          <th>Previsto</th>
          <th>Realizado</th>
        </td>
      </tr>
      <tr>
        <td><Item/></td>
      </tr>
      <tr v-for="item in items" :key="item.id" class="item-cell">
        <td class="centered">{{ item.nome }} </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Data from "./cadastro-inicio-termino.vue";
import Item from './cadastro-item.vue';

export default {
  components: {
    Item,
    Data
  },
  data() {
    return {
      periodos: [],
      items: [],
    };
  },
  mounted() {
    this.buscarPeriodos();
    this.buscarItems();
  },
  methods: {
    buscarPeriodos() {
      const url = 'http://localhost:8080/obra/periodo/lista';

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.periodos = data;
        })
        .catch(error => {
          console.error('Erro ao buscar os períodos da obra:', error);
        });
    },
    buscarItems() {
      const url = 'http://localhost:8080/obra/item/lista';
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.items = data;
        })
        .catch(error => {
          console.error('Erro ao buscar os itens da obra:', error);
        });
    },
    atualizarDadosPeriodicamente() {
      setInterval(() => {
        this.buscarPeriodos();
        this.buscarItems();
      }, 5000); // Define um intervalo de 5 segundos para atualizar os dados (ajuste conforme necessário)
    },
  },
};
</script>

<style scoped>
.styled-table {
  margin: 25px 0;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-collapse: collapse;
  border-radius: 8px;
}

.styled-table th,
.styled-table td {
  padding: 10px;
}

.styled-table th {
  background-color: #f8f9fa;
  font-weight: bold;
}

.periodo-cell {
  display: inline-block;
  justify-content: center;
  margin-right: 10px;
  position: relative;
}

.periodo-cell .centered {
  display: flex;
  justify-content: center;
}

.item-cell td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.item-cell td:last-child {
  border-bottom: none;
}

.item-cell td:first-child {
  font-weight: bold;
  text-align: center;
}

.centered {
  text-align: center;
}

</style>
