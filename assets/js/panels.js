'use strict';

/* global jQuery */

(function($){

  $(document).ready(function () {

    $('.side-panel-button').click(function(){
      console.log('toggle');
      $(this)
        .parents('.side-panel')
        .toggleClass('side-panel-enter')
        .toggleClass('side-panel-entering')
        .toggleClass('side-panel-leave')
        .toggleClass('side-panel-leaving');
    });

  });

}(jQuery));
