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

package com.google.appengine.samples.angularjs_guestbook.config;

/**
 * Created with IntelliJ IDEA.
 * User: Takashi Matsuo <tmatsuo@google.com>
 * Date: 4/5/13
 * Time: 2:57 AM
 */
import com.google.appengine.samples.angularjs_guestbook.rest.GsonMessageBodyHandler;
import com.google.appengine.samples.angularjs_guestbook.rest.GuestbookResource;

import java.util.HashSet;
import java.util.Set;
import javax.ws.rs.core.Application;

public class Resources extends Application {
  @Override
  public Set<Class<?>> getClasses() {
    Set<Class<?>> s = new HashSet<Class<?>>();
    s.add(GuestbookResource.class);
    s.add(GsonMessageBodyHandler.class);
    return s;
  }
}
