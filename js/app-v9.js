window.onbeforeunload = () => {
	window.scrollTo(0, 0);
};

window.onload = () => {
	gsap.registerPlugin(ScrollTrigger);
	const bg = document.getElementById('bg');
	// bg.style.transform = `translate(0px, ${innerHeight * 2}px)`;

	const breakpoints = {
		mobile: 576,
	};

	if (screen.width < breakpoints.mobile) {
		console.log('masuk sini x?');
		animateMobile();
	} else {
		animate();
	}
};

const animate = () => {
	gsap.fromTo(
		'#sun',
		{
			x: '-50vw',
			duration: 20,
			zIndex: 1,
			scrollTrigger: {
				trigger: '#intro',
				start: 'bottom 90%',
				end: 'bottom 65%',
				scrub: 1,
			},
		},
		{
			x: 0,
			duration: 80,
			zIndex: 1,
			ease: Power0.easeNone,
			scrollTrigger: {
				trigger: '#intro',
				start: 'bottom 90%',
				end: 'bottom 65%',
				scrub: 1,
			},
		}
	);

	gsap.fromTo(
		'#sun',
		{
			x: '0vw',
			scrollTrigger: {
				trigger: '#intro',
				start: 'top 97%',
				end: 'top 50%',
				scrub: 1,
			},
		},
		{
			x: '-50vw',
			duration: 20,
			zIndex: 1,
			ease: Power0.easeNone,
			scrollTrigger: {
				trigger: '#intro',
				start: 'top 97%',
				end: 'top 50%',
				scrub: 1,
			},
		}
	);

	gsap.to('.intro-text', {
		autoAlpha: 1,
		duration: 20,
		stagger: 2,
		ease: Power0.easeNone,
		scrollTrigger: {
			trigger: '#intro',
			start: 'top 50%',
			end: 'top 0%',
			scrub: 1,
		},
	});

	gsap.to('#intro', {
		autoAlpha: 0,
		duration: 20,
		stagger: 2,
		ease: Power0.easeNone,
		scrollTrigger: {
			trigger: '#intro',
			start: 'bottom 85%',
			end: 'bottom 60%',
			scrub: 1,
		},
	});

	const bgTl = gsap.timeline({
		scrollTrigger: {
			trigger: '#intro',
			start: 'bottom 70%',
			end: '+=5000px',
			pin: true,
			scrub: 0.5,
		},
	});

	bgTl.to('#bg', {
		y: '70vh',
		duration: 20,
		ease: Power0.easeNone,
	});

	bgTl.to('#bg', {
		y: '0vh',
		duration: 20,
		ease: Power0.easeNone,
	});

	bgTl.to('#bg', {
		y: '-50vh',
		duration: 20,
		ease: Power0.easeNone,
	});

	bgTl.to('#sun .sun-img', {
		y: -100,
		height: 330,
		duration: 20,
		ease: Power0.easeNone,
	});

	bgTl.to('#inspired', {
		autoAlpha: 1,
		y: 80,
		duration: 50,
		ease: Power0.easeNone,
	});

	bgTl.to('#bg', {
		y: '-150vh',
		duration: 60,
		delay: 10,
		ease: Power0.easeNone,
	});

	bgTl.to(
		'#sun .sun-img',
		{
			y: '-90vh',
			duration: 50,
			ease: Power0.easeNone,
		},
		'<'
	);

	bgTl.to(
		'#inspired',
		{
			y: '-100vh',
			duration: 70,
			ease: Power0.easeNone,
		},
		'<'
	);

	const introducing = document.querySelectorAll('.introducing');
	introducing.forEach((intro, i) => {
		const introTl = gsap.timeline();
		introTl.fromTo(
			intro,
			{
				autoAlpha: 0,
				y: '30vh',
			},
			{
				autoAlpha: 1,
				y: 0,
				duration: 60,
				ease: Power0.easeNone,
			}
		);

		introTl.to(intro, {
			autoAlpha: 0,
			y: '-10vh',
			duration: 40,
			delay: 20,
			ease: Power0.easeNone,
		});

		bgTl.add(introTl, '>+1.5');
	});
};

