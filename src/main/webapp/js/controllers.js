/*
 * Copyright 2013 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var GuestbookCtrl = ['$scope', '$http', '$location', function ($scope, $http, $location) {

  syncGuestbookWithPath(getGuestbookNameFromPath());

  function getGuestbookNameFromPath() {
    var path = $location.path();
    if (path == undefined || path == '') {
      return 'default';
    } else {
      return path.replace(/^\//g, '');
    }
  }

  function syncGuestbookWithPath(guestbookName) {
    $scope.guestbookName = guestbookName;
    retrieveGuestbook($scope.guestbookName);
  }

  function retrieveGuestbook(guestbookName) {
    $http.get('/rest/guestbook/' + encodeURIComponent(guestbookName))
        .success(function (data) {
          $scope.guestbookName = data.guestbookName;
          $scope.greetings = data.greetings;
          $scope.userServiceInfo = data.userServiceInfo;
          updatePath($scope.guestbookName);
        });
  }

  function updatePath(guestbookName) {
    if (getGuestbookNameFromPath() != guestbookName) {
      $location.path('/' + guestbookName).replace();
    }
  }

  $scope.submit_form = function () {
    $http.post(
        '/rest/guestbook/' + encodeURIComponent($scope.guestbookName),
        {'content': $scope.content})
        .success(function (data) {
          $scope.content = '';
          $scope.guestbookName = data.guestbookName;
          $scope.greetings = data.greetings;
          updatePath($scope.guestbookName);
        })
  }

}];
