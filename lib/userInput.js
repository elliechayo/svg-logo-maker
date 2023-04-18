const inquirer = require("inquirer");
const questions = require("./questions");

// using the inquirer package, prompts the user with the given questions
function userInput() {
  return inquirer.prompt(questions);
}

module.exports = userInput;
