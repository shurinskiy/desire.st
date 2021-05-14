import 'owl.carousel';

(() => {

	$('.slider__items').owlCarousel({
		loop: true,
		items: 4,
		margin: 25,
		nav: false,
		dots: true,
		dotsEach: true,
		dotClass: 'slider__dot',
		responsive: {
			0: {
				items: 1,
				dots: false
			},
			480: {
				items: 2,
			},
			640: {
				items: 3,
			},
			780: {
				items: 4,
			},
			1100: {
				items: 5,
			},
			1280: {
				items: 6,
			},
			1440: {
				items: 7,
			},
			1680: {
				items: 8,
			}
		}
	});

})();
