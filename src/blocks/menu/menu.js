(() => {
	$menu = $('nav.menu');

	$('.menu__btn-open, .menu__btn-close').on('click', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$menu.toggleClass('opened');
	});

	$(window).on('click', function(e) {
		if($menu.hasClass('opened') && !e.target.closest('nav.menu')) {
			e.preventDefault();
			$menu.toggleClass('opened');
		}
	});

})();
