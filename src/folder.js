let myLibrary = [];

function fold(title,order) {
	this.title=title;
	this.order=order;
	this.active=false;
	this.myToDos=[];
}
function toDo(title,description,date,priority){
	this.title=title;
	this.description=description;
	this.date=date;
	this.priority=priority;
}

function addfoldToLibrary(title,order) {
	let x= new fold(title,order);
	myLibrary.push(x);
}
function remove(n){
	let z=0;
	for (let index = 0; index < myLibrary.length; index++) {
		if(myLibrary[index].order===n){
			z=index;
			break;
		}
	}
	myLibrary.splice(z,1);
	console.log(myLibrary);
}
function setActive(n){
	for (let index = 0; index < myLibrary.length; index++) {
		myLibrary[index].active=false;
		if(myLibrary[index].order===n){
			myLibrary[index].active=true;
		}
	}
	console.log(myLibrary);
}
function findActive(){
	let z=0;
	for (let index = 0; index < myLibrary.length; index++) {
		if(myLibrary[index].active){
			z=index;
			return z;
		}
	}
}
function selectFolder(){
	let z=findActive();
	const title=document.getElementById('foldTitle');
	title.innerHTML=myLibrary[z].title;
	if(myLibrary[z].myToDos.length>0){

	}
	return myLibrary[z];
}
function getFold(n){
	let z=0;
	for (let index = 0; index < myLibrary.length; index++) {
		if(myLibrary[index].order===n){
			z=index;
			return myLibrary[z];
		}
	}
}
function addToDo(obj){
	let z=findActive();
	myLibrary[z].myToDos.push(obj);

}
function printToDos(){
	let todo=document.createElement('div');
	if(selectFolder().myToDos.length>0){
		while(document.getElementById('toDoItems').firstChild){
			document.getElementById('toDoItems').removeChild(document.getElementById('toDoItems').lastChild);
		}
		selectFolder().myToDos.forEach(element => {
			let date=element.date;
			let title=element.title;
			let prio=element.prio;
			let dis=element.description
			let toDoItem=document.createElement('div');
			toDoItem.id='toDoItem';
			document.getElementById('toDoItems').appendChild(toDoItem);
			let x=document.createElement('div');
			x.innerHTML=title;
			x.id='title';
			document.getElementById('toDoItem').appendChild(x);
			x=document.createElement('div');
			x.innerHTML=dis;
			x.id='dis';
			document.getElementById('toDoItem').appendChild(x);
			x=document.createElement('div');
			x.innerHTML=date;
			x.id=date;
			document.getElementById('toDoItem').appendChild(x);
			x=document.createElement('div');
			x.innerHTML=prio+' Priority';
			x.id='prio';
			document.getElementById('toDoItem').appendChild(x);
			toDoItem.id='toDoItem'+title;
		});
	}
}
function arrayCreated(){
	try{
		myLibrary[findActive()].myToDos;
	}
	catch(e){
		return false;
	}
	return true;

}
export{myLibrary,arrayCreated,addToDo,printToDos,getFold,addfoldToLibrary,remove,setActive,findActive,selectFolder};