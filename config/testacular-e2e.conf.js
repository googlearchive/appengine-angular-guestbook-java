basePath = '../';

files = [
    ANGULAR_SCENARIO,
    ANGULAR_SCENARIO_ADAPTER,
    'src/test/js/e2e/**/*.js',
    'src/main/webapp/js/**/*.js',
];

autoWatch = true;

browsers = [
  'Chrome'
];

singleRun = false;

proxies = {
  '/': 'http://localhost:8080/'
};

junitReporter = {
    outputFile: 'test_out/e2e.xml',
    suite: 'e2e'
};
