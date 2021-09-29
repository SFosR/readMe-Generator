// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else {
    return ''
 }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT'){
    return `https://opensource.org/licenses/MIT`
  } else {
    return ''
 }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
  //function renderLicenseSection(license) {
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ## Title
  ${answers.title}
  ## Description
  ${answers.description}
  ## Table of Contents
  - [Instructions](#instructions)
  - [Application Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Instructions
  ${answers.instructions}
  ## Usage
  ${answers.usage}
  ##License
  ${answers.license}
  ## Contributors
  ${answers.contributors}
  ## Github
  ${answers.github}
  ## Email
  ${answers.email} 
 `;
}


module.exports = generateMarkdown;
