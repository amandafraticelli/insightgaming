
$(function(){

	$('.logotop').slideUp();('click', function() {

	$(this).animate({
		opacity:0.5,
		paddingBottom:'+=0'}.delay(100), function() {
			// $(this).remove();


	});
	});
	});


$(function(){

	$('#scroll').hide().fadeIn();('click', function() {

	$(this).animate({
		opacity:1.1,
		paddingTop:'+=10'},1000, function() {
			// $(this).remove();


	});
	});
	});



$(function(){

	$('#backdrop').hide().fadeIn();('click', function() {

	$(this).animate({
		opacity:1.1,
		paddingTop:'+=10'},1000, function() {
			// $(this).remove();


	});
	});
	});


$(function(){

	$('.pageIndicator').hide().fadeIn();('click', function() {

	$(this).animate({
		opacity:0.0,
		paddingTop:'+=10'},300, function() {
			// $(this).remove();


	});
	});
	});