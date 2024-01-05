$(document).ready(function() {
    var nav = $("header nav");
    var navHeight = nav.outerHeight();

    function updateNav() {
        var scrollTop = $(window).scrollTop();
        var isScrolled = scrollTop > 1;

        nav.toggleClass("black", isScrolled);
        $("body").toggleClass("fixed-nav", isScrolled);
        $("body").css("padding-top", isScrolled ? navHeight + "px" : "0");
    }

    // Trigger the updateNav function on scroll without delay
    $(window).scroll(updateNav);

    // Trigger the updateNav function on page load
    updateNav();
});








