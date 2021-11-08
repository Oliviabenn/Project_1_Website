// hamburger //
  function navData() {
    var X = document.getElementById("navList");
    if (X.style.display === "block") {
      X.style.display = 'none';} else {
        X.style.display= 'block';
      }
    }
// gallery -- from w3schools//
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
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

//


// var slideIndex = 1;
// showSlide(slideIndex);
//
// function openLightbox() {
//   document.getElementById('Lightbox').style.display = 'block';
// }
//
// function closeLightbox() {
//   document.getElementById('Lightbox').style.display = 'none';
// }
//
// function changeSlide(n) {
// 	showSlide(slideIndex += n);
// }
//
// function toSlide(n) {
// 	showSlide(slideIndex = n);
// }
//
// function showSlide(n) {
//
//   const slides = document.getElementsByClassName('slide');
//   let modalPreviews = document.getElementsByClassName('modal-preview');
//
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//
//   if (n < 1) {
//   	slideIndex = slides.length;
//   }
//
//   for (let i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (let i = 0; i < modalPreviews.length; i++) {
//       modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
//   }
//
//   slides[slideIndex - 1].style.display = 'block';
//   modalPreviews[slideIndex - 1].className += ' active';
// }

$(document).ready(function () {
    "use strict";
    $(".lightbox").click(function () {
        var imgsrc = $(this).attr('src');
        $("body").append("<div class='img-popup'><span class='close-lightbox'>&times;</span><img src='" + imgsrc + "'></div>");
        $(".close-lightbox, .img-popup").click(function () {
            $(".img-popup").fadeOut(500, function () {
                $(this).remove();
            }).addClass("lightboxfadeout");
        });

    });
    $(".lightbox").click(function () {
        $(".img-popup").fadeIn(500);
    });

});
