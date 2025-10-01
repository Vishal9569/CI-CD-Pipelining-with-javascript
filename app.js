const { createElement } = require("react")

let btn = document.getElementById("btn")

btn.addEventListener("click" , (e) =>{
     let ele = createElement("h2");
     ele.textContent  = "HELLO WELCOME TO CI/CD workflow" ;
});

