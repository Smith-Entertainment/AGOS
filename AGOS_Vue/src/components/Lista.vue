<script>
    import ItemLista from './ItemLista.vue'

    export default{
        data(){
            return{
                obras: [
                    {id: 1, img: "./src/assets/img/projeto1.jfif", nome: "Obra 1", objeto: "Objeto obra 1", logradouro: "Av Panará", numero: 1641, contrato: 253125, data_inicio: "06/02/2022", data_terminio: "01/08/2023", valor_contrato: 150000},
                    {id: 2, img: "./src/assets/img/projeto2.jfif", nome: "Obra 2", objeto: "Objeto obra 2", logradouro: "Rua Santos Dumont", numero: 1021, contrato: 843714, data_inicio: "12/08/2022", data_terminio: "07/12/2023", valor_contrato: 100000},
                    {id: 3, img: "./src/assets/img/projeto3.jfif", nome: "Obra 3", objeto: "Objeto obra 3", logradouro: "Av das Cataratas", numero: 465, contrato: 4897626, data_inicio: "12/09/2021", data_terminio: "07/12/2023", valor_contrato: 300000}
                ]
            }
        },
        components: {
            ItemLista
        }
    }
</script>

<template>
    <ItemLista v-for="obra in obras" :key="obra.id" :obra="obra" />
</template>

<style>

</style>