let myLibrary = [];
function fold(title, order) {
  this.title = title;
  this.order = order;
  this.active = false;
  this.myToDos = [];
}
function toDo(title, description, date, priority) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
}
function getLib(){
  let x=myLibrary;
	return x;
}
function setLib(x){
	myLibrary=x;
}
function addfoldToLibrary(title, order) {
  let x = new fold(title, order);
  myLibrary.push(x);
}
function remove(n) {
  let z = 0;
  for (let index = 0; index < myLibrary.length; index++) {
    if (myLibrary[index].order === n) {
      z = index;
      break;
    }
  }
  myLibrary.splice(z, 1);
  console.log(myLibrary);
}
function setActive(n) {
  for (let index = 0; index < myLibrary.length; index++) {
    myLibrary[index].active = false;
    if (myLibrary[index].order === n) {
      myLibrary[index].active = true;
    }
  }
}
function findActive() {
  let z = 0;
  for (let index = 0; index < myLibrary.length; index++) {
    if (myLibrary[index].active) {
      z = index;
      return z;
    }
  }
}
function selectFolder() {
  let z = findActive();
  const title = document.getElementById("foldTitle");
  title.innerHTML = myLibrary[z].title;
  printToDos();
  store();
  return myLibrary[z];
}
function getFold(n) {
  let z = 0;
  for (let index = 0; index < myLibrary.length; index++) {
    if (myLibrary[index].order === n) {
      z = index;
      return myLibrary[z];
    }
  }
}
function addToDo(obj) {
  let z = findActive();
  myLibrary[z].myToDos.push(obj);
}
function arrayCreated() {
	try {
	  myLibrary[findActive()].myToDos;
	} catch (e) {
	  return false;
	}
	if(myLibrary[findActive()].myToDos.length>0){
	return true;
	}
	else{
	  return false;
	}
  }
function printToDos() {
  while ( document.getElementById("toDoItems").hasChildNodes()) {
    document.getElementById("toDoItems").removeChild(document.getElementById("toDoItems").lastChild);
  }
  if (arrayCreated()) {
	let counter=0;
    myLibrary[findActive()].myToDos.forEach((element) => {
      let date = element.date;
      let title = element.title;
      let prio = element.prio;
      let dis = element.description;

      let toDoItem = document.createElement("div");
      toDoItem.id = "toDoItem";
      document.getElementById("toDoItems").appendChild(toDoItem);
      let x = document.createElement("h4");
      x.innerHTML = title;
      x.id = "title";
      document.getElementById("toDoItem").appendChild(x);
      x = document.createElement("div");
      x.innerHTML = ':'+dis;
      x.id = "dis";
      document.getElementById("toDoItem").appendChild(x);
      x = document.createElement("div");
      x.innerHTML =date;
      x.id = 'date';
      document.getElementById("toDoItem").appendChild(x);
      x = document.createElement("div");
      x.innerHTML = prio + " Priority";
      x.id = "prio";
      document.getElementById("toDoItem").appendChild(x);
	  const button=document.createElement('button');
	  button.innerHTML='x';
	  button.addEventListener('click',function(){
		let n=Number(this.parentNode.id);
		myLibrary[findActive()].myToDos.splice(n, 1);
		printToDos();
	  })
	  document.getElementById("toDoItem").appendChild(button);
      toDoItem.id =counter;
	  counter++;
    });
  }
  else{
	document.getElementById("toDoItems").style.display='none';
  }
  store();
}
function store(){
  let s=getLib();
  let j=JSON.stringify(s);
  console.log(j);
  localStorage.setItem('mylib',j);
}

function retrieve(){
  if(localStorage.getItem('mylib')){
  let m=localStorage.getItem('mylib');
  m=JSON.parse(m);
  console.log(m);
  setLib(m);
  console.log(myLibrary);
  }
}
function refreshFolderList(){
    if(myLibrary){
      const fList=document.getElementById('fList');
      
    }
}
export { retrieve, myLibrary,setLib ,getLib, arrayCreated,  addToDo,  printToDos,  getFold,addfoldToLibrary, remove,  setActive, findActive, selectFolder};
