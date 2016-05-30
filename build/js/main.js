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

'use strict';

/* global jQuery */

(function($){
  $(document).ready(function () {
    var initGrid = function () {
      $('.media-grid:not(.media-mondrian)').flexImages({
        container: '.media-item, .group-teaser',
        object: 'img',
        rowHeight: 250,
        truncate: false
      });
    };

    initGrid();

    $('#display-grid').click(function() {
      $('#media-container').removeClass('media-list').addClass('media-grid');
      initGrid();
    });

    $('#display-list').click(function() {
      $('#media-container').removeClass('media-grid').addClass('media-list');
    });

    $('#toggle-sidebar').click(function(){
      var delay = 300;
      if ($('#sidebar').hasClass('open')) {
        delay = 600;
      }
      $(this).toggleClass('open');
      $('#sidebar').toggleClass('open');

      setTimeout(function(){
        initGrid();
      }, delay);
    });
  });
}(jQuery));

'use strict';

/* global jQuery */

(function($){
  $(window).load(function () {
    $('.media-mondrian___').masonry({
      itemSelector: '.media-mondrian-item',
      columnWidth: 100,
      gutter: 0
    });
  });
}(jQuery));

'use strict';

/* global jQuery */

(function($){

  if ($(window).width() < 767) {
    $(document).ready(function () {
      $('#search-mobile').click(function () {
        $('#search-form').toggleClass('open');
      });
    });
  }

}(jQuery));

'use strict';

/* global jQuery */

(function($){

  $(document).ready(function () {

    $('.panel-button').click(function(){
      $('#overlay').toggleClass('open');
      $(this)
        .parents('.panel')
        .toggleClass('panel-enter')
        .toggleClass('panel-entering')
        .toggleClass('panel-leave')
        .toggleClass('panel-leaving');
    });

  });

}(jQuery));

'use strict';

// This polyfill adds support for object-fit for IE and Edge.(even working on IE9!!)
// To use it, just add the [data-object-fit] attribute to the img tag. Example:
// `<img class="img-responsive" src="URL" data-object-fit="cover" alt="text">
//
// Source: https://twitter.com/jon_neal/status/707058033730277376

if ('objectFit' in document.documentElement.style === false) {
  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('img[data-object-fit]'), function (image) {
      (image.runtimeStyle || image.style).background = 'url("' + image.src + '") no-repeat 50%/' + (image.currentStyle ? image.currentStyle['object-fit'] : image.getAttribute('data-object-fit'));

      image.src = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'' + image.width + '\' height=\'' + image.height + '\'%3E%3C/svg%3E';
    });
  });
}

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

'use strict';

/* global jQuery */
/*jshint multistr: true */

(function($){

  $(document).ready(function () {
    $('#filer_input').filer({
        changeInput: '<div class="jFiler-input-dragDrop"><div class="jFiler-input-inner"><div class="jFiler-input-icon"><i class="icon-jfi-folder"></i></div><div class="jFiler-input-text"><h3>Click on this box</h3> <span style="display:inline-block; margin: 15px 0">or</span></div><a class="jFiler-input-choose-btn blue">Browse Files</a></div></div>',
        showThumbs: true,
        theme: 'dragdropbox',
        templates: {
            box: '<ul class="jFiler-items-list jFiler-items-grid"></ul>',
            item: '<li class="jFiler-item">\
                        <div class="jFiler-item-container">\
                            <div class="jFiler-item-inner">\
                                <div class="jFiler-item-thumb">\
                                    <div class="jFiler-item-status"></div>\
                                    <div class="jFiler-item-info">\
                                        <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                        <span class="jFiler-item-others">{{fi-size2}}</span>\
                                    </div>\
                                    {{fi-image}}\
                                </div>\
                                <div class="jFiler-item-assets jFiler-row">\
                                    <ul class="list-inline pull-left"></ul>\
                                    <ul class="list-inline pull-right">\
                                        <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                    </ul>\
                                </div>\
                            </div>\
                        </div>\
                    </li>',
            itemAppend: '<li class="jFiler-item">\
                            <div class="jFiler-item-container">\
                                <div class="jFiler-item-inner">\
                                    <div class="jFiler-item-thumb">\
                                        <div class="jFiler-item-status"></div>\
                                        <div class="jFiler-item-info">\
                                            <span class="jFiler-item-title"><b title="{{fi-name}}">{{fi-name | limitTo: 25}}</b></span>\
                                            <span class="jFiler-item-others">{{fi-size2}}</span>\
                                        </div>\
                                        {{fi-image}}\
                                    </div>\
                                    <div class="jFiler-item-assets jFiler-row">\
                                        <ul class="list-inline pull-left">\
                                            <li><span class="jFiler-item-others">{{fi-icon}}</span></li>\
                                        </ul>\
                                        <ul class="list-inline pull-right">\
                                            <li><a class="icon-jfi-trash jFiler-item-trash-action"></a></li>\
                                        </ul>\
                                    </div>\
                                </div>\
                            </div>\
                        </li>',
            itemAppendToEnd: false,
            removeConfirmation: true,
            _selectors: {
                list: '.jFiler-items-list',
                item: '.jFiler-item',
                remove: '.jFiler-item-trash-action'
            }
        }
    });
  });

}(jQuery));
