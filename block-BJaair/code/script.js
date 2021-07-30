let form = document.getElementById("form");
let display = document.getElementById("display")


form.addEventListener("submit", ()=>{
event.preventDefault();
let first = document.getElementById("first-input").value;
let second = document.getElementById("second-input").value;
createUI(first,second);

});


function createUI(first,second){

let div  = document.createElement("div");
div.classList.add("div")

let firstInput = document.createElement("h3");
firstInput.innerText = first;
firstInput.contentEditable = true;

let secondInput = document.createElement("h4");
secondInput.innerText = second;
secondInput.contentEditable = true;

div.append(firstInput ,secondInput)
display.append(div);

document.getElementById("first-input").value ="";
document.getElementById("second-input").value ="";

} 