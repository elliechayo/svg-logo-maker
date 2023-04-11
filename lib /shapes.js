class Circle {
  constructor() {
    this.color = "green";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square {
  constructor() {
    this.color = "green";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
  }
}

class Triangle {
  constructor() {
    this.color = "green";
  }

  setColor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Text {
  constructor() {
    this.text = "ABC";
    this.color = "green";
  }

  setColor(color) {
    this.color = color;
  }

  setText(text) {
    this.text = text;
  }

  render() {
    return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
  }
}

module.exports = {
  Triangle,
  Square,
  Circle,
  Text,
};
