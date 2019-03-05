$(window).load(function() {

	function collage() {
	    $(".gallery .justified-gallery").removeWhitespace().collagePlus({
			"targetHeight" : 400,
			"fadeSpeed" : "fast",
			"effect" : "default",
			"direction" : "vertical",
			"allowPartialLastRow" : false
		});
	};

	collage();
	
	var resizeTimer = null;
	$(window).bind('resize', function() {
	    $(".gallery .justified-gallery .Image_Wrapper").css("opacity", 0);
	    // set a timer to re-apply the plugin
	    if (resizeTimer) clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(collage, 200);
	});
});

$(document).ready(function() {
	var slider = $(".big-home-slider ul").bxSlider({
		mode: "fade",
		speed: 500,

		pager: true,
		pagerType: "full",
		pagerSelector: ".big-home-slider .big-home-slider-pager",

		controls: true,
		nextText: "<div><i class='fa fa-angle-left'></i></div>",
		prevText: "<div><i class='fa fa-angle-right'></i></div>",
		nextSelector: ".big-home-slider .big-home-slider-controls #next",
		prevSelector: ".big-home-slider .big-home-slider-controls #prev",

		auto: true,
		pause: 4000,
		autoStart: true,
		autoDirection: "next",
		autoHover: false,
		autoDelay: 0,

		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,

		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function($slideElement, oldIndex, newIndex) {
			$(".big-home-slider li:not(.starting-slide) h1").removeClass("animated fadeInDown");
			$(".big-home-slider li:not(.starting-slide) p").removeClass("animated fadeInUp");
			$(".big-home-slider li:not(.starting-slide) a").removeClass("animated fadeInLeft");
			$(".big-home-slider li:first-child").removeClass("starting-slide");
			$slideElement.find("h1").addClass("animated fadeInDown");
			$slideElement.find("p").addClass("animated fadeInUp");
			$slideElement.find("a").addClass("animated fadeInLeft");
		},
		onSlideNext: function() {},
		onSlidePrev: function() {}
	});
});
