function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object

	// files is a FileList of File objects. List some properties.
	var output = [];
	for (var i = 0, f; f = files[i]; i++) {
		output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
					f.size, ' bytes, last modified: ',
					f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
					'</li>');
	}
	document.getElementById('output').innerHTML = '<ul>' + output.join('') + '</ul>';
}

window.onload = setTimeout(function(){ 
	document.getElementById('files').addEventListener('change', handleFileSelect, false);
	var zoom = document.getElementById('zoom');
	zoom.addEventListener('mousemove', pick);
}, 1000); 

function inputToURL(inputElement) {
	var file = inputElement.files[0];
	return window.URL.createObjectURL(file);
}
function selectImg(){
	var url = inputToURL(document.getElementById('files'));
	makeImg(url);
}
function makeImg(url){
	document.getElementById("invisible").src=url;
	var myVar = setTimeout(drawImage, 50);
}

function drawImage(){
	var c= document.getElementById("canvas");
	var ctx= c.getContext("2d");
	var img = document.getElementById("invisible");   
	ctx.drawImage(img,0,0,600,500);
	var applepen = setTimeout(draw(), 50);
}

function draw() {
	console.log("b");
	
	var overlay = document.getElementById('overlay');
	overlay.addEventListener('mousemove', zoom );
	
}

function zoom(event) {
var zoomctx = document.getElementById('zoom').getContext('2d');
	
		var x = event.layerX;
		var y = event.layerY;
		zoomctx.drawImage(canvas,
			Math.abs(x),
			Math.abs(y),
			20, 20,
			0, 0,
			300, 300);
	}

function stop(){
		var overlay = document.getElementById('overlay');
	  overlay = document.getElementById('overlay');
		overlay.removeEventListener('mousemove', zoom);
		overlay.onmouseout = function() { 
 			overlay.onmouseover = function() {
				overlay.addEventListener('mousemove', zoom );
			}
		}
	}	

function start(){
	console.log("enter")
}
function zoomStop(){
		var zoom = document.getElementById('zoom');
		zoom.removeEventListener('mousemove', pick);
		zoom.onmouseout = function() { 
 			zoom.onmouseover = function() {
				zoom.addEventListener('mousemove', pick );
			}
		}
}

function pick(event) {
	var color = document.getElementById('color');
	var colorBlock = document.getElementById('colorBlock');
	var c = document.getElementById("zoom");
	var ctx= c.getContext("2d");
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 1, 1);
  var data = pixel.data;
  var rgba = 'rgba(' + data[0] + ', ' + data[1] +
             ', ' + data[2] + ', ' + (data[3] / 255) + ')';
  colorBlock.style.background =  rgba;
  color.textContent = rgba;
}



