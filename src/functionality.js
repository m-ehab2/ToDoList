import { addfoldToLibrary,remove } from "./folder";
let noOfShownFolders=1;
export default function submitBtn(){
	const btn=document.getElementById('fSubmit');
	const inBox=document.getElementById('fName');
	const fList=document.getElementById('fList');
	btn.onclick=function(){
		if(inBox.value){
			if(fList.childElementCount<10){
				const fold=document.createElement('div');
				fold.id='folder'+noOfShownFolders;
				fold.innerHTML=inBox.value;
				addfoldToLibrary(inBox.value,1);
				fold.addEventListener('click',function(event){
					console.log(fold.innerHTML);
				});
				const deleteButton=document.createElement('button');
				deleteButton.innerHTML='x';
				deleteButton.id='del'+noOfShownFolders;
				deleteButton.addEventListener('click',function(event){
					console.log(fold.innerHTML+'delete');
					let r=/\d+/;
					remove(deleteButton.id.match(r)[0]);
					noOfShownFolders--;
				});
				noOfShownFolders++;
				fold.appendChild(deleteButton);
				fList.appendChild(fold);
			}
			return inBox.value;
		}
	};
}