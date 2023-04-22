<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <form class="form-inline">
                <a class="btn btn-outline-success" type="button" @click="showButtons">Cronograma</a>
             </form>
        </nav>
        <div  v-if="buttonsVisible">
             <previsto class=" btn-secondary d-inline-block mx-2" v-if="buttonOneVisible"/>
             <realizado class=" btn-secondary d-inline-block mx-2" v-if="buttonTwoVisible"/>
        </div>
    </div>
</template>

<script>
import previsto from './previsto.vue'
import realizado from './realizado.vue'

export default {
    nome: 'btnHeaderCronograma',
  components: {
    previsto,
    realizado
  },
  data() {
    return {
      buttonsVisible: false,
      buttonOneVisible: false,
      buttonTwoVisible: false
    }
  },
  methods: {
    showButtons() {
      this.buttonsVisible = true
      this.buttonOneVisible = true
      this.buttonTwoVisible = true
    }
  }
}
</script>