<template>
  <article>
    <h2>Cadastro de Obras</h2>
    <br />
    <br />
    <form class="form-container">
      <div class="coluna">
        <input type="text" placeholder="Titulo" v-model="obra.titulo" />
        <input type="text" placeholder="Licitação" v-model="obra.licitacao" />
        <input type="text" placeholder="Bairro" v-model="obra.bairro" />
        <input type="text" placeholder="Rua" v-model="obra.rua" />
        <div class="center">
          <input type="number" placeholder="Nº" v-model="obra.numero" />
        </div>
        <input type="button" value="Cadastrar" @click="cadastrarObra" />
      </div>

      <div class="coluna">
        <input type="text" placeholder="Objetivo" v-model="obra.objetivo" />
        <input
          type="date"
          placeholder="Data do certame"
          v-model="obra.dataCertame"
        />
        <input
          type="text"
          placeholder="Valor do edital"
          v-model="obra.valorEdital"
        />
        <select name="tipoObra" v-model="obra.tipoObra">
          <option disabled selected>Tipo de obra</option>
          <option>SAUDE</option>
          <option>INFRAESTRUTURA</option>
          <option>EDUCACAO</option>
        </select>
        <p style="margin-top: 36px"></p>
        <input type="reset" value="Limpar" @click="limparFormulario" />
      </div>
    </form>
  </article>
</template>

<script>
export default {
  data() {
    return {
      obra: {
        titulo: "",
        licitacao: "",
        bairro: "",
        rua: "",
        numero: "",
        objetivo: "",
        dataCertame: "",
        valorEdital: "",
        tipoObra: "",
      },
    };
  },
  methods: {
    cadastrarObra() {
      fetch("http://localhost:8080/api/obra", {
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(this.obra),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // Redirecionar para a página da obra cadastrada
          this.$router.push(`/obra/${data.id}`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    limparFormulario() {
      this.obra = {
        titulo: "",
        licitacao: "",
        bairro: "",
        rua: "",
        numero: "",
        objetivo: "",
        dataCertame: "",
        valorEdital: "",
        tipoObra: "",
      };
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: 36px;
}

.form-container {
  display: flex;
  justify-content: center;
}
h2 {
  text-align: center;
  font-size: 36px;
}

form {
  display: flex;
  justify-content: center;
  flex-direction: row;
}

input,
select {
  width: 256px;
  height: 52px;
  background-color: #f1f1f1;
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

input[type="button"] {
  width: 149px;
  height: 56px;
  background-color: #a5cf3a;
  border-style: none;
  align-self: center;
  font-size: 24px;
}

input[type="reset"] {
  width: 149px;
  height: 56px;
  align-self: center;
  background-color: white;
  border: 3px solid #a5cf3a;
  font-size: 24px;
}
</style>
