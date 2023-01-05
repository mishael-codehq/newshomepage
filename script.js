/** @format */

let nav = document.getElementById("nav");

let nav_menu = document.getElementById("nav--menu");

let nav_close = document.getElementById("nav--close");

let body = document.querySelector("body");

let blog_image = document.querySelector(".blog__image");
nav_menu.onclick = () => {
	nav.classList.add("active");
	body.style.backgroundImage =
		"linear-gradient(to bottom, #c2c2c2, #c2c2c2, #c2c2c2, #c2c2c2, #c2c2c2)";
};

nav_close.onclick = () => {
	nav.classList.remove("active");
	body.style.backgroundImage = "none";
};
window.onload = () => {
	console.log(window.innerWidth);
	if (window.innerWidth < 1016) {
		blog_image.src = "images/image-web-3-mobile.jpg";
	}
};
