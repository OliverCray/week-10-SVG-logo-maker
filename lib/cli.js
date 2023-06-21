// Defines the required modules
const inquirer = require('inquirer')
const fsp = require ('fs/promises')
const path = require('path')
const questions =  require('./questions')
const { Circle, Square, Triangle } = require('./shapes')
const { SVGText, SVG } = require('./svg')

class CLI {
    constructor() {

    }
    // Calls inquirer
    run() {
        return inquirer
            // The user is asked each question from questions one by one
            .prompt(questions)
            .then((res) => {
                // Pass the generated SVG into a variable called output
                const output = this.generateSVG(res).render()

                // Create the SVG file based on the contents of the output variable
                return fsp.writeFile(path.join(__dirname, '..', 'output', 'logo.svg'), output)
            })
            .then(() => console.log('Your SVG logo has been successfully generated! ✔️\nYou can view your newly created SVG logo in the output folder'))
            .catch((err) => {
                console.error(err)
                console.error('Oops. Something went wrong.')
            })
    }
    // Generates an SVG based on the user's choices
    generateSVG(choices) {
        const svgText = new SVGText(choices.text, choices.textColour)

        // switch statement for returning appropriate SVG based on which shape the user chose
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

module.exports = CLI
