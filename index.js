
const fs = require('fs');
const inquirer = require('inquirer');
const setShape = require('./lib/setshape.js');
const outputFile = require('./examples/outputfile.svg');

// Array of questions for user input regarding text, color and shape for the logo
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter your text for the logo'
    },
    {
        type: 'input',
        name: 'text_color',
        message: 'Enter your color keyword for the text'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose your shape for the logo',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shape_color',
        message: 'Enter your color keyword for the logo'
    }
]

// Take the user inputs as parameter and call createLogo function
function createLogo(answers){
    const logo = setShape(answers);
    fs.writeFile(outputFile, logo, ()=> console.log("Generated logo.svg"));
    
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