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
[41.3984,2.1741,'Barcelona',407],
[40.9667,-5.65,'Salamanca',103],
[37.3772,-5.9869,'Sevilla',95],
[36.7167,-4.4167,'Málaga',71],
[39.4667,-0.3667,'Valencia',53],
[36.5336,-6.2994,'Cádiz',32],
[41.6333,-0.8833,'Zaragoza',15],
[37.6,-0.9833,'Cartagena (Murcia)',14],
[41.65,-4.7167,'Valladolid',14],
[40.2333,-3.6833,'Pinto (Madrid)',12],
[37.1833,-3.6,'Granada',11],
[37.8833,-4.7667,'Córdoba',10],
[38.9833,-1.85,'Albacete',5],
[38.35,-0.4833,'Alicante',4],
[39.9833,-0.0333,'Castellón de la Plana',4],
[43.3667,-8.3833,'A Coruña',4],
[37.9833,-1.1167,'Murcia',4],
[39.8667,-4.0167,'Toledo',4],
[43.2609,-2.9388,'Bilbao',3],
[41.9825,2.8224,'Gerona',3],
[41.7667,-2.4667,'Soria',3],
[41.1167,1.25,'Tarragona',3],
[36.8333,-2.45,'Almería',2],
[42.35,-3.7,'Burgos',2],
[43.5411,-5.6644,'Gijón',2],
[37.2583,-6.9508,'Huelva',2],
[36.6833,-6.1333,'Jerez de la Frontera (Cádiz)',2],
[39.8833,4.25,'Mahón',2],
[39.5667,2.65,'Palma de Mallorca',2],
[42.8167,-1.6333,'Pamplona',2],
[41.15,1.1167,'Reus (Tarragona)',2],
[36.4667,-6.2,'San Fernando (Cádiz)',2],
[41.5,-5.75,'Zamora',2],
[38.7,-0.4667,'Alcoy (Alicante)',1],
[36.1275,-5.4539,'Algeciras (Cádiz)',1],
[40.0333,-3.6,'Aranjuez',1],
[41.5819,2.5494,'Arenys de Mar (Barcelona)',1],
[43.5569,-5.9247,'Aviles (Asturias)',1],
[38.8833,-6.9667,'Badajoz',1],
[40.0667,-2.1333,'Cuenca',1],
[38.25,-0.7,'Elche',1],
[40.6333,-3.1667,'Guadalajara',1],
[37.7667,-3.7833,'Jaen',1],
[42.6,-5.5667,'León',1],
[41.5421,2.4445,'Mataró',1],
[39,-3.3667,'Mazanares (Ciudad Real)',1],
[43.3667,-5.8333,'Oviedo',1],
[36.6,-6.2333,'Puerto de Santa María (Cádiz)',1],
[36.7333,-5.1667,'Ronda',1],
[43.3167,-1.9833,'San Sebastián',1],
[43.4647,-3.8044,'Santander',1],
[43.5333,-6.55,'Santiago',1],
[37.7667,-1.5,'Totana (Murcia)',1],
[38.9667,-5.8,'Villanueva de la Serena (Badajoz)',1],
[42.85,-2.6667,'Vitoria-Gasteiz',1],
[43.2833,-2.1667,'Zarauz (Gipuzcoa)',1]
      ]);

      var options = {
        region: 'ES',
        displayMode: 'markers',
        colorAxis: {colors: ['pink', 'blue']}
      };

      var chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    };
