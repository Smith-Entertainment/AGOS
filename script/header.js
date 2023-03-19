let header = document.getElementById('header_div');

header.innerHTML = `<header>
<div class="container-header">
    <picture class="container-header_logo">
        <a href="../index.html"><img src="../img/logo.png" alt="Logo Observatorio" class="logo"></a>

    </picture>

    <button id="menu_mobile"><span class="material-symbols-outlined">
            menu
        </span></button>

    <nav>
        <a href="../index.html">Obras</a>
        <a href="../html/listausuarios.html">Usuários</a>
        <a href="../html/relatorios.html">Relatorios</a>
    </nav>
    <div class="container-header_user">
        <h4>Usuário</h4>
        <a href="../html/login.html" class="sair">Sair</a>
        <a href="../html/perfilusuario.html"><img class="imguser" src="../img/loginico.png" alt="foto usuario"
                class="user"></a>
    </div>
</div>
</header>`