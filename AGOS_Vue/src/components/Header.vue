
<script>
export default {
    name: 'Header'
}
</script>
<template>
    <header class="row">
        <div class="container" id="nav-container">
            <div class="col-5">
                <a href="Obras"><img src="../assets/img/logo.png" alt="Logo Observatorio" class="navbar-brand" id="logo"></a>
            </div>
            <div class="col-md-8">
                <nav class="navbar navbar-expand-md"> <!--fixed-top?-->
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links"
                        aria-controls="navbar-links" aria-extend="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span></button> <!--botao menu mobile-->
                    <div class="collapse navbar-collapse justify-content-center" id="navbar-links">
                        <div class="navbar-nav">
                            <a href="nav-item nav-link" id="obras-menu">Obras</a>
                            <a href="nav-item nav-link" id="usuario-menu">Usuários</a>
                            <a href="nav-item nav-link" id="relatorio-menu">Relatorios</a>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col-5">
                <h4>Usuário</h4>
                <a href="#" class="">Sair</a>
                <a href="#"><img src="../assets/img/loginico.png" alt="Imagem usuário" width="100"></a>
            </div>
        </div>
    </header>
</template>
<style>
header {
    background-color: rgb(0, 255, 225);
}

.col-md-8 {
    border: 2px solid black;
}
</style>