let lang = false;

function frToEng() {

    if(lang){
        document.getElementById("eng").innerHTML="EN";
        document.getElementById("texte-bjr").innerHTML="Bonjour";
        lang = false;
    }else{
        document.getElementById("eng").innerHTML="FR";
        document.getElementById("texte-bjr").innerHTML="Hello";
        lang = true;
    }
    
}

document.getElementById("eng").addEventListener("click", frToEng)

let mode = false;

function lightToDark() {

    if(mode){
        document.getElementById("texte-bjr").style.color = "black";
        document.getElementById("paragraph").style.color = "black";
        document.getElementById("body").style.backgroundColor = "white";
        document.getElementById("dark").innerHTML="Dark";
        mode = false;
    }else{
        document.getElementById("texte-bjr").style.color = "white";
        document.getElementById("paragraph").style.color = "white";
        document.getElementById("body").style.backgroundColor = "black";
        document.getElementById("dark").innerHTML="Light";
        mode = true;
    }
    
}

document.getElementById("dark").addEventListener("click", lightToDark)