// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Project Description?",
  },
  {
    type: "input",
    name: "instructions",
    message: "Installation Instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage Information?",
  },
  {
    type: "input",
    name: "license",
    message: "Which license was used?",
    choices: ["Apache", "Boost", "GNU", "MIT", "Unilicense"],
  },
  {
    type: "input",
    name: "contributors",
    message: "Who contributed?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if(err){
      console.log(err)
    } else {
      console.log('You did it')
    }
  })
} 

// TODO: Create a function to initialize app
//  function init() {
//     inquirer.prompt(questions)
//    .then((answers) => {
//         console.log(answers);
//         console.log(answers);
//         console.log(answers);
function init (){
  inquirer.prompt(questions)
  .then((data) => {
      // console.log(userInput)
     
      writeToFile("README.md", generateMarkdown(data));
         

    });
 }

// // Function call to initialize app

init();


