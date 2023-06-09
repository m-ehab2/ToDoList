import { addfoldToLibrary,getFold,remove,setActive,selectFolder, myLibrary, arrayCreated, printToDos } from "./folder";
let noOfShownFolders=0;
export default function submitBtn(){
	const btn=document.getElementById('fSubmit');
	const inBox=document.getElementById('fName');
	const fList=document.getElementById('fList');
	btn.onclick=function(){
		if(inBox.value){
			if(fList.childElementCount<9){
				const folderContainer=document.createElement('div');
				const fold=document.createElement('div');
				folderContainer.id=noOfShownFolders;
				fold.innerHTML=inBox.value;
				addfoldToLibrary(inBox.value,noOfShownFolders);
				folderContainer.addEventListener('click',function(event){
					document.getElementById('foldTitle').style.display='block';
					document.getElementById('addToDo').style.display='block';
					let r=/\d+/;
					let z=this.id.match(r)[0];
					setActive(Number(z));
					selectFolder();
					if(arrayCreated()){
						document.getElementById('toDoItems').style.display='block';
					}
					else{

					}
					event.stopPropagation();
				});
				const deleteButton=document.createElement('button');
				deleteButton.innerHTML='x';
				deleteButton.id=noOfShownFolders;
				deleteButton.addEventListener('click',function(event){

					console.log('delete');
					let r=/\d+/;
					let z=this.id.match(r)[0];
					if(getFold(Number(z)).active){
						document.getElementById('foldTitle').innerHTML='';
						document.getElementById('foldTitle').style.display='none';
						document.getElementById('addToDo').style.display='none';
						document.getElementById('toDoItems').style.display='none';
					}
					remove(Number(z));
					this.parentElement.remove();
					event.stopPropagation();
					noOfShownFolders--;
				});
				folderContainer.appendChild(fold);
				folderContainer.appendChild(deleteButton);
				fList.appendChild(folderContainer);
				console.log(noOfShownFolders)
			}
			noOfShownFolders++;
			return inBox.value;
		}
	};
}