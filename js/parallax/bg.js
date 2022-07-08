const innerWidth = window.innerWidth;
const mobileInnerWidth = 750;

const bgSection = (tl) => {
	tl.to('.bg-blur', { y: '-10vh', opacity: 1, duration: 1 }, '<');
	tl.to('.bg', { y: '-20vh', duration: 1 }, '<');

	// tl.to('.bg', { y: windowSize == "desktop" ? "-100vh" : '-75vh' });
	// tl.to('.bg-blur', { opacity: 0 });
	// tl.to('.bg', { y: windowSize == "desktop" ? "-120vh" : '-80vh' });
	// tl.to('.bg', { y: windowSize == "desktop" ? "-145vh" : '-100vh' });
	tl.to('.bg', { y: '-100vh' });
	tl.to('.bg-blur', { opacity: 0 });
	tl.to('.bg', { y: '-120vh' });
	tl.to('.bg', { y: '-145vh' });
	tl.to('.intro-img-container', { height: 330, y: -120 }, '<');

	tl.to('.bg-text', { y: innerWidth > mobileInnerWidth ? '50%' : '25%', opacity: 1, duration: 1 }, '<');
	tl.to('.bg', { y: '-230vh', duration: 1 });
	tl.to('.intro-img', { y: '-70vh', opacity: 1, duration: 1 }, '<');
	tl.to('.bg-text', { y: innerWidth > mobileInnerWidth ? '-400%' : '-400%', opacity: 1, duration: 1.5 }, '<');
	tl.to('.next-chapter', { y: innerWidth > mobileInnerWidth ? '-30vh' : '-40vh', opacity: 1 }, '<+1');
	tl.to('.bg', { y: '-255vh', duration: 1 });
	tl.to('.next-chapter', { y: '-100vh', duration: 2 }, '<');
};

export { bgSection };
