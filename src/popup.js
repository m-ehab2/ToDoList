import { addToDo, arrayCreated, selectFolder, printToDos } from "./folder";
const popup = document.createElement("div");
popup.id = "popUp";
const form = document.createElement("form");
form.action = "";
form.method = "get";
form.id = "form";
const close = document.createElement("button");
close.innerHTML = "x";
close.id = "closePopUp";
close.addEventListener("click", function (e) {
  e.preventDefault();
  popup.style.display = "none";
});
form.appendChild(close);

let x = document.createElement("label");
x.for = "title";
x.innerHTML = "To Do Title:";
form.appendChild(x);
let i = document.createElement("input");
i.type = "text";
i.name = "title";
i.placeholder = "Brush My teeth,Finish my homework,etc";
i.setAttribute("requried", "");
form.appendChild(i);
x = document.createElement("label");
x.for = "description";
x.innerHTML = "Description:";
form.appendChild(x);
i = document.createElement("textarea");
i.rows = "3";
i.name = "description";
i.placeholder = "A step of my dailiy routine";
form.appendChild(i);
x = document.createElement("label");
x.for = "date";
x.innerHTML = "Due Date:";
form.appendChild(x);
i = document.createElement("input");
i.type = "date";
i.name = "date";
form.appendChild(i);
x = document.createElement("label");
x.for = "prio";
x.innerHTML = "Priority:";
form.appendChild(x);
i = document.createElement("select");
i.name = "prio";
let o = document.createElement("option");
o.value = "Low";
o.innerHTML = "Low";
i.appendChild(o);
o = document.createElement("option");
o.value = "Regular";
o.innerHTML = "Regular";
i.appendChild(o);
o = document.createElement("option");
o.value = "High";
o.innerHTML = "High";
i.appendChild(o);
form.appendChild(i);
const submit = document.createElement("input");
submit.innerHTML = "Add To Do";
submit.type = "submit";
// submit.addEventListener("click", function (e) {
//   e.preventDefault();
// })
form.appendChild(submit);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const myFormData = new FormData(form);
  const formDataObj = {};
  myFormData.forEach((value, key) => (formDataObj[key] = value));
  if (formDataObj.title === "" || formDataObj.description === "") {
    alert("Please enter a valid title and discirptioon");
  } else if (formDataObj.date === "") {
    alert("please enter a due date");
  } else {
    addToDo(formDataObj);
    if (arrayCreated()) {
      document.getElementById("toDoItems").style.display = "block";
    }
    console.log(formDataObj);
    popup.style.display = "none";
    printToDos();
  }
});
popup.appendChild(form);
document.body.appendChild(popup);
const open = document.getElementById("addToDo");
export function openPopUp() {
  popup.style.display = "block";
}
