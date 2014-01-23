package com.google.appengine.samples.angularjs_guestbook.domain;

import java.util.List;

public class GuestbookResponse {

  private final String guestbookName;

  private final List<Greeting> greetings;

  private final UserServiceInfo userServiceInfo;

  public GuestbookResponse(
      String guestbookName,
      List<Greeting> greetings,
      UserServiceInfo userServiceInfo) {
    this.guestbookName = guestbookName;
    this.greetings = greetings;
    this.userServiceInfo = userServiceInfo;
  }

  public String getGuestbookName() {
    return guestbookName;
  }

  public List<Greeting> getGreetings() {
    return greetings;
  }

  public UserServiceInfo getUserServiceInfo() {
    return userServiceInfo;
  }
}
