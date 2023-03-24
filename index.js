const ps = require("prompt-sync");
const readline = require("readline/promises");

var fs = require("fs");
const prompt = ps();

function createHTML(name, project_desc, version, author) {
  if (version == "") {
    version = "1.0.0";
  }
  let data;
  if(author==""){
     data =  
    `<h1> Welcome to ${name} 👋</h1> 
  <p>
  <img alt="Version" src="https://img.shields.io/badge/version-${version}-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> ${project_desc}
<p> ${project_desc} </p>
<p><strong>Give a ⭐️ if this project helped you!</strong></p>
<p><small>Created with ❤️ by <a href="https://www.npmjs.com/package/my-readme-latest" target="_blank"><i>my-readme-latest</i></a></small></p>
    `;
  }else{
     data =  
    `<h1> Welcome to ${name} 👋</h1> 
   <p>
  <img alt="Version" src="https://img.shields.io/badge/version-${version}-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> ${project_desc}
  <p> ${project_desc} </p>
    <p>Version ${version}</p>
    <p>Author 👤 ${author}</p>
    <p><strong>Give a ⭐️ if this project helped you!</strong></p>
    <p><small>Created with ❤️ by <a href="https://www.npmjs.com/package/my-readme-latest" target="_blank"><i>my-readme-latest</i></a></small></p>
    `;
  }
 
  fs.writeFile("README.md", data, function (err) {
    if (err) throw err;
  });
}

function start() {
  let name = prompt("Enter project name");
  let project_desc = prompt("Enter project description");
  let version = prompt("Enter project version");
  let author = prompt("Enter author's name");
  console.log(version);
  const result = createHTML(name, project_desc, version, author);
}

function generateReadme() {
  start();
}

module.exports = { generateReadme };
