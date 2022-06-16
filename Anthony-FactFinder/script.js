
/*https://coolors.co/541388-d90368-f1e9da-2e294e-ffd400
https://coolors.co/444545-b5ffe9-c5e0d8-c9c9c9-ceabb1
https://coolors.co/3581b8-ff7f11-d0f4ea-27233a-c7ebf0
https://coolors.co/82d173-abfaa9-e88d67-bb999c-9999c3
*/


var factform = document.getElementById('factform');
var factdisplay = document.getElementById('factdisplay');
var main = document.querySelector('main');
var body = document.querySelector('body');
var input = document.querySelectorAll("input");

factform.a.addEventListener("click", changeA);

function changeA(){
	factdisplay.innerHTML = 'Only two national flags have the color purple on them. <img src="images/purpleflag.webp" alt = "purple flag">';

    main.style.backgroundColor ='#541388';

    factform.style.backgroundColor = '#2E294E';

    factdisplay.style.color = '#F1E9DA';

	factdisplay.style.backgroundColor = '#541388';

	body.style.backgroundColor = '#F1E9DA';

	for(var i = 0; i < input.length; i++){
		input[i].style.backgroundColor = '#D90368';
		input[i].style.color = '#F1E9DA';
	}
}
factform.b.addEventListener("click", changeB);

function changeB(){
	factdisplay.innerHTML = "The smallest unit of measurement in the universe is the Planck length.";

    main.style.backgroundColor ='#C9C9C9';

    factform.style.backgroundColor = '#2E294E';

    factdisplay.style.color = '#444545';

	factdisplay.style.backgroundColor = '#C9C9C9';

	body.style.backgroundColor = '#B5FFE9';

	for(var i = 0; i < input.length; i++){
		input[i].style.backgroundColor = '#CEABB1';
		input[i].style.color = '#444545';
	}
    
}

factform.c.addEventListener("click", changeC);

function changeC(){
	
	factdisplay.innerHTML = "Great white sharks are so scared of killer whales that they'll avoid an area for up to a year after spotting one. <br> <img src='images/shark.jpg' alt = 'shark'>"

    main.style.backgroundColor ='#3581B8';

    factform.style.backgroundColor = '#B38CB4';

    factdisplay.style.color = '#FF7F11';

	factdisplay.style.backgroundColor = '#3581B8';

	body.style.backgroundColor = '#C7EBF0';

	for(var i = 0; i < input.length; i++){
		input[i].style.backgroundColor = '#27233A';
		input[i].style.color = '#FF7F11';
	}
	
}

factform.d.addEventListener("click", changeD);

function changeD(){
	factdisplay.innerHTML = "The longest tennis rally lasted over 12 hours.";

    main.style.backgroundColor ='#ABFAA9';

    factform.style.backgroundColor = '#E88D67';

    factdisplay.style.color = '#E88D67';

	factdisplay.style.backgroundColor = '#ABFAA9';

	body.style.backgroundColor = '#9999C3';

	for(var i = 0; i < input.length; i++){
		input[i].style.backgroundColor = '#F9C80E';
		input[i].style.color = '#000000';
	}
}

factform.e.addEventListener("click", changeE);

function changeE(){
	factdisplay.innerHTML = "A cow-bison hybrid is called a beefalo. <img src = 'images/beefalo.jfif' alt = 'beefalo'>";
	
	main.style.backgroundColor ='#541388';

    factform.style.backgroundColor = '#9BC995';

    factdisplay.style.color = '#EBF5DF';

	factdisplay.style.backgroundColor = '#522A27';

	body.style.backgroundColor = '#9BC995';

	for(var i = 0; i < input.length; i++){
		input[i].style.backgroundColor = '#9F7E69';
		input[i].style.color = '#EBF5DF';
	}
}