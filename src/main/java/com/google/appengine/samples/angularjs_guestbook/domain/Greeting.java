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

import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.users.User;

import java.util.Date;

/**
 * Created with IntelliJ IDEA.
 * User: Takashi Matsuo <tmatsuo@google.com>
 * Date: 4/5/13
 * Time: 1:35 AM
 */
public class Greeting {

  private final String content;

  private final Date date;

  private final String author;

  public static Greeting fromEntity(Entity greetingEntity) {
    String author;
    User user = (User) greetingEntity.getProperty("user");
    if (user == null) {
      author = "an anonymous user";
    } else {
      author = user.getEmail();
    }
    return new Greeting((String) greetingEntity.getProperty("content"),
        (Date) greetingEntity.getProperty("date"), author);
  }

  public Greeting(String content, Date date, String author) {
    this.content = content;
    this.date = date;
    this.author = author;
  }

  public String getContent() {
    return content;
  }

  public Date getDate() {
    return date;
  }

  public String getAuthor() {
    return author;
  }
}
