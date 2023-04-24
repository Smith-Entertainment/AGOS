<script>
    export default{
        props: {
            obra: {}
        }
    }
</script>

<template>
    <div class="container">
        <div class="row align-items-center justify-content-between">
            <img :src="obra.img" class="col-md-3 col-sm-6" alt="Foto Obra">

            <div class="col">
                <div class="row">
                    <h2>Nome: {{obra.nome}}</h2>
                </div>
                
                <div class="row">
                    <div class="col">
                        <p>Objeto: {{obra.objeto}}</p>
                        <p>Endereço: {{obra.logradouro}} {{obra.numero}}</p>
                        <p>Nº do Contrato: {{obra.contrato}}</p>
                    </div>

                    <div class="col">
                        <p>Data de Inicio: {{obra.data_inicio}}</p>
                        <p>Data de Termino Previsto: {{obra.data_terminio}}</p>
                        <p>Valor do Contrato: R${{obra.valor_contrato}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>