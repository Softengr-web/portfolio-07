//Add and Remove active class
$(document).on('click', 'ul li', function() {
  $(this).addClass('active').siblings().removeClass('active')
})

// Scroll navbar
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1200,
    offset: 80
    });  
    
    window.sr = ScrollReveal();
    sr.reveal('#contato',{duration:2000});
    sr.reveal('#quem-somos',{duration:2000});
    sr.reveal('#contato',{duration:2000});