
export function init() {
	window.addEventListener('load', scroller);
	window.addEventListener('scroll', scroller);
}

export　function scroller() {
	const appearUps = document.querySelectorAll('.appear-up');
	const appears = document.querySelectorAll('.appear');
	const height = window.innerHeight - window.innerHeight * 0.3;

	appearUps.forEach((v) => {
		const top = v.getBoundingClientRect().top;
		if ( height > top ) {
			v.classList.add('on');
		}
	});

	appears.forEach((v) => {
		const top = v.getBoundingClientRect().top;
		if ( height > top ) {
			v.classList.add('on');
		}
	});
}