module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
      'angular-seed/app/lib/angular/angular.js',
      'angular-seed/app/lib/angular/angular-*.js',
      'angular-seed/test/lib/angular/angular-mocks.js',
      'src/main/webapp/js/**/*.js',
      'src/test/js/unit/**/*.js'
    ],

    port : 6060,

    runnerPort : 6100,

    exclude : [
      'angular-seed/app/lib/angular/angular-loader.js',
      'angular-seed/app/lib/angular/*.min.js',
      'angular-seed/app/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-junit-reporter',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}
