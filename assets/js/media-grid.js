'use strict';

/* global jQuery */

(function($){
  $(document).ready(function () {
    var initGrid = function () {
      $('.media-grid').flexImages({
        container: '.media-item, .group-teaser',
        object: 'img',
        rowHeight: 250,
        truncate: false
      });
    };

    initGrid();

    $('#display-grid').click(function() {
      $('#media-container').removeClass('media-list').addClass('media-grid');
      initGrid();
    });

    $('#display-list').click(function() {
      $('#media-container').removeClass('media-grid').addClass('media-list');
    });

    $('#toggle-sidebar').click(function(){
      var delay = 300;
      if ($('#sidebar').hasClass('open')) {
        delay = 600;
      }
      $('#sidebar').toggleClass('open');

      setTimeout(function(){
        initGrid();
      }, delay);
    });
  });
}(jQuery));
