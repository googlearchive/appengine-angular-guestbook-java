###########################################################
# THIS PYTHON FILE SHOULD BE IGNORED AS IT IS ONLY HERE   #
# TEMPORARILY IN ORDER TO MAKE THIS JAVA SAMPLE APPEAR TO #
# WORK IN THE PYTHON BASED cloud-playground.appspot.com   #
###########################################################

import webapp2


class MainHandler(webapp2.RequestHandler):

  def get(self):
    """Handle GET requests."""
    self.redirect('https://gae-angular-guestbook.appspot.com/')


APP = webapp2.WSGIApplication([
    ('/', MainHandler),
], debug=True)

