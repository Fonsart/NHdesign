'use strict';

/* global jQuery */

(function($){
  $(document).ready(function () {
    var initGrid = function () {
      $('.media-grid:not(.media-mondrian)').flexImages({
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
      $(this).toggleClass('open');
      $('#sidebar').toggleClass('open');

      setTimeout(function(){
        initGrid();
      }, delay);
    });


    $('.media-mondrian').masonry({
      // options...
      itemSelector: '.media-mondrian-item',
      columnWidth: 100,
      gutter: 0
    });

  });
}(jQuery));
