import { addfoldToLibrary,remove } from "./folder";
let noOfShownFolders=0;
export default function submitBtn(){
	const btn=document.getElementById('fSubmit');
	const inBox=document.getElementById('fName');
	const fList=document.getElementById('fList');
	btn.onclick=function(){
		const folderContainer=document.createElement('div');
		if(inBox.value){
			if(fList.childElementCount<9){
				const fold=document.createElement('div');
				fold.id='folder'+noOfShownFolders;
				fold.innerHTML=inBox.value;
				addfoldToLibrary(inBox.value,noOfShownFolders);
				folderContainer.addEventListener('click',function(event){
					console.log(fold.innerHTML);
					event.stopPropagation();
				});
				const deleteButton=document.createElement('button');
				deleteButton.innerHTML='x';
				deleteButton.id='del'+noOfShownFolders;
				deleteButton.addEventListener('click',function(event){
					console.log('delete');
					let r=/\d+/;
					remove(deleteButton.id.match(r)[0]);
					noOfShownFolders--;
					console.log(noOfShownFolders);
					event.stopPropagation();
				});
				noOfShownFolders++;
				folderContainer.appendChild(fold);
				folderContainer.appendChild(deleteButton);
				fList.appendChild(folderContainer);
			}
			return inBox.value;
		}
	};
}