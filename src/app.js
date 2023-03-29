import COCKTAIL_API_KEY from "./apikey.js";



// DOM ELEMENTS
const parentElement = document.getElementById("data"); 
const drinkName = document.getElementById('drinkName')
const btnArray = document.querySelectorAll('.btn')
const liArray = document.querySelectorAll('.list-placeholder')


// API OPTIONS 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': COCKTAIL_API_KEY,
		'X-RapidAPI-Host': 'cocktails3.p.rapidapi.com'
	}
};

// API COCKTAILS

btnArray.forEach((btn) => {
	// item.addEventListener("click", function () {
btn.addEventListener('click', (e) => {

console.log('clicked')
fetch('https://cocktails3.p.rapidapi.com/random', options)
	.then(response => response.json())
	.then(response =>{

// WHAT TO DO W/ RESPONSE DATA
		console.log(response)
		const drName = response.body[0].name
		drinkName.innerHTML = drName
		const ulElement = document.getElementById("data");


		liArray.forEach((list) => {
			list.style.display = 'none'
		})

		console.log(response.body[0].ingredients)	
		// console.log(response.body[0].name)	

		// const cocktail = response.body[0].name
		// drinkName.innerText = cocktail
		
		const ingredient = response.body[0].ingredients
		ingredient.forEach(element => console.log(element))	
		
		ingredient.forEach(element => {
			const liElement = document.createElement('li');
			liElement.textContent = element;
			ulElement.appendChild(liElement)
		})

		

		// parentElement.appendChild(ulElement)

		  })
	.catch(err => console.error(err));
		})		
})


// nav
//select navMenu, and burger classes

// butger class includes the bars that will be for responsive menu
// navMenu class includes the page links 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// then make a function that when those are clicked it will toggle add a class to those
//the class will be connected to styling that will be triggered
hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');    
    navMenu.classList.toggle('active');
})

// after that remove it once a link is clicked or the burger button

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))

