'use strict';

/* global jQuery */

(function($){
  $(document).ready(function () {
    var initGrid = function () {
      $('.media-grid').flexImages({
        container: '.media-item',
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
  });
}(jQuery));

'use strict';

/* global jQuery */

(function($){

  if ($(window).width() < 767) {
    $(document).ready(function () {
      $('#search-mobile').click(function () {
        $('#search-form').toggleClass('open')
      });
    });
  }

}(jQuery));
