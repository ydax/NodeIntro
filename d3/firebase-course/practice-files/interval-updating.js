//////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// This sets up our visualization ////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

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

// create a linear scale for the y axis
const y = d3.scaleLinear()
    .range([graphHeight, 0]); // display range

// const min = d3.min(data, d => d.orders) // returns the LOWEST value from the orders property
// const max = d3.max(data, d => d.orders) // returns the HIGHEST value from the orders property
// const extent = d3.extent(data, d => d.orders) // returns an array with the lowest, then highest

// create a band scale
const x = d3.scaleBand()
    // for mapping, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    .range([0, 500])
    .paddingInner(.2) // padding between bars
    .paddingOuter(.2) // padding from max x range

// create the axes
const xAxis = d3.axisBottom(x);
const yAxis = d3.axisLeft(y)
    .ticks(3)
    //         ^----  # of ticks d3 will try to fit to the axis
    .tickFormat(d => d + ' orders');
//                  ^---  concat w/ d to set names for quantities

// update x axis text
xAxisGroup.selectAll('text')
    .attr('transform', 'rotate(-40)') // rotates the text
    .attr('text-anchor', 'end') // options are start, middle, end
    .attr('fill', 'purple');


//////////////////////////////////////////////////////////////////////////////////////////
//////////////// Interaction w/ database and dynamic updating ////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// update function
const update = (data) => {

    // update the scale domains when new data hits the update function
    y.domain([0, d3.max(data, d => d.orders)]);
    x.domain(data.map(item => item.name));

    // join data to rects
    const rects = graph.selectAll('rect') // grabs all the rect in the DOM (including exit selection)
        .data(data);

    // remove exit selection
    rects.exit().remove();

    // uipdate current shapes in DOM
    rects.attr('width', x.bandwidth)
        .attr('height', d => graphHeight - y(d.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        .attr('y', d => y(d.orders));

    // append the enter selection to the DOM
    rects.enter()
        .append('rect')
        .attr('width', x.bandwidth)
        .attr('height', d => graphHeight - y(d.orders))
        .attr('fill', 'orange')
        .attr('x', d => x(d.name))
        .attr('y', d => y(d.orders));

    // call axes
    xAxisGroup.call(xAxis);
    yAxisGroup.call(yAxis);

}

// get the data from firestore
db.collection('dishes').get().then(res => {
    // get response from Firebase --^

    var data = []; // define the data
    // cycle through each element of the data

    res.docs.forEach(doc => {
        //   ^-- each element is called a "doc" in Firebase
        data.push(doc.data());
    });

    update(data); // update the image based on the data via update()    

    d3.interval(() => {
        // ^-- timer method provided by d3
        data[0].orders += 50;
        // update(data);
    }, 3000)
    //   ^--- 1000 milliseconds = 1 second

})