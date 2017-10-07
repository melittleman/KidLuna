// Sticky Navbar!
$(document).ready(function() {
    var s = $(".navbar");
    var pos = s.position();
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();

        if (windowpos >= pos.top-1) {
            s.addClass("stick");
        } else {
            s.removeClass("stick");
        }
    });
});
