var windowSize = window.innerWidth > 750 ? 'desktop' : 'mobile';
const innerWidth = window.innerWidth;
const mobileInnerWidth = 750;

const footerSection = (tl) => {
	if (innerWidth > mobileInnerWidth) {
		tl.to('.bg', { duration: 1, scale: 0.5, y: '-50%', x: '-30%' });
	} else {
		tl.to('.bg', { duration: 1, display: "none" }, '<');
		tl.fromTo('.mobileView', { opacity: 1, y: '100%' }, { opacity: 1, y: '0%', display: "block" }, '<');
	}

	// } else {
	// 	tl.to('.bg', { duration: 0.6, y: "-600vh" );

	// }
	tl.to('.video', { opacity: 1 }, '<');
	tl.to('.faq', { opacity: 1 }, '<+0.5');
};

export { footerSection };
