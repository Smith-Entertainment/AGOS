<template>
  <div>
    <form>
      <label for="dataInicio">Data de Início:</label>
      <input type="date" id="dataInicio" v-model="dataInicio"><br><br>
      <label for="dataTermino">Data de Término:</label>
      <input type="date" id="dataTermino" v-model="dataTermino"><br><br>
      <button type="button" @click="criarTabela">Criar Tabela</button>
    </form>

    <div v-html="tabelaMeses"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataInicio: '',
      dataTermino: '',
      tabelaMeses: '',
    };
  },
  methods: {
    criarTabela() {
      const dataInicio = new Date(this.dataInicio);
      const dataTermino = new Date(this.dataTermino);

      if (dataInicio > dataTermino) {
        alert('A data de início deve ser anterior à data de término.');
        return;
      }

      let tabela = '<table>';
      tabela += '<tr><th>Mês</th><th>Ano</th></tr>';

      while (dataInicio <= dataTermino) {
        const mes = dataInicio.toLocaleString('default', { month: 'long' });
        const ano = dataInicio.getFullYear();

        tabela += `<tr><td>${mes}</td><td>${ano}</td></tr>`;

        dataInicio.setMonth(dataInicio.getMonth() + 1);
      }

      tabela += '</table>';

      this.tabelaMeses = tabela;

      const periodos = [];

      dataInicio.setTime(new Date(this.dataInicio).getTime()); // Reinicia a data de início

      while (dataInicio <= dataTermino) {
        const mes = dataInicio.toLocaleString('default', { month: 'long' });
        const ano = dataInicio.getFullYear();

        periodos.push({ nomeMes: mes, ano });

        dataInicio.setMonth(dataInicio.getMonth() + 1);
      }

      fetch("http://localhost:8080/obra/periodo/batch", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(periodos),
      })
        .then((response) => {
          if (response.ok) {
            alert('Meses e anos salvos no banco de dados.');
          } else {
            alert('Erro ao salvar meses e anos no banco de dados.');
          }
        })
        .catch((error) => {
          alert('Erro ao comunicar com a API: ' + error);
        });
    },
  },
};
</script>
