
var startingItem = 3

$(document).ready(function() {
	$('.carousel_data .carousel_item').each(function(){	
		$('#carousel').append( $(this).find('.image').html() );
	});
	createCarousel();
	createButtons();
    showCaption()
});


function createCarousel(){
	$('div#carousel').roundabout({
		startingChild: window.startingItem,
		childSelector: 'img',
		tilt: -4.5,
		minOpacity:1,
		minScale: .45,
		duration: 200,
        clickToFocus: true,
		clickToFocusCallback: showCaption
		
	});
	
}




function createButtons(){
	
	$('.nextItem').click(function(){
		
		$('div#carousel').roundabout('animateToNextChild',showCaption );
	});
	
	$('.prevItem').click(function(){
		
		$('div#carousel').roundabout('animateToPreviousChild',showCaption );
	})
	
}


function showCaption(){
	//alert ($('div#carousel').data('roundabout').childInFocus);

    var childInFocus = $('div#carousel').data('roundabout').childInFocus

    var setCaption = $('.carousel_data .carousel_item .caption:eq('+childInFocus+')').html();
	$('#captions').html(setCaption);



	//var newHeight = $('#captions').height()+'px';
	//$('.caption_container').animate({'height':newHeight}, 500, function(){
		//$('#captions').animate({'opacity':1}, 250);	
	//});

};



//function hideCaption(){
	//$('#captions').animate({'opacity':0}, 250);
//}

