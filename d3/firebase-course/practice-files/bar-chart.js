// select svg container
const svg = d3.select('.canvas') // selects the canvas div in the HTML file
    .append('svg') // appends an SVG tag
    .attr('width', 600) // sets the SVG canvas size
    .attr('height', 600); // sets the SVG canvas size

// create margins and deminsions
const margin = {
    top: 20,
    right: 20,
    bottom: 100,
    left: 100
};
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

const graph = svg.append('g')
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

graph.append('rect');
graph.append('rect');
graph.append('rect');
graph.append('rect');
graph.append('rect');
graph.append('rect');
graph.append('rect');

const xAxisGroup = graph.append('g')
    .attr('transform', `translate(0, ${graphHeight})`);
// # px from left ------------^   ^--- # px down

const yAxisGroup = graph.append('g');

db.collection('dishes').get().then(res => {

    var data = [];
    res.docs.forEach(doc => {
        data.push(doc.data());
    });

    // create a linear scale for the y axis
    const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.orders)]) // input range
        .range([graphHeight, 0]); // display range

    // const min = d3.min(data, d => d.orders) // returns the LOWEST value from the orders property
    // const max = d3.max(data, d => d.orders) // returns the HIGHEST value from the orders property
    // const extent = d3.extent(data, d => d.orders) // returns an array with the lowest, then highest

    // console.log(min, max, extent)

    // create a band scale
    const x = d3.scaleBand()
        // for mapping, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
        .domain(data.map(item => item.name))
        .range([0, 500])
        // padding between bars
        .paddingInner(.2)
        // padding from max x range
        .paddingOuter(.2)

    // join data to rects
    const rects = graph.selectAll('rect') // grabs all the rect in the DOM
        .data(data);

    console.log(rects)

    // rects.attr('width', x.bandwidth)
    //     .attr('height', d => graphHeight - y(d.orders))
    //     .attr('fill', 'orange')
    //     // use index to place rects along x axis
    //     .attr('x', d => x(d.name))
    //     .attr('y', d => y(d.orders));

    // // convert virtual elements
    // rects.enter()
    //     .append('rect')
    //     // width now accesses the bandwidth property
    //     .attr('width', x.bandwidth)
    //     .attr('height', d => graphHeight - y(d.orders))
    //     .attr('fill', 'orange')
    //     // location on x axis set by passing name into x scaling function
    //     .attr('x', d => x(d.name))
    //     .attr('y', d => y(d.orders));

    // create and call the axes
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y)
        .ticks(3)
        //         ^----  # of ticks d3 will try to fit to the axis
        .tickFormat(d => d + ' orders');
    //                  ^---  concat w/ d to set names for quantities

    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

    // rotate the x labels
    xAxisGroup.selectAll('text')
        .attr('transform', 'rotate(-40)') // rotates the text
        .attr('text-anchor', 'end') // options are start, middle, end
        .attr('fill', 'purple');
})