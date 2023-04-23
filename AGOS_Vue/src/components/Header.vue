
<script>
export default {
    name: 'Header'
}
</script>
<template>
    <header class="row">
        <div class="container" id="nav-container">
            <div class="col-5">
                <a href="Obras"><img src="../assets/img/logo.png" alt="Logo Observatorio" class="navbar-brand"
                        id="logo"></a>
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
                <a href="#"><img src="../assets/img/loginico.png" alt="Imagem usuário" width="100" id="imagem-usuario"></a>
            </div>
        </div>
    </header>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Caladea&display=swap');

.container {
    padding: 80px 0;
}

header {
    background-color: #FFFFFF;
    color: #202020;
    font-family: 'Caladea', serif;
}

nav a {
    color: #202020;
    text-decoration: none;

}

header a {
    color: #202020;
    font-size: 1.5rem;
}

#nav-container {
    padding-top: 0;
    padding-bottom: 0;
}

#logo {
    width: 300px;
    height: auto;
}

#imagem-usuario {
    width: 50px;
    height: auto;
}
</style>