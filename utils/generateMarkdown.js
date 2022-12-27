// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() {
  console.log('chup');
  let badge
        if (licenseChoice === "Apache") {
            badge = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
        } else if (response.Q5 === "MIT") {
            badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
        } else if (response.Q5 === "BSD") {
            badge = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
        } else if (response.Q5 === "Boost Software") {
            badge = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
        } else if (response.Q5 === "Creative Commons") {
            badge = `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)`;
        } else if (response.Q5 ==="Eclipse Public") {
            badge = `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
        } else if (response.Q5 === "GNU General Public") {
            badge = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
        } else if (response.Q5 === "Mozilla Public") {
            badge = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
        } else if (response.Q5 === "The Unlicense") {
            badge = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
        } else {
            badge = ``
        };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown() {
  console.log('blowme');
  //return `# ${data.title}

;
}

module.exports = {
 generateMarkdown,
 renderLicenseBadge
};
