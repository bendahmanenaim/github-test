


// Initialisation des slides
const slides = [
  {
    "image": "./assets/images/slideshow/slide1.jpg",
    "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    "image": "./assets/images/slideshow/slide2.jpg",
    "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    "image": "./assets/images/slideshow/slide3.jpg",
    "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    "image": "./assets/images/slideshow/slide4.png",
    "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];
// Création des bullet des images
let bullet = `<div class="dot"></div>`;
let dotsContainer = document.querySelector(".dots");

// Ajout des balises dot dans l'élément "dots"
dotsContainer.innerHTML = bullet.repeat(slides.length);

// Sélection du premier dot
let firstDot = dotsContainer.querySelector(".dot");
if (firstDot) {
  firstDot.classList.add("dot_selected");
}

// Sélection des flèches et des dots
const clickevents = document.querySelectorAll(".arrow");
const dots = document.querySelectorAll(".dot");

// Ajout des écouteurs d'événements aux flèches et aux dots
clickevents.forEach((clickevent) => {
  clickevent.addEventListener("click", (e) => {
    changeSlide(e.target.id === "next" ? 1 : -1);
  });
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    changeSlide(index - [...dots].indexOf(firstDot));
  });
});

// Fonction pour changer la slide
function changeSlide(offset) {
  const dotSelected = dotsContainer.querySelector(".dot_selected");
  let newIndex = offset + [...dots].indexOf(dotSelected);

  if (newIndex < 0) newIndex = [...dots].length - 1;
  if (newIndex >= [...dots].length) newIndex = 0;

  dots[newIndex].classList.add("dot_selected");
  dotSelected.classList.remove("dot_selected");

  // Change la slide en fonction du nouvel index
  showSlide(newIndex);
}

// Fonction pour afficher la slide
function showSlide(index) {
  const bannerImg = document.querySelector(".banner-img");
  const textContainer = document.querySelector(".texte");

  bannerImg.src = slides[index].image;
  textContainer.innerHTML = slides[index].tagLine;
}
setInterval("changeSlide(1)", 3000);

