import { getLib,setLib } from "./folder";
function store(){
	if(!localStorage.getItem('lib')){
		localStorage.setItem('lib',getLib());
	}
	else{
		setLib(localStorage.getItem('lib'));
	}
	console.log(localStorage.getItem('lib'));
}

export{store};