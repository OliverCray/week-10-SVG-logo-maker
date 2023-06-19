class SVGText {
    constructor(text, colour) {
        this.colour = colour
        this.text = text
    } 
    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.colour}>${this.text}</text>`
    }
}

class SVG {
    constructor (shape, svgtext) {
        this.shape = shape
        this.svgtext = svgtext
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape.render()}${this.svgtext.render()}</svg>`
    }
}