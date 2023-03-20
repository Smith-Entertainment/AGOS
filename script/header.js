let header = document.getElementsByTagName("header")[0];
let modal = document.getElementById("modal_menu");

header.innerHTML = `<div class="container-header">
    <picture class="container-header_logo">
        <a href="../index.html"><img src="../img/logo.png" alt="Logo Observatorio" class="logo"></a>
    </picture>

    <button id="menu_mobile"><span class="material-symbols-outlined">menu</span></button>
    <nav>

        <a href="../index.html">Obras</a>
        <a href="../html/listausuarios.html">Usuários</a>
        <a href="../html/relatorios.html">Relatorios</a>
    </nav>
    <div class="container-header_user">
        <h4>Usuário</h4>
        <a href="../html/login.html" class="sair">Sair</a>
        <a href="../html/perfilusuario.html"><img class="imguser" src="../img/loginico.png" alt="foto usuario"class="user"></a>
    </div>
</div>`;

let botao_modal = document.getElementById("menu_mobile");

const switchModal = () => {
    const modal_atual = modal.style.display;
    console.log(modal_atual);
    if (modal_atual == 'block') {
        modal.style.display = "none";
    }
    else {
        modal.style.display = "block";

    }
}
botao_modal.addEventListener('click', switchModal);
window.onclick = function (event) {
    if (event.target == modal) {
        switchModal();
    }
}

// botao_modal.onclick = function () {
//     modal.style.display = "block";
// }
// botao_modal.onclick = function () {
    //     modal.style.display = "none";
// }

// function abrir_modal(){
//    modal.style.display = "block";
// }
