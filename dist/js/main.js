const scrollToSection = function(className = '') {
  $('html,body').animate({
      scrollTop: $(className).offset().top - 80},
    'slow');
};

$(".nav-home").click(() => scrollToSection('header'));
$(".nav-about").click(() => scrollToSection('.about'));
$(".nav-contact").click(() => scrollToSection('.contact'));

$(".nav-menu-button").click(() => {
  // TODO: Add menu logic
});
