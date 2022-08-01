// hidden block
const headerMenu = document.querySelector(".header__menu");
const menuBurger = document.querySelector(".burger-menu");
const wrapper = document.querySelector(".wrapper");
const body = document.querySelector("body");
menuBurger.addEventListener("click", function() {
	headerMenu.classList.toggle("header__menu--active");
	let toggleBurger = menuBurger.classList.toggle("burger-menu--active");
	wrapper.classList.toggle("wrapper-shadow");
	if (toggleBurger) {
		wrapper.style.overflow = "hidden";
		wrapper.style.height= "100vh";
	}
	else {
		wrapper.style.overflow = "";
		wrapper.style.height= "";
	}
});

