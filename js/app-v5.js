window.onbeforeunload = () => {
	window.scrollTo(0, 0);
};

window.onload = () => {
	gsap.registerPlugin(ScrollTrigger);

	const sections = document.querySelectorAll('section');
	const bg = document.getElementById('bg');
	bg.style.top = `${innerHeight * 3 - 200}px`;

	// gsap.set('main section *', { autoAlpha: 0, y: '1rem' });

	const sectionObserver = new IntersectionObserver((entries) => entries.forEach((e) => animateVisible(e)), { threshold: 0.5 });

	for (const section of sections) {
		sectionObserver.observe(section);
	}
};

const animateVisible = ({ target, intersectionRatio: ratio, isIntersecting }) => {
	const firstDiv = Array.from(target.childNodes).find((child) => child.id !== undefined);

	if (ratio > 0 && isIntersecting) {
		if (firstDiv?.id === 'intro') animateIntro();
		// else if (firstDiv?.id === 'enter-blur') animateEnterBlur();
	} else {
		// if (firstDiv?.id === 'intro') animateIntro('out').play();
		// else if (firstDiv?.id === 'enter-blur') animateEnterBlur().reverse();
	}
};

const animateIntro = (inout) => {
	const tl = gsap.timeline({ paused: true });

	tl.play();
	tl.fromTo('#sun', { x: 0 }, { x: '-50vw', duration: 2 });
	tl.fromTo('#intro h1', { autoAlpha: 0, y: 300 }, { autoAlpha: 1, y: 250 }, '<+0.5');
	tl.fromTo('#intro .text1', { autoAlpha: 0, y: 150 }, { autoAlpha: 1, y: 70, duration: 1 });
	tl.to('#intro h1', { y: 100 }, '<');
	tl.to('#sun', { y: '-5vh' }, '<');
	tl.fromTo('#intro .text2', { autoAlpha: 0, y: 100 }, { autoAlpha: 1, y: 0, duration: 1 });
	tl.to('#intro .text1', { y: 0 }, '<');
	tl.to('#intro h1', { y: 0 }, '<');
	tl.to('#sun', { y: '0vh' }, '<');
};

const animateEnterBlur = () => {
	const tl = gsap.timeline({ paused: true });

	// tl.to('#intro', { y: -200 });

	return tl;
};

// window.onload = () => {
// 	const UAString = navigator.userAgent;
// 	const chromeAgent = UAString.indexOf('Chrome') > -1;
// 	let safariAgent = UAString.indexOf('Safari') > -1;
// 	if (chromeAgent && safariAgent) safariAgent = false;

// 	if (safariAgent) disableScrollSnapType();
// };

// const disableScrollSnapType = () => {
// 	const getSections = document.querySelectorAll('section');
// 	const getMain = document.getElementsByTagName('main')[0];

// 	getSections.forEach((sect) => {
// 		const prop = {
// 			behavior: 'smooth',
// 			block: 'start',
// 			top: sect.offsetTop,
// 		};

// 		getMain.style.scrollSnapType = 'none';
// 		// document.getElementsByTagName('html')[0].style.scrollSnapType = 'none';
// 		window.scrollTo(prop);

// 		setTimeout(() => {
// 			getMain.style.scrollSnapType = 'y mandatory';
// 			// document.getElementsByTagName('html')[0].style.scrollSnapType = 'y mandatory';
// 			sect.scrollIntoView();
// 		}, 500);
// 	});
// };
