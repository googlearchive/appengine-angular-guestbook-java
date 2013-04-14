basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'angular-seed/app/lib/angular/angular.js',
    'angular-seed/app/lib/angular/angular-*.js',
    'angular-seed/test/lib/angular/angular-mocks.js',
    'src/main/webapp/js/**/*.js',
    'src/test/js/unit/**/*.js'
];

// web server port
port = 6060;

// cli runner port
runnerPort = 6100;

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

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
