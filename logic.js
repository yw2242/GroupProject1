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

             
            var poster = results.poster.url;
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

// Function that searches Reddit for keyword
function redditSearch() {
    
    var redditURL = "https://www.reddit.com/search.json?&sort=top&limit=25&t=all&self=yes&q=" + keyword + " movie";

    $.ajax({
        url: redditURL,
        method: "GET"
    }).then(function (response) {
        console.log(response.data.children);
        displayReddit(response);
    });

}

function displayReddit(response) {
    //This variable keeps track of the # of posts we've added
    var postCount = 0;

    //While the number of posts is less than 5...
    while (postCount < 5) {

        //Run this for each function that will append the reddit image, link and title to the page
        response.data.children.forEach(function (post) {

            //variable automatically set to false
            var isImage = false;

            //This function checks if the url of the post is an image
            function isUrlImage(url) {
                //make sure we remove any nasty GET params 
                url = url.split('?')[0];
                //moving on, split the uri into parts that had dots before them
                var parts = url.split('.');
                //get the last part ( should be the extension )
                var extension = parts[parts.length - 1];
                //define some image types to test against
                var imageTypes = ['jpg', 'jpeg', 'tiff', 'png', 'gif', 'bmp'];
                //check if the extension matches anything in the list.
                if (imageTypes.indexOf(extension) !== -1) {
                    isImage = true;
                    return true;
                } else {
                    isImage = false;
                    return false;
                }
            }

            //Here we call the isUriImage function for each of the posts' urls
            isUrlImage(post.data.url);

            //While the url is an image and the post count is less than 5...
            if (isImage === true && postCount < 5) {

                // create these variables using the still image and gif urls
                var title = post.data.title;
                var subreddit = post.data.subreddit;
                var imgURL = post.data.url;
                var thumbnail = post.data.thumbnail;
                var count = 0;

                console.log("Title: " + title + "  Subreddit: " + subreddit + "  URL: " + imgURL + "  Thumbnail: " + thumbnail);

                // makes new image tag for each gif and adds the following attr and class
                var image = $("<img>");
                image.attr("src", imgURL);
                image.addClass("class", "reddit-img");
                image.attr("id", 'result' + count);

                //New div and paragraph information
                var newp = $("<p class='post-tag'> Title: " + title + "<br></br> Subreddit: " + subreddit + "</p>");
                var newa = $("<a href=" + imgURL + ">")
                var newDiv = $("<div class='col-lg-3 reddit-result-col'>");
                newDiv.attr("id", 'div-result' + count);

                // Append(image) to reddit results row
                $("#reddit-results-row").append(newa);
                $(newa).append(newDiv);
                $(newDiv).append(image);
                $(newDiv).append(newp);
                console.log("Count = " + count);
                count++; 
                postCount++
            } else {
                return;
            }
            console.log("Post Count =" + postCount);
        })
    }

}

// On click search button...
$("#submit-btn").on("click", function () {
    event.preventDefault();

    keyword = $("#search-input").val();
    keyword = keyword.replace(" ", "+");


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





// Reddit API
function displayTrip() {
    var movieTitle = keyword;
    var redditURL = "https://www.reddit.com/search.json?&sort=top&t=all&g=" + movieTitle;

    $.ajax({
        url: redditURL,
        method: GET
    })



}





// On click a selected movie...
// $(document).on("click", ".movieBtn", displayTrip);
