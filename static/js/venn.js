var width = 960,
    height = 400;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

svg.append("circle")
    .attr("cx", 350)
    .attr("cy", 200)
    .attr("r", 200)
    .style("fill", "orange")
    .style("fill-opacity", ".5");

svg.append("circle")
    .attr("cx", 550)
    .attr("cy", 200)
    .attr("r", 200)
    .style("fill", "steelblue")
    .style("fill-opacity", ".5");

svg.append("circle")
    .attr("cx", 450)
    .attr("cy", 400)
    .attr("r", 200)
    .style("fill", "green")
    .style("fill-opacity", ".5");