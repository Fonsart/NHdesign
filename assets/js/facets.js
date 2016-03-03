'use strict';

/* global jQuery */

(function($){

  $(document).ready(function () {

    $('.facet-title').click(function(){
      $(this).parents('.facet-group').toggleClass('open');
    });

    $('#close-all-facets').click(function(){
      console.log('hello');
      $('.facet-group').each(function(){
        if (!$(this).hasClass('open')) {
          $('#close-all-facets').html('Tout fermer');
        } else {
          $('#close-all-facets').html('Tout ouvrir');
        }
        $(this).toggleClass('open');
      });
    });

  });

}(jQuery));
