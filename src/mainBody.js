import Icon from './icon.png';
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
	//Populating the Main body
	main.appendChild(kek);
	return main;
}