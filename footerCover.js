import { faqExpand } from './faqExpand.js';

const footerCover = () => {
	const bgElement = document.getElementsByClassName('bg')[0];
	const faqIntroTextEl = document.getElementsByClassName('faq')[0];

	bgElement.addEventListener('mouseenter', (e) => {
		const bgElementDimension = bgElement.getBoundingClientRect();
		const rangeBottomOfImg = 800;
		if (bgElementDimension.bottom < rangeBottomOfImg) {
			animateMouseOver('in');
			bgElement.addEventListener('mouseleave', () => animateMouseOver('out'));
			// faqIntroTextEl.addEventListener('mouseenter', (e) => animateMouseOver('in'));
			// faqIntroTextEl.addEventListener('mouseleave', (e) => animateMouseOver('out'));
			faqExpand();
		}
	});
};

const animateMouseOver = (to) => {
	const videoElement = document.querySelector('.video');
	const tl = gsap.timeline();
	if (to === 'in') {
		// document.querySelector('.video').style.zIndex = -1;
		// document.querySelector('.bg').style.width = "110%";
		// document.querySelector('.faq .cover-arrow').style.scaleX = "1.5";
		// document.querySelector('.faq .cover-arrow').style.transformOrigin = "left";

		gsap.to('.bg', { width: '110%' });

		gsap.to('.faq .cover-arrow', { scaleX: 1.5, transformOrigin: 'left' });
	} else {
		console.log('mouse leave background');
		gsap.to('.bg', { width: '100%' });
		gsap.to('.faq .cover-arrow', {
			scaleX: 1,
			transformOrigin: 'left',
		});
	}
	// return tl;
};

export { footerCover, animateMouseOver };
