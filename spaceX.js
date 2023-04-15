const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(spaceXResults => console.log(spaceXResults));

// Retrieve the full_name of the Vandenberg SpaceX base
//d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));

// Retrieve the latitude of the Vandenberg SpaceX base
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].location.latitude));

// Use map() to print only the latitude and longitude coordinates of each SpaceX launch station.
//d3.json(url).then(spaceXResults => console.log(map(spaceXResults.location.latitude)));

d3.json(url).then(spaceXResults => {
    latitude = spaceXResults.map(spaceXResults => spaceXResults.location.latitude);
    longitude = spaceXResults.map(spaceXResults => spaceXResults.location.longitude);
    let coordinates = {"latitude" : latitude, "longitude" : longitude};
    console.log(coordinates);
});
