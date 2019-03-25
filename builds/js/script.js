$(function () {

    var topoffset = 55;

    //Use smooth scrolling when clicking on navigation
    $('.navbar a[href*=\\#]:not([href=\\#])').click(
        function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    //ANIMAZIONE FINO ALLA PARTE
                    $('html,body').animate({scrollTop: target.offset().top - topoffset + 2}, 500
                    //VELOCITA' SCORRIMENTO
                    );
                    return false;
                } //target.length
            } //click function
        }
    ); //smooth scrolling*/

    $(window).on('activate.bs.scrollspy',function () {
        var navBar = $('#myNavbar');
        var hash = navBar.find('a.active').attr('href');
        if (hash !== '#page-hero') {
            navBar.addClass('bg-dark')
        } else {
            navBar.removeClass('bg-dark')
        }

        var mediaAnimation = $('#page-media .layout-animation');
        mediaAnimation.css('visibilty: hidden');

        if (hash === '#page-media') {
            mediaAnimation.addClass('animated fadeInRight');
        }

    });

    $('#site-modal').on('show.bs.modal',function (event) {
        $(this)
        .find('.modal-content img')
        .attr('src', $(event.relatedTarget).data('highres'));
    });

});