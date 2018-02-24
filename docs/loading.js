var load = setInterval(load,100);
console.log(document.readyState)
var counter = 0;
function load(){
	counter = counter + 1;
	console.log(document.readyState);
	if(document.readyState === 'complete') {
		setTimeout(bye, 100);
	}
	if(counter >= 50){
		setTimeout(bye, 100);
	}
	else{
		
	}
}
function bye(){
	document.getElementById("loadingScreen").style.display = "none"
		clearInterval(load)
}