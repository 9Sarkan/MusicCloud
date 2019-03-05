$(window).load(function() {

	// Make sidebar's height equal to wrapper's height
	function highestColFunction() {
		var highestCol = Math.max($(".main aside").height(), $(".main .wrapper").height());
		$(".main aside").height(highestCol + 40);
	}
	var windowWidth = $(window).width();
	if(windowWidth > 991) {
		highestColFunction();
	}

	// Hide the loading page when the site has been fully loaded
	$(".site-loader").fadeOut("slow");

	// Page header image expand
	var pageHeaderHeightBG = $(".page-header-bg").height();
	var pageHeaderImageHeightBG = $(".page-header-bg img").height();

	var expanded = false;
	$(".page-header-bg .expand-icon").click(function(e) {
		e.preventDefault();

		if(expanded == false && pageHeaderImageHeightBG != 0) {
			$(".page-header-bg").css("height", pageHeaderImageHeightBG);
			$(".page-header-bg .overlay").css("opacity", 0);
			$(".page-header-bg h3").css("opacity", 0);
			$(".page-header-bg .expand-icon i").removeClass("fa-expand").addClass("fa-compress");
			expanded = true;
		} else {
			$(".page-header-bg").css("height", pageHeaderHeightBG);
			$(".page-header-bg .overlay").css("opacity", 1);
			$(".page-header-bg h3").css("opacity", 1);
			$(".page-header-bg .expand-icon i").removeClass("fa-compress").addClass("fa-expand");
			expanded = false;
		}
	});

	// Events page header image expand
	var pageHeaderHeight = $(".page-header-events").height();
	var pageHeaderImageHeight = $(".page-header-events img").height();
	var expanded = false;
	$(".page-header-events .expand-icon").click(function(e) {
		e.preventDefault();

		if(expanded == false && pageHeaderImageHeight != 0) {
			// $(".page-header-events").css("height", pageHeaderImageHeight);
			$(".page-header-events").animate({height: pageHeaderImageHeight}, 1000);
			$(".page-header-events .overlay").css("opacity", 0);
			$(".page-header-events .page-header-events-content").css("opacity", 0);
			$(".page-header-events .expand-icon i").removeClass("fa-expand").addClass("fa-compress");
			expanded = true;
		} else {
			$(".page-header-events").animate({height: pageHeaderHeight}, 500);
			$(".page-header-events .overlay").css("opacity", 1);
			$(".page-header-events .page-header-events-content").css("opacity", 1);
			$(".page-header-events .expand-icon i").removeClass("fa-compress").addClass("fa-expand");
			expanded = false;
		}
	});

	// Make header's space equal to actual header for fixed navigation
	var headerHeight = $(".header .header-content").height();
	$(".header .header-space").css("height", headerHeight);
});

