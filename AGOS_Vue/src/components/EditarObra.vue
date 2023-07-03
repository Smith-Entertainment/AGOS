
<script>
    import ListItem from './ListItem.vue'

    export default{
        data(){
            return{
                obra: new Obra
            }
        },
        created(){
            fetch("http://localhost:8080/api/obra/${id}")
                .then(response => {response.json().then(data => {this.obras = data})})
                .catch(error => {console.log(error)})
        },
        methods: {
            redirect(obra){
                this.$router.push(`/obra/${obra.id}`)
            }
        },
        components: {
            ListItemNPM
        }
    }
</script>


<template>

  <div>vdfggftg</div>
</template>