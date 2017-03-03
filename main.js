// http://codepen.io/cssguru/pen/eZyRaO

/**
 * Created by rasai_000 on 3/3/2017.
 */
$(document).ready(function() {

  // ================================ //
  // Slideout Left Menu               //
  // ================================ //

  // Slideout Variable
  var slideoutLeft = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('left-menu'),
    'padding': 256,
    'tolerance': 70
  });

  // Toggle button
  $('#left-nav').click(function() {
    slideoutLeft.toggle();
  });

  slideoutLeft.on('beforeopen', function() {
    document.querySelector('.fixed').classList.add('fixed-open-left');
  });

  slideoutLeft.on('beforeclose', function() {
    document.querySelector('.fixed').classList.remove('fixed-open-left');
  });

  // ================================ //
  // Slideout Right Menu              //
  // ================================ //

  // Slideout Variable
  var slideoutRight = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('right-menu'),
    'padding': 256,
    'tolerance': 70,
    'side': 'right'
  });

  // Toggle button
  $('#right-nav').click(function() {
    slideoutRight.toggle();
  });

  slideoutRight.on('beforeopen', function() {
    document.querySelector('.fixed').classList.add('fixed-open-right');
  });

  slideoutRight.on('beforeclose', function() {
    document.querySelector('.fixed').classList.remove('fixed-open-right');
  });

});