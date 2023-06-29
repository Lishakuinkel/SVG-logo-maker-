const Shape = require('./shapes.js');
// Child Circle class inheriting Shape's properties

class Circle extends Shape {
    constructor(text, text_color, shape_color) {
        super(text, text_color, shape_color);
    };

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="100" fill="${this.shape_color}" /> <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.text_color}">${this.text}</text></svg>`
    }
}

module.exports = Circle;