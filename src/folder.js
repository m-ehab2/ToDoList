let myLibrary = [];

function fold(title,author) {
	this.title=title;
	this.author=author;
}

function addfoldToLibrary(fold) {
	myLibrary.push(fold);
	console.log(myLibrary);
}
function remove(n){
	console.log(myLibrary[n-1]);
}
export{myLibrary,addfoldToLibrary,remove};