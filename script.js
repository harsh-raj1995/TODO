let task = document.querySelector(".input");
let btn = document.querySelector(".ADD");
let list = document.querySelector("ul");
let total=0;
let totalCount = document.querySelector("taskCount");
let totalBtn = document.querySelector(".total");
let totalDisplay = document.querySelector("h3");
totalBtn.addEventListener("click", function() {
  totalDisplay.innerHTML = "Total tasks: " + total;
})

btn.addEventListener("click", function() {
  if(task.value==""){
    alert("Please enter a task");
    return;
  }
  total++;
  let add = task.value;
  task.value="";
  let li =document.createElement("li");
  li.innerHTML='<p>'+add+'</p><button onclick="this.parentElement.remove(); total--;">X</button>';
  list.appendChild(li);
})
