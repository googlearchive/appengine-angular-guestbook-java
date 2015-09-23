![status: inactive](https://img.shields.io/badge/status-inactive-red.svg)

This project is no longer actively developed or maintained.  

appengine-angular-guestbook-java
================================

Yet another guestbook sample with angularjs, jersey, and App Engine
Java. You can build this project using Maven.

Author: Takashi Matsuo <tmatsuo@google.com>

## Project Setup
Install [Apache Maven][1] and [Karma][2] if you haven't. See the links
for install instructions. Update the `angular-seed` submodule with the
following command:

> $ git submodule update --init

To run the app locally, run the following command:

> $ mvn appengine:devserver

## Testing

* Java Unit Tests
  > $ mvn test

* Javascript Unit Tests
  > $ scripts/test.[sh|bat]

* Integration Tests

  After launching the devserver, run the following:
  > $ scripts/e2e-test.[sh|bat]

Note: If you want to debug the Java Unit Tests, add `-DforkMode=never`
VM Option to your IDE's debug configuration.

### How to deploy
To deploy the app, change the value of the `application` element in
your `src/main/webapp/WEB-INF/appengine-web.xml` and run the following
command:

> $ mvn appengine:update

## TODO

* Integrate Karma javascript tests with Maven.
* Write the end-to-end tests.

## Contributing changes

* See CONTRIB.md

## Licensing

* See LICENSE

[1]: http://maven.apache.org/
[2]: http://karma-runner.github.io/0.8/index.html
