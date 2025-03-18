var modal = document.getElementById("contactForm");
var contactLink = document.getElementById("contactLink");
var closeBtn = document.getElementById("closeBtn");

// When the user clicks on the "Contact" link, show the modal
contactLink.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let data = {
    "text": "winter",
    "img": "/img/winter.png",
}

console.log(data.text);
console.log(data.img);