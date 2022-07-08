import { bgSection } from './parallax/bg.js';
import { footerSection } from './parallax/footer.js';
import { heroSection } from './parallax/hero.js';
const innerWidth = window.innerWidth;
const mobileInnerWidth = 750;
const parallax = () => {
	const tl = gsap.timeline();

	heroSection(tl);
	bgSection(tl);
	footerSection(tl);
	if (innerWidth <= mobileInnerWidth) {
		ScrollTrigger.normalizeScroll(true);
		ScrollTrigger.config({ ignoreMobileResize: true });
	}

	ScrollTrigger.create({
		animation: tl,
		trigger: '.parallax',
		start: 'top 0%',
		end: 'bottom 0%',
		scrub: 10,
		pin: true,
	});
};

export { parallax };
