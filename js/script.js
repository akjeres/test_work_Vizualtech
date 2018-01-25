function space_cut_first (string) {
	return string.substring(string.indexOf(" ") + 1);
}
function space_cut_last (string) {
	if (string.indexOf(" ") != -1) {
		return string.substring(0, string.indexOf(" "));
	}
	else return string;
}
function space_cut (string) {
	return space_cut_last(space_cut_first(string));
}
function prefix_change (prefix, string) {
	return prefix + string.substring(string.indexOf("_"));
}
$("#main_nav li").hover(function() {
	var nav_selector = $(this).prop("className");
	
	if (space_cut(nav_selector).length > 14) {
		nav_selector = "nav_wedding";
	} nav_selector = space_cut(nav_selector);
	if (nav_selector != "nav_wedding") {
		/*$(".dropdown.nav_wedding").removeClass("open");*/
		$(".ruler_wedding").css({
			height: "",
			width: "",
			backgroundColor: "",
			marginLeft: ""
		});
	}
	var ruler_selector = prefix_change("ruler", nav_selector);
	$("." + ruler_selector).css({
		height: "4px",
		width: get_wigth(nav_selector),
		marginLeft: get_marginLeft(nav_selector),
		backgroundColor: "#1d2759"
	});
	
	if (ruler_selector == "ruler_wedding") {
		$("table").css("visibility", "visible");
	} else $("table").css("visibility", "hidden");

}, function() {
	var nav_selector = $(this).prop("className");
	$("." + prefix_change("ruler", nav_selector)).css({
		height: "",
		width: "",
		backgroundColor: "",
		marginLeft: ""
	});
});
$("table").hover(function() {
	$("table").css({
		visibility: "visible",
		width: "200px"
	});
	var selector = "." + $(this).prop("className");
} , function() {
	$("table").css({
		visibility: "hidden",
		width: "200px"
	});
});
$("table li").hover(function() {
	$("table").css({
		width: "200px"
	});
	if ($(this).hasClass("activated_content")) {
		$("table").css({
		width: "340px"
	});
		$(".submenu_content").css("display", "block");
	} else {
		$(".submenu_content").css("display", "none");
		}
}, function() {
	$("table").css({
		width: "200px"
	});
	$(".submenu_content").css({
		    display: "none"
		});
});

function parameter_2_int (string) {

	return parseInt(string.substring(0, string.indexOf("px")));
}
function get_wigth(selector) {
	var w = $("." + selector + " a").css("width");
	w = parameter_2_int(w);
	var pl = $("." + selector + " a").css("paddingLeft");
	pl= parameter_2_int(pl);
	var pr = $("." + selector + " a").css("paddingRight");
	pr= parameter_2_int(pr);

	var result = (w-pl-pr)+"px";
	return result;
}
function get_marginLeft (selector) {
	var wrp = $(".content_wrapper").css("marginLeft");
	wrp = parameter_2_int(wrp);
	var offset = $("." + selector).offset().left;
	var paddingLeft = $("." + selector + " a").css("paddingLeft");
	paddingLeft = parameter_2_int(paddingLeft);
	var result = offset + paddingLeft - wrp;

	return result + "px";
}
$("#main_nav li").click(function() {
	if ($(this).hasClass("nav_wedding") && !($(this).hasClass("open")) &&
		($(window).width() < 768)) {
		$("#bs-example-navbar-collapse-1").height(512);
	} else $("#bs-example-navbar-collapse-1").height(365);
});
$(document).ready(function() {
	if ($(window).width() < 1144) {
		$(".carousel_wrapper").css({
			position: "static",
			display: "none"
	});
	} else {
		$(".carousel_wrapper").css({
			position: "absolute",
			top: $(".main_title").offset().top - 120,
			left: ($(".main_article").width() - $(".carousel_wrapper").width()
				+ $(".main_article").offset().left + 11),
			display: "block"
		});
	}
	if ($(window).width() < 359) {
		$(".terms").removeClass("pull-right");
	}
	/*Animation Demo Begins*/
	$(".company_wrapper").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        	top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
    /*Animation Demo Ends*/
});

$(window).resize(function() {
	if ($(window).width() < 359) {
		$(".terms").removeClass("pull-right");
	} else if (!($(".terms").hasClass("pull-right"))) {
		$(".terms").addClass("pull-right");
	}
	if ($(window).width() < 510) {
		$("main").height(
			($(".main_title").height() + parameter_2_int ($(".main_title").css("marginBottom")) +
			$(".main_article_wrapper").height() + 23) + "px"
			);
	} else if ($(window).width() < 1144) {
		$("main").height("611px");
	} else $("main").height("791px");
	if ($(window).width() < 1144) {
		$(".carousel_wrapper").css({
			position: "static",
			display: "none"
		});
	} else {
		$(".carousel_wrapper").css({
			position: "absolute",
			top: $(".main_header").offset().top+168,
			left: ($(".main_article").width() - $(".carousel_wrapper").width()
				+ $(".main_article").offset().left + 11),
			display: "block"
		});
	}
	$("table").css("visibility", "hidden");
});