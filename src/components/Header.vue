
<script lang="ts">
export default {
    name: 'Header'
}
</script>
<template>
    <header class="row">
        <div class="container" id="nav-container">
            <div class="col-3">
                <a href=""><img src="@/assets/img/logo.png" alt="Logo Observatorio" class="navbar-brand" id="logo"></a>
            </div>
            <div class="col-7">
                <nav class="navbar navbar-expand-md"> <!--fixed-top?-->
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links"
                        aria-controls="navbar-links" aria-extend="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span></button> <!--botao menu mobile-->
                    <div class="collapse navbar-collapse justify-content-center" id="navbar-links">
                        <div class="navbar-nav">
                            <a href="" class="nav-item nav-link" id="obras-menu">Obras</a><!--TROCAR POR ROUTERLINK-->
                            <a href="" class="nav-item nav-link" id="usuario-menu">Usuários</a><!--TROCAR POR ROUTERLINK-->
                            <a href="" class="nav-item nav-link" id="relatorio-menu">Relatorios</a><!--TROCAR POR ROUTERLINK-->
                        </div>
                    </div>
                </nav>
            </div>
            <div class="col-2" id="div-login">
                <div class="row">
                <div>
                    <strong>
                    <a href="" class="col-4">Usuário</a><!--TROCAR POR ROUTERLINK-->
                    </strong>
                </div>
                <div>
                    <a href="" class="col-4">Sair</a>
                </div>
                <div>
                    <img src="@/assets/img/iconeperfillogin.png" alt="icone-perfil-usuario" width="50">
                </div>
                </div>
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
    font-weight: 400;
    border-bottom: 1px solid #202020;
    padding: 5px;
    
}
header h4{
    font-size: 1.4rem;
}
.navbar-nav{
    display: flex;
    gap: 7rem;
}
.navbar-nav a {
    color: #202020;
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
}
.navbar-nav a:active{
    color: #A5CF3A;
}
.navbar-nav a:hover{
    color: #A5CF3A;
}
header a {
    color: #202020;

}

#nav-container {
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}

#logo {
    width: 220px;
    height: auto;
}

.navbar-expand-md, .navbar-nav, .nav-link{
    padding: 1rem .8rem;
}
#div-login a{
    font-size: 1.2rem;
    text-decoration: none;
}
#div-login a:hover{
    color: #A5CF3A;
}
</style>