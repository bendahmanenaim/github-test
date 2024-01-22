const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// les deux flèches arrow_left,arrow right cliquable 
const clickevents = document.querySelectorAll(".arrow");
const dots = document.querySelectorAll(".dot");
clickevents.forEach((clickevents) => {
	clickevents.addEventListener("click", (e) => {
		const calcNextdot = e.target.id === "next" ? 1 : -1;   /* calcule dot si oui nextdot=1, sinon -1*/
		  const dotSelected = document.querySelector(".dot_selected");
	  
		  newIndex = calcNextdot + [...dots].indexOf(dotSelected);   
	  
		  if (newIndex < 0) newIndex = [...dots].length - 1;
		  if (newIndex >= [...dots].length) newIndex = 0;
		  dots[newIndex].classList.add("dot_selected");
	  
		  dotSelected.classList.remove("dot_selected");
	})
});

slides.forEach(function (item, index, array) {
	console.log(`Index ${index}: ${item}`);
  });
     























//=============================================================================
/*	// les deux flèches arrow_left,arrow right cliquable 
const clickeventleft = document.querySelector(".arrow_left");
const clickeventright = document.querySelector(".arrow_right");
const changecouleur = document.querySelector("p");
const dots = document.querySelectorAll(".dot");

	clickeventleft.addEventListener("click", () => {
		changecouleur.style.background ="green";
		
	 console.log("click");
	})

	clickeventright.addEventListener("click", () => {
		changecouleur.style.background ="red";
	 console.log("click");
	})*/

	//=========================================================================
