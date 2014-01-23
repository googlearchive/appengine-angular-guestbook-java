'use strict';

describe('service', function() {
  beforeEach(module('guestbook.services'));

  describe('version', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('1.0');
    }));
  });
});
