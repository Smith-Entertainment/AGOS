<script>
    export default{
        props: {
            obra: {}
        }
    }
</script>

<template>
    <div class="container border border-2 mt-4 rounded rounded-5 overflow-hidden item-border">
        <div class="row align-items-center justify-content-between">
            <img :src="obra.img" class="rounded col-3 m-2 image" alt="Foto Obra">

            <div class="col">
                <div class="row">
                    <h2>{{obra.nome}}</h2>
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
    .row{
        height: 100%;
    }

    .image{
        max-height: 180px;
    }

    .item-border{
        height: 200px;
    }

    .item-border:hover{
        border-color: #A5CF3A !important;

        cursor: pointer;
    }
</style>