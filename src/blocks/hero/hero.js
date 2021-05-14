import 'owl.carousel';

(() => {

	$('.hero__slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		nav: false,
		dots: true,
		dotsEach: true,
		dotClass: 'hero__slider-dot'
	});

})();
