const faqExpand = () => {
	const faqIntroTextEl = document.getElementsByClassName('cover-container')[0];
	const faqClose = document.getElementsByClassName('faq-close')[0];
	console.log(faqIntroTextEl, "intro click");
	faqIntroTextEl.addEventListener('click', (e) => {
		console.log("expand click");
		document.querySelector('body').style.overflowY = "hidden";
		document.querySelector('.video').style.background = "transparent";
		document.querySelector('.video').style.zIndex = 20;


		const tl = gsap.timeline();
		tl.to('.bg', { width: '250%' }, '<');
		tl.to('.video', {
			x: '23%', onComplete: () => {
				document.querySelector('.linkBtn1').style.marginRight = "25%"
				document.querySelector('.linkBtn2').style.marginRight = "25%"

			}
		}, '<');
		tl.to('.faq', { width: '55%' }, '<');
		tl.to('.faq .cover-text', { y: '-30vh' }, '<');
		tl.to('.faq .cover-arrow', { opacity: 0 }, '<');
		tl.to('.cover', { height: '120vh', width: '120vw', display: "block", position: 'absolute', top: '-50vh', left: '-50px', zIndex: '100', background: 'transparent' }, '<');
		tl.to('.faq-content', { opacity: 1, visibility: "visible", zIndex: 200 }, '<+0.5');
		tl.to('.faq-close', { opacity: 1, zIndex: 200 }, '<');
	});
	faqClose.addEventListener('click', (e) => {
		const tl = gsap.timeline();

		console.log("click");
		document.querySelector('body').style.overflowY = "auto";
		document.querySelector('.linkBtn1').style.marginRight = "30px"
		document.querySelector('.linkBtn2').style.marginRight = "30px"
		document.querySelector('.video').style.background = "black";
		document.querySelector('.video').style.zIndex = 3;

		tl.to('.bg', { width: '100%' }, '<');
		tl.to('.video', { x: '0' }, '<');
		tl.to('.faq .cover-text', { y: 0 }, '<');
		tl.to('.faq-content', { opacity: 0, visibility: "hidden" }, '<-1');
		tl.to('.faq', { width: "auto" }, '<');
		tl.to('.faq .cover-arrow', { opacity: 1 }, '<');
		tl.to('.cover', { display: 'none' }, '<');
		tl.to('.faq-close', { opacity: 0, zIndex: -1 }, '<');






	});
};

export { faqExpand };
