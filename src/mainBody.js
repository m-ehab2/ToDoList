import { openPopUp } from "./popup";
export default function Skeleton() {
	const main = document.createElement('div');
	main.id='main';

	//creating header
	const header=document.createElement('div');
	header.id='header';

	//Populating Header
	//Welcoming User
	const wSentence=document.createElement('div');
	wSentence.id='wSentence';
	const wWord=document.createElement('p');
	wWord.innerHTML='Welcome Back, ';
	const uName=document.createElement('p');
	uName.id='uName';
	uName.innerHTML='*User_Name*';
	wSentence.appendChild(wWord);
	wSentence.appendChild(uName);
	header.appendChild(wSentence);
	//Logout Button
	const logOut=document.createElement('button');
	logOut.innerHTML='Log Out';
	header.appendChild(logOut);
	main.appendChild(header);

	//Creating Main Body
	const kek=document.createElement('div');
	kek.id='interface';
	const sBar=document.createElement('div');
	sBar.id='sBar';
	const mBar=document.createElement('div');
	mBar.id='mBar';
	//Populating the Side Bar
	//Folder Creation
	const fName=document.createElement('input');
	fName.setAttribute('type','text');
	fName.setAttribute('maxlength','25');
	fName.placeholder='Project Name';
	fName.id='fName';
	const btn1=document.createElement('button');
	btn1.id='fSubmit';
	btn1.innerHTML='Create New';
	const fForm=document.createElement('div');
	fForm.id='fForm';
	fForm.appendChild(fName);
	fForm.appendChild(btn1);
	sBar.appendChild(fForm);
	//Folder List
	const fList=document.createElement('div');
	fList.id='fList';
	sBar.appendChild(fList);
	kek.appendChild(sBar);
	//Creating the todos
	const toDoList=document.createElement('div');
	toDoList.id='toDoList';
	const foldTitle=document.createElement('div');
	foldTitle.id='foldTitle';
	foldTitle.style.display='none';
	const toDos=document.createElement('div');
	toDos.id='toDos';
	const addToDo=document.createElement('button');
	addToDo.innerHTML=' + ';
	addToDo.id='addToDo';
	addToDo.addEventListener('click',function(){
		console.log('popup');
		openPopUp();
	})
	addToDo.style.display='none';
	const itemToDo=document.createElement('div');
	itemToDo.id='toDoItems';
	itemToDo.style.display='none';
	const itemName=document.createElement('div');
	itemToDo.appendChild(itemName);
	toDos.appendChild(addToDo);
	toDos.appendChild(itemToDo);
	toDoList.appendChild(foldTitle);
	toDoList.appendChild(toDos);
	kek.appendChild(toDoList);
	
	main.appendChild(kek);
	//Creating Footer
	const footer=document.createElement('div');
	footer.id='footer';
	footer.innerHTML='Made by m-ehab2 as a part of the Odin project';
	
	main.appendChild(footer);

	console.log('Skeleton');
	return main;
}