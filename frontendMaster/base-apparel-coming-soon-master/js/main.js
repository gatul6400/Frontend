// const email = document.querySelector('form input[placeholder = "Email Address"]');
// console.log(email.value);

const form = document.querySelector('form');
const email = document.querySelector('form input[type=email]');

form.addEventListener('submit', (e) => {
	console.log(email.value);
	const emailValue = email.value;
	if(validateEmail(emailValue)){
		console.log("Valid");
		form.classList.remove('error');
	}
	else{
		console.log("Invalid");
		form.classList.add('error');
	}
});



function validateEmail(email) {
    // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const re =  /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (email.match(re)){
		return true;
	}
	else{
		return false;
	}
}