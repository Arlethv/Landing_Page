$(document).ready(function() {
    // Acordion
    var accordionItem = $('.card-header button');
    accordionItem.on('click', function() {
      accordionItem.not(this).removeClass('active');
      $(this).toggleClass('active');
    });
  });
  