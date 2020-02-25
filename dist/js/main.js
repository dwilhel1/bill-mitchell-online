const animate = function(className = '') {
  $('html,body').animate({
      scrollTop: $(className).offset().top - 80},
    'slow');
};

$(".nav-home").click(() => animate('header'));
$(".nav-about").click(() => animate('.about'));
$(".nav-contact").click(() => animate('.contact'));
