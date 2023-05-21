export default function submitBtn(){
	const btn=document.getElementById('fSubmit');
	const inBox=document.getElementById('fName');
	btn.onclick=function(){
		return inBox.value;
	};
}