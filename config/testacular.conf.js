basePath = '../';

files = [
    JASMINE,
    JASMINE_ADAPTER,
    'src/main/webapp/lib/angular/angular.js',
    'src/main/webapp/lib/angular/angular-*.js',
    'src/test/js/lib/angular/angular-mocks.js',
    'src/main/webapp/js/**/*.js',
    'src/test/js/unit/**/*.js'
];

autoWatch = true;

browsers = [
  'Chrome'
];

junitReporter = {
    outputFile: 'test_out/unit.xml',
    suite: 'unit'
};
