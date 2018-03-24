/*
* Jquery Search
* 
*/

$('.open-menu').on('click', function(event) { 
  if (window.innerWidth <= medium ) {
    if( $(this).hasClass('active') ) {
      $(this).removeClass('active');
      $('.main-menu').removeClass('active');
      $('.close-menu').removeClass('active');
      $('body').remove('<div class="overlay"></div>');
    } else {
      $(this).addClass('active');
      $('.main-menu').addClass('active');
      $('.close-menu').addClass('active');
      $('body').append('<div class="overlay"></div>');
    }
  }
});

$('.close-menu').on('click', function(event) { 
  if (window.innerWidth <= medium ) {
    $('.open-menu').removeClass('active');
    $('.main-menu').removeClass('active');
    $('.close-menu').removeClass('active');
    $('.overlay').remove();
  }
});



