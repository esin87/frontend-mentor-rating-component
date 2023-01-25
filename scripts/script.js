// State variables
let userSelection = 0;

// Cached DOM elements
const formEl = document.getElementById('js-form');
const ratingsEl = document.getElementById('js-ratings');
const ratingsScreen = document.getElementById('js-ratings-screen');
const thankYouScreen = document.getElementById('js-thankyou-screen');
const userRatingEl = document.getElementById('js-user-rating');

// Functions
function handleSubmit(event) {
	event.preventDefault();
	// hide ratings screen
	ratingsScreen.classList.add('hidden');
	// update the ratings span with the user rating
	userRatingEl.innerText = userSelection;
	// show thank you screen
	thankYouScreen.classList.remove('hidden');
}

function handleChange(event) {
	userSelection = event.target.value;
}

// Event listeners
formEl.addEventListener('submit', handleSubmit);
ratingsEl.addEventListener('change', handleChange);
