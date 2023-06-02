<script>
    export default{
        props: {
            obra: {
                
            }
        }
    }
</script>

<template>
    <div class="container border border-2 mt-4 rounded rounded-5 overflow-hidden item-border">
        <div class="row align-items-center justify-content-between">
            <img src='../assets/img/sem_foto.png' class="rounded col-3 m-2 image" alt="Foto Obra"> 

            <div class="col">
                <div class="row">
                    <h2 class="text-start">{{obra.titulo}}</h2>
                </div>
                
                <div class="row">
                    <div class="col">
                        <p>Objeto: {{obra.objetivo}}</p>
                        <p>Endereço: {{obra.rua}} {{obra.numero}}, {{obra.bairro}}</p>
                        <p>Licitação: {{obra.licitacao}}</p>
                    </div>

                    <div class="col">
                        <p>Data do Certame: {{obra.dataCertame}}</p>
                        <p>Valor do Edital: R$ {{obra.valorEdital}}</p>
                        <p>Tipo: {{obra.tipoObra}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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