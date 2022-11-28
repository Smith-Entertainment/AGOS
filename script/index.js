let janela = document.getElementById("janela_filtros");
let botao_filtros = document.getElementById("btnfiltro");
let botao_fechar = document.getElementById("fechar");

function abrir_janela(){
    janela.style.display = "block";
}
function fechar_janela(){
    janela.style.display = "none";
}

botao_filtros.addEventListener("click", abrir_janela);
botao_fechar.addEventListener("click", fechar_janela);