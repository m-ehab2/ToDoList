let myLibrary = [];

function fold(title,order) {
	this.title=title;
	this.order=order;
}

function addfoldToLibrary(fold) {
	myLibrary.push(fold);
	console.log(fold.order);
	console.log(myLibrary);
}
function remove(n){
	console.log(myLibrary[n]);
	console.log(myLibrary);
	myLibrary.splice(n,1);
	console.log(myLibrary);
}
export{myLibrary,addfoldToLibrary,remove};