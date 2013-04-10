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

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('guestbook app', function() {

  beforeEach(function() {
    browser().navigateTo('/');
  });

  it('should automatically redirect to /#/default', function() {
    expect(browser().location().path()).toBe("/default");
    expect(element('h2', 'The page title').text()).toBe("Showing the guestbook: default");
  });

  // TODO: implement other tests
});
