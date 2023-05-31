<template>
    <div>
      <button class="btn btn-outline-secondary" @click="exibirPopup">Itens</button>
      <div class="overlay" v-if="exibir">
        <div id="popup" v-show="exibir" class="popup-container">
          <article>
            <h5>CADASTRO ITENS CRONOGRAMA</h5>
           <br>
          </article>
          <form class="popup-form">
            <div class="form-group">
              <label for="dataInicio">Nome:</label>
              <input type="tex" class="form-control" id="nome" v-model="nome">
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
  const url = 'http://localhost:8080/obra/item';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome: this.nome })
  };

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Erro ao cadastrar o nome');
      }
    })
    }
    }
};



</script>

<style scoped>
.form-group{
    display: flex;
    align-items: center;
    gap: 10px;
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
    height: 200px;
    background-color: #ffffff;
    border: 1px solid #8e8e8e;
    border-radius: 5px;
    padding: 20px;
  }


.popup-form {
  margin-bottom: 20px;
}
label{
    display: flex;
    align-items: center;
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
  