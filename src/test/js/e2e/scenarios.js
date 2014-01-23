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
