// require the colorKeywords array to check if input matches one of the choices
const colorKeywords = require("./colorKeywords.js");
const questions = [
  {
    type: "list",
    message: "Which shape will you choose your logo be?",
    name: "shape",
    choices: ["Square", "Triangle", "Circle"],
  },
  {
    type: "list",
    message: "What Color will the shape be?",
    name: "shapeColorChoice",
    choices: ["hexidecimal", "color keyword"],
  },
  {
    type: "input",
    message: "Enter the shape color keyword",
    name: "shapeColor",
    when: (answers) => {
      if (answers.shapeColorChoice === "color keyword") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      let answerLowercase = answer.toLowerCase();
      for (var i = 0, len = colorKeywords.length; i < len; ++i) {
        if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
          return true;
        }
      }
      return console.log("\n Please enter a valid color keyword");
    },
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape hexadecimal number (#CCCCCC)",
    when: (answers) => {
      if (answers.shapeColorChoice === "hexadecimal") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      const hexRegEx = "^#[A-Fa-f0-9]{6}$";
      if (!answer.match(hexRegEx)) {
        return console.log("\n Please enter a valid hexadecimal");
      }
      return true;
    },
  },
  {
    name: "text",
    message: "Enter Text (hint: must be 3 letters",
    type: "input",
    validate: (answer) => {
      if (answer.length > 3) {
        return console.log(
          "Text must be three characters or less! Please try again"
        );
      }
      return true;
    },
  },
  {
    name: "textColorChoice",
    message: "What is the color of the text? Choose a color format: ",
    type: "list",
    choices: ["color keyword", "hexadecimal"],
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color keyword",
    when: (answers) => {
      if (answers.textColorChoice === "color keyword") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      let answerLowercase = answer.toLowerCase();
      for (var i = 0, len = colorKeywords.length; i < len; ++i) {
        if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
          return true;
        }
      }
      return console.log("\n Please enter a valid color keyword");
    },
  },

  {
    type: "input",
    name: "textColor",
    message: "Enter the text hexadecimal number (#CCCCCC)",
    when: (answers) => {
      if (answers.textColorChoice === "hexadecimal") {
        return true;
      }
      return false;
    },
    validate: (answer) => {
      const hexRegEx = "^#[A-Fa-f0-9]{6}$";
      if (!answer.match(hexRegEx)) {
        return console.log("\n Please enter a valid hexadecimal");
      }
      return true;
    },
  },
];

module.exports = questions;
