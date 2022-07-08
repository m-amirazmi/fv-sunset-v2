window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};

window.onload = () => {
	gsap.registerPlugin(ScrollTrigger);
	start();
};

const start = () => {
	const getBg = document.getElementById('bg');
	getBg.style.transform = `translate(0px, ${innerHeight * 3 - 200}px)`;
	// getBg.style.autoAlpha = 1;
	animatePanel();
};

const animatePanel = () => {
	const animateObj = {
		intro: (p, from) => animateIntro(p, from),
		enterBlur: (p, from) => animateEnterBlur(p, from),
		start: () => {
			window.scrollTo(0, 0);
		},
	};

	gsap.utils.toArray('.panel').forEach((panel, i) => {
		const firstChild = Array.from(panel.childNodes).find((el) => el.tagName === 'DIV');

		const animation = animateObj[firstChild?.id]?.(panel, 'in');
		const exitAnimation = animateObj[firstChild?.id]?.(panel, 'out');

		ScrollTrigger.create({
			trigger: panel,
			onEnter: () => goToSection(i, animation),
		});
		ScrollTrigger.create({
			trigger: panel,
			start: 'bottom bottom',
			onEnterBack: () => goToSection(i, exitAnimation, 'out'),
		});
	});
};

const goToSection = (i, anim, inout) => {
	const tl = gsap.timeline();

	tl.to(window, {
		scrollTo: { y: i * innerHeight, autoKill: false },
		duration: 1,
		ease: 'none',
	});

	if (anim) {
		anim.restart();
	}
};

const animateIntro = (panel, from) => {
	const { height } = panel.getBoundingClientRect();
	const tl = gsap.timeline({
		paused: true,
		onStart: () => (document.body.style.overflowY = 'hidden'),
		onComplete: () => (document.body.style.overflowY = 'auto'),
	});

	const mobileWidth = 576;
	if (innerWidth < mobileWidth) {
		tl.to('#intro', { scale: 1, transformOrigin: 'left', autoAlpha: 1, duration: 1 });
		tl.to('#sun', { x: '-65vw', duration: 2 }, '<');
		if (from === 'out') {
			tl.to('#sun', { x: 0 });
			return tl.pause();
		}
		console.log(height, height / 3, height / 2);
		tl.fromTo('#intro h1', { y: '300%', autoAlpha: 0 }, { y: '250%', autoAlpha: 1, duration: 1 }, '<+0.5');
		tl.to('#intro h1', { y: height / 6, duration: 1 });
		tl.fromTo('#intro .text1', { y: height / 4 }, { y: height / 6, autoAlpha: 1, duration: 1 }, '<');
	} else {
		tl.to('#intro', { scale: 1, transformOrigin: 'left', autoAlpha: 1, duration: 1 });
		tl.to('#sun', { x: '-50vw', duration: 2 }, '<');
		if (from === 'out') {
			tl.to('#sun', { x: 0 });
			return tl.pause();
		}
		tl.fromTo('#intro h1', { y: height / 3.5, autoAlpha: 0 }, { y: height / 4, autoAlpha: 1, duration: 1 }, '<+0.5');
		tl.to('#intro h1', { y: height / 6, duration: 1 });
		tl.fromTo('#intro .text1', { y: height / 4 }, { y: height / 6, autoAlpha: 1, duration: 1 }, '<');
		tl.to('#sun', { y: '-5vh', duration: 1 }, '<');
		tl.fromTo('#intro .text2', { y: height / 4 }, { y: height / 6 }, '<');
		tl.to('#intro h1', { y: 0, duration: 1 });
		tl.to('#intro p', { y: 0, autoAlpha: 1, duration: 1 }, '<');
		tl.to('#sun', { y: 0, duration: 1 }, '<');
	}

	return tl;
};

const animateEnterBlur = (panel, from) => {
	const { height } = panel.getBoundingClientRect();
	console.log(from);
	const tl = gsap.timeline({ paused: true });

	tl.to('#intro', { scale: 0.2, transformOrigin: 'left', autoAlpha: 0, duration: 1 });
	tl.to('#sun', { x: 0, duration: 2 }, '<+0.2');

	return tl;
};
