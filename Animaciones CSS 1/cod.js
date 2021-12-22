var boton = document.querySelector("h3")
var gracias = document.querySelector("p")

boton.addEventListener("mouseenter", function(){
    gracias.style.display = "inline";
});

boton.addEventListener("mouseout",function(){
    gracias.style.display = "none";
});