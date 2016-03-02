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
        $(this).removeClass('open');
      });
    });

  });

}(jQuery));
