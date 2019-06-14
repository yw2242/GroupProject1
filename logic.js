// Comment everything you code!!

var keyword = "";
var location = "";

// This function searches OMDB for the keyword
function omdbSearch(keyword) {
    //OMDB Api Key
    var movieKey = "eb91f19f";
    var searchUrl = "https://www.omdbapi.com/?apikey=" + movieKey + "&t=" + keyword + "&plot=full&r=json";

    $.ajax({
        url: searchUrl,
        method: "GET"
    }).then(function (response) {
        location = response.data.country;
        console.log(response + response.data.country);
    });
}

// On click search button...
$("#submit-btn").on("click", function () {
    event.preventDefault();
    
    keyword = $("#search-input").val();

    console.log("I've been clicked");

    omdbSearch(keyword);

    //Results populate search page dynamically with the first ten OMDB results
        //If movie is animated, don't show it
        //When a user clicks on the div of a movie...
        //The Movie title of that div will be put into a new keyword and...
        //A new AJAX call with the OMDB Title Search will happen
        //User will be taken to the movie page
            //Poster will be dislayed
            //Title Populated to page
            //Actors Populated to Page
            //Year Populated to Page
            //Plot Populated to Page

});





// Reddit API
function displayTrip() {
    var movieTitle = "";
    var redditURL = "https://www.reddit.com/search.json?&sort=top&t=all&g=" + movieTitle;

    $.ajax({
        url: redditURL,
        method: GET
    })



}


On click a selected movie...
$(document).on("click", ".movieBtn", displayTrip);
