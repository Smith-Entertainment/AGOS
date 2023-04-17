<script>
    export default{
        props: {
            obra: {}
        }
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <img :src="obra.img" class="col-2" alt="Foto Obra">

            <div class="col">
                <h2>Nome: {{obra.nome}}</h2>
                <p>Objeto: {{obra.objeto}}</p>
                <p>Endereço: {{obra.logradouro}} {{obra.numero}}</p>
                <p>Nº do Contrato: {{obra.contrato}}</p>
            </div>

            <div class="col">
                <h2><br></h2>
                <p>Data de Inicio: {{obra.data_inicio}}</p>
                <p>Data de Termino Previsto: {{obra.data_terminio}}</p>
                <p>Valor do Contrato: R${{obra.valor_contrato}}</p>
            </div>
        </div>
    </div>
</template>

<style>

</style>