<template>
    <article>
      <h2>Cadastro de Obras</h2>
      <form>
        <div class="coluna">
          <input type="text" placeholder="Titulo" >
          <input type="text" placeholder="Bairro" >
          <input type="text" placeholder="Rua" >
          <input type="number" placeholder="Nº" >
       
            <input type="submit" value="Cadastrar" id="botao_cadastrar" >
      
        </div>
  
        <div class="coluna">
          <input type="text" placeholder="Objeto" >
          <input type="date" placeholder="Data do certame" >
          <input type="text" placeholder="Valor do edital" >
          <select name="tipoObra" >
            <option disabled selected>Tipo de obra</option>
            <option>Tipo 1</option>
            <option>Tipo 2</option>
            <option>Tipo 3</option>
            <option>Tipo 4</option>
            <input type="reset" value="Limpar" id="botao_limpar">
          </select>
          </div>
  
      </form>
    </article>
  </template>

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