window.onload=function(){
	document.getElementById ("variable").addEventListener ("click", displayHistogram, false);
}
function displayHistogram() {
	var isCategorical = false;
	var dataStr = document.getElementById("dataVariable");
	console.log(dataStr);
	var dataVal = dataStr.options[dataStr.selectedIndex].value;
	console.log(dataVal);
	if(dataVal == "numCritics"){
		data = numCriticsData;
		drawHistOrBarGraph(data,null, bins, isCategorical);
	}
	else if(dataVal == "duration"){
		data = durationData;
		label = 'Duration of the movie';
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data,null,bins, isCategorical);
	}
	else if(dataVal == "actor1FbLikes"){
		data = actor1FbLikesData;
		label = 'Actor 1 Facebook Likes';
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data,null, bins, isCategorical);
	}
	else if(dataVal == "actor2FbLikes"){
		data = actor2FbLikesData;
		label = 'Actor 2 Facebook Likes';
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data,null, bins, isCategorical);
	}
	else if(dataVal == "actor3FbLikes"){
		data = actor3FbLikesData;
		label = 'Actor 3 Facebook Likes';
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data,null, bins, isCategorical);
	}
	else if(dataVal == "directorFbLikes"){
		data = directorFbLikesData;
		label = 'Director Facebook Likes';
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data,null, bins, isCategorical);
	}
	else if(dataVal == "movieFbLikes"){
		data = movieFbLikesData;
		label = 'Movie Facebook Likes';
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data,null, bins, isCategorical);
	}
	else if(dataVal == "imdbScore"){
		data = imdbScoreData;
		label = 'IMDb Score of the Movie';
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data,null, bins, isCategorical);
	}
	else if(dataVal == "budget"){
		data = budgetData;
		label = 'Budget of the movie';
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data,null, bins, isCategorical);
	}
	else if(dataVal == "movieGross"){
		data = movieGrossData;
		label = 'Movie Gross on the box-office';
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data,null, bins, isCategorical);
	}
	else if(dataVal == "genre"){
		data = genreData;
		//document.getElementById("updateGraph").style.visibility="hidden";
		label = 'Genre of the movie';
		isCategorical = true;
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data,genreCount, bins, isCategorical);
	}
	else if(dataVal == "contentRating"){
		data = contentRatingData;
		label = 'Rating of the movie';
		isCategorical = true;
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data, contentRatingCount,bins, isCategorical);
	}
	else if(dataVal == "titleYear"){
		data = titleYearData;
		label = 'Year in which the movie released';
		isCategorical = true;
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data, titleYearCount, bins, isCategorical);
	}
	else if(dataVal == "country"){
		data = countryData;
		label = 'Country';
		isCategorical = true;
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data, countryCount, bins, isCategorical);
	}
	else if(dataVal == "language"){
		data = languageData;
		label = 'Language of the movie';
		isCategorical = true;
		document.getElementById("xWriting").innerHTML = label;
		drawHistOrBarGraph(data, languageCount, bins, isCategorical);
	}
	
	if(isCategorical){
		document.getElementById("updateGraph").style.visibility="hidden";
	}
	else{
		document.getElementById("updateGraph").style.visibility="visible";
	}
	
}
// Numerical Variables
var data = []; 
var bins = 20;
var numCriticsData = [];
var durationData = [];
var actor1FbLikesData = [];
var actor2FbLikesData = [];
var actor3FbLikesData = [];
var directorFbLikesData = [];
var movieFbLikesData = [];
var imdbScoreData = [];
var budgetData = [];
var movieGrossData = [];

// Categorical variables
var languageData = [];
var languageCount = []
var countryData = [];
var countryCount = [];
var contentRatingData = [];
var contentRatingCount = [];
var titleYearData = [];
var titleYearCount = [];
var genreData = [];
var genreCount = [];



// Data loading from CSV
d3.csv("moviemetadata-imdb-5000-movie-dataset-QueryResult.csv", function(csvdata) {
    csvdata.map(function(d) {
        numCriticsData.push(+d.num_critic_for_reviews);
        durationData.push(+d.duration);
        actor1FbLikesData.push(+d.actor_1_facebook_likes);
        actor2FbLikesData.push(+d.actor_2_facebook_likes);
		actor3FbLikesData.push(+d.actor_3_facebook_likes);
		directorFbLikesData.push(+d.director_facebook_likes);
		actor3FbLikesData.push(+d.actor_3_facebook_likes);
		actor3FbLikesData.push(+d.actor_3_facebook_likes);
		movieFbLikesData.push(+d.movie_facebook_likes);
		imdbScoreData.push(+d.imdb_score);
		budgetData.push(+d.budget);
		movieGrossData.push(+d.gross);
    })
    
    data = numCriticsData;
    drawHistOrBarGraph(numCriticsData, null, bins, false);
});


d3.csv("language.csv", function(csvdata) {
    csvdata.map(function(d) {
		languageData.push(d.language);
		languageCount.push(+d.counts);
    })
});

d3.csv("country.csv", function(csvdata) {
    csvdata.map(function(d) {
		countryData.push(d.country);
		countryCount.push(+d.counts);
    })
});

d3.csv("content_rating.csv", function(csvdata) {
    csvdata.map(function(d) {
		contentRatingData.push(d.content_rating);
		contentRatingCount.push(+d.counts);
    })
});

d3.csv("title_year.csv", function(csvdata) {
    csvdata.map(function(d) {
		titleYearData.push(+d.year);
		titleYearCount.push(+d.counts);
    })
});

d3.csv("genre.csv", function(csvdata) {
    csvdata.map(function(d) {
		genreData.push(d.genre);
		genreCount.push(+d.counts);
    })
});


function drawHistOrBarGraph(data, categoricalCount, bins, isCategorical){

	if(isCategorical){
		document.getElementById("bar").innerHTML = '';
		generateBarGraph(categoricalCount, data);
	}
	else{
    var binWidth = (d3.max(data) - d3.min(data))/(bins-1);

    frequency = Array.apply(null, Array(bins)).map(Number.prototype.valueOf,0);
    binValues = [];

    data.forEach(function(d){
        frequency[Math.floor((d - d3.min(data))/binWidth)]++;
    })
	
    var min = d3.min(data);
    for(i=0; i<bins; i++){
    	var end = (min+binWidth);
		binValue = (min+end)/2;
		binValue = binValue.toFixed(1);
    	binValues.push(binValue);
    	min = end;
    }
	
	document.getElementById("bar").innerHTML = '';
    generateBarGraph(frequency, binValues);
    resizeBins();
	}
}