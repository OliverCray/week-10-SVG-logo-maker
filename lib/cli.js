const inquirer = require('inquirer')
const fsp = require ('fs/promises')
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

            })
    }
    generateSVG(answers) {
        const svgText = new SVGText(answers.text, answers.textColour)

        switch (answers.shape) {
            case 'circle':
                const circle = new Circle(answers.shapeColour)
                return new SVG(circle, svgText)
            case 'square':
                const square = new Square(answers.shapeColour)
                return new SVG(square, svgText)
            case 'triangle':
                const triangle = new Triangle(answers.shapeColour)
                return new SVG(triangle, svgText)
        }
    }
}
