window.onbeforeunload = () => {
	window.scrollTo(0, 0);
};

window.onload = () => {
	gsap.registerPlugin(ScrollTrigger);
	animate();
};

const animate = () => {
	gsap.fromTo(
		'.the_sun',
		{
			x: '-50vw',
			duration: 2,
			zIndex: 1,
			scrollTrigger: {
				trigger: '#drama',
				start: 'top 85%',
				end: 'top 20%',
				scrub: 1,
			},
		},
		{
			x: 0,
			duration: 2,
			zIndex: 1,
			scrollTrigger: {
				trigger: '#drama',
				start: 'top 85%',
				end: 'top 20%',
				scrub: 1,
			},
		}
	);

	gsap.fromTo(
		'.the_sun',
		{
			x: '0vw',
			scrollTrigger: {
				trigger: '#intro',
				start: 'top 75%',
				end: 'top 20%',
				scrub: 1,
			},
		},
		{
			x: '-50vw',
			duration: 2,
			zIndex: 1,
			scrollTrigger: {
				trigger: '#intro',
				start: 'top 75%',
				end: 'top 20%',
				scrub: 1,
			},
		}
	);

	gsap.to('#intro h1', {
		autoAlpha: 1,
		scrollTrigger: {
			trigger: '#intro',
			start: 'top 40%',
			end: 'top 30%',
			scrub: 1,
		},
	});
	gsap.to('#intro .text1', {
		autoAlpha: 1,
		scrollTrigger: {
			trigger: '#intro',
			start: 'top 20%',
			end: 'top 10%',
			scrub: 1,
		},
	});
	gsap.to('#intro .text2', {
		autoAlpha: 1,
		scrollTrigger: {
			trigger: '#intro',
			start: 'top 10%',
			end: 'top 0%',
			scrub: 1,
		},
	});

	gsap.to('#intro', {
		autoAlpha: 0,
		scrollTrigger: {
			trigger: '#intro',
			start: 'bottom 85%',
			end: 'bottom 60%',
			scrub: 1,
		},
	});

	gsap.to('.the_sun div', {
		height: 350,
		y: '10%',
		duration: 2,
		scrollTrigger: {
			trigger: '#drama',
			start: '18% 30%',
			end: '18% 10%',
			onEnterBack: () => {
				const sun = document.querySelector('.the_sun');
				sun.style.position = 'fixed';
			},
			onLeave: () => {
				const sun = document.querySelector('.the_sun');
				sun.style.position = 'relative';
			},
			scrub: 1,
		},
	});

	gsap.to('.personalised', {
		y: -250,
		autoAlpha: 1,
		duration: 2,
		scrollTrigger: {
			trigger: '#drama',
			start: '18% 30%',
			end: '18% 10%',
			scrub: 1,
			// onLeave: () => {
			// 	document.body.style.overflowY = 'hidden';
			// 	setTimeout(() => {
			// 		document.body.style.overflowY = 'scroll';
			// 	}, 1500);
			// },
		},
	});

	gsap.to('#chapter', {
		backgroundAttachment: 'fixed',
		scrollTrigger: {
			trigger: '#chapter',
			start: 'top 0%',
			end: 'bottom 0%',
			scrub: 1,
		},
	});

	gsap.to('.introducing', {
		autoAlpha: 1,
		stagger: 0.5,
		scrollTrigger: {
			trigger: '#chapter',
			markers: true,
			start: 'top 0%',
			end: 'bottom 0%',
			scrub: 1,
		},
	});

	gsap.to('.introducing', {
		autoAlpha: 0,
		stagger: 0.5,
		scrollTrigger: {
			trigger: '#chapter',
			markers: true,
			start: 'top -10%',
			end: 'bottom -10%',
			scrub: 1,
		},
	});
};

// onLeave: () => {
//   console.log('masuk masa bila?');
//   const sun = document.querySelector('.the_sun');
//   sun.style.position = 'relative';
//   sun.style.transform = 'translate(0, 150%)';
// },
