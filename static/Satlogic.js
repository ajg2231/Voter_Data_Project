// Create a map to be used as a base map
var lightmap = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    accessToken: API_KEY
});    


// Initialize all of the layergroups we'll be using
var layers = {
    precents2016: new L.LayerGroup(),
    precents2020: new L.LayerGroup()
};

var mymap = L.map('map-id',{
    center:[35.10, -80.14],
    zoom: 6.6,
    layers: [layers.precents2016, layers.precents2020]
});

lightmap.addTo(mymap)

// Creating overlay objects to add to the layer control
var overlays ={
    "2016 Polling Stations": layers.precents2016,
    "2020 Polling Stations": layers.precents2020
};

// Adding a control for the layer selection
L.control.layers(null, overlays).addTo(mymap);

var info = L.control({
    position: "bottom right"
});

// A place to insert the layer control on the webpage.
info.onAdd = function() {
    var div = L.DomUtil.create("div", "legend");
    return div;
};

var url = "https://opendata.arcgis.com/datasets/7a90fdd41bc44644acc638f74b1f62f0_0.geojson";
d3.json(url, function(pollingLocations) {
    L.geoJson(pollingLocations).addTo(mymap);

    //var markers = L.marker();
    for (var i = 0; i < pollingLocations.length; i++){
        var location = pollingLocations[i].location;

        if(location){
            L.marker([location.coordinates[1], location.coordinate[0]]).addTo(mymap);
            
        }
    }
});
// Draw the legend on the map
   


//Create markers for the voting locations
// var markerOptions ={
//     title: "Polling Stations",
//     clickable: true
// }
// Adding the marker locations
// var marker = L.marker({polls}, markerOptions);
  