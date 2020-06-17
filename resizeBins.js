function resizeBins(){
	d3.select("#updateGraph").on("mousedown", function() {
  	
	  	var sec = d3.select(this)
		    .classed("active", true);

		var horizontal = d3.mouse(sec.node())[0];
		var win = d3.select(window)
			.on("mousemove", draggableMove)
			.on("mouseup", function(){
				sec.classed("active", false);
		    	win.on("mousemove", null).on("mouseup", null);
		 	});
 	
		function draggableMove() {
		  	if(d3.mouse(sec.node())[0] + 20 < horizontal && bins < 20){
		  		bins = bins + 1;
		  		drawHistOrBarGraph(data, null, bins, false);
		  		horizontal = d3.mouse(sec.node())[0];
		  	}
		    else if(d3.mouse(sec.node())[0] - 20 > horizontal && bins > 5){
		  		bins = bins - 1;
		  		drawHistOrBarGraph(data, null, bins, false);
		  		horizontal = d3.mouse(sec.node())[0];
		  	}
		}
	}); 
}