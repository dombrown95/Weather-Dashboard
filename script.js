var cities = ["Berlin", "Paris", "Edinburgh", "Madrid", "Birmingham", "London"];

var APIKey = "f4b03ff7f1a0faf5f4e8e64135541dab";

function weatherData(city, lat, lon) {
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f4b03ff7f1a0faf5f4e8e64135541dab`;
  
  fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
  var stringData = JSON.stringify(data);
    console.log(queryURL);
    console.log(stringData);
});  
}

function getCoord(city) {
  var geoURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=f4b03ff7f1a0faf5f4e8e64135541dab`;

  fetch(geoURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    if (data.length > 0) {
      var lat = data[0].lat;
      var lon = data[0].lon;
      weatherData(city, lat, lon);
    } else {
      console.log("no data found for ${city}");
    }
  });
}

for (var i = 0; i < cities.length; i++) {
  getCoord(cities[i]);
}