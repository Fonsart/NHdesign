'use strict';

/* global jQuery */

(function($){

  $(document).ready(function () {

    $('#btn-readmore').click(function(){
      $('#person-bio').toggleClass('open');
    });

  });

}(jQuery));
