//Abrindo o Modal
function openModal() {
    document.getElementById("oModal").style.display = "flex";
}

//Fechando o Modal 
function closeModal() {
    document.getElementById("oModal"). style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//Controle Slides
function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}