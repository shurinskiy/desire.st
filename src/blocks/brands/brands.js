import 'owl.carousel';

(() => {

	$('.brands__items').owlCarousel({
		loop: true,
		items: 4,
		margin: 25,
		dots: false,
		nav: true,
		navText: ['', ''],
		navClass: ['brands__prev', 'brands__next'],
		responsive: {
			0: {
				items: 1,
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
			}
		}
	});

})();
