google.charts.load('current', {'packages':['corechart']});

function obrasAcompanhadas (){

    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addRows([

        ['Obras acompanhadas',30],
        ['Obras sem acompanhamento',22],

    ]);

    var grafico = new google.visualization.PieChart(document.getElementById('obrasAcom'));
    grafico.draw(tabela);


    
}

google.charts.setOnLoadCallback(obrasAcompanhadas);


function obrasFinalizadas (){

    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addRows([

        ['Obras finalizadas',59],
        ['Obras sem finalizar',38],

    ]);

    var grafico = new google.visualization.BarChart(document.getElementById('obrasFin'));
    grafico.draw(tabela);
}

google.charts.setOnLoadCallback(obrasFinalizadas);


function mostrarGraficos() {
    document.getElementById("graficos").style.display = "inline-block";
    document.getElementById("graficos").style.width = "500px";
  }
  

  
function mostrarConfigObra() {
    document.getElementById("contaienr-form_ajusteObra").style.zIndex = "2";
    
}