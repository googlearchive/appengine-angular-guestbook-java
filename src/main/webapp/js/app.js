'use strict';

angular.module('guestbook', [
  'guestbook.filters',
  'guestbook.services',
  'guestbook.directives',
  'ngSanitize',
  'ngRoute'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/:guestbookName', {
    controller: 'GuestbookCtrl',
    templateUrl: 'guestbook.html'
  })
  .otherwise({ redirectTo: '/default' });
}]);
