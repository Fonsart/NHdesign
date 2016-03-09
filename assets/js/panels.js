'use strict';

/* global jQuery */

(function($){

  $(document).ready(function () {

    $('.panel-button').click(function(){
      $('#overlay').toggleClass('open');
      $(this)
        .parents('.panel')
        .toggleClass('panel-enter')
        .toggleClass('panel-entering')
        .toggleClass('panel-leave')
        .toggleClass('panel-leaving');
    });

  });

}(jQuery));
