// Slider for Team
$(document).ready(function (){
    $('.sliderTeam').slick({
        arrows: true,
        slidesToShow: 4
    });
});

// Slider for Preferences
$(document).ready(function (){
    $('.sliderPref').slick({
        arrows: true,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        initialSlide: 2,
        easing: 'ease',
    });
});

// Hamburger
let hamburgerBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');

hamburgerBtn.addEventListener('click', function (){
    hamburgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

// Scrolling to
function ScrollTo(id){
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, 500);

    // burger toggle fix bug
    hamburgerBtn.classList.remove('active');
    menu.classList.remove('active');
}