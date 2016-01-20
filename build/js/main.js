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
