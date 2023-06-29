
const fs = require('fs');
const inquirer = require('inquirer');
const setShape = require('./lib/setshape.js');
const color_inputKeyword = require('./lib/color_inputKeyword.js');

// Array of questions for user input regarding text, color and shape for the logo
const questions = [
    {   // Text input, validate text length 
        type: 'input',
        name: 'text',
        message: 'Enter your text for the logo (3 letters maximum)',
        validate: (answers) => {
            if (answers.length > 3) {
                return console.log("\n Text cannot be more than 3 characters, please try again :) ")
            }
            return true;
        } 
    },
    {   // Text color input accepts either color keyword or hexadecimal code
        type: 'input',
        name: 'text_color_choice',
        message: 'Enter the color for your text. Choose the color format',
        choices: ['color keyword', 'hexadecimal']
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'Enter the color keyword',
        when: (answers) => {
            if (answers.text_color_choice === 'color keyword'){
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for(var i=0, len = color_inputKeyword.length; i<len ; i++){
                if(answerLowercase.indexOf(color_inputKeyword[i]) != -1){
                    return true;
                }
            } return console.log("\n Please enter a valid color keyword");
        }
    },
    {
        type: "input",
        name: "text_color",
        message: "Enter the text hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.text_color_choice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
    
    {   // Desired shape
        type: 'list',
        name: 'shape',
        message: 'Choose your shape for the logo',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {   // Shape color input accepts either shape keyword or hexadecimal code
        type: 'input',
        name: 'shape_color_choice',
        message: 'Enter your color keyword for the logo',
        choices: ['color keyword', 'hexadecimal']
    },
    {
        type: "input",
        name: "shape_color",
        message: "Enter the shape color keyword",
        when: (answers) => {
            if(answers.shape_color_choice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    // hexadecimal (validate hexadecimal with RegEx pattern)
    {
        type: "input",
        name: "shape_color",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if(answers.shape_color_choice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    }
]

// Take the user inputs as parameter and call createLogo function
function createLogo(answers){
    const logo = setShape(answers);
    fs.writeFile("examples/logo.svg", logo, ()=> console.log("Generated logo.svg"));
    
}

function init() {
    inquirer.prompt(questions) // Ask questions, then call createLogo function, catch if error
    .then((answers) => {
        createLogo(answers); 
    })
    .catch(err => {
        console.error(err);
    });

 }

 init();