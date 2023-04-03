const ps = require("prompt-sync");
const readline = require("readline/promises");

var fs = require("fs");
const prompt = ps();

function createHTML(name, project_desc, version, author) {
  if (version == "") {
    version = "1.0.0";
  }
  let data;
  if (author == "") {
    data = `<h1> Welcome to ${name} 👋</h1> 
  <p>
  <img alt="Version" src="https://img.shields.io/badge/version-${version}-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> ${project_desc}
<p><strong>Give a ⭐️ if this project helped you!</strong></p>
<p><small>Created with ❤️ by <a href="https://www.npmjs.com/package/my-readme-latest" target="_blank"><i>my-readme-latest</i></a></small></p>
    `;
  } else {
    data = `<h1> Welcome to ${name} 👋</h1> 
   <p>
  <img alt="Version" src="https://img.shields.io/badge/version-${version}-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> ${project_desc}
    <p>Version ${version}</p>
    <p>Author 👤 ${author}</p>
    <p><strong>Give a ⭐️ if this project helped you!</strong></p>
    <p><small>Created with ❤️ by <a href="https://www.npmjs.com/package/my-readme-latest" target="_blank"><i>my-readme-latest</i></a></small></p>
    `;
  }

  var table = new Table({
    chars: {
      top: "═",
      "top-mid": "╤",
      "top-left": "╔",
      "top-right": "╗",
      bottom: "═",
      "bottom-mid": "╧",
      "bottom-left": "╚",
      "bottom-right": "╝",
      left: "║",
      "left-mid": "╟",
      mid: "─",
      "mid-mid": "┼",
      right: "║",
      "right-mid": "╢",
      middle: "│",
    },
    head: ["Name", "Project", "version", "author"], // Specify column headers
    colWidths: [15, 10, 15], // Specify column widths
    wordWrap: true, // Enable word wrapping
    style: { head: ["cyan"], border: ["grey"] }, // Specify table styles
  });

  table.push([name, project_desc, version, author]);

  console.log(table.toString());

  fs.writeFile("README.md", data, function (err) {
    if (err) throw err;
    console.log("File created successfully");
  });
}

function start() {
  let name = prompt("Enter project name");
  let project_desc = prompt("Enter project description");
  let version = prompt("Enter project version");
  let author = prompt("Enter author's name");
  createHTML(name, project_desc, version, author);
}

function generateReadme() {
  start();
}

module.exports = { generateReadme };
