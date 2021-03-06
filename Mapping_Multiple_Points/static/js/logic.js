// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom evel
let map = L.map('mapid').setView([40.7, -94.5], 4);

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
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    //L.marker(city.location)
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);