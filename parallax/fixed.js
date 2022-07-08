const fixed = () => {
	const parallax2 = gsap.timeline();
	const parallax3 = gsap.timeline();
	const parallax4 = gsap.timeline();
	const parallax5 = gsap.timeline();

	parallax2
		.to('.logo', {
			opacity: 0,
			delay: 0.5,
		})
		.to(
			'.logo-white',
			{
				opacity: 1,
			},
			'<'
		);

	ScrollTrigger.create({
		animation: parallax2,
		trigger: '.bg-text',
		scrub: 1,
	});

	parallax3
		.to('.menu', {
			opacity: 0,
			delay: 0.5,
		})
		.to(
			'.menu-white',
			{
				opacity: 1,
			},
			'<'
		);

	ScrollTrigger.create({
		animation: parallax3,
		trigger: '.bg-text',
		scrub: 1,
	});

	parallax4
		.to('.icons', {
			opacity: 0,
			delay: 0.5,
		})
		.to(
			'.icons-white',
			{
				opacity: 1,
			},
			'<'
		);

	ScrollTrigger.create({
		animation: parallax4,
		trigger: '.bg-text',
		scrub: 1,
	});

	parallax5
		.to('.footer-text', {
			opacity: 0,
			delay: 0.5,
		})
		.to(
			'.footer-text-white',
			{
				opacity: 1,
			},
			'<'
		);

	ScrollTrigger.create({
		animation: parallax5,
		trigger: '.bg-text',
		scrub: 1,
	});
};

export { fixed };
