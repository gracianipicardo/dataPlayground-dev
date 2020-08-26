     google.charts.load('current', {
       'packages': ['geochart'],
       // Note: you will need to get a mapsApiKey for your project.
       // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
       'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
     });
     google.charts.setOnLoadCallback(drawMarkersMap);

      function drawMarkersMap() {
      var data = google.visualization.arrayToDataTable([
        ['Latitude', 'Longitud', 'Place', 'No. of items'],
        [40.4000,   -3.6833, 'Madrid',  1230],
		[39.4667,   -0.3667, 'Valencia',  143],
		[41.3984,   2.1741, 'Barcelona',  48],
		[36.5336,   -6.2994, 'Cádiz',  11],
		[37.3772,   -5.9869, 'Sevilla',  6],
		[37.1833,   -3.6000, 'Granada',  4],
		[36.7167,   -4.4167, 'Málaga',  4],
		[41.6333,   -0.8833, 'Zaragoza',  4],
		[36.8333,   -2.4500, 'Almería',  1],
		[43.2609,   -2.9388, 'Bilbao',  1],
		[39.4833,   -6.3667, 'Cáceres',  1],
		[43.3667,   -8.3833, 'A Coruña',  1],
		[41.1167,   1.2500, 'Tarragona',  1],
		[41.6500,   -4.7167, 'Valladolid',  1],
		[36.7833,   -4.1000, 'Vélez-Málaga',  1]
      ]);

      var options = {
        region: 'ES',
        displayMode: 'markers',
        colorAxis: {colors: ['pink', 'blue']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    };
