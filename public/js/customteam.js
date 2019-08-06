(function ($) {
	var index = $("#owl-index")
	var modal = $("#owl-modal")
	var rooms_custom = $("#owl-rooms-custom")
	var ofertas = $("#owl-ofertas")
	var programas = $("#owl-programas-turisticos")
	var lugares = $("#owl-lugares-interes")
	var establecimientos = $("#owl-establecimientos")

	modal.owlCarousel({
		items: 1,
		itemsCustom: false,
		itemsDesktop: [1199, 1],
		itemsDesktopSmall: [991, 1],
		itemsTablet: [768, 1],
		itemsTabletSmall: [600, 1],
		itemsMobile: [479, 1],
		singleItem: false,
		itemsScaleUp: false,
		margin: 30,
		//Autoplay
		autoPlay: true,
		stopOnHover: true,
		// Navigation
		//Pagination
		pagination: true,
		paginationNumbers: false,
		// Responsive 
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWidth: window,
	})

	index.owlCarousel({
		items: 3,
		itemsCustom: false,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [991, 2],
		itemsTablet: [768, 1],
		itemsTabletSmall: [600, 1],
		itemsMobile: [479, 1],
		singleItem: false,
		itemsScaleUp: false,
		margin: 30,
		//Autoplay
		autoPlay: true,
		stopOnHover: true,
		// Navigation
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		rewindNav: true,
		scrollPerPage: false,
		//Pagination
		pagination: false,
		paginationNumbers: false,
		// Responsive 
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWidth: window,
	});

	rooms_custom.owlCarousel({
		items: 2,
		itemsCustom: false,
		itemsDesktop: [1199, 2],
		itemsDesktopSmall: [991, 2],
		itemsTablet: [768, 2],
		itemsTabletSmall: [600, 1],
		itemsMobile: [479, 1],
		singleItem: false,
		itemsScaleUp: false,
		margin: 30,
		//Autoplay
		autoPlay: true,
		stopOnHover: true,
		// Navigation
		//Pagination
		pagination: true,
		paginationNumbers: false,
		// Responsive 
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWidth: window,
	})
	ofertas.owlCarousel({
		items: 3,
		itemsCustom: false,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [991, 2],
		itemsTablet: [768, 2],
		itemsTabletSmall: [600, 1],
		itemsMobile: [479, 1],
		singleItem: false,
		itemsScaleUp: false,
		//Autoplay
		autoPlay: true,
		stopOnHover: true,
		// Navigation
		navigation: false,
		navigationText: false,
		rewindNav: false,
		scrollPerPage: false,
		//Pagination
		pagination: true,
		paginationNumbers: false,
		// Responsive 
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWidth: window,
	});

	programas.owlCarousel({
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [991,1],
		itemsTablet: [768,1],
		itemsTabletSmall: [600,1],
		itemsMobile : [479,1],
		singleItem : false,
		itemsScaleUp : false,
		margin:30,
		//Autoplay
		autoPlay : true,
		stopOnHover : true,
		// Navigation
		//Pagination
		pagination : true,
		paginationNumbers: false,
		// Responsive 
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window,
	})
	lugares.owlCarousel({
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [991,1],
		itemsTablet: [768,1],
		itemsTabletSmall: [600,1],
		itemsMobile : [479,1],
		singleItem : false,
		itemsScaleUp : false,
		margin:30,
		//Autoplay
		autoPlay : true,
		stopOnHover : true,
		// Navigation
		//Pagination
		pagination : true,
		paginationNumbers: false,
		// Responsive 
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window,
	})
	establecimientos.owlCarousel({
		items : 1,
		itemsCustom : false,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [991,1],
		itemsTablet: [768,1],
		itemsTabletSmall: [600,1],
		itemsMobile : [479,1],
		singleItem : false,
		itemsScaleUp : false,
		margin:30,
		//Autoplay
		autoPlay : true,
		stopOnHover : true,
		// Navigation
		//Pagination
		pagination : true,
		paginationNumbers: false,
		// Responsive 
		responsive: true,
		responsiveRefreshRate : 200,
		responsiveBaseWidth: window,
	})

})(jQuery)

$(window).on('load', function () {
	$('#myModal').modal('show');

});
