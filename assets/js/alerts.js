'use strict';

/* global jQuery */

(function($){

  $(document).ready(function () {
    $('.btn[data-alert-message]').click(function(){
      var message = $(this).data('alert-message');
      $('#js-alert-zone').toggle().find('.alert-message').html(message);
    });
  });

}(jQuery));
