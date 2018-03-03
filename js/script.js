
$(document).ready(function() {
	
	var itemsLength = $('.cards_container .item').length;
	//variable to count on which position are we actually; then referring to data-attribute
	var current = 1;
	
	//set total amount of slides for counter
	$('.total_slides').text(itemsLength);
	
	
	$('.btn_prev').on('click', function() {
		if (current > 1) {
			current = current - 1;
			showSlider(current); 
		} else {
			current = itemsLength; 
			showSlider(current);
		}
		
	});
	$('.btn_next').on('click', function() {
		
		//since we know how many cards, conditional
		if (current !== itemsLength) {
			current = current + 1;
		//call function to show actual current slide number
			showSlider(current);
		} else {
			current = 1;
			showSlider(current);
		}

	});
	
	
	function showSlider(current) {
		//first grab all containers and hide them
		$('.cards_container .item').removeClass('active');
		//look through all divs with data-id and add class to actual current slide number
		$('div[data-id="'+ current +'"]').addClass('active');
		
		//actual slide number at counter
		$('.current_slide').text(current);
	}
	
});

