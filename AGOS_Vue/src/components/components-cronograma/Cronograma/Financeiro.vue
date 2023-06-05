<template>
  <div>
    <Periodo/>
    <table>
      <thead>
        <tr>
          <th rowspan="2">Itens</th>
          <th v-for="periodo in periodos" :key="periodo.id" colspan="2">
            {{ periodo.mes }} {{ periodo.ano }}
          </th>
        </tr>
        <tr>
          <th v-for="periodo in periodos" :key="periodo.id">Previsto</th>
          <th v-for="periodo in periodos" :key="periodo.id">Realizado</th>
        </tr>
      </thead>
    </table>
    <Cronograma/>

  </div>
</template>

<script>
import axios from 'axios';
import Periodo from './cadastro-inicio-termino.vue';
import Cronograma from './cadastro-cronograma.vue';

export default {
  components: {
    Periodo,
    Cronograma
  },
  data() {
    return {
      periodos: [],
      cronograma: []
    };
  },
  created() {
    this.fetchPeriodos();
  },
  methods: {
    async fetchPeriodos() {
      try {
        const response = await axios.get('http://localhost:8080/obra/periodo/lista-obra:1');
        this.periodos = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
