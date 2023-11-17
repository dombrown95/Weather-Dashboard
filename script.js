var cities = ["Berlin", "Paris", "Edinburgh", "Madrid", "Birmingham", "London"];

var APIKey = "f4b03ff7f1a0faf5f4e8e64135541dab";
var queryURL = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + APIKey;

fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
  var stringData = JSON.stringify(data);
    console.log(queryURL);
    console.log(data);

});  

fetch(queryURL)
.then(function (response) {
  return response.json();
}).then(function (data) {
var stringData = JSON.stringify(data);
$("#movie-view").text(stringData);
});


var movies = ["The Matrix", "Dune", "Mr. Right", "The Lion King"];

 // Function for displaying movie data
 function renderButtons() {

  $("#buttons-view").empty();
  // YOUR CODE GOES HERE
  for (var i = 0; i < movies.length; i++) {
    var btn = $("<button>");
    btn.text(movies[i]);
    btn.attr("data-movie", movies[i]);
    $("#buttons-view").append(btn);
  }

 }