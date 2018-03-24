/*
* Jquery Back Button
* 
*/

$(window).scroll(function() {
  if ($(this).scrollTop() >= 800 ) {
    $('.back-top').addClass('active');
  } else {
    $('.back-top').removeClass('active');
  }
});
