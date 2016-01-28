'use strict';

/* global jQuery */

(function($){

  $(document).ready(function () {

    $('#panel-toggle').click(function(){
      console.log('toggle');
      $(this)
        .parents('.panel')
        .toggleClass('panel-enter')
        .toggleClass('panel-entering')
        .toggleClass('panel-leave')
        .toggleClass('panel-leaving');
    });

  });

}(jQuery));
