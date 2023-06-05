<template>
  <div>
    <table class="table table-bordered">
      <thead>
  <tr >
    <th></th> 

    <th v-for="periodo in periodos" :key="periodo.id" colspan="2" class="text-center">
      {{ periodo.mes }} {{ periodo.ano }}
    </th>
  </tr>
  <tr>
    <th rowspan="2" class="center"><Cronograma/><Periodo/></th>
    <th v-for="periodo in periodos" :key="periodo.id" class="text-center">
      Previsto
    </th>
    <th v-for="periodo in periodos" :key="periodo.id" class="text-center">
       Realizado
    </th>
  </tr>
</thead>
      <tbody>
        <tr v-for="item in groupedCronogramas" :key="item.nome">
          <td class="center">{{ item.nome }}</td>
          <td v-for="periodo in periodos" :key="periodo.id" class="text-center">
            <span v-if="item.cronogramas[periodo.id]">{{ item.cronogramas[periodo.id].previstoFinanceiro }}</span>
          </td>
          <td v-for="periodo in periodos" :key="periodo.id" class="text-center">
            <span v-if="item.cronogramas[periodo.id]">{{ item.cronogramas[periodo.id].realizadoFinanceiro }}</span>
          </td>
        </tr>
      </tbody>
    </table>
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
      cronogramas: []
    };
  },
  created() {
    this.fetchPeriodos();
    this.fetchCronograma();
  },
  computed: {
    groupedCronogramas() {
      const grouped = {};
      for (const cronograma of this.cronogramas) {
        if (!grouped[cronograma.item.nome]) {
          grouped[cronograma.item.nome] = {
            nome: cronograma.item.nome,
            cronogramas: {}
          };
        }
        grouped[cronograma.item.nome].cronogramas[cronograma.periodo.id] = cronograma;
      }
      return Object.values(grouped);
    }
  },
  methods: {
    async fetchCronograma() {
      try {
        const response = await axios.get('http://localhost:8080/obra/cronograma/List-cronogrma-obra:1');
        this.cronogramas = response.data;
      } catch (error) {
        console.error(error);
      }
    },
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

<style scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
th{
    padding-left:50px ;
}
</style>
