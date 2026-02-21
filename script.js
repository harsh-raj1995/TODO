let task = document.querySelector(".input");
//selecting input using class
let btn = document.querySelector(".ADD");
//selecting button using class
let list = document.querySelector("ul");
//selecting ul
let total=0;

let totalBtn = document.querySelector(".total");
//selecting total check button
let totalDisplay = document.querySelector("h3");
//selecting text using h3 html tag or selector
totalBtn.addEventListener("click", function() {
  totalDisplay.innerHTML = "Total tasks: " + total;
})
//when we click button it change element in h3 tags

btn.addEventListener("click", function() {
  if(task.value==""){
    //if null then return
    alert("Please enter a task");
    return;
  }
  total++;
  //increase total count
  let add = task.value;
  //variable having value from input box
  task.value="";
  //empty the input box
  let li =document.createElement("li");
  //create Element li
  li.innerHTML='<p>'+add+'</p><button onclick="this.parentElement.remove(); total--;">X</button>';
  //changing li inner html 
  //adding <p> with value inside text input
  //on click we are removing parent of li since since its parent is not in html file it will be removed
  //decreasing total count 
  list.appendChild(li);
  //appending ol 
})
