let width = 500, height = 60;
let rectWidth = 20, rectHeight = 50;

let colormap1 = d3.select('#colormap1'),
    colormap2 = d3.select('#colormap2'),
    colormap3 = d3.select('#colormap3'),
    colormap4 = d3.select('#colormap4'),
    colormap5 = d3.select('#colormap5');

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let colormap1_svg = colormap1
    .append('svg')
    .attr('width', width)
    .attr('height', height);
let myColor1 = d3.scaleSequential()
    .domain(d3.extent(data))
    .interpolator(d3.piecewise(d3.interpolateLab, ["#0000ff", "#ff0000"]));
colormap1_svg
    .selectAll('colorRect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => {
        return rectWidth * i;
    })
    .attr('y', height / 2 - rectHeight / 2)
    .attr('width', rectWidth)
    .attr('height', rectHeight)
    .attr('fill', (d) => {
        return myColor1(d);
    });

let colormap2_svg = colormap2
    .append('svg')
    .attr('width', width)
    .attr('height', height);
let myColor2 = d3.scaleSequential()
    .domain(d3.extent(data))
    .interpolator(d3.piecewise(d3.interpolateLab, ["#0000ff", "#808080", "#ff0000"]));
colormap2_svg
    .selectAll('colorRect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => {
        return rectWidth * i;
    })
    .attr('y', height / 2 - rectHeight / 2)
    .attr('width', rectWidth)
    .attr('height', rectHeight)
    .attr('fill', (d) => {
        return myColor2(d);
    });

let colormap3_svg = colormap3
    .append('svg')
    .attr('width', width)
    .attr('height', height);
let myColor3 = d3.scaleSequential()
    .domain(d3.extent(data))
    .interpolator(d3.piecewise(d3.interpolateLab, ["#0000ff", "#80a9ff", "#dddddd", "#ff9675", "#ff0000"]));
colormap3_svg
    .selectAll('colorRect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => {
        return rectWidth * i;
    })
    .attr('y', height / 2 - rectHeight / 2)
    .attr('width', rectWidth)
    .attr('height', rectHeight)
    .attr('fill', (d) => {
        return myColor3(d);
    });

let colormap4_svg = colormap4
    .append('svg')
    .attr('width', width)
    .attr('height', height);
let myColor4 = d3.scaleSequential()
    .domain(d3.extent(data))
    .interpolator(d3.piecewise(d3.interpolateLab, ["#0000ff", "#00bfff", "#bbbbbb", "#ffbf00", "#ff0000"]));
colormap4_svg
    .selectAll('colorRect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => {
        return rectWidth * i;
    })
    .attr('y', height / 2 - rectHeight / 2)
    .attr('width', rectWidth)
    .attr('height', rectHeight)
    .attr('fill', (d) => {
        return myColor4(d);
    });


let colormap5_svg = colormap5
    .append('svg')
    .attr('width', width)
    .attr('height', height);
let myColor5 = d3.scaleSequential()
    .domain(d3.extent(data))
    .interpolator(d3.piecewise(d3.interpolateLab, ["#0000ff", "#0084ff", "#bb9db8", "#ffb000", "#ff0000"]));
colormap5_svg
    .selectAll('colorRect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d, i) => {
        return rectWidth * i;
    })
    .attr('y', height / 2 - rectHeight / 2)
    .attr('width', rectWidth)
    .attr('height', rectHeight)
    .attr('fill', (d) => {
        return myColor5(d);
    });
// var w = 300, h = 50;
//
// var key = d3.select("#colormap1")
//     .append("svg")
//     .attr("width", w)
//     .attr("height", h);
//
// var legend = key.append("defs")
//     .append("svg:linearGradient")
//     .attr("id", "gradient")
//     .attr("x1", "0%")
//     .attr("y1", "100%")
//     .attr("x2", "100%")
//     .attr("y2", "100%")
//     .attr("spreadMethod", "pad");
//
// legend.append("stop")
//     .attr("offset", "0%")
//     .attr("stop-color", "#f7fcf0")
//     .attr("stop-opacity", 1);
//
// legend.append("stop")
//     .attr("offset", "33%")
//     .attr("stop-color", "#bae4bc")
//     .attr("stop-opacity", 1);
//
// legend.append("stop")
//     .attr("offset", "66%")
//     .attr("stop-color", "#7bccc4")
//     .attr("stop-opacity", 1);
//
// legend.append("stop")
//     .attr("offset", "100%")
//     .attr("stop-color", "#084081")
//     .attr("stop-opacity", 1);
//
// key.append("rect")
//     .attr("width", w)
//     .attr("height", h - 30)
//     .style("fill", "url(#gradient)")
//     .attr("transform", "translate(0,10)");
//
// var y = d3.scaleLinear()
//     .range([300, 0])
//     .domain([68, 12]);
//
// var yAxis = d3.axisBottom()
//     .scale(y)
//     .ticks(5);
//
// key.append("g")
//     .attr("class", "y axis")
//     .attr("transform", "translate(0,30)")
//     .call(yAxis)
//     .append("text")
//     .attr("transform", "rotate(-90)")
//     .attr("y", 0)
//     .attr("dy", ".71em")
//     .style("text-anchor", "end")
//     .text("axis title");