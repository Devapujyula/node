// For local module
// const localModule = require("./path-to-module");
// for built in module
// const fs = require("node:fs");
// for 3rd party module
const upperCase = require("upper-case").upperCase;
// import { upperCase, localeUpperCase } from "upper-case";

function greet(name) {
  console.log(upperCase(`Hello ${name}, Welcome to npm module`));
}

greet("Prakash");
module.exports = greet;
