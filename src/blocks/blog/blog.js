import 'owl.carousel';

(() => {

	$('.blog__image_slider').owlCarousel({
		loop: true,
		items: 1,
		margin: 0,
		dots: false,
		nav: true,
		navText: ['', '']
	});

	$('.blog__image_video').on('click', '.blog__btn-play', function(e) {
		let $self = $(this);

		$self
			.prev('.blog__video-frame')
			.attr('src', $self.data('youtubeSrc'))
			.end()
			.fadeOut();
	});

})();
