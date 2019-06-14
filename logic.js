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
    var tripKey = "AIzaSyC5AxjSx3IHdXy5Jb5iq-2Fx-ddPaNLRjs";
  	var tripURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=austin&inputtype=textquery&fields=photos,name,opening_hours,geometry&key=" + tripKey;
  
  	$.ajax({
      url: tripURL,
      method: "GET"
    }).then(function(response){
        console.log(response);
      });
  
		
          
}


// On click a selected movie...
$(document).on("click", "#movieBtn", displayTrip);
