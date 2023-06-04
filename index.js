#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const files = [
  {
    name: "index.html",
    path: path.join(__dirname, "template/index.html"),
  },
  {
    name: "style.css",
    path: path.join(__dirname, "template/style.css"),
  },
  {
    name: "script.js",
    path: path.join(__dirname, "template/script.js"),
  },
];

const createFiles = () => {
  files.forEach((file) => {
    fs.copyFile(file.path, file.name, (error) => {
      if (error) console.error(`Error copying ${file.name}: ${error}`);
    });
  });
};

createFiles();
