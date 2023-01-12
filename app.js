const hamburger = document.querySelector(" .hamburger");
const mobile_menu = document.querySelector(".sidenav");
const menu_item = document.querySelectorAll(".sidenav a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

menu_item.forEach((item) => {
  item.addEventListener("click", (x) => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

$(".nav-item").on("click", function () {
  //Remove any previous active classes
  $(".nav-item").removeClass("active");

  //Add active class to the clicked item
  $(this).addClass("active");
});

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

//intersection observer
function debounce(func, timeout = 300) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.6) {
        menu_item.forEach((item) => {
          const classes = item.classList;
          if (Object.values(classes).includes(entry.target.id)) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  },
  { threshold: 0.9 }
);
let arr_io = [];

let home = document.querySelector("#home");
let about = document.querySelector("#about");
let service = document.querySelector("#services");
let customers = document.querySelector("#customers");
let expertise = document.querySelector("#expertise");
let testimonials = document.querySelector("#testimonials");
let proposition = document.querySelector("#proposition");
let contact = document.querySelector("#contact");
let career = document.querySelector("#career");

arr_io.push(
  home,
  about,
  service,
  customers,
  expertise,
  testimonials,
  proposition,
  contact,
  career
);

arr_io.forEach((item) => {
  observer.observe(item);
});
