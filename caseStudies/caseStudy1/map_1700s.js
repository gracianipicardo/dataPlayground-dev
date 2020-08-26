google.charts.load('current', {
       'packages': ['geochart'],
       'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
     });
     google.charts.setOnLoadCallback(drawMarkersMap);

      function drawMarkersMap() {
      var data = google.visualization.arrayToDataTable([
        ['Latitude', 'Longitud', 'Place', 'No. of items'],
        [41.3984,   2.1741, 'Barcelona',  158],
		[39.4667,   -0.3667, 'Valencia',  112],
		[40.4000,   -3.6833, 'Madrid',  100],
		[40.9667,   -5.6500, 'Salamanca',  30],
		[37.3772,   -5.9869, 'Sevilla',  24],
		[41.6500,   -4.7167, 'Valladolid',  3],
		[41.7263,   1.8258, 'Manresa',  2],
		[40.4833,   -3.3667, 'Alcalá de Henares',  1],
		[36.5336,   -6.2994, 'Cádiz',  1],
		[40.9500,   -4.1167, 'Segovia',  1],
      ]);

      var options = {
        region: 'ES',
        displayMode: 'markers',
        colorAxis: {colors: ['pink', 'blue']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    };
