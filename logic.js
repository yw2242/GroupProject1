// Comment everything you code!!

var keyword = "";

// On click search button...
$("#search-btn").on("click", function(event) {
    event.preventDefault();
    //Gets the keyword from the search input box
    keyword = $("#search-input").val();

		//OMDB Api Key
    var movieKey = "eb91f19f";  
    var searchUrl = "https://www.omdbapi.com/?apikey=" + movieKey + "&s=" + keyword + "&plot=full&r=json";

		$.ajax({
      url: searchUrl,
      method: GET
    }).then(function(response){
      console.log(response);
    });
		
		
		//If movie is animated, don't show it

});





// Travel API
function displayTrip() {
    var tripKey = "";
  	var tripURL = "";
  
  	$.ajax({
      url: tripURL,
      method: GET
    })
  
		
          
}


// On click a selected movie...
$(document).on("click", ".movieBtn", displayTrip);
