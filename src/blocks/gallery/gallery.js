import mixitup from 'mixitup';

(() => {

	let mixer = document.querySelector('.gallery__items');
	if(mixer) {
		mixitup(mixer, {
			load: { filter: '.gallery__item_bedroom' },
			selectors: { target: '.gallery__item' },
			animation: {
				effects: 'fade scale',
				// effects: 'fade translateX(100%)',
				// reverseOut: true,
				// nudge: false
			}
		});
	}

})();
