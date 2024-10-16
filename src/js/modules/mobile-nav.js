function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const content = document.querySelector('.content');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		content.classList.toggle('content--close');
		// document.body.classList.toggle('no-scroll');
	};
}

export default mobileNav;