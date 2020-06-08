
Plotly.d3.csv("wrangled_niccage.csv", function (rows) {
    // animationSpeed applied to duration and transition values 
    var animationSpeed = 350

    // This helper unpacks data from csv
    function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
    }
    var x = unpack(rows, 'title')
    var y = unpack(rows, 'numVotes')
    var year = unpack(rows, 'year')


    var data = [{
        type: "bar",
        x: x,
        y: y,
        text: year,
        hovertemplate: "Title: <b>%{x}</b>" + "<br>Year: <b>%{text}</b>" + "<br>Rating: <b>%{y}</b><extra></extra>"
    }]

    
    var layout = {
        //hardcoded the size to make sure it's in the correct proportion
        autosize: false,
        width: 1920,
        height: 900,
        title: "Number of Votes for each Nicolas Cage Film",
        titlefont: {
            size: 45,
            family: "serif"
        },
        font: {
            size: 12
        },
        xaxis: {
            title: "",
            rangemode: "tozero",
            // -1 to range to make sure first marker is not clipped
            range: [-1, 84],
            tickangle: 45
        },
        yaxis: {
            title: "Number of Votes",
            // range: [0, 10],
            rangemode: "tozero"
        },
        showlegend: false,
        annotations: [
            {
                text: "Hold down left-click on graph to zoom in on an area",
                showarrow: false,
                xanchor: "right",
                x: 84,
                y: 300,
                font: {
                    size: 10
                }
            }
        ],
    };

    Plotly.newPlot('datavis', data, layout, {displayModeBar: false}).then(function () {
        Plotly.addFrames('datavis', frames);
    });
    
})
