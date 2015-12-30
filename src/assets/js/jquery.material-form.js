/*
* Jquery Material Form
* A simple piece of code to reproduce the effects of Material Design
*/

var myField = $('.material-field input, .material-field textarea');

myField.each(function() {
  if( !$(this).val() == '' ) {
    $(this).parent().addClass('focus');
  }
});

myField.on('focusin', function(event) {
  if( $(this).val() == '') {
    $(this).parent().addClass('focus');
  }
});

myField.on('focusout', function(event) {
  if( $(this).val() == '') {
    $(this).parent().removeClass('focus');
  }
});
