// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom evel
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// GeoJSON objects are added to the map through a GeoJSON layer, L.geoJSON().
// In "The GeoJSON Layer" section, it says to create the GeoJSON layer and add
// it to our map
// L.geoJson(sanFranAirport, {
//    // We turn each feature into a marker on the map.
//    pointToLayer: function(feature, latlng) {
//       console.log(feature);
//      return L.marker(latlng)
//      .bindPopup("<h2>" + feature.properties.city + "</h2>");
//    }

//  }).addTo(map);

L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup();
    }
}).addTo(map);

// Adding data to a marker
// L.geoJson(data, {
//    pointToLayer: function(feature, latlng) {
//      return L.marker(latlng);
//     }
// });

// Coordinates for each point to be used in the line.
// let line = [
//    [33.9416, -118.4085],
//    [37.6213, -122.3790],
//    [40.7899, -111.9791],
//    [47.4502, -122.3088]
// ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "yellow"
// }).addTo(map);

// An alternative to using the setView() method is to modify
// each attribute in the map object using the curly braces notation as follows:
//This method is useful when we need to add multiple tile layers, or a background
// image of our map(s), which we will do later in this module.

// Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//    center: [
//      40.7, -94.5
//    ],
//    zoom: 4
//  });

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//    console.log(city)
//    //L.marker(city.location)
//    L.circleMarker(city.location, {
//        radius: city.population/100000
//    })
//    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//  .addTo(map);
// });

// Changing the marker on our map to a point or dot, we'll use the circle() function.
// The circle() function will place a circle on the map at the given coordinates.
// L.circle([34.0522, -118.2437], {
//    radius: 100
// }).addTo(map);

// Creating a circle using the circleMarker() function. The circleMarker() function measures
// the radius of the circle in pixels, with the default radius set at 10 pixels
// L.circleMarker([34.0522, -118.2437],{
//    radius: 300,
//    color: "black",
//    fillColor: '#ffffa1'
// }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

