/*
Template Name: Appx360
Author: Appx360
Version: 1.0
*/

    /* === jQuery for page scrolling feature - requires jQuery Easing plugin === */
    (function () {
	    $('a.page-scroll').on('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
    }());



    /* === Shuffle === */
    (function () {
        /* initialize shuffle plugin */
        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item' // the selector for the items in the grid
        });

        /* reshuffle when user clicks a filter item */
        $('#filter li').on('click', function (e) {
            e.preventDefault();

            // set active class
            $('#filter li').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName );
        });
    }());



    /* ======= Recent Project Carousel ======= */
    (function () {

      var owl = $(".recent-project-carousel");
     
      owl.owlCarousel({
          items : 5, //5 items above 1000px browser width
          itemsDesktop : [1024,4], //4 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // betweem 900px and 601px
          itemsTablet: [600,2], //2 items between 600 and 480
          itemsMobile : [479,1], //1 item between 480 and 0
          pagination : false // Show pagination
      });


      // Custom Navigation Events
      $(".btn-next").on('click', function(){
        owl.trigger('owl.next');
      })
      $(".btn-prev").on('click', function(){
        owl.trigger('owl.prev');
      })


    }());




    /* ======= BlackAndWhite Script ======= */
    (function () {
        $('.bwWrapper').BlackAndWhite({
            hoverEffect : true, // default true
            // set the path to BnWWorker.js for a superfast implementation
            webworkerPath : false,
            // to invert the hover effect
            invertHoverEffect: false,
            // this option works only on the modern browsers ( on IE lower than 9 it remains always 1)
            intensity:1,
            speed: { //this property could also be just speed: value for both fadeIn and fadeOut
                fadeIn: 200, // 200ms for fadeIn animations
                fadeOut: 800 // 800ms for fadeOut animations
            },
            onImageReady:function(img) {
                // this callback gets executed anytime an image is converted
            }
        });
    }());



    /* ======= Contact Form ======= */
    (function () {

        $('#contactForm').on('submit',function(e){

            e.preventDefault();

            var $action = $(this).prop('action');
            var $data = $(this).serialize();
            var $this = $(this);

            $this.prevAll('.alert').remove();

            $.post( $action, $data, function( data ) {

                if( data.response=='error' ){

                    $this.before( '<div class="alert alert-danger">'+data.message+'</div>' );
                }

                if( data.response=='success' ){

                    $this.before( '<div class="alert alert-success">'+data.message+'</div>' );
                    $this.find('input, textarea').val('');
                }

            }, "json");

        });
    }());



}); // JQuery end