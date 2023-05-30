
<script>
export default {
    name: 'Header'
}
</script>
<template>
    <header class="row">
        <div class="container" id="nav-container">
            <div class="col-2">
                <a href="Obras"><img src="../assets/img/logo.png" alt="Logo Observatorio" class="navbar-brand"
                        id="logo"></a>
            </div>
            <div class="col-3">
                <nav class="navbar navbar-expand-md"> <!--fixed-top?-->
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links"
                        aria-controls="navbar-links" aria-extend="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span></button> <!--botao menu mobile-->
                    <div class="collapse navbar-collapse justify-content-center" id="navbar-links">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" id="obras-menu">Obras</a>
                            <a class="nav-item nav-link" id="usuario-menu">Usuários</a>
                            <a class="nav-item nav-link" id="relatorio-menu">Relatorios</a>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col-1">
                <h4><strong>Usuário</strong></h4>
                <a href="#" class="">Sair</a>
                <a href="#"><img src="../assets/img/loginico.png" alt="Imagem usuário" id="imagem-usuario"></a>
            </div>
        </div>
    </header>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caladea&display=swap');

header {
    background-color: #FFFFFF;
    color: #202020;
    font-family: 'Caladea', serif;
    border-bottom: 1px solid #202020;
}
header h4{
    font-size: 1.4rem;
}
.navbar-nav a {
    color: #202020;
    font-size: 1.3rem;
    text-decoration: none;
}
.navbar-nav a:hover{
    color: #A5CF3A;
}
header a {
    color: #202020;
    font-size: 1rem;
}
header a:hover{
    color: #A5CF3A;
}

#nav-container {
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#logo {
    width: 250px;
    height: auto;
}

#imagem-usuario {
    width: 50px;
    height: auto;
}
.navbar-expand-md, .navbar-nav, .nav-link{
    padding: 1rem .8rem;
}
</style>