const animateMobile = () => {
	gsap.fromTo(
		'#sun',
		{
			x: '-70vw',
			duration: 20,
			zIndex: 1,
			scrollTrigger: {
				trigger: '#intro',
				start: 'bottom 90%',
				end: 'bottom 65%',
				scrub: 1,
			},
		},
		{
			x: 0,
			duration: 80,
			zIndex: 1,
			ease: Power0.easeNone,
			scrollTrigger: {
				trigger: '#intro',
				start: 'bottom 90%',
				end: 'bottom 65%',
				scrub: 1,
			},
		}
	);

	gsap.fromTo(
		'#sun',
		{
			x: '0vw',
			scrollTrigger: {
				trigger: '#intro',
				start: 'top 97%',
				end: 'top 50%',
				scrub: 1,
			},
		},
		{
			x: '-70vw',
			duration: 20,
			zIndex: 1,
			ease: Power0.easeNone,
			scrollTrigger: {
				trigger: '#intro',
				start: 'top 97%',
				end: 'top 50%',
				scrub: 1,
			},
		}
	);

	gsap.to('.intro-text', {
		autoAlpha: 1,
		duration: 20,
		stagger: 2,
		ease: Power0.easeNone,
		scrollTrigger: {
			trigger: '#intro',
			start: 'top 50%',
			end: 'top 0%',
			scrub: 1,
		},
	});

	gsap.to('#intro', {
		autoAlpha: 0,
		duration: 20,
		stagger: 2,
		ease: Power0.easeNone,
		scrollTrigger: {
			trigger: '#intro',
			start: 'bottom 85%',
			end: 'bottom 60%',
			scrub: 1,
		},
	});

	const bgTl = gsap.timeline({
		scrollTrigger: {
			trigger: '#intro',
			start: 'bottom 70%',
			end: '+=2000px',
			scrub: 60,
		},
	});

	bgTl.to('#bg', {
		y: '70vh',
		duration: 20,
		ease: Power0.easeNone,
	});

	bgTl.to('#bg', {
		y: '0vh',
		duration: 20,
		ease: Power0.easeNone,
	});

	bgTl.to('#bg', {
		y: '-41vh',
		duration: 20,
		ease: Power0.easeNone,
	});

	bgTl.to('#sun .sun-img', {
		y: -50,
		height: '40vw',
		duration: 20,
		ease: Power0.easeNone,
	});

	bgTl.to('#inspired', {
		autoAlpha: 1,
		y: 60,
		duration: 50,
		ease: Power0.easeNone,
	});

	bgTl.to('#bg', {
		y: '-100vh',
		duration: 60,
		delay: 20,
		ease: Power0.easeNone,
	});

	bgTl.to(
		'#sun .sun-img',
		{
			y: '-90vh',
			duration: 50,
			ease: Power0.easeNone,
		},
		'<'
	);

	bgTl.to(
		'#inspired',
		{
			y: '-100vh',
			duration: 70,
			ease: Power0.easeNone,
		},
		'<'
	);

	const introducing = document.querySelectorAll('.introducing');
	introducing.forEach((intro, i) => {
		const introTl = gsap.timeline();
		introTl.fromTo(
			intro,
			{
				autoAlpha: 0,
				y: '30vh',
			},
			{
				autoAlpha: 1,
				y: 0,
				duration: 60,
				delay: 120,
				ease: Power0.easeNone,
			},
			'>+2'
		);

		introTl.to(intro, {
			autoAlpha: 0,
			y: '-10vh',
			duration: 40,
			delay: 120,
			ease: Power0.easeNone,
		});

		bgTl.add(introTl, '>+1.5');
	});
};
