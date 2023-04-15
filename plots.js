//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
//Plotly.newPlot("plotArea", [{x: [5,10,15], y: [20, 30, 40]}]);
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

// Add 5 to each number in the array
var numbers = [0,2,4,6,8];
var plusFive = numbers.map(number => number + 5);
console.log(plusFive);

// Extract the population for each city
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityPop = cities.map(city => city.population);
console.log(cityPop);

// Filter the array for animals whose names start with the letter 's'
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sAnimals = words.filter(animal => animal.startsWith("s"));

console.log(sAnimals);

// Select the first three elements in the words array
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var firstThree = words.slice(0, 3);

console.log(firstThree);