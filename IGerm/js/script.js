const scrollTexts = document.querySelectorAll('.scroll-text');




scrollTexts.forEach((text) => {
	text.addEventListener('click', () => {
		window.scrollTo({
			top: text.getAttribute('data-scroll') / 100 * (document.body.scrollHeight - window.innerHeight),
			behavior: 'smooth',
		});
	});
});

function updateWebsiteWidth() {
	const websiteWidth = document.documentElement.clientWidth;
	const websiteWidthElement = document.getElementById('website-width');
	websiteWidthElement.textContent = websiteWidth;
}

// Call the function on page load
updateWebsiteWidth();

// Attach the function to the window resize event
window.addEventListener('resize', updateWebsiteWidth);

