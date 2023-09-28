// const carouseSlides = document.querySelectorAll(".slide-image");
// let currentIndex = 0;
// let interval = 3000;

// function nextSlide() {
//     carouseSlides[currentIndex].classList.remove("active");
//     currentIndex = (currentIndex + 1) % carouseSlides.length;
//     carouseSlides[currentIndex].classList.add("active");
// }

// (function() { //IIFE
//     setInterval(nextSlide, interval);
// })()

function validateForm(){
    let name = document.forms['contact-form']['your-name'].value;
    let email = document.forms['contact-form']['email'].value;
    let phone = document.forms['contact-form']['phone'].value;
    let message = document.forms["contact-form"]["message"].value;
  
    if (!name) {
      document.getElementById("name-error").innerHTML = "Name cannot blank."
      return false
    } else {
      document.getElementById("name-error").innerHTML = ""
    }
  
    if (!email) {
      document.getElementById("email-error").innerHTML = "Email cannot blank."
      return false
    } else {
      document.getElementById("email-error").innerHTML = ""
    }
  
    if (!phone) {
      document.getElementById("phone-error").innerHTML = "Phone number cannot blank."
      return false
    } else {
      document.getElementById("phone-error").innerHTML = ""
    }

    if (!message) {
      document.getElementById("message-error").innerHTML = "Message cannot blank."
      return false
    } else {
      document.getElementById("message-error").innerHTML = ""
    }

    console.log(name, email, phone, message)
    return false
}

var slideIndex = 1
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("content-image");
    if (n > x.length) slideIndex = 1;
    else if (n < 1) slideIndex = x.length;

    for (i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 5000)

