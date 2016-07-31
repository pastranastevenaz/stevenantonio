// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$('#footer').css('margin-top',
  $(document).height() 
  - ( $('#header').height() + $('#content').height() ) 
  - $('#footer').height()
);