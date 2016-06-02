'use strict';

/* global jQuery */

(function($){
  $(window).load(function () {
    $('.media-mondrian___').masonry({
      itemSelector: '.media-mondrian-item',
      columnWidth: 100,
      gutter: 0
    });
  });
}(jQuery));
