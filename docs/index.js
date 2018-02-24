var load = setInterval(load,400);
console.log(document.readyState)
function load(){
	console.log(document.readyState);
	if(document.readyState === 'complete') {
		setTimeout(bye, 5000);
	}
	else{
		
	}
}
function bye(){
	document.getElementById("loadingScreen").style.display = "none"
		clearInterval(load)
}
document.Onload = setInterval(menu, 250);
function menu(){
	var y = window.scrollY;
	if(y > 710){
		document.getElementById("nav").style.backgroundColor = "rgba(255,255,255,0.8)"; //"rgba(255,255,255,0.8)"
	}
	if(y < 710){
		document.getElementById("nav").style.backgroundColor = "";
	}

}
function emailWarning(){
	document.getElementById("emailWarning").style.visibility = "visible";
	setTimeout(function(){ 
		document.addEventListener("click", function a(){ 
			document.getElementById("emailWarning").style.visibility = "hidden";
			document.removeEventListener("click", a );
		}); }, 500);
}
document.Onload = setInterval(test, 500);
function test(){
	var aboutMe = document.getElementById("aboutMePause");
	var masterMind = document.getElementById("masterMind");
	fadeIn(aboutMe);
	fadeIn(masterMind);
}
function fadeIn(element){	
	var check = isScrolledIntoView(element);
	if(check == true){
		element.classList.remove("paused");
	}
}


function isScrolledIntoView(el) {
	var elemTop = el.getBoundingClientRect().top;
	var elemBottom = el.getBoundingClientRect().bottom;
	// Only completely visible elements return true:
	// var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
	// Partially visible elements return true:
	isVisible = elemTop < window.innerHeight && elemBottom >= 0;
	return isVisible;
}




var TxtType = function(el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtType.prototype.tick = function() {
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

	var that = this;
	var delta = 200 - Math.random() * 100;

	if (this.isDeleting) { delta /= 2; }

	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}

	setTimeout(function() {
		that.tick();
	}, delta);
};

window.onload = function() {
	var a = document.getElementById("toTop")
	a.onclick = scroll;
	function scroll(){	
		var y = window.scrollY;
		console.log(y);
		y = (y - 10);
		if(y > 0){
			window.scrollTo(0, y);
			var b = setTimeout(scroll, 1);
		}
		else{
			clearTimeout(b);
		}
	}

	var elements = document.getElementsByClassName('typewrite');
	for (var i=0; i<elements.length; i++) {
		var toRotate = elements[i].getAttribute('data-type');
		var period = elements[i].getAttribute('data-period');
		if (toRotate) {
			new TxtType(elements[i], JSON.parse(toRotate), period);
		}
	}
	// INJECT CSS
	var css = document.createElement("style");
	css.type = "text/css";
	css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
	document.body.appendChild(css);
}
