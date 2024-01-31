	(function($){
			// show loading on load
	        $(window).on('load', function() {
	            $('.loader').delay(800).fadeOut('slow'); 
	            $('body').delay(2000).css({'overflow':'visible'});
	            $('.content-wrapper').delay(2000).show();
	        });

	        //$('#banner').height($( window ).height());

		    // $( window ).resize(function() {
			// 	$('#banner').height($( window ).height());
		    // });

		    wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset: 100,          // default
				mobile: false,       // default
		    })
		    wow.init();

	        $('.portfolio_item').magnificPopup({
				type: 'inline',
				preload: [0,2],
				closeOnBgClick:false,
				closeBtnInside: true,
				removalDelay: 200,
				//mainClass: 'mfp-slide-bottom',
				mainClass: 'slide-in-top',
		        gallery: {
					enabled: true,
					// closeMarkup:"<button title='%title%' type='button' class='mfp-close'><i class='ion-ios-close-empty'></i></button>",
					arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"><i class="ion-ios-arrow-%dir%"></i></button>', 
					tPrev: 'Previous projects', // title for left button
					tNext: 'Next projects', // title for right button
		        },     
		     });

	        $('.arrow-down').on('click', function(event){     
			    event.preventDefault();
			    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
			});
	})(jQuery);