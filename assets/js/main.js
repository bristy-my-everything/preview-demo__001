//////////////////////////////////////////////////////
// =================== Main Js ==================== //



//////////////////////////////////////////////////////
// Avoid console errors in browsers
(function () {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});
  while (length--) {
    method = methods[length];
    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());



//////////////////////////////////////////////////////
// scrollToTop
$(document).ready(function () {
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  //Click event to scroll to top
  $('.scrollToTop').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});



//////////////////////////////////////////////////////
// Smooth Scroll
$(function () {
  $('a.smooth-scroll').click(function (event) {
    event.preventDefault();
    var section_smooth = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(section_smooth).offset().top - 74
    }, 1250, 'easeInOutExpo');
  });
});



//////////////////////////////////////////////////////
// WOW Js
$(function () {
  new WOW().init();
});



//////////////////////////////////////////////////////
// sticky js
$(function () {
  $(".oilymenu4").sticky({topSpacing:0});
});



//////////////////////////////////////////////////////
// oilymenu4 for mobile (Part 03 - End)
$(function () {
  $(document).ready(function(){
    $('#menu').slicknav({
      'label' : '',
      'closedSymbol' : '&#10010;',
      'openedSymbol' : '&#9866;',
      'appendTo' : '.oilymenu4-mobile'
      // 'prependTo' : '.oilymenu4'
    });
  });
});



//////////////////////////////////////////////////////
// isotope Js
$(function () {

  $('#isotope-filters li').on('click', function(){

    $("#isotope-filters li").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr('data-filter');
    $("#isotope-container").isotope({
      filter: selector
    });
  });

  $(window).on("load", function () {
    $("#isotope-container").isotope();
  });

});



//////////////////////////////////////////////////////
// 
// $(function () {
// });






























//////////////////////////////////////////////////////
// waypoint
// $(function () {
//   $("#prog-bar").waypoint(function () {
// Your code will be go here
//   }, {
//     offset: 'bottom-in-view'
//   });
// });



//////////////////////////////////////////////////////
// 
// $(function () {
// });



//////////////////////////////////////////////////////
// 
// $(document).ready(function () {
//   'use strict';
// });



//////////////////////////////////////////////////////
// 
// $(function () {
//   $(window).on("load", function () {
//   });
// });