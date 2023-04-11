const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter text: (up to three characters)",
    validate: function (text) {
      return text.length <= 3 && text.length > 0;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter text color: ",
  },
  {
    type: "list",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
    message: "Select a shape",
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter shape's color: ",
  },
];

module.exports = questions;
