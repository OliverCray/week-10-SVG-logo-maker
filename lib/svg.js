// SVGText class, defines the text that will appear on the SVG as well as the text colour and contains a render method that returns this element
class SVGText {
    constructor(text, colour) {
        this.text = text
        this.colour = colour
    } 
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colour}">${this.text}</text>`
    }
}

// SVG class, defines the shape and text and contains a render method that returns the completted svg element
class SVG {
    constructor (shape, svgtext) {
        this.shape = shape
        this.svgtext = svgtext
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.svgtext.render()}</svg>`
    }
}

module.exports = { SVGText, SVG }