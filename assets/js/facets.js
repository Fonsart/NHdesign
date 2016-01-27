'use strict';

/* global jQuery */

(function($){

  $(document).ready(function () {

    $('.facet-title').click(function(){
      $(this).parents('.facet-group').toggleClass('open');
    });

  });

}(jQuery));
