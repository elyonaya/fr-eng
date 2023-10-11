let lang = "fr";

function translateTxt() {
    if(lang == fr) {
        document.getElementById("texte-bjr").innerHTML="Bonjour";
      } else {
        document.getElementById("texte-bjr").innerHTML="Hello";
      } 
}

function translateTxtFr() {
    lang = fr;
    translateTxt()
  }
  
function translateTxtEng() {
    lang = eng;
    translateTxt()
  }

document.getElementById("fr").addEventListener("click", translateTxtFr)
document.getElementById("eng").addEventListener("click", translateTxtEng)


let mode = "light";

function switchMode() {
    if(mode == light) {
        document.getElementById("texte-bjr").style.color = "black";
        document.getElementById("paragraph").style.color = "black";
        document.getElementById("body").style.backgroundColor = "white";
      } else {
        document.getElementById("texte-bjr").style.color = "white";
        document.getElementById("paragraph").style.color = "white";
        document.getElementById("body").style.backgroundColor = "black";
      } 
}

function lightMode() {
    mode = light;
    switchMode()
  }
  
function darkMode() {
    mode = dark;
    switchMode()
  }

document.getElementById("light").addEventListener("click", lightMode)
document.getElementById("dark").addEventListener("click", darkMode)