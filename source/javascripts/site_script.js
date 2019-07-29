$( document ).ready(function() {
	// $('.page-hero').height($(window).height()-($('#lead-feature').height()+$('#navigation').height()) )

	$('.blade').click(function() {
		$('.blade').removeClass("active");
		$(this).addClass("active");
	});

	$('#hamburger-helper, #hamburger-helper .inner nav li a').click(function(){
		$(this).toggleClass("active");
		$('#mobile-menu').slideToggle();
	});
});