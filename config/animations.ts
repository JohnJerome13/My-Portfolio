const DURATIONS = {
	VeryFast: 0.3,
	Fast: 0.6,
	Normal: 0.8,
	Slow: 1.2,
	VerySlow: 1.8,
};

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInRight = {
	offscreen: {
		x: 150,
		opacity: 0,
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: DURATIONS.Slow,
			ease: easing,
		},
	},
};

const fadeInRightSlow = {
	offscreen: {
		x: 150,
		opacity: 0,
	},
	onscreen: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: DURATIONS.VerySlow,
			ease: easing,
			delay: DURATIONS.Normal,
		},
	},
};
const fadeInUp = {
	offscreen: {
		y: 150,
		opacity: 0,
	},
	onscreen: {
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			bounce: 0.4,
			duration: DURATIONS.Slow,
			ease: easing,
		},
	},
};

export { fadeInRight, fadeInRightSlow, fadeInUp };
