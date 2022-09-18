const createNav = () => {
	let nav = document.querySelector(".navbar");

	nav.innerHTML = `
    <h1>Lia Vern</h1>
			<a href="#" class="toggle-btn">
				<span class="bar"></span>
				<span class="bar"></span>
				<span class="bar"></span>
			</a>
			<div class="nav-links">
				<ul class="ul-container">
					<li><a href="#about">About</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#service">Service</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
    
    
    
    
    
    `;
};

createNav();
