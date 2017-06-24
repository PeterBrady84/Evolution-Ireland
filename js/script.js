/*========== navbar toggle collapse ==========*/
function autocollapse() {
    var navbar = $('#autocollapse');
    navbar.removeClass('collapsed'); // set standart view
    if(navbar.innerHeight() > 100) // check if we've got 2 lines
        navbar.addClass('collapsed'); // force collapse mode
}

$(document).on('ready', autocollapse);
$(window).on('resize', autocollapse);

/*========== Smooth Scrolling ==========*/
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 54
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});