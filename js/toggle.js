const togglebtn = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("nav-links")[0];

togglebtn.addEventListener("click", () => {
	navbarLinks.classList.toggle("active");
});
