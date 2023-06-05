<template>
    <div>
      <form @submit.prevent="cadastrarItem">
        <label>Nome do Item</label>
        <input type="text" v-model="nomeItem" required>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        periodos: [],
        nomeItem: '',
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
      async cadastrarItem() {
        try {
          const item = {
            nome: this.nomeItem,
          };
  
          const itemResponse = await axios.post('http://localhost:8080/obra/cronograma', item);
          const itemId = itemResponse.data.id; 
          for (const periodo of this.periodos) {
            const cronograma = {
              periodo: periodo,
              item: itemId,
              previstoFinanceiro: 0.00,
              previstoFisico: 0.00,
              realizadoFinanceiro: 0.00,
              realizadoFisico: 0.00,
              valorContrato: 0.00
            };
            
            await axios.post('http://localhost:8080/obra/cronograma', cronograma);
          }
          
          this.nomeItem = '';
        } catch (error) {
          console.error(error);
        }
      },
    },
  };
  </script>
  