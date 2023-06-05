
<script>


export default{
mounted() {
  
  const cadastrarBtn = document.getElementById("botao_cadastrar");
      cadastrarBtn.addEventListener("click", this.cadastrarObra);
  },
methods: {
 cadastrarObra(event) {
  event.preventDefault();
  const ititulo = document.querySelector("#obratitulo");
  const ibairro = document.querySelector("#obrabairro");
  const ilicitacao = document.querySelector("#obralicitacao");
  const irua = document.querySelector("#obrarua");
  const inumero = document.querySelector("#obranumero");
  const iobjetivo = document.querySelector("#obraobjetivo");
  const idatac = document.querySelector("#obracertame");
  const ivaloredital = document.querySelector("#obravalorEdital");
  const itipoobra = document.querySelector("#obratipoObra");
  const iimagem = '../assets/img/sem_foto.png';

  console.log(ititulo.value);
  console.log(ibairro.value);
  console.log(irua.value);
  console.log(inumero.value);
  console.log(iobjetivo.value);
  console.log(idatac.value);
  console.log(ivaloredital.value);
  console.log(itipoobra.value);
  console.log(iimagem);
  fetch("http://localhost:8080/api/obra", {
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
      
      "titulo": ititulo.value,
        "objetivo": iobjetivo.value,
        "dataCertame": idatac.value,
        "valorEdital": ivaloredital.value,
        "bairro": ibairro.value,
        "licitacao": ilicitacao.value,
        "rua": irua.value,
        "numero": inumero.value,
        "tipoObra": itipoobra.value,
        "imagem": iimagem.value
    }) 
  })
  .then(function(res) {
    console.log(res);
    const obraId = res.data.id;
    self.$router.push(`/obra/${obraId}`);
})

  .catch(function(res) {
    console.log(res);
  })
}}
};


</script>

<template>
  <article>
    <h2>Cadastro de Obras</h2>
    <form>
      <div class="coluna">
        <input type="text" placeholder="Titulo" id="obratitulo">
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