var Navigation = (function($) {

    var navIndex;

    var init = function() {

        // set navIndex
        navIndex = 0;

        // about waypoint
        $('#about').waypoint(function(direction) {

            $('.about').toggleClass('about-active');

            setNav(direction);

        }, { offset:'50px' });

        // cybersecurity waypoint
        $('#cybersecurity').waypoint(function(direction) {

            $('.cybersecurity').toggleClass('cybersecurity-active');

            setNav(direction);

        }, { offset:'50px' });


        // projects waypoint
        $('#projects').waypoint(function(direction) {

            $('.projects').toggleClass('projects-active');
            $('.navigation').toggleClass('navigation-dark');

            setNav(direction);

        }, { offset:'300px' });

        // POI waypoint
        $('#POI').waypoint(function(direction) {

            $('.POI').toggleClass('POI-active');
            $('.navigation').toggleClass('navigation-dark');

            setNav(direction);

        }, { offset:'300px' });

        // publications waypoint
        $('#publications').waypoint(function(direction) {

            $('.publications').toggleClass('publications-active');

            setNav(direction);

        }, { offset:'300px' });

        // grail waypoint
        $('#grail').waypoint(function(direction) {

            $('.grail').toggleClass('grail-active');

            setNav(direction);

        }, { offset:'300px' });

    };

    var scrollTo = function(id) {

        // Stop any currently active scroll
        $('html, body').dequeue();
        // Scroll to #id offset by 90 pixels
        $('html, body').animate({ scrollTop: $(id).offset().top }, 1000, 'easeOutExpo');

    };

    var setNav = function(direction) {

        navIndex = direction === 'down' ? navIndex+1 : navIndex-1;

        $('.navigation a').removeClass('active');
        $('.navigation a').eq(navIndex).addClass('active');

    };

    return {
        init: init,
        scrollTo: scrollTo
    };

}(jQuery));
