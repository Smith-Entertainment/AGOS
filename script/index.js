let janela = document.getElementById("janela_filtros");
let botao_filtros = document.getElementById("btn_filtros");
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
    {img: "./img/projeto2.jfif", nome: "Nome obra 2", objeto: "Objeto obra 2", logradouro: "Rua Santos Dumont", numero: 1021, contrato: 843714, data_inicio: "12/08/2022", data_terminio: "07/12/2023", valor_contrato: 100000},
    {img: "./img/projeto3.jfif", nome: "Nome obra 3", objeto: "Objeto obra 3", logradouro: "Av das Cataratas", numero: 465, contrato: 4897626, data_inicio: "12/09/2021", data_terminio: "07/12/2023", valor_contrato: 300000}
];

  let input = document.getElementById("input_busca");
  input.addEventListener("keyup", search);

for(var i = 0; i < obras.length; i++)
{
    item_lista.setAttribute("href", "./html/perfilobra.html");
    item_lista.innerHTML = `
        <div class="container-obra">
            <div class="container-img-obra">
                <img src=${obras[i].img} class="obra_img" alt="Foto Obra">
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
    item_lista = document.createElement("a");
}
function search() {
    let input = document.getElementById("input_busca");
    let filter = input.value.toUpperCase();
    let resultsList = document.getElementById("results-list");
        // Esconder a lista de resultados se o campo de pesquisa estiver vazio
        if (filter === "") {
            resultsList.style.display = "none";
            return;
        } else {
            resultsList.style.display = "block";
        }
    
    resultsList.innerHTML = "";
  
    obras.forEach((obra) => {
      if (obra.nome.toUpperCase().indexOf(filter) > -1) {
        let listItem = document.createElement("a");
        listItem.classList.add("result");
        listItem.innerHTML = `<img src="${obra.img}" alt="${obra.nome}" width="100" height="100">
                                    <a>${obra.nome}</a>
                                    <a>${obra.objeto}</a>
                                    <a>${obra.logradouro}, ${obra.numero}</a>
                                    <a>${obra.contrato}</a>
                                    <a>${obra.data_inicio} - ${obra.data_terminio}</a>
                                    <a>${obra.valor_contrato}</a>`;
                                    listItem.href = '../html/perfilobra.html';
        resultsList.appendChild(listItem);
       
      }
    });
  }
  