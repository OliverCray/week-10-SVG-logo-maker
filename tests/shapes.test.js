const { circle, square, triangle, Circle, Triangle } = require('../lib/shapes')

describe('Triangle', () => {
    test('should render svg for a blue triangle', () => {
        const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>'
        const triangle = new Triangle()
        triangle.setColour('blue')
        const actualSVG = triangle.render()
        expect(actualSVG).toEqual(expectedSVG)
    })
})