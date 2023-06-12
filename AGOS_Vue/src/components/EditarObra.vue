<script>
export default {
  props: {
    obra: {}
  },
}
</script>


<template>
  <article>
    <h2>Editar Obra</h2>
    <form>
      <div class="coluna">
      <h2>{obra.objetivo}</h2>
        <input type="text" placeholder={{obra.titulo}} id="obratitulo">
        <input type="text" placeholder="Licitação" id="obralicitacao">
        <input type="text" placeholder="Bairro" id="obrabairro">
        <input type="text" placeholder="Rua" id="obrarua">
        <input type="number" placeholder="Nº" id="obranumero">
        <input type="button" value="Cadastrar" id="botao_cadastrar">
      </div>

      <div class="coluna">
        <input type="text" placeholder="Objetivo" id="obraobjetivo">
        <input type="text" placeholder="Data do certame" id="obracertame" onfocus="(this.type='date')" onblur="(this.type='text')">
        <input type="text" placeholder="Valor do edital" id="obravalorEdital">
        <select name="tipoObra" id="obratipoObra">
          <option disabled selected>Tipo de obra</option>
          <option>SAUDE</option>
          <option>INFRAESTRUTURA</option>
          <option>EDUCACAO</option>
        </select> 
        

        <input type="reset" value="Limpar" id="botao_limpar">
      </div>
    </form>
  </article>
</template>

  <style scoped>
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