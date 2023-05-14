<template>
  <div>
     <div class="bg-primary p-3 d-flex flex-wrap justify-content-center">
       <button 
         class="btn btn-light mx-2 mb-2" 
         :class="{ 'active': selected === 'cronograma' }" 
         @click="selectItem('cronograma')"
       >
         Cronograma
       </button>
       <button 
         class="btn btn-light mx-2 mb-2" 
         :class="{ 'active': selected === 'grafico' }" 
         @click="selectItem('grafico')"
       >
         Gráfico
       </button>

       
   <button 
      class="btn btn-light mx-2 mb-2"
      :class="{ 'active': selected === 'fotos' }"
      @click="selectItem('fotos')"
       >
      Fotos
     </button>

   <button 
     class="btn btn-light mx-2 mb-2" 
     :class="{ 'active': selected === 'projetos' }" 
     @click="selectItem('projetos')"
   >
     Projetos
   </button>
   <button 
     class="btn btn-light mx-2 mb-2" 
     :class="{ 'active': selected === 'documentos' }" 
     @click="selectItem('documentos')"
   >
     Documentos
   </button>
 </div>
 
 <!-- Botões Previsto e Realizado -->
 <div class="d-flex justify-content-center mt-3" v-if="selected === 'cronograma'">
   <button 
     class="btn btn-light mx-2" 
     :class="{ 'active': subSelected === 'Financeiro' }" 
     @click="selectSubItem('Financeiro')"
   >
     Financeiro
   </button>
   <button 
     class="btn btn-light mx-2" 
     :class="{ 'active': subSelected === 'Fisico' }" 
     @click="selectSubItem('Fisico')"
   >
   Fisico
   </button>
 </div>
 
 <!-- Conteúdo do componente -->
 <div class="mt-3">
  <transition name="fade">
    <financeiro :importador="importador" v-if="selected === 'cronograma' && subSelected === 'Financeiro'" />
    <fisico :importador="importador" v-else-if="selected === 'cronograma' && subSelected === 'fisico'" />
    <grafico :importador="importador" v-else-if="selected === 'grafico'" />
    <fotos :importador="importador" v-else-if="selected === 'fotos'" />
    <projetos :importador="importador" v-else-if="selected === 'projetos'" />
    <documentos :importador="importador" v-else-if="selected === 'documentos'" />
  </transition>
</div>

   </div>
 </template>


<script>
import Cronograma from './Cronograma.vue'
import Grafico from './Grafico.vue'
import Fotos from './Fotos.vue'
import Projetos from './Projetos.vue'
import Documentos from './Documentos.vue'
import Fisico from '../Cronograma/Fisico.vue'
import Financeiro from '../Cronograma/Financeiro.vue'

export default {
  data() {
    return {
      selected: null,
      subSelected: null,
      items: [
        { id: 1, title: 'Cronograma' },
        { id: 2, title: 'Gráfico' },
        { id: 3, title: 'Fotos' },
        { id: 4, title: 'Projetos' },
        { id: 5, title: 'Documentos' },
      ],
      subItems: [
        { id: 1, title: 'Financeiro' },
        { id: 2, title: 'Fisico' },
      ]
    }
  },
  methods: {
    selectItem(item) {
      this.selected = item;
      this.subSelected = null;
    },
    selectSubItem(item) {
      this.subSelected = item;
    },
    resetSelection() {
      this.selected = null;
      this.subSelected = null;
    },
    selectButton(item, button) {
      item.activeButton = button
    },

    selectSubItem(item) {
  if (item === 'Fisico') {
    this.subSelected = 'fisico';
  } else {
    this.subSelected = item;
  }
 


},
  },
  components: {
    Cronograma,
    Grafico,
    Fotos,
    Projetos,
    Documentos,
    Fisico,
    Financeiro,
  },
}
</script>


<style scoped>
.header {
  padding: 0 1rem;
}

.navbar-brand {
  font-size: 1.5rem;
  color: white;
}

.nav-link {
  font-size: 1.2rem;
  text-transform: uppercase;
  color: white;
}

.nav-item.active .nav-link {
  color: black;
}

@media (max-width: 768px) {
  .navbar-brand {
    font-size: 1.2rem;
  }

  .nav-link {
    font-size: 1rem;
  }
}


.bg-primary {
  background-color: #A5CF3A !important;
}
</style>