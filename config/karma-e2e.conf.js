basePath = '../';

files = [
    ANGULAR_SCENARIO,
    ANGULAR_SCENARIO_ADAPTER,
    'src/test/js/e2e/**/*.js',
    'src/main/webapp/js/**/*.js',
];

// web server port
port = 7070;

// cli runner port
runnerPort = 7100;

autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = [
  'Chrome'
];

singleRun = false;

// Use sub directory since we want to use '/'.
urlRoot = '/testacular/';

proxies = {
  '/': 'http://localhost:8080/'
};

junitReporter = {
    outputFile: 'test_out/e2e.xml',
    suite: 'e2e'
};
