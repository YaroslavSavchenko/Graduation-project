function start(){

// Load the Visualization API and the corechart package.

      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
	  
	  
      function drawChart() {

	  var a = document.getElementById("perf_summ").innerHTML.replace(/[^-0-9]/gim,'');
	  var b = document.getElementById("qual_summ").innerHTML.replace(/[^-0-9]/gim,'');
	  var c = document.getElementById("cost_summ").innerHTML.replace(/[^-0-9]/gim,'');
	  var d = document.getElementById("page_summ").innerHTML.replace(/[^-0-9]/gim,'');
	  
	  var a2 = +a;
	  var b2 = +b;
	  var c2 = +c;
	  var d2 = +d;
	
        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Розроблюваний продукт');
        data.addColumn('number', 'Значення параметру');
        data.addRows([
          ['Продуктивність', a2],
          ['Якість', b2],
          ['Питома вартість', c2],
          ['Документованість', d2],
		  ['Документованість 2', 0.0010]
        ]);

        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':800,
                       'height':450};
options.explorer = {
  //maxZoomIn: [0.1]
  actions: ['dragToZoom', 'rightClickToReset']
  /* you can add more options */
}
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }
}  
	  setTimeout(start, 9000);
	  
	  