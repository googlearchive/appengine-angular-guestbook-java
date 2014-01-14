import webapp2


class MainHandler(webapp2.RequestHandler):

  def get(self):
    """Handle GET requests."""
    self.redirect('https://gae-angular-guestbook.appspot.com/')


APP = webapp2.WSGIApplication([
    ('/', MainHandler),
], debug=True)

