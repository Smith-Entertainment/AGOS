<template>
     <nav>
        <div class="lista">
          <a href=""></a>
          <a class="aba">Cronograma</a>
          <a class="aba" id="btn-grafico">Graficos</a>
          <a class="aba">Fotos</a>
          <a class="aba">Projetos</a>
          <a class="aba">Relatorios</a>
          <a class="aba">Documentos</a>
        </div>
    </nav>
</template>
<style scoped>
.lista {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 5vh 0 5vh 20vw;
  }
  
  .part {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  #btp {
    background-color: #A5CF3A;
    border-style: none;
    width: 200px;
    height: 80px;
    margin-bottom: 2vw;
  }
  </style>
  