$(document).ready(function() {
	
	// Calculate widths and paddings on the page
	function calculate() {
		var windowWidth = $(window).width();

		var containerWidth = "";
		if(windowWidth >= 1200) {
			containerWidth = 1170;
		} else if(windowWidth >= 992) {
			containerWidth = 970;
		}

		var padding = ((windowWidth - containerWidth) / 2) + 15;

		var thirdSize = (windowWidth - padding * 2) / 3;

		if(windowWidth <= 992) {
			padding = "";
			thirdSize = "";
		}

		$(".main .categories a").css("padding-right", padding);
		$(".main .content").css("padding-left", padding);
		$(".main .page-header").css("padding-left", padding - 15);
		$(".main .page-header-search").css("padding-left", padding - 15);

		$("footer .social-blocks .block").css("width", thirdSize);
		$("footer .social-blocks .block:first-child").css("padding-right", padding);
		$("footer .social-blocks .block:first-child").css("width", thirdSize + padding);
		$("footer .social-blocks .block:last-child").css("padding-left", padding);
		$("footer .social-blocks .block:last-child").css("width", thirdSize + padding);
	}
	calculate();

	$(window).resize(function() {
		calculate();
	});
	
	// Social Blocks Calculations
	var blockWidth = $("footer .social-blocks .block.facebook > div > div").width();
	var blockMargin = blockWidth / 2;
	$("footer .social-blocks .block.facebook > div > div").css({"right": "50%", "margin-right": "-" + blockMargin + "px"});

	// Mobile Menu
	var menuExpanded = false;
	$(".header nav .expand-menu-icon").click(function() {
		if(menuExpanded == false) {
			$(".header nav > ul").slideDown("slow");
			menuExpanded = true;
		} else {
			$(".header nav > ul").slideUp("slow");
			menuExpanded = false;
		}
	});

	// Position mobile menu icon vertically center
	function centeredMobileIcon() {
		var logoHeight = $(".header .logo").outerHeight(true);
		var menuMargin = logoHeight / 2;
		$(".header nav .expand-menu-icon").css({
			"top": menuMargin,
			"margin-top": -20
		});
	}

	centeredMobileIcon();
	$(window).resize(function() {
		centeredMobileIcon();
	});
	

	$(window).resize(function() {
		var windowWidth = $(window).width();
		if(windowWidth > 767 && menuExpanded == false) {
			$(".header nav > ul").css("display", "block");
		}
	});

	// Position the slider's pager horizontally in center
	var pagerWidth = $(".big-home-slider .big-home-slider-pager").width();
	var pagerMargin = "-" + (pagerWidth / 2) + "px";
	$(".big-home-slider .big-home-slider-pager").css("margin-right", pagerMargin);

	// Back to top button
	$(".to-top a").click(function () {
		$("body, html").animate({
			scrollTop: 0
			}, 1000);
		return false;
	});
	
	// Single Album Star Rating
	$(".stars-rating").each(function() {
		var starsCountAttr = $(this).attr("data-stars");
		var starsCount = parseInt("-" + Math.round(starsCountAttr).toFixed(0));
		$(this).find("i").slice(starsCount).addClass("active-star");

		$(this).find("i").hover(function() {
			$(this).parent().find("i").removeClass("active-star");
		}, function() {
			$(this).parent().find("i").slice(starsCount).addClass("active-star");
		});
	});

	// Review submission form validation
	$(".form-review input[type=text], .form-review input[type=email]").after("<i class='fa fa-check input-true'></i>");
	$(".form-review input[type=text], .form-review input[type=email]").after("<i class='fa fa-times input-false'></i>");

	var nameValidation = false;
	$(".main .content .reviews .write-review .form-review .input-name input").on("input", function() {
		var inputLength = $(this).val().length;

		if(inputLength <= 3) {
			$(this).parent().find(".input-true").fadeOut(100);
			$(this).parent().find(".input-false").fadeIn("slow");

			nameValidation = false;
		} else {
			$(this).parent().find(".input-false").fadeOut(100);
			$(this).parent().find(".input-true").fadeIn("slow");

			nameValidation = true;
		}
	});

	function validateEmail($email) {
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if( !emailReg.test( $email ) ) {
			return false;
		} else {
			return true;
		}
	}

	var emailValidation = false;
	$(".main .content .reviews .write-review .form-review .input-email input").on("input", function() {
		if(!validateEmail($(this).val()) || $(this).val() <= 3) {
			$(this).parent().find(".input-true").fadeOut(100);
			$(this).parent().find(".input-false").fadeIn("slow");

			emailValidation = false;
		} else {
			$(this).parent().find(".input-false").fadeOut(100);
			$(this).parent().find(".input-true").fadeIn("slow");

		var inputLength = $(this).val().length;
			emailValidation = true;
		}
	});

	var reviewValidation = false;
	$(".main .content .reviews .write-review .form-review .textarea-review textarea").on("input", function() {
		var inputLength = $(this).val().length;

		if(inputLength <= 5) {
			reviewValidation = false;
		} else {
			reviewValidation = true;
		}
	});

	// Add a red border to the form if required fields are not fileld in
	var formReviewBorder = $(".main .content .reviews .write-review .form-review").css("border-color");
	$(".main .content .reviews .write-review .form-review .button-submit button").click(function(e) {
		e.preventDefault();

		if(nameValidation == true && emailValidation == true && reviewValidation == true) {
			$(".main .content .reviews .write-review .form-review form").submit();
		} else {
			$(".main .content .reviews .write-review .form-review").css("border-color", "red");
			setTimeout(function() {
				$(".main .content .reviews .write-review .form-review").css("border-color", formReviewBorder);
			}, 2000);
		}
	});

	// Show loading icons when clicking on a track
	$(".main .content .articles-audio .article .image").click(function() {
		$(this).find(".loading").stop( true, true ).fadeIn("slow");
	});

	// Disable links
	$(".main .content .articles-audio .article > a").click(function(e) {
		e.preventDefault();
	});

	// Change music when clicked on another track
	$(".main .content .articles-audio .article .image").click(function() {
		var dataAudio = $(this).attr("data-audio");
		player.pause();
		player.setSrc(dataAudio);
		player.play();
	});
});


