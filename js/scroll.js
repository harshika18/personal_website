var slideIndex = 0;
var slides = document.getElementsByClassName("myslides");
var size = slides.length;
show(0);
var i;
for(i=1; i<slides.length; i++){
    slides[i].style.display = "none";
}
$(document).ready(function (){
    $(".myslides").click(function(){
        nextImg();
      });
});

function nextImg(){
    slides[slideIndex].style.display = "none";
    slideIndex++;
    slideIndex %= size;
    show(slideIndex);
}

function show(i){
    slides[i].style.display = "block";
}