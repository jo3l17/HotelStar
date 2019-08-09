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
$("#total").html(0)
total=parseFloat($("#total").html())
i = 0;
$("#agregar").click(function () {
	var flag=true
	// $(this).attr("disabled", flag)
	$("#detail-items")
		.append(
			`<div class="detail-item" id="item-${i}">
			<span class="pull-right">
				<button class="btn btn-danger btn-sm" onClick="removeItem(${i})">
					<i class="fa fa-close"></i>
				</button>
			</span>
			<h5>${$(`#panel1 #headingOne a`).html()}</h5>
			<p>${$(`#ocupacion-1 option:selected`).text()}</p>
			<p>niño(s): 0-1 años: 0</p>
			<p>Estancia corta, Sin Comida</p>
			<p><span>Total:$ ${$("#panel1 .precio").html()}</span></p>
		</div>`
		)
	i++
	total += parseFloat($("#panel1 .precio").html())
	console.log(total)
	$("#total").html(total)
});
$("#agregar2").click(function () {
	// $(this).attr("disabled", true)
	$("#detail-items")
		.append(
			`<div class="detail-item" id="item-${i}">
			<span class="pull-right">
				<button class="btn btn-danger btn-sm" onClick="removeItem(${i})">
					<i class="fa fa-close"></i>
				</button>
			</span>
			<h5>${$(`#panel2 #headingOne a`).html()}</h5>
			<p>${$(`#ocupacion-2 option:selected`).text()}</p>
			<p>niño(s): 0-1 años: 0</p>
			<p>Estancia corta, Sin Comida</p>
			<p><span>Total:$ ${$("#panel2 .precio").html()}</span></p>
		</div>`
		)
	i++
	total += parseFloat($("#panel2 .precio").html())
	console.log(total)
	$("#total").html(total)
});
function removeItem(i) {
	$(`#item-${i}`).remove();
	var flag= false
	// $("#agregar").attr("disabled", flag)
	// $("#agregar").attr("disabled", flag)
}
console.log(parseFloat($("#panel1 .precio").html()))
console.log(parseFloat($("#total").html()))
