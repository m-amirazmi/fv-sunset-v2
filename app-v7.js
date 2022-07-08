window.onbeforeunload = () => {
	window.scrollTo(0, 0);
};

window.onload = () => {
	gsap.registerPlugin(ScrollTrigger);
	console.log('masuk sini?');
	animate();
};

const animate = () => {
	gsap.fromTo(
		'#sun #sun-container',
		{
			x: '-50vw',
			duration: 2,
			zIndex: 1,
			scrollTrigger: {
				trigger: '#intro',
				start: 'bottom 85%',
				end: 'bottom 20%',
				scrub: 1,
			},
		},
		{
			x: 0,
			duration: 2,
			zIndex: 1,
			scrollTrigger: {
				trigger: '#intro',
				start: 'bottom 85%',
				end: 'bottom 20%',
				scrub: 1,
			},
		}
	);
	gsap.fromTo(
		'#sun #sun-container',
		{
			x: '0vw',
			scrollTrigger: {
				trigger: '#intro',
				start: 'top 90%',
				end: 'top 30%',
				scrub: 1,
			},
		},
		{
			x: '-50vw',
			duration: 2,
			scrollTrigger: {
				trigger: '#intro',
				start: 'top 90%',
				end: 'top 30%',
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
			start: 'top 30%',
			end: 'top 20%',
			scrub: 1,
		},
	});
	gsap.to('#intro .text2', {
		autoAlpha: 1,
		scrollTrigger: {
			trigger: '#intro',
			start: 'top 20%',
			end: 'top 10%',
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

	gsap.to('#sun #sun-img', {
		height: 330,
		y: -100,
		scrollTrigger: {
			trigger: '#bg',
			start: 'center 90%',
			end: 'center 75%',
			scrub: 1,
		},
	});

	gsap.to('#bg-text1', {
		y: '50%',
		autoAlpha: 1,
		duration: 1,
		scrollTrigger: {
			trigger: '#bg',
			start: 'center 90%',
			end: 'center 75%',
			scrub: 1,
		},
	});

	gsap.to('#sun-container', {
		position: 'relative',
		y: 200,
		x: '50vw',
		scrollTrigger: {
			trigger: '#bg',
			start: 'center 40%',
			end: 'center 50%',
			scrub: 1,
			markers: true,
		},
	});
};
