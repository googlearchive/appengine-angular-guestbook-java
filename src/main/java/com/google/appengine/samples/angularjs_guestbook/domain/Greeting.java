package com.google.appengine.samples.angularjs_guestbook.domain;

import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.users.User;

import java.util.Date;

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
