<script>
export default {
  props: {
    obra: {},
  },
};
</script>

<template>
  <div>
    <section>
      <div class="conteudo" id="conteudo">
        <div class="img">
          <img class="obra" src="../assets/img/sem_foto.png" alt="Foto Obra" />
        </div>
        <section class="desc">
          <div>
            <h2>{{ obra.titulo }}</h2>
            <br />
            <div class="flex">
              <section>
                <div class="banker">
                  <label> <h4>Objetivo:</h4></label>
                  <h5>{{ obra.objetivo }}</h5>
                </div>
                <div class="banker">
                  <label><h4>Endereço:</h4></label>
                  <h5>{{ obra.rua }} {{ obra.numero }}, {{ obra.bairro }}</h5>
                </div>
                <div class="banker">
                  <label><h4>Data do certame:</h4></label>
                  <h5>{{ obra.dataCertame }}</h5>
                </div>
                <div class="banker">
                  <label><h4>Licitação:</h4></label>
                  <h5>{{ obra.licitacao }}</h5>
                </div>
                <div class="banker">
                  <label><h4>Valor do edital:</h4></label>
                  <h5>R$ {{ obra.valorEdital }}</h5>
                </div>
              </section>

              <section>
                <div class="banker">
                  <label><h4>Data de Inicio:</h4></label>
                  <h5>{{ obra.dataInicio }}</h5>
                </div>
                <div class="banker">
                  <label><h4>Data de Término (previsto):</h4></label>
                  <h5>{{ obra.dataTermino }}</h5>
                </div>
                <div class="banker">
                  <label><h4>Nº do contrato:</h4></label>
                  <h5>{{ obra.numeroContrato }}</h5>
                </div>
                <div class="banker">
                  <label><h4>Empresa contratada:</h4></label>
                  <h5>{{ obra.empresaContratada }}</h5>
                </div>
                <div class="banker">
                  <label><h4>Valor contratado:</h4></label>
                  <h5>{{ obra.valorContratado }}</h5>
                </div>
              </section>
            </div>
          </div>
          <div class="part">
            <button id="btp">Participar</button>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>
 
  
<style scoped>
.img {
  display: flex;
  align-items: center;
}
.flex {
  display: flex;
  gap: 70px;
}
.obra {
  height: 300px;
}
.banker {
  display: flex;
  align-items: center;
  gap: 10px;
}
#btp {
  background-color: #a5cf3a;
  border-style: none;
  width: 200px;
  height: 80px;
  margin-bottom: 2vw;
}

.desc2 img {
  padding-left: 170px;
}

a {
  text-decoration: none;
  color: black;
}

.conteudo {
  font-size: 18px;
  padding: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.desc {
  display: flex;
  flex-direction: row;
  gap: 10vw;
}

.part {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
</style>
