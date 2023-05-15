<script>
    import ListItem from './ListItem.vue'

    export default{
        data(){
            return{
                obras: []
            }
        },
        created(){
            fetch("http://localhost:9000/api/obra/lista")
                .then(response => {response.json().then(data => {this.obras = data})})
                .catch(error => {console.log(error)})
        },
        components: {
            ListItem
        }
    }
</script>

<template>
    <ListItem v-for="obra in obras" :key="obra.id" :obra="obra" />
</template>

<style>

</style>