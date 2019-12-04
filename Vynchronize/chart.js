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
          ['Продуктивність', a2]
          //['Якість', b2],
         // ['Питома вартість', c2],
         // ['Документованість', d2],
		  //['Документованість 2', 0.0010]
        ]);

		var data2 = new google.visualization.DataTable();
        data2.addColumn('string', 'Розроблюваний продукт');
        data2.addColumn('number', 'Значення параметру');
        data2.addRows([
          ['Якість', b2]
        ]);
		
		var data3 = new google.visualization.DataTable();
        data3.addColumn('string', 'Розроблюваний продукт');
        data3.addColumn('number', 'Значення параметру');
        data3.addRows([
          ['Питома вартість', c2]
         ]);
		
		var data4 = new google.visualization.DataTable();
        data4.addColumn('string', 'Розроблюваний продукт');
        data4.addColumn('number', 'Значення параметру');
        data4.addRows([
          ['Документованість', d2]
        ]);
		
        // Set chart options
        var options = {'title':'Графік по параметру',
                       'width':278,
                       'height':550,
					   bar: {groupWidth: "7%"},
					   hAxis: {minValue: 0.1, maxValue: 200}, 
					   vAxis: {minValue: 0.1, maxValue: 200} 			   
 };
options.explorer = {
  //maxZoomIn: [0.1]
  actions: ['dragToZoom', 'rightClickToReset']
  /* you can add more options */
}
        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(data, options);
		
		var chart2 = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
        chart2.draw(data2, options);
		
		var chart3 = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
        chart3.draw(data3, options);
		
		var chart4 = new google.visualization.ColumnChart(document.getElementById('chart_div4'));
        chart4.draw(data4, options);
		
      }
	  
var fso, f1;
fso = new ActiveXObject("Scripting.FileSystemObject");
f1 = fso.CreateTextFile("c:\\testfile.txt", true);
f1.Write ("This is a test."); 

	 
}  
	  setTimeout(start, 5000);
	  
	  
