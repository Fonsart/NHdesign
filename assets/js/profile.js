'use strict';

/* global jQuery */

(function($){

  $(document).ready(function () {

    $('#btn-readmore').click(function(){
      $('#person-bio').toggleClass('open');
      if ($('#person-bio').hasClass('open')) {
        $(this).html('Voir moins');
      } else {
        $(this).html('Lire la suite...');
      }
    });

  });

}(jQuery));
