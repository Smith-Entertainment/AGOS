<<<<<<< HEAD
<script>
export default {
  props: {
    obra: {}
  },
}
</script>

<template>
  <div>
    <section>
      <div class="conteudo" id="conteudo">
        <div class="img">
          <img class="obra" src="../assets/img/sem_foto.png" alt="Foto Obra">
        </div>
        <section class="desc">
          <section class="desc1">
            <h3>{{obra.titulo}}</h3>
            <h4>Objetivo: {{obra.objetivo}}</h4>
            <h4>Endereço: {{obra.rua}} {{obra.numero}}, {{obra.bairro}}</h4>
            <h4>Data do certame: {{obra.dataCertame}}</h4>
            <h4>Licitação: {{obra.licitacao}}</h4>
            <h4>Valor do edital: R$ {{obra.valorEdital}}</h4>
          </section>

          <section class="desc2">
            <h4>Data de Inicio: {{obra.dataInicio}}</h4>
            <h4>Data de Término (previsto): {{obra.dataTermino}}</h4>
            <h4>Nº do contrato: {{obra.numeroContrato}}</h4>
            <h4>Empresa contratada: {{obra.empresaContratada}}</h4>
            <h4>Valor contratado: {{obra.valorContratado}}</h4>
          </section>

          <div class="part">
            <button id="btp">Participar</button>
            <button id="btp-edit"> <a href="/editar-obra/:id" >Editar</a></button>
           
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

.obra {
  height: 300px;

}

#btp {
  background-color: #A5CF3A;
  border-style: none;
  width: 200px;
  height: 80px;
  margin-bottom: 2vw;
}

#btp-edit {
  background-color: #808080;
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

.desc1 {
  display: flex;
  flex-direction: column;
}

.desc1 h3 {
  margin-top: 4vh;
}

.desc1 h4 {
  margin-top: 4vh;
}

.desc2 {
  padding-top: 7%;
  display: flex;
  flex-direction: column;
}

.desc2 h4 {
  margin-top: 4vh;
}



.part {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

}
=======
<template>
    <div>
  
      <section>
        <div class="conteudo" id="conteudo">
          <div class="img">
            <img class="obra" src="../assets/img/obra.png" alt="Foto Obra">
          </div>
          <section class="desc">
            <section class="desc1">
              <h3>Nome do Projeto</h3>
              <h4>Endereço:</h4>
              <h4>Data do certame:</h4>
              <h4>Objetivo</h4>
              <h4>Licitação</h4>
              <h4>Empresa contratada:</h4>
              <h4>Data de Inicio:</h4>
            </section>
  
            <section class="desc2">
              <h4>Empresa contratada:</h4>
              <h4>Data de Inicio:</h4>
              <h4>Numero do contrato</h4>
              <h4>Valor do edital:</h4>
              <h4>Valor contratado:</h4>
            </section>
  
            <div class="part">
              <img class="config" src="../img/eng.png" alt="configurações">
              <button id="btp">Participar</button>
            </div>
          </section>
        </div>
      </section>
    </div>
  </template>
 
  
  <style>
  .img {
    display: flex;
    align-items: center;
  }
  
  .obra {
    height: 300px;
  }
  
  body {
    font-family: 'Caladea';
    font-weight: 400;
  }
  
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 15vw;
  }
  
  .usuario {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5%;
  }
  
  .us {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .config {
    height: 30px;
    width: 30px;
  }
  
  .desc2 img {
    padding-left: 170px;
  }
>>>>>>> cae0fb151469fbd9637e9fb240fad8bc9e05424e
</style>