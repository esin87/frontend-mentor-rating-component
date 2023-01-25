// State variables
let userSelection = 0;

// Cached DOM elements
const formEl = document.getElementById('js-form');
const ratingsEl = document.getElementById('js-ratings');
const ratingsScreen = document.getElementById('js-ratings-screen');
const thankYouScreen = document.getElementById('js-thankyou-screen');

// Functions
function handleSubmit(event) {
	event.preventDefault();
	console.log('form submitted');
	console.log(userSelection);
}

function handleChange(event) {
	userSelection = event.target.value;
}

// Event listeners
formEl.addEventListener('submit', handleSubmit);
ratingsEl.addEventListener('change', handleChange);
