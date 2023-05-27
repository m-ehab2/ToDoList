export default function submitBtn(){
	const btn=document.getElementById('fSubmit');
	const inBox=document.getElementById('fName');
	const fList=document.getElementById('fList');
	btn.onclick=function(){
		if(inBox.value){
			if(fList.childElementCount<10){
				const fold=document.createElement('div');
				fold.id='folder';
				fold.innerHTML=inBox.value;
				fold.addEventListener('click',function(event){
					console.log(fold.innerHTML);
				});
				const deleteButton=document.createElement('button');
				deleteButton.innerHTML='x';
				deleteButton.id='del';
				deleteButton.addEventListener('click',function(event){
					console.log(fold.innerHTML+'delete');
				});
				fold.appendChild(deleteButton);
				fList.appendChild(fold);
			}
			return inBox.value;
		}
	};
}