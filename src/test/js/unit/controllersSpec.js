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

/* jasmine specs for controllers go here */

describe('GuestbookCtrl initialization', function() {
  var scope, $httpBackend, ctrl;
  var routeParams = {};
  beforeEach(module('guestbook'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/rest/guestbook/default').
        respond(200, {
          'greetings': [
            {
              'content': 'a message on the default guestbook',
              'date': 'Apr 6, 2013 7:28:22 PM',
              'author': 'test@example.com'
            },
            {
              'content': 'a second message on the default guestbook',
              'date': 'Apr 6, 2013 12:00:00 PM',
              'author': 'another@example.com'
            }
          ],
          'guestbookName': 'default',
          'userServiceInfo': {
            'currentUser': {
              'authDomain': 'gmail.com',
              'email': 'test@example.com',
              'userid': '18580476422013912411'
            },
            'loginUrl': '/_ah/login?continue=%2F',
            'logoutUrl': '/_ah/logout?continue=%2F'
          }
        });
    $httpBackend.whenGET('guestbook.html').respond(200, '');
    scope = $rootScope.$new();
    routeParams.guestbookName = 'default';
    ctrl = $controller(GuestbookCtrl, {$scope: scope, $routeParams: routeParams});
  }));

  it('should create "greetings", "guestbookName", and "userServiceInfo" models',
      function() {
        expect(scope.greetings).toBeUndefined();
        expect(scope.userServiceInfo).toBeUndefined();
        $httpBackend.flush();
        expect(scope.greetings).toEqual([
          {
            'content': 'a message on the default guestbook',
            'date': 'Apr 6, 2013 7:28:22 PM',
            'author': 'test@example.com'
          },
          {
            'content': 'a second message on the default guestbook',
            'date': 'Apr 6, 2013 12:00:00 PM',
            'author': 'another@example.com'
          }
        ]);
        expect(scope.guestbookName).toEqual('default');
        expect(scope.userServiceInfo).toEqual(
            {
              currentUser: {
                authDomain: 'gmail.com',
                email: 'test@example.com',
                userid: '18580476422013912411'
              },
              loginUrl: '/_ah/login?continue=%2F',
              logoutUrl: '/_ah/logout?continue=%2F'
            });
      });
});

describe('GuestbookCtrl submit_form', function() {
  var scope, ctrl, $httpBackend;
  var routeParams = {};
  beforeEach(module('guestbook'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    routeParams.guestbookName = 'default';
    $httpBackend = _$httpBackend_;
    $httpBackend.whenGET('/rest/guestbook/default').
        respond(200, {
          'greetings': [
            {
              'content': 'a message on the default guestbook',
              'date': 'Apr 6, 2013 7:28:22 PM',
              'author': 'test@example.com'
            }
          ],
          'guestbookName': 'default',
          'userServiceInfo': {
            'currentUser': {
              'authDomain': 'gmail.com',
              'email': 'test@example.com',
              'userid': '18580476422013912411'
            },
            'loginUrl': '/_ah/login?continue=%2F',
            'logoutUrl': '/_ah/logout?continue=%2F'
          }
        });
    $httpBackend.whenGET('guestbook.html').respond(200, '');
    scope = $rootScope.$new();
    ctrl = $controller(GuestbookCtrl, {$scope: scope, $routeParams: routeParams});
  }));

  it('should post to the "/rest/guestbook/other"', function() {
    // need to flush for the controller initialization
    $httpBackend.flush();
    $httpBackend.expectPOST(
        '/rest/guestbook/other',
        {'content': 'A new message on the other guestbook'})
        .respond(200, {
          'greetings': [
            {
              'content': 'A new message on the other guestbook',
              'date': 'Apr 6, 2013 7:28:22 PM',
              'author': 'test@example.com'
            },
            {
              'content': 'a second message on the other guestbook',
              'date': 'Apr 6, 2013 12:00:00 PM',
              'author': 'another@example.com'
            }
          ],
          'guestbookName': 'other'
        });
    scope.guestbookName = 'other';
    scope.content = 'A new message on the other guestbook'
    scope.submit_form();
    $httpBackend.flush();
    expect(scope.greetings).toEqual([
      {
        'content': 'A new message on the other guestbook',
        'date': 'Apr 6, 2013 7:28:22 PM',
        'author': 'test@example.com'
      },
      {
        'content': 'a second message on the other guestbook',
        'date': 'Apr 6, 2013 12:00:00 PM',
        'author': 'another@example.com'
      }
    ]);
    expect(scope.guestbookName).toEqual('other');
  })
});

describe('GuestbookCtrl with a URL contains guestbook name', function() {
  var scope, ctrl, $httpBackend;
  var routeParams = {};
  beforeEach(module('guestbook'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    routeParams.guestbookName = 'other';
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/rest/guestbook/other').
        respond({
          'greetings': [
            {
              'content': 'a message on the other guestbook',
              'date': 'Apr 6, 2013 7:28:22 PM',
              'author': 'test@example.com'
            },
            {
              'content': 'a second message on the other guestbook',
              'date': 'Apr 6, 2013 12:00:00 PM',
              'author': 'another@example.com'
            }
          ],
          'guestbookName': 'other',
          'userServiceInfo': {
            'currentUser': {
              'authDomain': 'gmail.com',
              'email': 'test@example.com',
              'userid': '18580476422013912411'
            },
            'loginUrl': '/_ah/login?continue=%2F',
            'logoutUrl': '/_ah/logout?continue=%2F'
          }
        });
    $httpBackend.whenGET('guestbook.html').respond(200, '');
    scope = $rootScope.$new();
    ctrl = $controller(GuestbookCtrl, {$scope: scope, $routeParams: routeParams});
  }));

  it('should retrieve data for "other" guestbook if $location.path() is "/other"', function() {
    expect(scope.greetings).toBeUndefined();
    expect(scope.userServiceInfo).toBeUndefined();
    expect(scope.guestbookName).toEqual('other');
    $httpBackend.flush();
    expect(scope.greetings).toEqual([
      {
        'content': 'a message on the other guestbook',
        'date': 'Apr 6, 2013 7:28:22 PM',
        'author': 'test@example.com'
      },
      {
        'content': 'a second message on the other guestbook',
        'date': 'Apr 6, 2013 12:00:00 PM',
        'author': 'another@example.com'
      }
    ]);
    expect(scope.guestbookName).toEqual('other');
    expect(scope.userServiceInfo).toEqual(
        {
          currentUser: {
            authDomain: 'gmail.com',
            email: 'test@example.com',
            userid: '18580476422013912411'
          },
          loginUrl: '/_ah/login?continue=%2F',
          logoutUrl: '/_ah/logout?continue=%2F'
        });
  })
});
