// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.





$(document).on('turbolinks:load', function () {



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


/////////////////////////////
$('.nav-side .nav-toggle').on({
  click: function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('nav-open');
  },
})



////////////////////////////

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
