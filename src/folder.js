let myLibrary = [];

function fold(title,order) {
	this.title=title;
	this.order=order;
	this.active=false;
}

function addfoldToLibrary(title,order) {
	let x= new fold(title,order);
	myLibrary.push(x);
	console.log(x.order);
	console.log(myLibrary);
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
			console.log('activated');
		}
	}
	console.log(myLibrary);
}
function findActive(){
	let z=0;
	for (let index = 0; index < myLibrary.length; index++) {
		if(myLibrary[index].active){
			z=index;
			return myLibrary[index];
		}
		
	}
}
function selectFolder(){
	let z=findActive();
	const title=document.getElementById('foldTitle');
	title.innerHTML=z.title;
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

export{myLibrary,getFold,addfoldToLibrary,remove,setActive,findActive,selectFolder};