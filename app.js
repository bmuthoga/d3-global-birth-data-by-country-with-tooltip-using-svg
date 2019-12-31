let width = 500
let height = 500
let padding = 30

let yScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
                .range([height - padding, padding])

let xScale = d3.scaleLinear()
                .domain(d3.extent(birthData2011, d => d.births / d.population))
                .range([padding, width - padding])

let xAxis = d3.axisBottom(xScale)
              .tickSize(-height + 2 * padding)
              .tickSizeOuter(0)

let yAxis = d3.axisLeft(yScale)
              .tickSize(-width + 2 * padding)
              .tickSizeOuter(0)

let colorScale = d3.scaleLinear()
                    .domain(d3.extent(birthData2011, d => d.population / d.area))
                    .range(['limegreen', 'black'])

let radiusScale = d3.scaleLinear()
                    .domain(d3.extent(birthData2011, d => d.births))
                    .range([2, 40])

let tooltip = d3.select('body')
                .append('div')
                  .classed('tooltip', true)

d3.select('svg')
  .append('g')
    .call(xAxis)
    .attr('transform', `translate(0, ${height - padding})`)

d3.select('svg')
  .append('g')
    .call(yAxis)
    .attr('transform', `translate(${padding}, 0)`)

d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .selectAll('circle')
  .data(birthData2011)
  .enter()
  .append('circle')
    .attr('cx', d => xScale(d.births / d.population))
    .attr('cy', d => yScale(d.lifeExpectancy))
    .attr('r', d => radiusScale(d.births))
    .attr('fill', d => colorScale(d.population / d.area))
    .on('mousemove', showTooltip)
    .on('mouseout', hideTooltip)
    .on('touchstart', showTooltip)
    .on('touchend', hideTooltip)

d3.select('svg')
  .append('text')
    .attr('x', width / 2)
    .attr('y', height - padding)
    .attr('dy', '1.5em')
    .style('text-anchor', 'middle')
    .text('Births per Capita')

d3.select('svg')
  .append('text')
    .attr('x', width / 2)
    .attr('y', padding)
    .attr('dy', '-0.5em')
    .style('text-anchor', 'middle')
    .style('font-size', '1.5em')
    .text('Data on Births by Country in 2011')

d3.select('svg')
  .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', padding)
    .attr('x', -height / 2)
    .attr('dy', '-1.2em')
    .style('text-anchor', 'middle')
    .text('Life Expectancy')

function showTooltip (d) {
  tooltip
    .style('opacity', 1)
    .style('top', `${d3.event.y + 25}px`)
    .style('left', `${d3.event.x - (tooltip.node().offsetWidth / 2)}px`)
    .html(`
      <p>Region: ${d.region}</p>
      <p>Births: ${d.births.toLocaleString()}</p>
      <p>Population: ${d.population.toLocaleString()}</p>
      <p>Area: ${d.area}</p>
      <p>Life Expectancy: ${d.lifeExpectancy}</p>
    `)
}

function hideTooltip() {
  tooltip
    .style('opacity', 0)
}
