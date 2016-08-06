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

  $('h1').hover(function () {

  })
});



