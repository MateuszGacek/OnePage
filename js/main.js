const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const navItem = document.querySelector(".nav-mobile");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
};
const removeNavMobile = () => {
	navItem.classList.remove("nav-mobile--active");
	navBtn.classList.remove("is-active");
};

navBtn.addEventListener("click", handleNav);
navItem.addEventListener("click", removeNavMobile);

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
