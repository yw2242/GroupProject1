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
        // location = response.data.country;
        console.log(response);
    });
}

// Function that searches Reddit for keyword
function redditSearch() {
    var movieTitle = keyword;
    var redditURL = "https://www.reddit.com/search.json?&sort=top&limit=5&t=all&q=" + movieTitle;

    $.ajax({
        url: redditURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data.children);
        displayReddit(response);
    });

}

function displayReddit(response) {
    
    response.data.children.forEach(function (post) {
        // create these variables using the still image and gif urls
        var title = post.data.title;
        var subreddit = post.data.subreddit;
        var imageURL = post.data.url;
        var thumbnail = post.data.thumbnail;

        console.log(title + subreddit + imageURL + thumbnail);

        //makes new image tag for each gif and adds the following attr and class
        // var image = $("<img>");
        // image.attr("src", stillURL);
        // image.attr("data-state", "still");
        // image.attr("data-still", stillURL);
        // image.attr("data-play", gifURL);
        // image.addClass("giphy-element");

        // //New div and paragraph information
        // var infoHTML = $("<p class='gif-tag'> Rating: " + rating + "<br></br> Title: " + title+ "</p>");
        // var newDiv = $("<div>");

        // // Append(image) to gif block
        // $("#gif-block").append(newDiv).addClass("gif-div");
        // $(newDiv).append(image);
        // $(newDiv).append(infoHTML);
    })

}

// On click search button...
$("#submit-btn").on("click", function () {
    event.preventDefault();
    
    keyword = $("#search-input").val();

    console.log("I've been clicked");

    omdbSearch();
    redditSearch();

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






// On click a selected movie...
// $(document).on("click", ".movieBtn", displayTrip);
