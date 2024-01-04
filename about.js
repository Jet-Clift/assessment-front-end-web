console.log("hello world");

const colorBtn = document.getElementById('#color')
const placeBtn = document.getElementById('#place')
const ritualBtn = document.getElementById('#ritual')



function handleSubmit(evt) {
	evt.preventDefault();
	
	 alert("Form has been submitted successfully.")
}
function alertFavColor(evt) {
	evt.preventDefault();
	
	 alert("My favorite color is purple.")
}
function alertFavPlace(evt) {
	evt.preventDefault();
	
	 alert("My favorite place is the gym.")
}
function alertFavRitual(evt) {
	evt.preventDefault();
	
	 alert("My favorite ritual is eating cereal every morning.")
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
function complimentFromMelvin(evt){
	evt.preventDefault()
	alert("Hi I'm Melvin and you smell nice :3")
}
Image.addEventListener('click', complimentFromMelvin)
colorBtn.addEventListener('click', alertFavColor)
placeBtn.addEventListener('click', alertFavPlace)
ritualBtn.addEventListener('click', alertFavRitual)