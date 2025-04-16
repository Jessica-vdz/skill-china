// Verkrijg de modal en knoppen
var modal = document.getElementById("contactForm");
var btn = document.getElementById("contactLink");
var closeBtn = document.getElementById("closeBtn");

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0px";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "0px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
btn.addEventListener('click', function() {
modal.style.display = "block";
});

      
closeBtn.addEventListener('click', function() {
modal.style.display = "none";
});

window.addEventListener('click', function(event) {
if (event.target === modal) {
    modal.style.display = "none";
}
});

document.getElementById("contactFormFields").onsubmit = function(event) {
event.preventDefault(); 
alert("Your message has been sent!"); 
modal.style.display = "none"; 
}