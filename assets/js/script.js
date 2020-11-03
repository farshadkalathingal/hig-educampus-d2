jQuery(function($) {
	
    'use strict';
    // Window_Scroll();
    // // Smooth_Scroll();
    Stats_Counter();
});

// Window Scroll 
var Window_Scroll = function() {
    $(window).scroll(function() {
        if ( $(window).scrollTop() > 20 ) {
            $('nav').addClass('scrolled');
        } else {
            $('nav').removeClass('scrolled');
        }
    });
};

  /** Smooth Scroll */
var Smooth_Scroll = function() {
	var scroll = new SmoothScroll('a[href="#header"]', {
		speed: 1000,
		speedAsDuration: true
	  });
};

// Stats Counter

var Stats_Counter = function() {
	$('#stats').waypoint( function( direction ) {
		
		if( direction === 'down') {
			$('.counting').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                
                $({ countNum: $this.text()}).animate({
                    countNum: countTo
                },
            
                {
            
                    duration: 3000,
                    easing:'linear',
                    step: function() {
                        $this.text(Math.floor(this.countNum) + '+');
                    },
                    complete: function() {
                        $this.text(this.countNum + '+');
                        //alert('finished');
                    }
            
                });  
			});
			}
		
		}, { offset: '95%' } );
};