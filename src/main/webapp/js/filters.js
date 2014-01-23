'use strict';

angular.module('guestbook.filters', [])
.filter('nl2br', function(){
  return function(text) {
    return text.replace(/\n/g, '<br>');
  }
});
