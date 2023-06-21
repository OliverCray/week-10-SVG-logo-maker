const { Circle, Square, Triangle } = require('../lib/shapes')

describe('Triangle', () => {
    test('should render svg for a blue polygon element', () => {
        const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
        const triangle = new Triangle()
        triangle.setColour('blue')
        const actualSVG = triangle.render()
        expect(actualSVG).toEqual(expectedSVG)
    })
})

describe('Circle', () => {
    test('should render svg for a cyan circle element', () => {
        const expectedSVG = '<circle cx="150" cy="100" r="80" fill="cyan"/>'
        const circle = new Circle()
        circle.setColour('cyan')
        const actualSVG = circle.render()
        expect(actualSVG).toEqual(expectedSVG)
    })
})

describe('Square', () => {
    test('should render svg for a bisque rect element', () => {
        const expectedSVG = '<rect x="90" y="40" width="120" height="120" fill="bisque"/>'
        const square = new Square()
        square.setColour('bisque')
        const actualSVG = square.render()
        expect(actualSVG).toEqual(expectedSVG)
    })
})