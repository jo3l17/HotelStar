(function ($) {
    $.fn.ColorPanel = function (options) {
        var settings = $.extend({
            styleSheet: '#cpswitch'
            , colors: {
                '#ffcb05': 'css/yellow.css'
                , '#3cafff': 'css/skyblue.css'
                , '#ff6666': 'css/pink.css'
                , '#7fc143': 'css/green.css'
                , '#00cccc': 'css/cyan.css'
                , '#ffbf80': 'css/skin.css'
                , '#9797ff': 'css/lightblue.css'
                , '#d98cb3': 'css/purple.css'
                , '#cc9966': 'css/brown.css'
                , '#00e6ac': 'css/spring-green.css'
                , '#fc603f': 'css/orange.css'
                , '#c4c920': 'css/lightgreen.css'
                , '#e266e8': 'css/strongpurple.css'
                , '#6ce34b': 'css/stronggreen.css'
            , }
            , linkClass: 'linka'
            , animateContainer: false
        }, options);
        var panelDiv = this;
		
		$('#cpToggle').click(function(e){
			e.preventDefault();
			 $('ul',panelDiv).slideToggle();
		});
		
        var colors = settings.colors || null;
        if (colors) {
            $.each(colors, function (key, value) {
                var li = $("<li/>");
                var e = $("<a />", {
                    href: value
                    , "class": settings.linkClass, // you need to quote "class" since it's a reserved keyword
                }).css('background-color', key);
                li.append(e);
                $(panelDiv).find('ul').append(li);
            });
            $('ul',panelDiv).on('click', 'a', function (e) {
                e.preventDefault();
                var CssFile = $(this).attr('href') || 'yellow.css';
                if (settings.animateContainer) {
                    $(settings.animateContainer).fadeOut(function () {
                        $(settings.styleSheet).attr('href', CssFile);
                        // And then:
                        $(this).fadeIn();
                    });
                }
                else {
                    $(settings.styleSheet).attr('href', CssFile);
                }
            });
        }
    };
}(jQuery));