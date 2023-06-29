const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

// User inputs will be taken in and passed onto specific class for making the desired shape
function setShape(answers){

    if (answers.shape === 'Circle'){
        let logoShape = new Circle (answers.text, answers.text_color, answers.shape_color);
        return logoShape.render();
    }

    else if (answers.shape === 'Triangle'){
        let logoShape = new Triangle (answers.text, answers.text_color, answers.shape_color);
        return logoShape.render();
    }

    else if (answers.shape === 'Square'){
        let logoShape = new Square (answers.text, answers.text_color, answers.shape_color);
        return logoShape.render();
    }
};

module.exports = setShape;