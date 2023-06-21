// Base class used by all shapes, defines colour and the setColour method
class Shape {
    constructor(colour = '#000000') {
        this.colour = colour
    }
    setColour(colour) {
        this.colour = colour
    }
}

// Circle class which is a subclass of Shape, contains a render method that retuns a circle element
class Circle extends Shape {
    constructor(colour) {
        super(colour)
    }
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.colour}"/>`  
    }
} 

// Square class which is a subclass of Shape, contains a render method that retuns a rect element
class Square extends Shape {
    constructor(colour) {
        super(colour)
    }
    render() {
        return `<rect x="90" y="40" width="120" height="120" fill="${this.colour}"/>`  
    }
}

// Triangle class which is a subclass of Shape, contains a render method that retuns a polygon element
class Triangle extends Shape {
    constructor(colour) {
        super(colour)
    }
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}"/>`  
    } 
}

// Export only the Circle, Square and Triangle subclasses
module.exports = { Circle, Square, Triangle }