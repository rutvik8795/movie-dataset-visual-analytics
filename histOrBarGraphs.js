var margin = {top: 20, right: 40, bottom: 30, left: 250};
var w = 1350; 
var h = 600; 
var padding = 10;
     
w = w - margin.left - margin.right;
h = h - margin.top - margin.bottom;


function generateBarGraph(frequency, xValues){

	var x = d3.scale.ordinal()
		.rangeRoundBands([0, w], 0.5);

	var y = d3.scale.linear()
		.range([h, 0]);

	x.domain(xValues).rangePoints([0, w]);

	y.domain([0, d3.max(frequency, function(d) {
			return d;
		})]);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(10);
	
	var color = d3.scale.category10();

    var sHeight = (0.9*h/d3.max(frequency));
    var svg = d3.select("#bar")
        .append("svg")
        .attr("width", w + margin.right+ margin.left )
       .attr("height", h + margin.bottom + margin.top )
       .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
	   
    svg.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "blanchedalmond");

	
	svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + h + ")")
		
    svg.append("g")
        .attr("class", "y axis")
        .append("text") 
        .attr("transform", "translate(500,0)")
        .attr("y", 10)
        .attr("dy", ".65em")


    svg.select(".y.axis").call(yAxis);
    svg.select(".x.axis").call(xAxis);

    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
    
    svg.call(tip);
	
    svg.selectAll(".bar")
    .data(frequency)
    .enter().append("rect")
    .attr("class", "bar")
    .attr('fill', function(d,i){
         return color(i);
    })
    .attr("x", function(d, i) {
            return i * (w / frequency.length);
    })
    .attr("y", function(d) {
            return h - (d * sHeight);
    })
    .attr("width", w / frequency.length - padding)
    .attr("height", function(d) {
        return d * sHeight;
	})
	
		.on("mouseout", function(d,i) {
            d3.select(this)
            .attr("x",i * (w / frequency.length))         
            .attr("y",parseInt(d3.select(this).attr("y")) + 15)            
            .attr("width", w / frequency.length - padding)
            .attr("height",parseInt(d3.select(this).attr("height")) - 15)  

            tip.hide();
        })
        
        .on("mouseover", function(d,i) {
            d3.select(this)
            .attr("x",i * (w / frequency.length) - 5)
            .attr("y", parseInt(d3.select(this).attr("y")) - 15)         
            .attr("width",w / frequency.length - padding + 10)
            .attr("height",parseInt(d3.select(this).attr("height")) + 15);
            
            tip.html( "<span style='color:black'>" + d + "</span>");
            tip.show();

        })
        
        
}