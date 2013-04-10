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

package com.google.appengine.samples.angularjs_guestbook;

import org.mockito.invocation.InvocationOnMock;
import org.mockito.stubbing.Answer;

import javax.servlet.ServletInputStream;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Vector;

import static org.mockito.Mockito.*;

/**
 * Created with IntelliJ IDEA.
 * User: Takashi Matsuo <tmatsuo@google.com>
 * Date: 4/8/13
 * Time: 1:44 PM
 */
public final class TestUtil {
  public static HttpServletResponse getMockedServletResponse(final StringBuffer resultBuffer)
      throws IOException {
    // Since jersey uses an outputStream retrieved by response.getOutputStream(),
    // we mock the outputStream with a given StringBuffer, so that we can assert later.
    HttpServletResponse mockedServletResponse = mock(HttpServletResponse.class);
    final ServletOutputStream mockWriter = mock(ServletOutputStream.class);

    doAnswer(
        new Answer<Void>() {
          @Override
          public Void answer(InvocationOnMock invocation) throws Throwable {
            resultBuffer.append(new String((byte[]) invocation.getArguments()[0], "UTF-8"));
            return null;
          }
        }
    ).when(mockWriter).write((byte[]) any(), anyInt(), anyInt());
    when(mockedServletResponse.getOutputStream()).thenReturn(mockWriter);
    return mockedServletResponse;
  }

  public static HttpServletRequest getMockedJsonRequest(final String requestBody) throws
      IOException {
    // Since jersey looks up the HTTP method and headers from the request, we mock those 2 calls
    // and the ServletInputStream.
    HttpServletRequest mockedJsonRequest = mock(HttpServletRequest.class);
    when(mockedJsonRequest.getMethod()).thenReturn("POST");
    Vector<String> headers = new Vector<String>();
    headers.add("Content-Type");
    when(mockedJsonRequest.getHeaderNames()).thenReturn(headers.elements());
    Vector<String> contentTypes = new Vector<String>();
    contentTypes.add("application/json; charset=UTF-8");
    when(mockedJsonRequest.getHeaders("Content-Type")).thenReturn(contentTypes.elements());

    final ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
    outputStream.write(requestBody.getBytes());
    final ByteArrayInputStream inputStream = new ByteArrayInputStream(outputStream.toByteArray());
    when(mockedJsonRequest.getInputStream()).thenReturn(new ServletInputStream() {
      @Override
      public int read() throws IOException {
        return inputStream.read();
      }
    });
    return mockedJsonRequest;
  }
}
