<template>
  <div>
    <p class="center">DESCRIÇAO<button class="btn" @click="exibirPopup">+</button></p>
    <div class="overlay" v-if="exibir">
      <div id="popup" v-show="exibir" class="popup-container">
        <div id="popup" v-show="exibir" class="popup-container">
          <legend class="center">NOVO ITEM</legend>
          <form class="popup-form" @submit.prevent="cadastrarItem">
            <div class="form-group">
              <label>NOME:</label>
              <input class="form-control" type="text" v-model="nomeItem" required />
            </div>
            <div class="text-center">
              <button class="btn btn-outline-secondary edt" type="submit">Cadastro</button>
              <button class="btn btn-outline-secondary edt" @click.prevent="fecharPopup">Fechar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";

export default {
  data() {
    return {
      exibir: false,
      periodos: [],
      nomeItem: "",
    };
  },
  created() {
    this.fetchPeriodos();
  },
  methods: {
    exibirPopup() {
      this.exibir = true;
    },
    fecharPopup() {
      this.exibir = false;
    },
    async fetchPeriodos() {
      try {
        const response = await axios.get(
          "http://localhost:8080/obra/periodo/lista-obra:1"
        );
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
        await axios.post("http://localhost:8080/obra/item", item);

        const response = await axios.get(
          `http://localhost:8080/obra/item/nome:${this.nomeItem}`
        );
        const itemId = response.data.id;

        for (const periodo of this.periodos) {
          const cronograma = {
            periodo: { id: periodo.id },
            item: { id: itemId },
            previstoFinanceiro: 0,
            previstoFisico: 0,
            realizadoFinanceiro: 0,
            realizadoFisico: 0,
            valorContrato: 0,
          };
          await axios.post("http://localhost:8080/obra/cronograma", cronograma);
        }
        this.nomeItem = "";
        this.error = "";
      } catch (error) {
        console.error("Erro ao cadastrar o item:", error);
        this.error =
          "Erro ao cadastrar o item. Por favor, tente novamente mais tarde.";
      }
    },
  },
};
</script>
  

  <style scoped>
  .center{
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }
.form-group {
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
article {
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
.btn {
  width: 40px;
}

.popup-form {
  margin-bottom: 20px;
}
label {
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
.text-center button {
  border-color: #8bbf32;
  color: black;
  width: 150px;

}
.text-center button:hover {
  background-color: #8bbf32;
  color: #fff;
}
.text-center :nth-child(2) {
  margin: 10px;
  border-color: #ff0000;
  color: black;
  width: 150px;

}
.text-center :nth-child(2):hover {
  background-color: #bd3939;
  color: #fff;

}
</style>