// Parent class that will be inherited by children classes (Circle, Triangle and Square)

class Shape {
    constructor(text, text_color, shape_color){
        this.text = text;
        this.text_color = text_color;
        this.shape_color = shape_color;
    }
};

module.exports = Shape;