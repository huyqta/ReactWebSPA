jQuery("document").ready(function($){

	// var nav = $('.nav-container');

	// $(window).scroll(function () {
	// 	if ($(this).scrollTop() > 136) {
	// 		nav.addClass("f-nav");
	// 	} else {
	// 		nav.removeClass("f-nav");
	// 	}
	// });

	$(".owl-carousel").owlCarousel({
		items:1,
		loop: true,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		touchDrag: false,
		mouseDrag: false,
		pullDrag: false,
		freeDrag: false,
		dots: false,
		dotsEach: true,
		dotsSpeed: 500,
		autoplay: true,
		autoplayTimeout: 2000
	});
});
