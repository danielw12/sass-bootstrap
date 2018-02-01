$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $("#main-nav").addClass("scroll");
        $("#main-nav").css({
            "transition" : "all 0.3s"
        });
    } else {
        $("#main-nav").removeClass("scroll");
    }
});

$('.nav-link').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $(this.hash).offset().top}, 600);
});

$('.view').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $(this.hash).offset().top}, 600);
});
