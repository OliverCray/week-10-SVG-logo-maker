class Shape {
    constructor(colour = '#000000') {
        this.colour = colour
    }
    setColour(colour) {
        this.colour = colour
    }
}

class Circle extends Shape {
    constructor(colour) {
        super(colour)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.colour}"/>`  
    }
} 