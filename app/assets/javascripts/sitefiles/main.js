$('#footer').css('margin-top',
  $(document).height() 
  - ( $('#header').height() + $('#content').height() ) 
  - $('#footer').height()
);