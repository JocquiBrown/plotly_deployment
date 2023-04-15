// Make sure data.js is read in properly
console.log(cityGrowths);

// Sort the cities by population growth
var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// Select only the top 5 cities in population growth
var topFiveCities = sortedCities.slice(0,5);

// Create an array for the top 5 city names
var topFiveCityNames = cityGrowths.map(city => city.City);

// Create another array for the corresponding population growth for each top 5 city
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

// Create a bar chart with the resulting arrays
// var trace = {
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
//   };
//   var data = [trace];
//   var layout = {
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City" },
//     yaxis: {title: "Population Growth, 2016-2017"}
//   };
//   Plotly.newPlot("bar-plot", data, layout);

// Create a Bar Plot of the Top 7 Cities instead of just the top 5
var topSevenCities = sortedCities.slice(0,7);

var topSevenCityNames = topSevenCities.map(city => city.City);

var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);