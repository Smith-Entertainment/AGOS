let opcao = document.getElementsByClassName("aba");
let btn_fisico = document.getElementById("btn_fisico");
let btn_financeiro = document.getElementById("btn_financeiro");
let container_cronograma = document.getElementById("div_tabelas");
let abrir = false;

function abrir_cronog(){
    if(!abrir)
    {
      document.getElementById("cronogramas").style.display = "block";

      abrir = true;
    }
    else
    { 
      document.getElementById("cronogramas").style.display = "none";
      abrir = false;
    }
}

btn_fisico.addEventListener("click", cronograma_fisico);
btn_financeiro.addEventListener("click", cronograma_financeiro);

function cronograma_fisico(){
  btn_fisico.style.background = "#A5CF3A";
  btn_financeiro.style.background = "white";

  container_cronograma.style.display = "none";
}

function cronograma_financeiro(){
  btn_fisico.style.background = "white";
  btn_financeiro.style.background = "#A5CF3A";

  container_cronograma.style.display = "block";
}


opcao[0].addEventListener("click", abrir_cronog);
/*let editar = document.getElementById("icon_edit");
let tabela = document.getElementById("tfisico");

editar.addEventListener("click", add);

let id = [];

function add(){
    let linha = document.createElement("tr");
    let elementos = [];

    for(var i=0; i<4; i++)
    {
        let campos = ["nome", "curso", "e-mail"];

        if(i == 0)
        {
            elementos[i] = document.createElement("td");
            
            if(id.length == 0)
            {
                id[0] = 1;
            }
            else
            {
                id[id.length] = id[id.length - 1] + 1;
            }

            elementos[i].innerText = id[id.length - 1];
        }
        else
        {
            elementos[i] = document.createElement("td");
            elementos[i].innerText = prompt(`Digite o ${campos[i-1]} do aluno`);
        }
        

        linha.appendChild(elementos[i]);
    }
    
    linha.id = elementos[0].innerText;
    tabela.appendChild(linha);
}

function del(){
    let id = prompt("Digite o id do aluno a ser removido");
    let linha = document.getElementById(id);
    
    tabela.removeChild(linha);
}*/