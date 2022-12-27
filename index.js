// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
/*
const Q1 = "Describe the function of your application, and the problem it solves for the user.";
const Q2 = "What sections will you include in this README?";
const Q3 = "How does the user install your application?";
const Q4 = "Explain how to use your application.";
const Q5 = "What license do you give your application?";
const Q6 = "Who helped you build this application?";
const Q7 = "How do you test this application?";
const Q8 = "What questions came up during the development of this application?";
*/
let badge

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is the name of your application?",
            name: 'Q1',
        },
        {
            type: 'input',
            message: "Describe the function of your application, and the problem it solves for the user.",
            name: 'Q2',
        },
        {
            type: 'input',
            message: "How does the user install your application?",
            name: 'Q3',
        },
        {
            type: 'input',
            message: "Explain how to use your application.",
            name: 'Q4',
        },
        {
            type: 'input',
            message: `Choose a license from the following list:
            Apache
            MIT
            BSD
            Boost Software
            Creative Commons
            Eclipse Public
            GNU General Public
            Mozilla Public
            The Unlicense`,
            name: 'Q5',
        },
        {
            type: 'input',
            message: "Who helped you build this application?",
            name: 'Q6',
        },
        {
            type: 'input',
            message: "How do you test this application?",
            name: 'Q7',
        },
        {
            type: 'input',
            message: "What questions came up during the development of this application?",
            name: 'Q8',
        },
    ])


//const table = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8];

    .then((response) => {
        
        if (response.Q5 = "Apache") {
            badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
        } else if (response.Q5 = "MIT") {
            badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        } else {
            prompt("The license you entered does not exist")
        };
        
        
        let template =
        `# ${response.Q1}
${badge}

## Description
        ${response.Q2}

## Table of Contents
        Installation
        Usage
        License
        Credits
        Tests
        Questions

## Installation
        ${response.Q3}

## Usage
        ${response.Q4}

## License
        ${response.Q5}

## Credits
        ${response.Q6}

## Tests
        ${response.Q7}

## Questions
        ${response.Q8}
    `
        fs.writeFile('README.md', template, (err) =>
        err ? console.log(err) : console.log("Success!"))
    });





// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
