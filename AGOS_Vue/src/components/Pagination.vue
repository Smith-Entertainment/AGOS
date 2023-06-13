<script>
    export default{
    data(){
        return{
            numberOfPages: [1, 2, 3, 4],
            limit: 10,
            actualPage: 1
        }
    },
    created(){
      fetch(`http://localhost:8080/api/obra/numero-itens`)
        .then(response => {
          response.json()
            .then(data => {this.numberOfPages = Array.from(Math.ceil(data/this.limit).keys(), i => i+1)})
        })
        .catch(error => {console.log(error)})
    }
}
</script>

<template>
    <button v-for="page in numberOfPages"> {{ page }} </button>
</template>

<style scoped>

</style>