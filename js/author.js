$(function(){

	$('.logotop').slideUp();('click', function() {

	$(this).animate({
		opacity:0.5,
		paddingBottom:'+=0'}.delay,1000, function() {
			// $(this).remove();


	});
	});
	});


$("#backdrop img").click(function () {

$(this).animate({
    width: "122",
    height: "100px"
}, 1500);

}, function () {
    $(this).animate({
        width: "322",
        height: "300px"
    }, 1500);

});






$(function(){

	$('#scroll').hide().slideDown();('click', function() {

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