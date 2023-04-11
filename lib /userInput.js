const inquirer = require("inquirer");
const questions = require("./questions");

function userInput() {
  return inquirer.prompt(questions);
}

module.exports = userInput;
