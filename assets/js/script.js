AOS.init({
	duration: 1000,
	easing: 'ease',
 	once: true,
	offset: 200
});



jQuery(function($) {
	
    'use strict';
    Window_Scroll();
    // // Smooth_Scroll();
    // bxSlider();
    Stats_Counter();
    Owl_Carousel();
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

// bxSlider

var bxSlider = function() {
    $('.bxslider').bxSlider({
        minSlides: 1,
		maxSlides: 5,
        slideWidth: 257,
		slideMargin: 17,
		ticker: true,
		tickerHover: true,
		speed: 20000,
		useCSS: false, 
        infiniteLoop: false,
        auto: true,
        autoControls: true
    });

};

var Owl_Carousel = function() {
    $('#features .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        navText:["<i class='fas fa-chevron-left'></i>" , "<i class='fas fa-chevron-right'></i>"],
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false,
                centre: true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
                centre: true
            }
        }
    });

    $('#students .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin:10,
        dot: true,
        // nav: true,
        // navText:["<i class='fas fa-chevron-left'></i>" , "<i class='fas fa-chevron-right'></i>"],
        autoplay:true,
        autoplayTimeout:2500,
        autoplayHoverPause:true,
        autoplaySpeed: 1000,
    });

};

// Stats Counter

var Stats_Counter = function() {
	$('#stats').waypoint( function( direction ) {
		
		if( direction === 'down') {
            setTimeout(function() {
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
            }, 500);
			}
		
		}, { offset: '95%' } );
};
