// Create a map to be used as a base map
function createMap(voting) {
    var mymap = L.map('map-id').setView([35.501, -80.2442], 6.5);
    
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: API_KEY
    }).addTo(mymap);
  }createMap()