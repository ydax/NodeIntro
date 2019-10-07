const data = [{
        width: 200,
        height: 100,
        fill: 'purple'
    },
    {
        width: 100,
        height: 60,
        fill: 'pink'
    },
    {
        width: 50,
        height: 30,
        fill: 'red'
    },
];

// select svg container
const svg = d3.select('svg');

d3.json('planets.json') // identify the path to the data (usually will be stored externally)
    .then(data => { // callback executes when the data is returned (promise)
        const circs = svg.selectAll('circle') // all we're doing is joining data, so this will create an enter selection of circles
            .data(data) // collects data from the JSON file

        // add attributes to circles in the DOM
        circs.attr('cy', 200)
            .attr('cx', d => d.distance)
            .attr('r', d => d.radius)
            .attr('fill', d => d.fill)

        // append the enter selection to the DOM
        circs.enter()
            .append('circle')
            .attr('cy', 200)
            .attr('cx', d => d.distance)
            .attr('r', d => d.radius)
            .attr('fill', d => d.fill)

    })