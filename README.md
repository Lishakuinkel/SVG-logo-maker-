# OOP : SVG Custom Logo Maker 

This is a web application tool that allows you to create a simple unique logo to represent your brand or personal style in just a few steps. 

## Description

Generate a simple SVG logo with your choice of text (limit of 3 characters), shape (Circle, Triangle or Square), color for the text and the shape. 

## Technologies Used

Powered by Node.js v16, utilizes Inquirer node package manager v8.2.4, File system module and Jest v29.5.0 for testing. 


### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation 

Node.js should be installed. Refer https://nodejs.org/en . Check "node -v" to make sure you have node installed. 

Clone this repository onto your computer.

Use "npm i jest inquirer@8.2.4" to install the needed dependencies

## Usage

Change directories to your current project folder in the terminal and invoke the app by "node index.js" command. 

A series of questions will be prompted for you to provide your desired inputs for the text, text color, shape and shape color. 

Once all prompts have been answered with acceptable values, your new logo will be generated as 'logo.svg' in the 'examples' folder. 

You can then open this 'logo.svg' file onto your browser and see your desired logo. 


## Resources Used 

https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial

https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts

https://www.w3schools.com/nodejs/

https://www.testim.io/blog/jest-testing-a-helpful-introductory-tutorial/
