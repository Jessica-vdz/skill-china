var modal = document.getElementById("contactForm");
var contactLink = document.getElementById("contactLink");
var closeBtn = document.getElementById("closeBtn");
var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;
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

const images = {
    "fall": "../img/fall.png",
    "winter": "../img/winter.png",
    "spring": "../img/spring.png",
    "summer": "../img/summer.png"
}
const text = {
    "fall":   "Fall",
    "winter": "Winter",
    "spring": "Spring",
    "summer": "Summer"
}

slider.oninput = function(){
    output.innerHTML = this.value;

    if(this.value == 1){
        document.getElementById("js--img").src= images.winter;
    }if(this.value == 2){
        document.getElementById("js--img").src= images.spring;
    }if(this.value == 3){
        document.getElementById("js--img").src= images.summer;
    }if(this.value == 4){
        document.getElementById("js--img").src= images.fall;
    }
}