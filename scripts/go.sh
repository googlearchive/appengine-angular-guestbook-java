#!/bin/bash

if [ $(uname -s) == 'Darwin' ]
then
  # OSX
  CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  GEOMETRY_RUN="180x32+0+500"
  GEOMETRY_UNIT="180x15+200+500"
  GEOMETRY_E2E="180x15+200+750"
else
  # Linux
  CHROME="google-chrome"
  GEOMETRY_RUN="120x32+0+1000"
  GEOMETRY_UNIT="180x15+1080+1000"
  GEOMETRY_E2E="180x15+1080+1290"
fi

DIRNAME=$(dirname $0)

# Convenience script which sets up Linux test environment
pids=""

function quit() {
  if [ -n "$pids" ]
  then
    echo ""
    echo "Killing child processes $pids"
    ps $pids
    kill -SIGINT $pids
  fi
  exit 0
}

which karma >/dev/null
if [ "$?" != "0" ]
then
  echo "Please install Karma using 'npm install -g karma'"
  echo "See http://karma-runner.github.io/"
  exit 1
fi

trap quit SIGINT

XTERM_ARGS="-fa 'Mono' -fs 10"

# start dev_appserver if nothing is listening on port 8080
curl localhost:8080 2>/dev/null
if [ $? -ne 0 ]
then
  xterm $XTERM_ARGS -geometry $GEOMETRY_RUN -e mvn appengine:devserver &
  sleep 5
fi

xterm $XTERM_ARGS -geometry $GEOMETRY_UNIT -e $DIRNAME/test.sh --browsers= &
pids="$$ $pids"

xterm $XTERM_ARGS -geometry $GEOMETRY_E2E -e $DIRNAME/e2e-test.sh --browsers= &
pids="$$ $pids"

sleep 1
CHROME_ARGS="--no-default-browser-check --no-first-run"

"$CHROME" $CHROME_ARGS \
  --window-size=520,300 \
  --window-position=100,50 \
  --user-data-dir=.chrome-test \
  http://localhost:6060/ &
pids="$$ $pids"

"$CHROME" $CHROME_ARGS \
  --window-size=520,300 \
  --window-position=100,250 \
  --user-data-dir=.chrome-e2e \
  http://localhost:7070/karma/ &
pids="$$ $pids"

"$CHROME" $CHROME_ARGS \
  --window-size=700,600 \
  --window-position=100,550 \
  --user-data-dir=.chrome-app \
  http://localhost:8080/ &
pids="$$ $pids"

while [ true ]
do
  sleep 1000
done
