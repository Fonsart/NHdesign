'use strict';

/* global jQuery */

(function($){

  if ($(window).width() < 767) {
    $(document).ready(function () {
      $('#search-mobile').click(function () {
        $('#search-form').toggleClass('open');
      });
    });
  }

}(jQuery));
