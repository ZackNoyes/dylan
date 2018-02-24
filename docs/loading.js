var load = setInterval(load,100);
console.log(document.readyState)
function load(){
	console.log(document.readyState);
	if(document.readyState === 'complete') {
		setTimeout(bye, 100);
	}
	else{
		
	}
}
function bye(){
	document.getElementById("loadingScreen").style.display = "none"
		clearInterval(load)
}