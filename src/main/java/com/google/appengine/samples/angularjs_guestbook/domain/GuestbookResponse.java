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

import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: Takashi Matsuo <tmatsuo@google.com>
 * Date: 4/8/13
 * Time: 11:43 AM
 */
public class GuestbookResponse {

  private final String guestbookName;

  private final List<Greeting> greetings;

  private final UserServiceInfo userServiceInfo;

  public GuestbookResponse(String guestbookName, List<Greeting> greetings,
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
