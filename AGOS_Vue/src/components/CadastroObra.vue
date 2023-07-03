<template>
  <article>
    <h2>Cadastro de Obras</h2>
    <form @submit.prevent="cadastrarObra">
      <div class="coluna">
        <input type="text" placeholder="Titulo" v-model="obra.titulo">
        <input type="text" placeholder="Bairro" v-model="obra.bairro">
        <input type="text" placeholder="Rua" v-model="obra.rua">
        <input type="number" placeholder="Nº" v-model="obra.numero">
        <input type="submit" value="Cadastrar" id="botao_cadastrar">
      </div>

      <div class="coluna">
        <input type="text" placeholder="Objeto" v-model="obra.objeto">
        <input type="date" placeholder="Data do certame" v-model="obra.dataCertame">
        <input type="text" placeholder="Valor do edital" v-model="obra.valorEdital">
        <select name="tipoObra" v-model="obra.tipoObra">
          <option disabled selected>Tipo de obra</option>
          <option>Tipo 1</option>
          <option>Tipo 2</option>
          <option>Tipo 3</option>
          <option>Tipo 4</option>
        </select>
        <input type="reset" value="Limpar" id="botao_limpar">
      </div>
    </form>
  </article>
</template>

<script>
export default {
data() {
  return {
    obra: {
      titulo: '',
      bairro: '',
      rua: '',
      numero: null,
      objeto: '',
      dataCertame: '',
      valorEdital: '',
      tipoObra: ''
    }
  };
},
methods: {
  cadastrarObra() {
    fetch('http://localhost:8080/api/obra', {
      method: 'POST',
      mode: 'no-cors', // Adicionando o modo no-cors
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.obra)
    })
      .then(() => {
        console.log('Cadastro realizado com sucesso!');
        // Resto do código de manipulação (se necessário)
      })
      .catch(error => {
        console.error('Erro ao cadastrar:', error);
        // Resto do código de manipulação de erro
      });
  }
}
}


</script>
  <style>
  h2 {
    text-align: center;
    font-size: 36px;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: row;
    
  }

  input {
    width: 256px;
    height: 52px;
    background-color: #F1F1F1;
    border-style: none;
    padding-left: 5%;
    border-radius: 5px;
  }
  select {
    width: 256px;
    height: 52px;
    background-color: #F1F1F1;
    border-style: none;
    padding-left: 5%;
    border-radius: 5px;
  }

  .coluna {
    display: flex;
    flex-flow: column;
    gap: 10px;
    padding-left: 10px;
  }

  #botao_cadastrar {
    width: 149px;
    height: 56px;
    background-color: #A5CF3A;
    border-style: none;
    align-self: center;
    font-size: 24px;
  }

  #botao_limpar {
    width: 149px;
    height: 56px;
    align-self: center;
    background-color: white;
    border: 3px solid #A5CF3A;
    font-size: 24px;
  }
</style>