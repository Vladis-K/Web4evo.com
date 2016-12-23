$(document).ready(function(){

    $('.parallax').parallax();
    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        closeOnClick: true,
        draggable: true
    });

    $(window).scroll(function () {
        var display = $(this).scrollTop();
        var opRange = 1 - display / 300;
        $("nav").css("opacity" , opRange);
        if (opRange > 0 ) {
            $("nav").css("display" , 'inline');
        }
        else {
            $("nav").css("display" , "none");
        }
    });

    // Pagination
    var parPosition = [];
    $('.par').each(function() {
        parPosition.push($(this).offset().top);
    });

    $("#gogo, nav, .innerCard").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({
            scrollTop: top
        }, 1200);
    });


    $('.range ul li a').click(function () {
        $('.range ul li a').removeClass('active');
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
        $('.range ul li a').removeClass('active');
        $('.range ul li a:eq('+index+')').addClass('active');
    });

        $('.range ul li a').click(function () {
            $('.range ul li a').removeClass('active');
            $(this).addClass('active');
    });
});