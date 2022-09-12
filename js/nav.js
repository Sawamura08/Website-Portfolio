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
					<li><a href="/html/profile-first-page.html">About</a></li>
					<li><a href="#">Skills</a></li>
					<li><a href="#">Work</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</div>
    
    
    
    
    
    `;
};

createNav();
