<template>
    <div>
      <button class="btn btn-outline-secondary" @click="exibirPopup">PERIODO</button>
      <div class="overlay" v-if="exibir">
        <div id="popup" v-show="exibir" class="popup-container">
          <article>
            <h5>PERIODO DO</h5>
            <h6>CRONOGRAMA</h6>
          </article>
          <form class="popup-form">
            <div class="form-group">
              <label for="dataInicio">Data de Início:</label>
              <input type="date" class="form-control" id="dataInicio" v-model="dataInicio">
              <label for ="dataTermino">Data de Término:</label>
              <input type="date" class="form-control" id="dataTermino" v-model="dataTermino">
            </div>
            <div class="text-center">
              <button class="btn btn-outline-secondary edt" @click.prevent="salvar">Salvar</button>
              <button class="btn btn-outline-secondary edt" @click.prevent="fecharPopup">Fechar</button>
            </div>
          </form>
        </div>
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
                  this.fecharPopup();
                });
            })
            .catch(error => {
              console.error('Erro ao obter dados da obra:', error);
              this.fecharPopup();
            });
        }
      }
    };
    </script>
    
    <style scoped>
    .btn{
    width:150px;

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
    article{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    #popup {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px; 
      height: 300px;
      background-color: #ffffff;
      border: 1px solid #8e8e8e;
      border-radius: 5px;
      padding: 20px;
    }
  
  
  .popup-form {
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input[type="date"] {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .text-center button{
    border-color: #8bbf32;
    color: black;
  } 
  .text-center button:hover{
    background-color: #8bbf32;
    color: #fff;
  } 
  .text-center :nth-child(2){
    margin: 10px;
    border-color: #ff0000;
    color: black;
  }
  .text-center :nth-child(2):hover{
    background-color: #bd3939;
    color: #fff;
  }
  
    </style>
    