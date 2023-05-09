<script>
    export default{
        props: {
            obra: {}
        }
    }
</script>

<template>
    <div class="container">
        <img :src="obra.img" class="rounded float-start" alt="Foto Obra">

        <h2>Nome: {{obra.nome}}</h2>
        <h3>Objeto: {{obra.objeto}}</h3>
        <h3>Endereço: {{obra.logradouro}} {{obra.numero}}</h3>
        <h3>Nº do Contrato: {{obra.contrato}}</h3>

        <h3>Data de Inicio: {{obra.data_inicio}}</h3>
        <h3>Data de Termino Previsto: {{obra.data_terminio}}</h3>
        <h3>Valor do Contrato: R${{obra.valor_contrato}}</h3>
    </div>
</template>

<style>

</style>