function loadjscssfile(filename, filetype){
    if (filetype=="js"){ //if filename is a external JavaScript file
        var fileref=document.createElement('script')
        fileref.setAttribute("type","text/javascript")
        fileref.setAttribute("src", filename)
    }
    else if (filetype=="css"){ //if filename is an external CSS file
        var fileref=document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref!="undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}
 
loadjscssfile("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.min.css", "css") ////dynamically load and add this .css file
//loadjscssfile("loading.css", "css")

loadjscssfile("https://use.fontawesome.com/releases/v5.0.6/js/all.js", "js")
//loadjscssfile("loading.js", "js")
loadjscssfile("https://www.w3schools.com/lib/w3.js", "js")

