 const nav = document.querySelector(".modal-header");
 const hamburguer = document.getElementById("hambuguer");

 const navQuit = document.querySelector(".quit");

 hamburguer.addEventListener("click", function(){
    nav.classList.toggle("show");
 });

navQuit.addEventListener("click", function(){
    nav.classList.toggle("show");
 });