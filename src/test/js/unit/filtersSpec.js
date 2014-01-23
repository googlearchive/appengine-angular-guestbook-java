'use strict';

describe('filter', function() {
  beforeEach(module('guestbook.filters'));
  describe('nl2br', function() {
    it('shold replace \\n with <br> tag', inject(function(nl2brFilter){
      expect(nl2brFilter('One\nTwo')).toEqual('One<br>Two');
    }))
  })
});
