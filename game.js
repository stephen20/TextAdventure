var randomStuff = function (){

	var gameEle = document.getElementById('game');

	console.log(gameEle.tagName); // Should print main
	console.log(gameEle.parentNode.tagName); // Should print body
	console.log(gameEle.previousSibling.tagName); // Should print header (undefined)

	console.log(document.querySelector('title'));
	var header = document.querySelector('header');
	console.log(header.innerHTML);
	console.log(header.childNodes);
	console.log(header.parentNode);


}

window.onload = randomStuff;