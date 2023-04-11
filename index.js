
const userInput = require("./lib/userInput");
const createSVG = require("./lib/createSVG");
const writeToFile = require("./lib/writeToFile");

function main() {
  userInput()
    .then((answers) => {
      const svgData = createSVG(answers);
      writeToFile("logo.svg", svgData);
    })
    .catch((error) => console.error(error));
}

main();
