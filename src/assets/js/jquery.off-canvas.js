/*
* Jquery Off Canvas
* A simple piece of code to make your menu off canvas style
*/


var mobile_breakpoint = "767";
//if (window.innerWidth <= mobile_breakpoint ) {}


$(document).ready(function() {

  // Add overlay
  $('.off-canvas').parent().append('<div class="overlay"></div>');

  // Open (& close) off-canvas
  $('.off-canvas-btn').on('click', function(event) { 
    event.preventDefault(); 
    var window_width = window.innerWidth;
    var window_height = window.innerHeight;
    var menu_height = $('.off-canvas ul').height();
    var window_offset =  $(window).scrollTop();
    var direction = 'left';
    var direction = $(this).attr('data-direction');

    if($('.off-canvas').hasClass('opened')) {
      $('.off-canvas, .off-canvas-btn').removeClass('opened');
      $('.off-canvas').css({ 'height': 'auto', 'top': '0', 'overflow-y': 'none'});
      $('body').css({ 'width': 'auto', 'top': 'auto' }).removeClass('no-scroll move-left move-right');
      $('.overlay').fadeOut();
    } else {
      $('.off-canvas, .off-canvas-btn').addClass('opened');
      $('.off-canvas').css({ 'height' : window_height, 'top' : window_offset });
      if(menu_height > window_height) {
        $('.off-canvas').css({ 'overflow-y': 'scroll'});
      }
      $('body').css({ 'width': window_width, 'top': -window_offset }).addClass('no-scroll move-'+direction+'');
      $('.overlay').fadeIn('fast');
    }

  });
  
  // Close off-canvas
  $('.overlay, .close-canvas').on('click', function(event) {
    event.preventDefault(); 
    var window_width = window.innerWidth;
    var window_height = window.innerHeight;
    var menu_height = $('.off-canvas ul').height();
    var window_offset =  $(window).scrollTop();
    var direction = 'left';
    var direction = $(this).attr('data-direction');

    $('.off-canvas, .off-canvas-btn').removeClass('opened');
    $('.off-canvas').css({ 'height': 'auto', 'top': '0', 'overflow-y': 'none'});
    $('body').css({ 'width': 'auto', 'top': 'auto' }).removeClass('no-scroll move-left move-right');
    $('.overlay').fadeOut();
    //$(window).scrollTop( Math.abs(window_offset.top) );
  });


});



$(window).resize(function() {
 

});
