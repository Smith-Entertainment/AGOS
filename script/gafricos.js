google.charts.load('current', {'packages':['corechart']});

function desenharPizza (){

    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addRows([

        ['Obras acompanhadas',30],
        ['Obras sem acompanhamento',22],

    ]);

    var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
    grafico.draw(tabela);
}

google.charts.setOnLoadCallback(desenharPizza);


function desenharPizza2 (){

    var tabela = new google.visualization.DataTable();
    tabela.addColumn('string','categorias');
    tabela.addColumn('number','valores');
    tabela.addRows([

        ['Obras finalizadas',59],
        ['Obras sem finalizar',38],

    ]);

    var grafico = new google.visualization.BarChart(document.getElementById('graficoPizza2'));
    grafico.draw(tabela);
}

google.charts.setOnLoadCallback(desenharPizza2);
