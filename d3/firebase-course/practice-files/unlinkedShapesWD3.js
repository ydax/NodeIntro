/* Link to the code files for the course:
https: //github.com/iamshaunjp/data-ui-with-d3-firebase
*/

const canvas = d3.select('.canvas');
//   signals class name --^  ^-- name set in div

const svg = canvas.append('svg') // stores the svg element inside the canvas as a variable
    .attr('height', 600)
    .attr('width', 600);

const group = svg.append('g') // g for 'group"
    // the translate method takes x as the first param, y as the second
    .attr('transform', 'translate(100,100)');

group.append('rect') // demonstrates chaining of attributes using attr
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'blue')
    .attr('x', 20)
    .attr('y', 20)
group.append('circle')
    .attr('r', 50)
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('fill', 'pink');
group.append('line')
    .attr('x1', 370)
    .attr('x2', 400)
    .attr('y1', 20)
    .attr('y2', 120)
    .attr('stroke', 'red');

svg.append('text')
    .attr('x', 20) // 20 px from the left
    .attr('y', 200) // 200 px from the top
    .attr('fill', 'grey')
    .text('Hello Davis!') // sets the text iteslf
    .style('font-family', 'arial'); //used to apply CSS styling to the text
