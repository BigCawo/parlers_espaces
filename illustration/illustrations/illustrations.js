//lightbox


function openModal() {
    document.getElementById("myModal").style.display = "block";

    document.getElementById("main").style.maxHeight = "100vh";
  }
  
  function closeModal() {

    document.getElementById("myModal").style.display = "none";

    document.getElementById("main").style.maxHeight = "auto";
    /*
    let imgFocus = document.getElementsByClassName("modalImg")

    for (i = 0; i < imgFocus.length; i++) {
        imgFocus[i].style.height = "94vh";
        imgFocus[i].style.width = "fit-content";      
    }

    document.getElementById("focus").value = "off"
    */
}
/*
function getFocus(){
    
    let imgFocus = document.getElementsByClassName("modalImg")
    let focusState = document.getElementById("focus").value

if (focusState == "off"){

for (i = 0; i < imgFocus.length; i++) {
    imgFocus[i].style.height = "auto";
    imgFocus[i].style.width = "calc( 100% - var(--w-sidebar) )";      
}
document.getElementById("focus").value = "on"

}

if (focusState == "on" ){

for (i = 0; i < imgFocus.length; i++) {
    imgFocus[i].style.height = "94vh";
    imgFocus[i].style.width = "fit-content";      
}
document.getElementById("focus").value = "off"

}

}

*/
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    /*
    let imgFocus = document.getElementsByClassName("modalImg")

    for (i = 0; i < imgFocus.length; i++) {
        imgFocus[i].style.height = "94vh";
        imgFocus[i].style.width = "fit-content";      
    }
    document.getElementById("focus").value = "off"

    */

    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {

    let imgFocus = document.getElementsByClassName("modalImg")



    

    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }