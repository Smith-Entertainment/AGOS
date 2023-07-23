
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
            <div class="col-6">
                <nav class="navbar navbar-expand-lg"> <!--fixed-top?-->
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
            <div class="col-3" id="div-login">
                <div class="text-end">
                    <div>
                        <strong>
                            <a href="">Usuário</a><!--TROCAR POR ROUTERLINK-->
                        </strong>
                    </div>
                    <div>
                        <a href="">Sair</a>
                    </div>
                </div>
                <div>
                    <img src="@/assets/img/iconeperfillogin.png" alt="icone-perfil-usuario" width="50">
                </div>

            </div>
        </div>
    </header>
</template>

<style scoped>

header {
    /* width: 100%; */
    color: #202020;
    font-family: 'Caladea', serif;
    font-weight: 400;
    border-bottom: 1px solid #202020;
    padding: 5px;

}

.navbar-nav {
    display: flex;
    flex-direction: row;
    gap: 6rem;
}

.navbar-nav a {
    display: flex;
    color: #202020;
    font-size: 1.5rem;
    font-weight: 500;
}

.navbar-nav a:active {
    color: #A5CF3A;
}

#nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
}

#logo {
    width: 240px;
    height: auto;
}


#div-login {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 1.5rem;
    flex-wrap: wrap-reverse;
    /* background-color: black; */
}

#div-login a {
    font-size: 1.2rem;
    text-decoration: none;
    color:#202020;
}

#div-login a:hover {
    color: #A5CF3A;
}</style>