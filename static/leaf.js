var mymap = L.map('mapid').setView([-6.175110, 106.865036], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'YOUR ACCESS TOKEN FROM MAPBOX' //ENTER YOUR ACCESS TOKEN HERE
}).addTo(mymap);

var iconBus1 = L.icon({
	iconUrl: 'static/images/bus1.png',
    iconSize: [17, 30]
});
var iconBus2 = L.icon({
	iconUrl: 'static/images/bus2.png',
    iconSize: [17, 30]	
});
var iconBus3 = L.icon({
	iconUrl: 'static/images/bus3.png',
    iconSize: [17, 30]
});

mapMarkers1 = [];
mapMarkers2 = [];
mapMarkers3 = [];

var source = new EventSource('/topic/geodataleaflet'); //ENTER YOUR TOPICNAME HERE
source.addEventListener('message', function(e){

  console.log('Message');
  obj = JSON.parse(e.data);
  console.log(obj);

  if(obj.busline == '00001') {
    for (var i = 0; i < mapMarkers1.length; i++) {
      mymap.removeLayer(mapMarkers1[i]);
    }
		
    marker1 = L.marker([obj.latitude, obj.longitude], {icon: iconBus1}).addTo(mymap).bindPopup("<b>Bus 1</b><br>Corridor 1").openPopup();
    mapMarkers1.push(marker1);
  }

  if(obj.busline == '00002') {
    for (var i = 0; i < mapMarkers2.length; i++) {
      mymap.removeLayer(mapMarkers2[i]);
    }
	
    marker2 = L.marker([obj.latitude, obj.longitude], {icon: iconBus2}).addTo(mymap).bindPopup("<b>Bus 2</b><br>Corridor 2").openPopup();
    mapMarkers2.push(marker2);
  }

  if(obj.busline == '00003') {
    for (var i = 0; i < mapMarkers3.length; i++) {
      mymap.removeLayer(mapMarkers3[i]);
    }
	
    marker3 = L.marker([obj.latitude, obj.longitude], {icon: iconBus3}).addTo(mymap).bindPopup("<b>Bus 3</b><br>Corridor 3").openPopup();
    mapMarkers3.push(marker3);
  }
}, false);
