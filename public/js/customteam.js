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
	lugares.owlCarousel({
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
	establecimientos.owlCarousel({
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

})(jQuery)

$(window).on('load', function () {
	$('#myModal').modal('show');

});
var nowTemp = new Date();
var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

var checkin = $('#fecha_inicio').datepicker({
	format: 'dd-mm-yyyy',
	onRender: function (date) {
		return date.valueOf() < now.valueOf() ? 'disabled' : '';
	}
}).on('changeDate', function (ev) {
	if (ev.date.valueOf() > checkout.date.valueOf()) {
		var newDate = new Date(ev.date)
		newDate.setDate(newDate.getDate() + 1);
		checkout.setValue(newDate);
	}
	checkin.hide();
	$('#fecha_termino')[0].focus();
}).data('datepicker');
var checkout = $('#fecha_termino').datepicker({
	format: 'dd-mm-yyyy',
	onRender: function (date) {
		return date.valueOf() <= checkin.date.valueOf() ? 'disabled' : '';
	}
}).on('changeDate', function (ev) {
	checkout.hide();
}).data('datepicker');
var precios = []
$("#total").html(0)
$("#precio-total").html(0)
total = parseFloat($("#total").html())
i = 0;
$(".agregarItem").click(function () {
	$(this).addClass("disabled")
	var itemId = $(this).parent().parent().parent().parent().parent().parent().parent().parent().parent().attr("id")
	$(this).addClass(`btn-${i}`);
	$("#detail-items")
		.append(
			`<div class="detail-item" id="item-${i}">
			<span class="pull-right">
				<button class="btn btn-danger btn-sm" onClick="removeItem(${i})">
					<i class="fa fa-close"></i>
				</button>
			</span>
			<h5>${$(`#${itemId} .panel-heading a`).html()}</h5>
			<p>${$(`#ocupacion-1 option:selected`).text()}</p>
			<p>niño(s): 0-1 años: 0</p>
			<p>Estancia corta, Sin Comida</p>
			<p><span>Total:$ ${$(`#${itemId} .precio`).html()}</span></p>
		</div>`
		)
	precios[i] = parseFloat($(`#${itemId} .precio`).html())
	i++
	total += parseFloat($(`#${itemId} .precio`).html())
	// console.log(total)
	$("#total").html(total)
	$("#precio-total").html(total)
	$("#btn-siguiente").removeClass("disabled")
});

function removeItem(i) {
	total = total - precios[i]
	$("#total").html(total)
	$("#precio-total").html(total)
	$(`#item-${i}`).remove();
	$(`.btn-${i}`).removeClass("disabled")
	i--
	if (total==0){
		$("#btn-siguiente").addClass("disabled")
	}
}
var fixed = $("#detalles-compra")
$.fn.scrollBottom = function () {
	return $(document).height() - this.scrollTop() - this.height();
};
console.log(fixed)
function fixDiv() {
	var $cache = $('#detalles-compra');
	if ($(window).scrollTop() > 550 && $(window).scrollBottom() > 440) {

		if ($(window).width() > 992) {
			// $cache.css({
			// 	'position': 'fixed',
			// 	'top': '100px'
			// });
			$cache.addClass("detalles-compra-fixed")
		} else { }
	}
	else {
		// $cache.css({
		// 	'position': 'relative',
		// 	'top': 'auto'
		// });
		$cache.removeClass("detalles-compra-fixed")
	}

}
$(window).resize(function () {
	if ($(window).width() < 992) {
		fixed.removeClass("detalles-compra-activo")
		fixed.addClass("detalles-compra-inactivo")
	} else {
		fixed.addClass("detalles-compra-activo")
		fixed.removeClass("detalles-compra-inactivo")
	}
});

// console.log($(window).width())
$(window).scroll(fixDiv);
fixDiv();
// console.log(parseFloat($("#panel1 .precio").html()))
// console.log(parseFloat($("#total").html()))
$("#detalles-compra-bottom a").click(
	function mostrardetalles() {
		fixed.parent().removeClass("visible-md")
		fixed.parent().removeClass("visible-lg")
		fixed.removeClass("detalles-compra-inactivo")
		fixed.addClass("detalles-compra-activo")
	}
)
function cerrarDetalles() {
	fixed.parent().addClass("visible-md")
	fixed.parent().addClass("visible-lg")
	fixed.addClass("detalles-compra-inactivo")
	fixed.removeClass("detalles-compra-activo")
}