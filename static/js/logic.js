// Create a map to be used as a base map
function createMap(voting) {
    var mymap = L.map('map-id').setView([35.10, -80.14], 6.6);
    
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/outdoors-v11',
            accessToken: API_KEY
        }).addTo(mymap);
    }createMap()
    //Create markers for the voting locations
    var markerOptions ={
        title: "Polling Stations",
        clickable: true
    }
    // Adding the marker locations
    var marker = L.marker({polls}, markerOptions);
marker.addTo(mymap);    