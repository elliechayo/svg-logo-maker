const { Circle, Square, Triangle, Text } = require("./shapes");

function createShape(data) {
  let shape = null;
  switch (data.shape) {
    case "Triangle":
      shape = new Triangle();
      break;
    case "Square":
      shape = new Square();
      break;
    default:
      shape = new Circle();
  }
  shape.setColor(data.shapeColor);
  return shape.render();
}

function createText(data) {
  const text = new Text();
  text.setText(data.text);
  text.setColor(data.textColor);
  return text.render();
}

function createSVG(data) {
  let svgData = `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>
    ${createShape(data)}
    ${createText(data)}
</svg>`;
  return svgData;
}

module.exports = createSVG;
