/*
* Jquery Carousel
* 
*/



$(document).ready(function(){
  
  if( $('.carousel').length ) {
  	$('.carousel-home').slick({
  		prevArrow: '<button type="button" class="slick-prev"><i class="icon-arrow-left"></i></button>',
  		nextArrow: '<button type="button" class="slick-next"><i class="icon-arrow-right"></i></button>'
	  });
	}

});

