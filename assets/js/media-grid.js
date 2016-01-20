'use strict';

/* global jQuery */

(function($){
  $(document).ready(function () {
    $('.media-grid').flexImages({
      container: '.media-item',
      object: 'img',
      rowHeight: 250,
      truncate: false
    });
  });
}(jQuery));
