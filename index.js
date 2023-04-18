const userInput = require("./lib/userInput");
const createSVG = require("./lib/createSVG");
const writeToFile = require("./lib/writeToFile");

function main() {
   // prompt the user
  userInput()
    .then((answers) => {
       // create the svg data
      const svgData = createSVG(answers);
      // write the svg data to logo.svg file
      writeToFile("logo.svg", svgData);
    })
    .catch((error) => console.error(error));
}

main();
