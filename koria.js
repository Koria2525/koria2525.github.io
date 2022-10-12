$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".haiii").slideToggle("fast");

	$('nav ul li.dot').each(function(index, el) {
		var haiiiID = el.id.split('_')[1];
		$('.haiii#' + haiiiID).hide();
	});
});

$('nav').delegate('.dot', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.haiii:visible').fadeOut('fast', function() {
		$('.haiii#' + pilihIsi).fadeIn('fast');
	});

	var $this = $(this);
	$this.removeClass('dot').addClass("haechan");
    $this.siblings().addClass('dot').removeClass('haechan');

    });
});
