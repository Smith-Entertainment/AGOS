google.charts.load('current', {'packages':['corechart']});

let obrasAcom = document.getElementById("obrasAcom");
let obrasFin = document.getElementById("obrasFin");
let btnGraficos = document.getElementById("btn-grafico");
let conteudoObra = document.getElementById("conteudo");

function obrasAcompanhadas (){

    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addRows([

        ['Obras acompanhadas',30],
        ['Obras sem acompanhamento',22],

    ]);

    var grafico = new google.visualization.PieChart(obrasAcom);
    grafico.draw(tabela);


    
}


function obrasFinalizadas (){

    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addRows([

        ['Obras finalizadas',59],
        ['Obras sem finalizar',38],

    ]);

    var grafico = new google.visualization.BarChart(obrasFin);
    grafico.draw(tabela);
}



function mostrarGraficos() {
    btnGraficos.style.color = "#A5CF3A";
    btnGraficos.style.textDecoration = "underline";
    obrasAcom.style.display = "block";
    obrasFin.style.display = "block";
    google.charts.setOnLoadCallback(obrasAcompanhadas);
    google.charts.setOnLoadCallback(obrasFinalizadas);
  }
  
  function ocultarGraficos() {
    btnGraficos.style.color = "#000000";
    btnGraficos.style.textDecoration = "none";
    obrasAcom.style.display = "none";
    obrasFin.style.display = "none";
  }
  
btnGraficos.addEventListener("click",mostrarGraficos);
conteudoObra.addEventListener("click",ocultarGraficos);
