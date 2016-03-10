idleTime = 0;
jQuery(document).ready(function(){
	$limit = 1;
	
	if (jQuery.cookie('test_status') != '1') {
		function timerIncrement() {
			idleTime = idleTime + 1;
			if (idleTime > $limit) { 
				jQuery('.subs-popup ').fadeIn();
				idleTime = 1;
			}
		}
		// Increment the idle time counter every second.
		var idleInterval = setInterval(timerIncrement, 500); // 1000th of second
		
		// Zero the idle timer on mouse movement.
		jQuery(this).mousemove(function (e) {
			idleTime = 1;
		});
		jQuery(this).keypress(function (e) {
			idleTime = 1;
		});
		jQuery.cookie('test_status', '1', { expires: 1 });
	}
	
	
	//auto populate email address on confirmation screen
	jQuery(".popup-btn").click(function(){
			  jQuery(".pop-email-address-auto").text(jQuery("#popup-input").val())
			});
	
	//closes modal on x out or no thanks button
	jQuery(".popup-no-thanks, .popup-close").click(function(){
			jQuery(".subs-popup").fadeOut();
			$limit = 999999; // stalled after closing popup
		});
	
	//changes to confirmation screen
	jQuery(".popup-btn").click(function(){
			jQuery(".pop-msg-1").fadeOut(600);
			jQuery(".pop-msg-2").delay(650).fadeIn();
		});
	
	//closes modal after confirmation
	jQuery(".popup-shop-btn").click(function(){
			jQuery(".subs-popup").fadeOut();
			$limit = 999999; // stalled after closing popup
		});	
	
	
});