<template>
  <div class="center">
    <Periodo />
    <table class="styled-table">
      <thead>
        <tr>
          <th></th>
          <th
            v-for="periodo in periodos"
            :key="periodo.id"
            colspan="2"
            class="text-center"
          >
            {{ periodo.mes }} {{ periodo.ano }}
          </th>
        </tr>
        <tr>
          <th rowspan="2" class="center"><Cronograma /></th>
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
            <span v-if="item.cronogramas[periodo.id]">
              <button
                class="form-control"
                @click="
                  editCronograma(
                    item.cronogramas[periodo.id],
                    'previstoFinanceiro'
                  )
                "
              >
                {{ item.cronogramas[periodo.id].previstoFinanceiro }}
              </button>
            </span>
          </td>
          <td v-for="periodo in periodos" :key="periodo.id" class="text-center">
            <span v-if="item.cronogramas[periodo.id]">
              <button
                class="form-control"
                @click="
                  editCronograma(
                    item.cronogramas[periodo.id],
                    'realizadoFinanceiro'
                  )
                "
              >
                {{ item.cronogramas[periodo.id].realizadoFinanceiro }}
              </button>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
        <div style="height: 250px;"></div>    

  </div>
</template>

<script>
import axios from "axios";
import Periodo from "./cadastro-inicio-termino.vue";
import Cronograma from "./cadastro-cronograma.vue";

export default {
  components: {
    Periodo,
    Cronograma,
  },
  data() {
    return {
      periodos: [],
      cronogramas: [],
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
            cronogramas: {},
          };
        }
        grouped[cronograma.item.nome].cronogramas[cronograma.periodo.id] =
          cronograma;
      }
      return Object.values(grouped);
    },
  },
  methods: {
    async fetchCronograma() {
      try {
        const url = window.location.href; 
        const idObra = url.substring(url.lastIndexOf("/") + 1);

        const response = await axios.get(
          `http://localhost:8080/obra/cronograma/List-cronogrma-obra:${idObra}`
        );
        this.cronogramas = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchPeriodos() {
      try {
        const url = window.location.href; 
        const idObra = url.substring(url.lastIndexOf("/") + 1);
        const response = await axios.get(
          `http://localhost:8080/obra/periodo/lista-obra:${idObra}`
        );
        this.periodos = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    editCronograma(cronograma, propriedade) {
      const novoValor = prompt("Digite o novo valor:");
      if (novoValor !== null) {
        cronograma[propriedade] = novoValor;
        this.updateCronograma(cronograma.id, cronograma);
      }
    },

    async updateCronograma(id, cronograma) {
      try {
        const response = await axios.put(
          `http://localhost:8080/obra/cronograma/${id}`,
          cronograma
        );
        console.log("Cronograma atualizado:", response.data);
      } catch (error) {
        console.error("Erro ao atualizar o cronograma:", error);
      }
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

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column ;

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

button:hover {
  background-color: #cecece;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #c7c7c7;
}
</style>