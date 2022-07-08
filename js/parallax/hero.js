const heroSection = (tl) => {
	const innerWidth = window.innerWidth;
	const mobileInnerWidth = 500;

	tl.to('.intro-img', { x: innerWidth > mobileInnerWidth ? '-50vw' : '-75vw', duration: 0.9 });
	tl.fromTo('.intro-title', { y: innerWidth > mobileInnerWidth ? '50vh' : '100vh', opacity: 0 }, { y: innerWidth > mobileInnerWidth ? '20vh' : '50vh', opacity: 1, duration: 1 }, '<0.7');
	tl.to('.intro-p1', { y: '10vh', opacity: 1, duration: 1, delay: 1 });
	tl.to('.intro-title', { y: '10vh', duration: 1 }, '<');
	tl.to('.intro-img', { y: '-3vh', duration: 1 }, '<');
	tl.to('.intro-title', { y: '0vh', duration: 1 });
	tl.to('.intro-p1', { y: '0vh', duration: 1 }, '<');
	tl.to('.intro-p2', { y: '0vh', opacity: 1, duration: 1 }, '<');
	tl.to('.intro-img', { y: '0vh' }, '<');
	tl.to('.intro-img', { x: '0vw', duration: 2, delay: 0.5 });
	tl.to('.intro-title', { y: '-50vh', scale: 0.5, x: '-7vw', duration: 1.5, opacity: 0 }, '<');
	tl.to('.intro-p1', { y: '-60vh', scale: 0.5, x: '-7vw', duration: 1.5, opacity: 0 }, '<');
	tl.to('.intro-p2', { y: '-70vh', scale: 0.5, x: '-7vw', duration: 1.5, opacity: 0 }, '<');
};

export { heroSection };
