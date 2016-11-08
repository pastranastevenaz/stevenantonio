// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.





$(document).on('turbolinks:load', function () {






  $(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});




$('#link-think').on({
  click: function(n) {
    n.preventDefault();
    //////////////////////////////////////////////
    //       Insert code to generate modal      //
    //////////////////////////////////////////////
    
  }
})









  $('.nav-side .nav-toggle').on({
    click: function(e) {
      e.preventDefault();
      $(this).parent().toggleClass('nav-open');
    }
  });

  // ON HOVER ADD A SHADOW ANIMATION TO THE SIDEBAR LINKS
  $('.nav-content').on({
    mouseenter: function() {
      $(this).addClass('active-nav-link');
    },
    mouseleave: function() {
      $(this).removeClass('active-nav-link')
    },
  });

  // ROTATE THE ARROW ON click
  var value = 0
  $('#nav-arrow').rotate({bind:{
    click: function(){
      value +=180;
      $(this).rotate({
        duration:900,
        animateTo:value
      })
    }
  }
  });

  // Add hover effects to nav bar. Specifically adds
  // the active class to the <li>
  $('#logo-link, #about-link, #dropdown-link, #lessons-link, #portfolio-link').on({
    mouseenter: function () {
      $(this).addClass('active');
    },
    mouseleave: function () {
      $(this).removeClass('active');
    }
  })


  //Adds a slid effect to the text content on page load.
//////////////////////////////////////////////////////


  function slideContent(){


  }

  var indTxt = document.getElementById('index-text');
  var width = window.innerWidth;
  var divWidth = indTxt.innerWidth;

  indTxt.addEventListener('load', slideContent, false);

/////////////////////////////////////////////
    //Set the Initial greeting
//////////////////////////////////////////////

  var time = new Date();
  var hours = time.getHours();
  var msgArea = document.getElementById('greeting');

  if (hours < 12){
    var msg="Hey! Good morning.";
  }
  else if(hours <18){
    var msg="Hi! Good afternoon";
  }
  else {
    var msg="Hey! Good evening.";
  }

  msgArea.innerText=msg;


  console.log(hours);
  console.log(msg);
});
/////////////////////////////////////////////
