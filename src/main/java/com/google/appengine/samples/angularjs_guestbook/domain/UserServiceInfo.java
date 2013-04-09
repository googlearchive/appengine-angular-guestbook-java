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

package com.google.appengine.samples.angularjs_guestbook.domain;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

/**
 * Created with IntelliJ IDEA.
 * User: Takashi Matsuo <tmatsuo@google.com>
 * Date: 4/5/13
 * Time: 1:09 AM
 */
public class UserServiceInfo {

  private final User currentUser;

  private final String loginUrl;

  private final String logoutUrl;

  public static UserServiceInfo get(String path) {
    UserService userService = UserServiceFactory.getUserService();
    return new UserServiceInfo(userService.getCurrentUser(), userService.createLoginURL(path),
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
