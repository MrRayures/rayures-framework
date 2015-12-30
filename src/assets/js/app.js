/*
* Projet :
* Website : 
* Auteur : MrRayures - www.mr-rayures.com		
* Copyright (C) 2016
*/

/*  Breackpoint ------------------------------- */
// Use : if (window.innerWidth <= small_breakpoint ) {}
var xsmall_breakpoint  = "450";
var small_breakpoint   = "767";
var medium_breakpoint  = "960";
var large_breakpoint   = "1200";
var xlarge_breakpoint  = "1600";


$(document).ready(function() {

  /* SMOOTH SCROLLING ------------------------------- */
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


$(window).resize(function() {});


$(window).scroll(function() {

  /* Back Top BTN ------------------------------- */
  if ($(this).scrollTop() >= 800 ) {
    $('.back-top').addClass('active');
  } else {
    $('.back-top').removeClass('active');
  }

});
