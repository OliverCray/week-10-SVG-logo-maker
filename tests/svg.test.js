const { SVGText, SVG } = require('../lib/svg')
const { Circle } = require('../lib/shapes')

test('should render an SVG element with dimensions 300 x 200, and that contains a circle element and a text element', () => {
    const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="purple"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">one</text></svg>'

    const circle = new Circle('purple')
    const svgText = new SVGText('one', 'white')
    const svg = new SVG(circle, svgText)
    const actualSVG = svg.render()

    expect(actualSVG).toEqual(expectedSVG)
})
