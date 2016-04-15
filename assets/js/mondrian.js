'use strict';

/* global jQuery */

(function($){
  $(window).load(function () {
    $('.media-mondrian').masonry({
      itemSelector: '.media-mondrian-item',
      columnWidth: 100,
      gutter: 0
    });
  });
}(jQuery));
