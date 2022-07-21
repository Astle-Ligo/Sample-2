var main = document.getElementById("main-content");
var t = document.getElementById("top");
var collapseWidthExample = document.getElementById("collapseWidthExample")
var card = document.getElementById("card")
function bg(){
    if((collapseWidthExample.value=="NO")){
        main.style.opacity = "1"
        collapseWidthExample.value="YES";
    }
    else{
        main.style.opacity = "0.3";
        collapseWidthExample.value="NO";
        }
    }
window.addEventListener("scroll",scrly)
function scrly(){
    let offset = window.scrollY;
    if(offset<=100)
    t.style.display = "none";
    else
    t.style.display = "block"
}
 
