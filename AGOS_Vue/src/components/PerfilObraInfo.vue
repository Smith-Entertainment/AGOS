<template>
    <div>
  
      <section>
        <div class="conteudo" id="conteudo">
          <div class="img">
            <img class="obra" src="../img/sem_foto.png" alt="Foto Obra">
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
 
  
  <style scoped>
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
  