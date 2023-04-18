const fs = require("fs");
const path = require("path");

// takes in filename and the svg data
// create/update logo.svg file with the given svg data
function writeToFile(filename, data) {
  try {
    fs.writeFileSync(path.join(__dirname, "..", filename), data);
    console.log("Generated logo.svg");
  } catch (error) {
    console.log(error);
  }
}

module.exports = writeToFile;
