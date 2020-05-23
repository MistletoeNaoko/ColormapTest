// Variable for innovative view

var vis = {};

queue()
    .defer(d3.csv,"data/transformed_blazar_1.csv")
    .await(createVis);

function createVis(error, data) {
    if (error) {
        console.log(error);
    }
    //Convert text to numbers.
    data.forEach(function(d, i){
        d['index'] = i;
        d['Flx(V)'] = +d['Flx(V)'];
        d['V-J'] = +d['V-J'];
        d['color-val'] = '';
        d['color-val-lab'] = '';
        d['Flx(V)_transformed'] = +d['Flx(V)_transformed'];
        d['V-J_transformed'] = +d['V-J_transformed'];
        // TO BE UPDATED. I chose MEDIAN TO MAKE V - J VALUES BINARY
        if (d['V-J_transformed'] > 0.5){d['color'] = 210 } else {d['color'] = 0};
    });
    // Sort data by time in ascending order
   //  data.sort(function(a, b){
   //      if(a['color'] < b['color']) return -1;
   //      if(a['color'] > b['color']) return 1;
   //          if (a['Flx(V)'] < b['Flx(V)']) return -1;
   //          if (a['Flx(V)'] > b['Flx(V)']) return 1;
   // });
    data.sort(function(a, b){
        if(a['V-J'] < b['V-J']) return -1;
        if(a['V-J'] > b['V-J']) return 1;
        if (a['Flx(V)'] < b['Flx(V)']) return -1;
        if (a['Flx(V)'] > b['Flx(V)']   ) return 1;
    });

    vis.data = data;

    var table = d3.selectAll('#color_table')
        .append('table')
        .attr('id', 'sample_table')
        .attr('class','display')
        .attr('style','width:70%;');

    var colnames = ['Flx(V)','V-J','color-val', 'color-val-lab'];

//Define simple color mapping using linear scales
    var sequentialScale = d3.scaleSequential()
        .domain(d3.extent(data, function(d){return d['V-J']}))
        // .interpolator(d3.interpolateRgb("coral", "cornflowerblue"))
        .interpolator(d3.interpolateLab("red", "steelblue"))
        // .interpolator(d3.piecewise(d3.interpolateLab, ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "rgb(0, 138, 188)", "rgb(0, 122, 189)", "rgb(0, 104, 182)", "rgb(42, 85, 168)"]))
        .clamp(true);

//Create table headers
    table.append('thead').append('tr')
        .selectAll('th')
        .data(colnames).enter()
        .append('th')
        .attr('id', function(d,i){ return 'id-'+i;})
        .text(function (colnames) { return colnames; });

    // table.selectAll('th').on('click', function(d,i){
    //     var sort_key = d3.select(this).attr("id").split('-')[1];
    //     sort_col = colnames[sort_key];
    //     data.sort(function(a, b){return a[sort_col] - b[sort_col]});
    //     console.log(data);});

//Create table values or rows
    intensityscale = d3.scaleLinear()
        .domain(d3.extent(data, function(d){return d['Flx(V)_transformed']})).nice()
        .range([30, 90]);

// create a row for each object in the data
    var rows = table.selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    // create a cell in each row for each column
    var cells = rows.selectAll("td")
        .data(function (row) {
            return colnames.map(function (column) {
                return { column: column, value: row[column] };
            });
        })
        .enter()
        .append("td")
        .attr("style", "font-family: 'Lato'")
        .attr("class", function(d,i){return 'col'+i})
        .html(function(d) { return d.value; });


    // Return background color
    table.selectAll('.col2')
        .attr("style",
            function (d,i) {
                // console.log(d3.color('hsl(' + data[i]['color'] +', 100%,' + intensityscale(data[i]['Flx(V)_transformed']) + '%)').rgb());
                // console.log(d3.color('hsl(' + data[i]['color'] +', 0%,' + Math.round(intensityscale(data[i]['Flx(V)_transformed'])) + '%)').rgb());
                return 'background-color:'+
                    d3.color('hsl(' + data[i]['color'] +', 40%,' + Math.round(intensityscale(data[i]['Flx(V)_transformed'])) + '%)').rgb();
                // return intensityscale(data[i]['Flx(V)_transformed']);
                // return d3.color('hsl(120, 50%, 20%)');

            });

    // Return background color
    table.selectAll('.col3')
        .attr("style",
            function (d,i) {
            // console.log(d3.hsl(sequentialScale(data[i]['V-J'])).h);
            var hue = d3.hsl(sequentialScale(data[i]['V-J'])).h;
                // console.log(d3.color('hsl(' + data[i]['color'] +', 100%,' + intensityscale(data[i]['Flx(V)_transformed']) + '%)').rgb());
                // console.log(d3.color('hsl(' + data[i]['color'] +', 0%,' + Math.round(intensityscale(data[i]['Flx(V)_transformed'])) + '%)').rgb());
                return 'background-color:'+
                    d3.color('hsl(' + hue +', 40%,' + Math.round(intensityscale(data[i]['Flx(V)_transformed'])) + '%)').rgb();
                // sequentialScale(data[i]['V-J']);


            });

};
