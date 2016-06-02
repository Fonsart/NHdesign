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
