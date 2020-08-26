  google.charts.load('current', {
       'packages': ['geochart'],
       'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
     });
     google.charts.setOnLoadCallback(drawMarkersMap);

      function drawMarkersMap() {
      var data = google.visualization.arrayToDataTable([
        ['Latitude', 'Longitud', 'Place', 'No. of items'],
        [40.4000,   -3.6833, 'Madrid',  3],
	      [41.3984,   2.1741, 'Barcelona',  2],
      	[39.4667,   -0.3667, 'Valencia',  1]
      ]);

      var options = {
        region: 'ES',
        displayMode: 'markers',
        colorAxis: {colors: ['pink', 'blue']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    };
