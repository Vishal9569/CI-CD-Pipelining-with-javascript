 

let btn = document.getElementById("btn")

btn.addEventListener("click" , (e) =>{
     let ele = document.createElement("H2")
     ele.textContent = "HELLO WELCOME TO CI/CD workflow" ;

     document.body.appendChild(ele);
});

 
let tog = document.getElementById("togglebtn");
              
             tog.addEventListener("click" , ()=>{
                     document.body.classList.toggle("dark-mode");
             })