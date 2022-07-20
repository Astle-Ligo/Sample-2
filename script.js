var main = document.getElementById("main-content");
var btn = document.getElementsByClassName("btn");
var t = document.getElementById("top");
function bg(){
    if(btn.value=="NO"){
        main.style.backgroundColor = "white"
        main.style.opacity = "1"
        btn.value="YES";
    }
    else{
        main.style.opacity = "0.3"
        btn.value="NO"
    }
    
}

