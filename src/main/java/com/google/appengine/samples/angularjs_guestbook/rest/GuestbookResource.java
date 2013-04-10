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

package com.google.appengine.samples.angularjs_guestbook.rest;

import com.google.appengine.api.datastore.*;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import com.google.appengine.samples.angularjs_guestbook.domain.Greeting;
import com.google.appengine.samples.angularjs_guestbook.domain.GuestbookResponse;
import com.google.appengine.samples.angularjs_guestbook.domain.UserServiceInfo;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.*;
import java.util.logging.Logger;

/**
 * Created with IntelliJ IDEA.
 * User: Takashi Matsuo [tmatsuo@google.com]
 * Date: 4/4/13
 * Time: 11:58 PM
 */

@Path("/guestbook")
public class GuestbookResource {

  private final Logger logger = Logger.getLogger(GuestbookResource.class.getName());

  private List<Greeting> getGreetings(String guestbookName) {
    List<Greeting> greetings = new ArrayList<Greeting>();
    DatastoreService datastoreService = DatastoreServiceFactory.getDatastoreService();
    Key guestbookKey = KeyFactory.createKey("Guestbook", guestbookName);
    Query query =
        new Query("Greeting", guestbookKey).addSort("date", Query.SortDirection.DESCENDING);
    List<Entity> greetingEntities = datastoreService.prepare(query).asList(FetchOptions.Builder
        .withLimit(10));
    for (Entity greeting : greetingEntities) {
      greetings.add(Greeting.fromEntity(greeting));
    }
    return greetings;
  }

  @GET
  @Path("/{guestbookName}")
  @Produces(MediaType.APPLICATION_JSON)
  public GuestbookResponse getGuestbookData(
      @DefaultValue("default") @PathParam("guestbookName") final String guestbookName) throws
      Exception {
    return new GuestbookResponse(guestbookName, getGreetings(guestbookName),
        UserServiceInfo.get("/"));
  }

  @POST
  @Path("/{guestbookName}")
  @Produces(MediaType.APPLICATION_JSON)
  @Consumes(MediaType.APPLICATION_JSON)
  public GuestbookResponse signGuestbook(
      @DefaultValue("default") @PathParam("guestbookName") final String guestbookName,
      final Map<String, String> postData) {
    UserService userService = UserServiceFactory.getUserService();
    DatastoreService datastoreService = DatastoreServiceFactory.getDatastoreService();
    Key guestbookKey = KeyFactory.createKey("Guestbook", guestbookName);
    // We set the above parent key on each Greeting entity in order to make the queries strong
    // consistent. Please Note that as a trade off, we can not write to a single guestbook at a
    // rate more than 1 write/second.
    String content = postData.get("content");
    if (content != null && content.length() > 0) {
      Date date = new Date();
      Entity greeting = new Entity("Greeting", guestbookKey);
      greeting.setProperty("user", userService.getCurrentUser());
      greeting.setProperty("date", date);
      greeting.setProperty("content", content);
      datastoreService.put(greeting);
    }
    return new GuestbookResponse(guestbookName, getGreetings(guestbookName), null);
  }
}
