package com.google.appengine.samples.angularjs_guestbook.domain;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

public class UserServiceInfo {

  private final User currentUser;

  private final String loginUrl;

  private final String logoutUrl;

  public static UserServiceInfo get(String path) {
    UserService userService = UserServiceFactory.getUserService();
    return new UserServiceInfo(
        userService.getCurrentUser(),
        userService.createLoginURL(path),
        userService.createLogoutURL(path));
  }

  public UserServiceInfo(User currentUser, String loginUrl, String logoutUrl) {
    this.currentUser = currentUser;
    this.loginUrl = loginUrl;
    this.logoutUrl = logoutUrl;
  }

  public User getCurrentUser() {
    return currentUser;
  }

  public String getLoginUrl() {
    return loginUrl;
  }

  public String getLogoutUrl() {
    return logoutUrl;
  }
}
