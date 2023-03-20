let janela = document.getElementById("janela_filtros");
let botao_filtros = document.getElementById("btnfiltro");
let botao_fechar = document.getElementById("fechar");

function abrir_janela(){
    janela.style.display = "block";
}
function fechar_janela(){
    janela.style.display = "none";
}

/* botao_filtros.addEventListener("click", abrir_janela);
botao_fechar.addEventListener("click", fechar_janela); */

let pagina = 1;
let secao_obras = document.querySelector(".class-lista-obra");
let item_lista = document.createElement("a");
let obras = [
    {img: "./img/projeto1.jfif", nome: "Nome obra 1", objeto: "Objeto obra 1", logradouro: "Av Panará", numero: 1641, contrato: 253125, data_inicio: "06/02/2022", data_terminio: "01/08/2023", valor_contrato: 150000},
    {img: "./img/projeto2.jfif", nome: "Nome obra 1", objeto: "Objeto obra 1", logradouro: "Rua Santos Dumont", numero: 1021, contrato: 843714, data_inicio: "12/08/2022", data_terminio: "07/12/2023", valor_contrato: 100000}
];

for(var i = 0; i < obras.length; i++)
{
    item_lista.innerHTML = ``;
    item_lista.setAttribute("href", "./html/perfilobra.html");
    item_lista.innerHTML = `
        <div class="container-obra">

            <div class="container-img-obra">
                <img src=./img/projeto1.jfif class="obra_img" alt="Foto Obra">
            </div>

            <div class="objizq">
                <h3>Nome: ${obras[i].nome}</h3>
                <h3>Objeto: ${obras[i].objeto}</h3>
                <h3>Endereço: ${obras[i].logradouro} ${obras[i].numero}</h3>
                <h3>Nº do Contrato: ${obras[i].contrato}</h3>
            </div>

            <div class="objdir">
                <br>
                <h3>Data de Inicio: ${obras[i].data_inicio}</h3>
                <h3>Data de Termino Previsto: ${obras[i].data_terminio}</h3>
                <h3>Valor do Contrato: R$${obras[i].valor_contrato}</h3>
            </div>

        </div>
    `;
    item_lista = item_lista.cloneNode(true);

    secao_obras.appendChild(item_lista);
}