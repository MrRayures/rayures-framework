/*
* Jquery Smooth Scroll
* 
*/

$(document).ready(function() {
  $('.smooth-scroll').bind('click',function(event){
    var $anchor = $(this);
    var speed  = 1500;
    var offset = 50; 
    var easing = 'swing'; 
    $d = $('html,body');
    $w = $(window);

    targetPos =  Math.abs( $($anchor.attr('href')).offset().top );
    distance = Math.abs( $w.scrollTop() - targetPos );
    duration = ( distance / speed ) * 1000;
    //console.log(targetPos);
    $d.animate({
      scrollTop: targetPos - offset
    }, duration, easing);
    event.preventDefault();
  });
});
