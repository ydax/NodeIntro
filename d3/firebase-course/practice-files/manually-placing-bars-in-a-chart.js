// select svg container
const svg = d3.select('svg');

d3.json('menu.json').then(data => {

            // create a linear scale for the y axis
            const y = d3.scaleLinear()
                .domain([0, 1000]) // input range
                .range([0, 500]) // display range

            console.log(y(400));
            console.log(y(0));
            console.log(y(900));

            // join data to rects
            const rects = svg.selectAll('rect') // grabs all the rect in the DOM
                .data(data)

            rects.attr('width', 50)
                .attr('height', d => y(d.orders))
                .attr('fill', 'orange')
                // use index to place rects along x axis
                .attr('x', (d, i) => i * 70)

            // convert virtual elements
            rects.enter()
                .append('rect')
                .attr('width', 50)
                .attr('height', d => y(d.orders)
                    .attr('fill', 'orange')
                    .attr('x', (d, i) => i * 70)

                })