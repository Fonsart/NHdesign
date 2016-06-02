'use strict';

/* global jQuery */

(function($){

  $(document).ready(function () {

    $('.facet-title').click(function(){
      $(this).parents('.facet-group').toggleClass('open');
    });

    $('#close-all-facets').click(function(){
      $('.facet-group').each(function(){
        if (!$(this).hasClass('open')) {
          $('#close-all-facets').html('Tout fermer');
        } else {
          $('#close-all-facets').html('Tout ouvrir');
        }
        $(this).toggleClass('open');
      });
    });

    $('.facet-add').click(function(){
      $(this).addClass('hidden');
      $(this)
        .next()
        .removeClass('hidden')
        .find('.form-control')
        .focus();
    });

    $('.facet-form').find('.form-control').focusout(function(){
      $(this).parents('.facet-form').prev().removeClass('hidden');
      $(this).parents('.facet-form').addClass('hidden');
    });

  });

}(jQuery));
