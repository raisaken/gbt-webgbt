const hamburger = document.querySelector(" .hamburger");
const mobile_menu = document.querySelector(".sidenav");
const menu_item = document.querySelectorAll(".sidenav a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});
menu_item.forEach((item) => {
  item.addEventListener("click", (x) => {
    console.log(item, "item");
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
    // item.classList.toggle("active");
  });
});

$(".nav-item").on("click", function () {
  console.log("clicked");
  //Remove any previous active classes
  $(".nav-item").removeClass("active");

  //Add active class to the clicked item
  $(this).addClass("active");
});

// function makeActive() {
//   menu_item.forEach((item) => {
//     item.addEventListener("click", () => {
//       menu_item.classList.add("active");
//     });
//   });
//   var element = document.getElementById("text");
//   element.classList.add("active");
//   element.innerHTML = "This is Active";
// }

// slider
let slideIndex = 1;
career_showSlides(slideIndex);

function plusSlides(n) {
  career_showSlides((slideIndex += n));
}

function currentSlide(n) {
  career_showSlides((slideIndex = n));
}

function career_showSlides(n) {
  let i, j;
  let career_slides = document.getElementsByClassName("career_mySlides");

  if (n > career_slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = career_slides.length;
  }
  for (i = 0; i < career_slides.length; i++) {
    career_slides[i].style.display = "none";
  }

  career_slides[slideIndex - 1].style.display = "block";
}

// testimonials slide
showSlides(slideIndex);
function testimonials_plusSlides(n) {
  showSlides((slideIndex += n));
}

function testimonials_currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let j;
  let slides = document.getElementsByClassName("testimonials_mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
