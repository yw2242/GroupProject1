// Comment everything you code!!

var keyword = "";



// This function searches OMDB for the keyword
function omdbSearch() {
    //OMDB Api Key
    var movieKey = "eb91f19f";
    var searchUrl = "https://www.omdbapi.com/?apikey=" + movieKey + "&t=" + keyword + "&plot=full&r=json";

    $.ajax({
        url: searchUrl,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        console.log(response);

             
            var poster = results.poster.fixed_height_still.url;
            var moviePoster = $("#movie-poster");
                moviePoster.attr("src", poster);

            var title = results.title;
            var movieTitle = $("#movie-title").text("Title: " + title);  

            var actors = results.actors;
            var movieActors = $("movie-actors").text("Actors: " + actors);

            var year = results.year;
            var movieYear = $("#movie-year").text("Year: " + year);

            $("#movie-row").prepend(moviePoster);
            $("#movie-row").prepend(movieTitle);
            $("#movie-row").prepend(movieActors);
            $("#movie-row").prepend(movieYear);

    });
}

// On click search button...
$("#submit-btn").on("click", function () {
    event.preventDefault();
    
    keyword = $("#search-input").val();

    console.log("I've been clicked");

    omdbSearch();

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
    var movieTitle = keyword;
    var redditURL = "https://www.reddit.com/search.json?&sort=top&t=all&g=" + movieTitle;

    $.ajax({
        url: redditURL,
        method: GET
    })



}


//On click a selected movie...
$(document).on("click", ".movieBtn", displayTrip);
