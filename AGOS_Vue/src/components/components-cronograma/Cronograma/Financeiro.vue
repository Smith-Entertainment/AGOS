<template>
  <div>
    <button class="btn  btn-outline-secondary" @click="exibirPopup">&#128197;</button>
  




    
    <div id="popup" v-show="exibir" class="popup-container overlay">
      <form class="popup-form">
        <div class="form-group">
          <label for="dataInicio">Data de Início:</label>
          <input type="date" class="form-control" id="dataInicio" v-model="dataInicio">
          <label for="dataTermino">Data de Término:</label>
          <input type="date" class="form-control" id="dataTermino" v-model="dataTermino">
        </div>
        <div class="text-right">
          <button class="btn  btn-outline-secondary" @click.prevent="salvar">Salvar</button>
          <button class="btn  btn-outline-secondary" @click.prevent="fecharPopup">Fechar</button>
        </div>
      </form>
    </div>
  
  
  
  
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        exibir: false,
        dataInicio: '',
        dataTermino: ''
      };
    },
    methods: {
      exibirPopup() {
        this.exibir = true;
      },
      fecharPopup() {
        this.exibir = false;
      },
      salvar() {
        fetch('http://localhost:8080/api/obra/1', {
          method: 'GET'
        })
          .then(response => {
            if (!response.ok) {
              throw new Error('Erro na requisição. Código: ' + response.status);
            }
            return response.json();
          })
          .then(dadosObra => {
            dadosObra.dataInicio = this.dataInicio;
            dadosObra.dataTermino = this.dataTermino;
  
            fetch('http://localhost:8080/api/obra/1', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dadosObra)
            })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Erro na requisição. Código: ' + response.status);
                }
                return response.json();
              })
              .then(data => {
                console.log('Dados atualizados:', data);
                this.fecharPopup();
              })
              .catch(error => {
                console.error('Erro ao atualizar dados:', error);
              });
          })
          .catch(error => {
            console.error('Erro ao obter dados da obra:', error);
          });
      }
    }
  };
  </script>
  
  <style>
  #popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 250px;
    background-color: #ffffff;
    border: 1px solid #8e8e8e;
    border-radius: 5px;
    padding: 20px;
  }
  
  
  
  </style>
  