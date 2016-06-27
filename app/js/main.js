$(document).ready(function(){
	$('.parallax').parallax();

   	 // Pagination
          var parPosition = [];
        $('.par').each(function() {
            parPosition.push($(this).offset().top);
        });
        
		$('a').click(function(){
			$('html, body').animate({
				scrollTop: $( $.attr(this, 'href') ).offset().top
			}, 1200);
			return false;
		});
        
        	$('.dotted ul li a').click(function () {
			$('.dotted ul li a').removeClass('active');
				$(this).addClass('active');
		}); 
        
       $('.dotted a').hover(function() {
           $(this).find('.label').show();
           }, function() {
           $(this).find('.label').hide();
       });
        
           $(document).scroll(function(){
        var position = $(document).scrollTop(),
                index; 
                for (var i=0; i<parPosition.length; i++) {
                if (position <= parPosition[i]) {
                    index = i;
                    break;
                }
            }
      $('.dotted ul li a').removeClass('active');
            $('.dotted ul li a:eq('+index+')').addClass('active');
        });
        
        	$('.dotted ul li a').click(function () {
			$('.dotted ul li a').removeClass('active');
				$(this).addClass('active');
	});   
});


