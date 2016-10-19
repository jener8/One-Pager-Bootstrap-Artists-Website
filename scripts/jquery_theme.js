$(document).ready(function () {
    var headerHeight = $(".navbar").height();

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - headerHeight
        }, 900);


    });
});



$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});





$('.thumb').on('click touchend', function () {
    $('#artwork-image').attr('src', $(this).attr('data-header-img'));
});







$("div#thumbs a img").click(function () {
    if ($(this).is("#img-lg")) {
        /*        alert('long');*/
        $('.main-pic-div img').css({
            "width": "80%",
            "height": "auto",
            "margin-right": "10%"
        });

    } else if ($(this).is("#img-tl") && (($(window).innerWidth() > 770) || ($(window).height() < 650))) {

        /*            alert('tall');*/
        $('.main-pic-div img').css({
            "width": "auto",
            "height": "80%",
            "margin-right": "auto"
        });
    } else if ($(this).is("#img-sm") || (($(window).innerWidth() > 770) && (window.devicePixelRatio >= 2))) {
        /*             alert('small');*/
        $('.main-pic-div img').css({
            "width": "50%",
            "height": "auto",
            "margin-right": "30%"
        });
    }
});




if ($(window).width() < 400) {
    $( ".panel-nordmeile button" ).replaceWith(
        '<a href="../projects/Project_Nordmeile.html"><div class="panel-thumbnail"><img src="../../images/nordmeile_gallery.jpg" class="img-responsive" alt="Hein Spellmann Installation art kunst am bau Kunst Projekten Art Projects architecture architektur"></div>');
}
if ($(window).width() < 400) {
    $( ".panel-zapf button" ).replaceWith(
        '<a href="../projects/Project_Zapfstelle.html"><div class="panel-thumbnail"><img src="../../images/Zapf_gallery.jpg" class="img-responsive" alt="Hein Spellmann Installation art kunst am bau Kunst Projekten Art Projects architecture architektur"></div>');
}
if ($(window).width() < 400) {
    $( ".panel-schwarz button" ).replaceWith(
        '<a href="../projects/Project_Haare.html"><div class="panel-thumbnail"><img src="../../images/sie_hatte_schwarze_haare_gallery.jpg" class="img-responsive" alt="Hein Spellmann Installation art kunst am bau Kunst Projekten Art Projects architecture architektur"></div>');
}
if ($(window).width() < 400) {
    $( ".panel-vermietet button" ).replaceWith(
        '<a href="../projects/Project_Vermietet.html"><div class="panel-thumbnail"><img src="../../images/voruebergehen_Vermietet_gallery.jpg" class="img-responsive" alt="Hein Spellmann Installation art kunst am bau Kunst Projekten Art Projects architecture architektur"></div>');
}
if ($(window).width() < 400) {
    $( ".panel-versuch button" ).replaceWith(
        '<a href="../projects/Project_Versuch.html"><div class="panel-thumbnail"><img src="../../images/versuchsfeld_gallery.jpg" class="img-responsive" alt="Hein Spellmann Installation art kunst am bau Kunst Projekten Art Projects architecture architektur"></div>');
}
if ($(window).width() < 400) {
    $( ".panel-tent button" ).replaceWith(
        '<a href="../projects/Project_Tents.html"><div class="panel-thumbnail"><img src="../../images/union_of_tents_gallery.jpg" class="img-responsive" alt="Hein Spellmann Installation art kunst am bau Kunst Projekten Art Projects architecture architektur"></div>');
}
if ($(window).width() < 400) {
    $( ".panel-nest button" ).replaceWith(
        '<a href="../projects/Project_Nests.html"><div class="panel-thumbnail"><img src="../../images/nests_gallery.jpg" class="img-responsive" alt="Hein Spellmann Installation art kunst am bau Kunst Projekten Art Projects architecture architektur"></div>');
}



