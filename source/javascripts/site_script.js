$( document ).ready(function() {
	$('.page-hero').height($(window).height()-100)

	var distance = $('#navigation').offset().top,
	    $window = $(window);

	$window.scroll(function() {
  	if ( $window.scrollTop() >= distance ) {
      $('#navigation').addClass("fixed");
    }
    else if ( $('.page-hero').isOnScreen(0.1, 0.1) ) {
    	$('#navigation').removeClass("fixed");
    }
	});
});