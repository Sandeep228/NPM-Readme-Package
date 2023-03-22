const ps= require("prompt-sync");
const readline = require("readline/promises");

var fs = require('fs');
const prompt=ps();

function createHTML(name, project_desc){
    const data = `<h1> Welcome to ${name} 👋</h1> \
    <p>${project_desc}</p>`;
    fs.writeFile('README.md', data, function (err) {
        if (err) throw err;
      });
}

  function start(){
    let  name = prompt("Enter project name");
    let project_desc = prompt("Enter project description");
    const result = createHTML(name, project_desc);
  } 
 

  function generateReadme(){
     start();
  }

module.exports ={generateReadme};

