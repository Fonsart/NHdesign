'use strict';

/* global jQuery */

(function($){

  $(document).ready(function () {

    $('#btn-readmore').click(function(){
      $('#person-bio, #collection-bio').toggleClass('open');
      if ($('#person-bio, #collection-bio').hasClass('open')) {
        $(this).html('Voir moins');
      } else {
        $(this).html('Lire la suite...');
      }
    });

  });

}(jQuery));
