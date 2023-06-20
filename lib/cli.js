const inquirer = require('inquirer')
const fsp = require ('fs/promises')
const path = require('path')
const questions =  require('./questions')
const { Circle, Square, Triangle } = require('./shapes')
const { SVGText, SVG } = require('./svg')

class CLI {
    constructor() {

    }
    run() {
        return inquirer
            .prompt(questions)
            .then((res) => {
                const output = this.generateSVG(res).render()

                return fsp.writeFile(path.join(__dirname, '..', 'output', 'logo.svg', output))
            })
            .then(() => console.log('Your SVG logo has been successfully generated! ✔️'))
            .catch((err) => {
                console.error(err)
                console.error('Oops. Something went wrong.')
            })
    }
    generateSVG(choices) {
        const svgText = new SVGText(choices.text, choices.textColour)

        switch (choices.shape) {
            case 'circle':
                const circle = new Circle(choices.shapeColour)
                return new SVG(circle, svgText)
            case 'square':
                const square = new Square(choices.shapeColour)
                return new SVG(square, svgText)
            case 'triangle':
                const triangle = new Triangle(choices.shapeColour)
                return new SVG(triangle, svgText)
        }
    }
}
